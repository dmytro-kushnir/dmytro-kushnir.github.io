import express from 'express';
import path from 'path';
import { fileURLToPath } from 'node:url';
import fsp from 'fs/promises';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const SCHEMA = {
  APPS: {
    HOME: '',
    WEB_PROGRAMMING: 'web-programming',
  },
  PORT: 3000,
  STATUS_CODE: {
    INTERNAL_SERVER_ERROR: 500,
    OK: 200,
  },
};

/**
 * Gets the app directory based on input url.
 *
 * @param {string} url
 *
 * @returns {string} - directory name.
 */
function getAppDirectoryByUrl(url) {
  const delimiter = '/';
  switch (true) {
    case url.startsWith(`${delimiter}${SCHEMA.APPS.WEB_PROGRAMMING}`):
      return SCHEMA.APPS.WEB_PROGRAMMING;
    default:
      return SCHEMA.APPS.HOME;
  }
}

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
) {
  const app = express();
  /**
   * @type {import("vite").ViteDevServer}
   */
  let vite;

  if (!isProd) {
    // Create Vite server in middleware mode and configure the app type as
    // 'custom', disabling Vite's own HTML serving logic so parent server
    // can take control
    vite = await (
      await import('vite')
    ).createServer({
      appType: 'custom',
      logLevel: 'info',
      root,
      server: {
        middlewareMode: true,
        watch: {
          // During tests, we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          interval: 100,
          usePolling: true,
        },
      },
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);

    // Use vite's connect instance as middleware. If you use your own
    // express router (express.Router()), you should use router.use
    app.use(vite.middlewares);
  } else {
    app.use((await import('compression')).default());
    app.use(express.static(path.join(dirname, 'dist')));
  }

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    const appDirectory = getAppDirectoryByUrl(url);
    const htmlFileToLoad = path.join(
      isProd ? 'dist' : '',
      appDirectory ? `src/apps/${appDirectory}` : '',
      'index.html',
    );

    try {
      let html = await fsp.readFile(path.join(dirname, htmlFileToLoad), 'utf8');

      if (!isProd) {
        /*  Apply Vite HTML transforms. This injects the Vite HMR client,
        and also applies HTML transforms from Vite plugins, e.g. global
        preambles from @vitejs/plugin-react */
        html = await vite.transformIndexHtml(req.url, html);
      }

      // Send the rendered HTML back.
      return res.status(SCHEMA.STATUS_CODE.OK).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      if (!isProd) {
        vite.ssrFixStacktrace(error);
      }
      console.log(error.stack);
      return res.status(SCHEMA.STATUS_CODE.INTERNAL_SERVER_ERROR).end(error.stack);
    }
  });

  return app;
}

createServer().then((app) => {
  app.listen(SCHEMA.PORT, () => {
    console.log(`HTTP server is running at http://localhost:${SCHEMA.PORT}`);
  });
});
