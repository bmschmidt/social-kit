import { error, json } from '@sveltejs/kit';
import type { AP } from 'activitypub-core-types';
import { domain, users } from '../../../lib/config';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	const resource = url.searchParams.get('resource');
	if (!resource.startsWith('acct:')) {
		throw error(500, 'Malformed user');
	}
	const [user, userdomain] = resource.slice(5).split('@');
	if (users.indexOf(user) === -1 || domain !== userdomain) {
		throw error(404, 'No such user on this host');
	}
	const data = {
		subject: `acct:${user}@${domain}`,
		links: [
			{
				rel: 'self',
				type: 'application/activity+json',
				href: `https://${domain}/${user}`
			}
		]
	};
	return json(data);
}
