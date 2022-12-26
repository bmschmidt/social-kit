# Social-kit

I'm curious about what it takes to set up a fediverse-compliant server
from scratch. The idea here is to find a way to consume my static blog and
do two things:

1. Publish it over the fediverse into people's Mastodon streams.
2. Collect responses in a way that they can be threaded into the static blog enries and preserved for posterity.

## Stack

**Svelte-kit** provides a nice way of defining routes and implementing a web server.

**Vercel** has a free tier that can host a serverless site. If this seems very useful I could also host it locally.

**Supabase** seems like an interesting firebase alternative, so I'm going to try it out for storing the Inbox and Outbox.

## References

- [https://blog.joinmastodon.org/2018/06/how-to-implement-a-basic-activitypub-server/]
- [https://www.w3.org/TR/activitypub/]
