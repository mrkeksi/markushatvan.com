// eslint-disable-next-line @typescript-eslint/no-var-requires
import posts from './blog/_posts';
import type { Post } from '../models/post';

const siteUrl = 'https://markushatvan.com';

const renderXmlRssFeed = (posts: Post[]): string => `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
<channel>
    <title><![CDATA[Markus Hatvan - Full Stack Developer]]></title>
    <link>${siteUrl}</link>
  <description><![CDATA[Personal website and blog written from scratch with SapperJS and TailwindCSS.]]></description>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
        <title><![CDATA[Markus Hatvan - Full Stack Developer]]></title>
        <link>${siteUrl}</link>
    </image>
    ${posts
      .map(
        (post: Post) => `
        <item>
            <title>${post.title}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="false">${siteUrl}/blog/${post.slug}</guid>
            <description><![CDATA[${post.html}]]></description>
            <pubDate>${new Date(post.creationDate).toUTCString()}</pubDate>
        </item>
    `,
      )
      .join('\n')}
</channel>
</rss>`;

// eslint-disable-next-line
export function get(req: any, res: any): void {
  res.writeHead(200, {
    'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
    'Content-Type': 'application/rss+xml',
  });

  const feed = renderXmlRssFeed(posts);
  res.end(feed);
}
