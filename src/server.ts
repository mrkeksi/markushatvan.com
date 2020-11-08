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
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          // Has to be unsafe-eval because %sapper.scripts% uses eval
          // @ts-expect-error
          scriptSrc: ["'self' 'unsafe-eval'", (_req, res) => `'nonce-${res.locals.nonce}'`],
          // Has to be unsafe-inline currently, because svelte-awesome & svelte-image sets inline style
          styleSrc: ["'self' 'unsafe-inline'"],
          // data: needed for svelte-image placeholders and svelte-awesome icons
          imgSrc: ["'self'", 'data:'],
          // localhost:10000 needed by __sapper__ itself
          connectSrc: ["'self'", 'http://localhost:10000', 'https://webmention.io'],
        },
      },
    }),
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware(),
  )
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .listen(PORT, (err: any) => {
    if (err) console.log('error', err);
  });
