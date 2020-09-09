import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import helmet from 'helmet';
import * as sapper from '@sapper/server';
import { v4 as uuid } from 'uuid';

const { PORT, NODE_ENV } = process.env;
const dev: boolean = NODE_ENV === 'development';

const app = polka();

app.use((_req, res, next) => {
  res.locals = { nonce: uuid() };
  next();
});

app
  .use(
    // Wait for CSP relevant issues to get fixed in sapper before using contentSecurityPolicy with nonces
    // Check here: https://github.com/sveltejs/sapper/issues?q=csp
    helmet({
      contentSecurityPolicy: false,
      // contentSecurityPolicy: {
      //   directives: {
      //     defaultSrc: ['self'],
      //     // @ts-expect-error
      //     scriptSrc: ['self', (_req, res) => `nonce-${res.locals.nonce}`],
      //     // styleSrc: ['self', 'fonts.googleapis.com'],
      //     fontSrc: ['fonts.gstatic.com'],
      //     frameAncestors: 'frame.bloglovin.com',
      //     imgSrc: ['self', 'data:'],
      //   },
      // },
    }),
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware(),
  )
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .listen(PORT, (err: any) => {
    if (err) console.log('error', err);
  });
