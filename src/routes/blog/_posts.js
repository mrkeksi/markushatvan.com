const fs = require('fs');
const frontMatter = require('front-matter');
const marked = require('marked');
import Prism from 'prismjs';
import 'prism-svelte';
const loadLanguages = require('prismjs/components/');
loadLanguages(['shell']);

const posts = fs
  .readdirSync('./src/routes/blog')
  .filter((elem) => elem.endsWith('.svx'))
  .map((postFilename) => {
    const postContent = fs.readFileSync(`./src/routes/blog/${postFilename}`, {
      encoding: 'utf8',
    });

    const postFrontMatter = frontMatter(postContent);

    const renderer = new marked.Renderer();

    renderer.code = (source, lang) => {
      const html = Prism.highlight(source, Prism.languages[lang], lang);
      return `<pre class='language-${lang}'><code class='language-${lang}'>${html}</code></pre>`;
    };

    const html = marked(postFrontMatter.body, { renderer });

    return {
      ...postFrontMatter.attributes,
      html: marked(html),
    };
  });

const modifiedPosts = posts
  .filter((post) => !post.hidden)
  .sort((a, b) =>
    new Date(a.creationDate).getTime() > new Date(b.creationDate).getTime()
      ? -1
      : new Date(a.creationDate).getTime() < new Date(b.creationDate).getTime()
      ? 1
      : 0,
  );

export default modifiedPosts;
