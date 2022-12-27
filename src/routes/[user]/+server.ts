import type { AP } from 'activitypub-core-types';
import { domain, users, keys } from '../../lib/config';
import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ params }) {
	const user = params.user as string;
	if (!keys[user]) {
		throw error(404, 'User does not exist');
	}
	const val: AP.Actor = {
		'@context': ['https://www.w3.org/ns/activitystreams', 'https://w3id.org/security/v1'],
		id: new URL(`https://${domain}/${user}`),
		type: 'Person',
		preferredUsername: 'ben',
		name: 'Ben Schmidt',
		inbox: new URL(`https://${domain}/inbox/${user}`),
		outbox: new URL(`https://${domain}/outbox/${user}`),
		following: new URL(`https://${domain}/${user}/following.json`),
		followers: new URL(`https://${domain}/${user}/followers.json`),
		inbox: 'https://kenzoishii.example.com/inbox.json',
		outbox: 'https://kenzoishii.example.com/feed.json',
		summary: `I'm experimenting with ActivityPub.`,
		icon: ['https://benschmidt.org/img/ben.png'],
		publicKey: {
			id: `https://${domain}/${user}#main-key`,
			owner: `https://${domain}/${user}`,
			publicKeyPem: keys[user] as string
		}
	};
	return json(val);
}
