import { createServer } from "http";
import next from "next";
import { myRoutes } from "./routes";

const port = parseInt(process.env.PORT!, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = myRoutes.getRequestHandler(app);


app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
    // @ts-ignore
  }).listen(port, (err: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});