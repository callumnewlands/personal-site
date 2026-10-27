# cnewlands.dev

My portfolio site, built with Next.js and deployed on Netlify.

```bash
pnpm install
pnpm dev
```

`pnpm build` also generates the sitemap, robots.txt and OG images. Playwright (`pnpm test`) and Lighthouse CI (`pnpm lhci`) run against `pnpm start`.

Set `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` in `.env.local` to turn on Cloudflare Web Analytics.
