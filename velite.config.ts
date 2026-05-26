import { defineConfig, defineCollection, s } from 'velite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeShiki from '@shikijs/rehype';
import { rehypeCodeHeader } from './lib/rehype-code-header';

export const posts = defineCollection({
  name: 'posts',
  pattern: 'blog/**/*.mdx',
  schema: s.object({
    slug: s.path().transform(p => p.replace(/^blog\//, '')),
    title: s.string().max(99),
    date: s.isodate(),
    excerpt: s.string().max(399).optional(),
    image: s.string().optional(),
    video: s.string().optional(),
    tags: s.array(s.string()).optional(),
    hidden: s.boolean().optional(),
    content: s.markdown({
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        [rehypeShiki, { theme: 'github-dark' }],
        rehypeCodeHeader,
      ],
    }),
    headings: s.toc({ maxDepth: 3 }),
  }),
});

export default defineConfig({
  collections: { posts },
});
