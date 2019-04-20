import express from 'express';

async function createServer(options) {
  const app = express();
  const { PORT } = options;

  app.get('/', (req, res) => {
    res.end(`Http server is listening on http://localhost:${PORT}`);
  });

  app.get('/generic-hash', (req, res) => {
    res.end(`Http server is listening on http://localhost:${PORT}. clientid: ${req.query.clientid}`);
  });

  return app.listen(PORT, () => {
    console.log(`Http server is listening on http://localhost:${PORT}`);
  });
}

async function main() {
  const PORTS = [3001, 3002, 3003, 3004];
  for (const PORT of PORTS) {
    await createServer({ PORT });
  }
}

if (require.main === module) {
  main();
}

export { main, createServer };
