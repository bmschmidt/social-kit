import type { AP } from 'activitypub-core-types';
import { domain, users, keys } from '../../../lib/config';

/** @type {import('./$types').RequestHandler} */
export function GET({ url, params }) {
	const user = params.user;

	const val: AP.Actor = {
		'@context': ['https://www.w3.org/ns/activitystreams', 'https://w3id.org/security/v1'],
		id: new URL(`https://${domain}/${user}`),
		type: 'Person',
		preferredUsername: 'Ben Schmidt',
		inbox: new URL(`https://${domain}/inbox`),
		publicKey: {
			id: `https://${domain}/${user}#main-key`,
			owner: `https://${domain}/${user}`,
			publicKeyPem: keys[user]
		}
	};
	const response = new Response(JSON.stringify(val));
	response.headers.set('Content-Type', 'application/json');
	return response;
}
