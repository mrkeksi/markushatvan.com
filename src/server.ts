import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import helmet from 'helmet';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev: boolean = NODE_ENV === 'development';

polka()
  .use(
    helmet({ contentSecurityPolicy: false }),
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware(),
  )
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .listen(PORT, (err: any) => {
    if (err) console.log('error', err);
  });
