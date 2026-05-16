Error: Route "/blog/[slug]" used `params.slug`. `params` is a Promise and must be unwrapped with `await` or `React.use()` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
    at <unknown> (app\blog\[slug]\page.tsx:13:52)
    at Array.find (<anonymous>)
    at BlogPostPage (app\blog\[slug]\page.tsx:13:22)
11 |   ...
12 |   ...ction BlogPostPage({ params }: { params: { slug: string } }) {
13 |   ...ts.find((p) => p.slug === params.slug);
   |                                       ^
14 |   ...und();
15 |   ...
16 |   ...