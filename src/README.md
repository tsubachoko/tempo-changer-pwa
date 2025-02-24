# Welcome to Remix + Cloudflare!

- 📖 [Remix docs](https://remix.run/docs)
- 📖 [Remix Cloudflare docs](https://remix.run/guides/vite#cloudflare)

## Development

Run the dev server:

```sh
pnpm dev
```

To run Wrangler:

```sh
pnpm build
pnpm wrangler:start
```

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
pnpm cf-typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Deployment

First, build your app for production:

```sh
pnpm build
```

Then, deploy your app to Cloudflare Pages:

```sh
pnpm wrangler:deploy
```
