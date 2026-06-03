import * as http from 'http';
import * as os from 'os';

const PORT = process.env.PING_LISTEN_PORT || 3001;
const INSTANCE_NAME = process.env.INSTANCE_ID || os.hostname();
const serverStartTime = Date.now();

// Interface CounterStore
interface CounterStore {
  increment(): void;
  getCount(): number;
}

// Implémentation en mémoire
class InMemoryCounterStore implements CounterStore {
  private requestCount: number = 0;

  increment(): void {
    this.requestCount++;
  }

  getCount(): number {
    return this.requestCount;
  }
}

const requestCounter: CounterStore = new InMemoryCounterStore();

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  // Incrémenter le compteur à chaque requête
  requestCounter.increment();

  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && req.url === '/ping') {
    res.writeHead(200);
    res.end(JSON.stringify(req.headers, null, 2));
    return;
  }

  if (req.method === 'GET' && req.url === '/stats') {
    const serverUptimeSeconds = Math.floor((Date.now() - serverStartTime) / 1000);
    res.writeHead(200);
    res.end(JSON.stringify({
      requestsProcessed: requestCounter.getCount(),
      serverUptimeSeconds,
      serverInstance: INSTANCE_NAME,
    }));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Not Found' }));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});