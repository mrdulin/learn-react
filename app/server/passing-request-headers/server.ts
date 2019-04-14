import express from 'express';

async function createServer(options) {
  const app = express();
  const { PORT } = options;

  app.get('/', (req, res) => {
    console.log(req.headers);
    res.end('normal');
  });

  return app.listen(PORT, () => {
    console.log(`Http server is listening on http://localhost:${PORT}`);
  });
}

if (require.main === module) {
  createServer({
    PORT: 3001
  });
}
