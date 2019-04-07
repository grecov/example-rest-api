import http from "http";
import express from "express";
import { sayHello } from "./services/greeter";

const router = express();
const { PORT = 3000 } = process.env;
const server = http.createServer(router);

router.get("/hello", (req: express.Request, res: express.Response) => {
  const { query } = req;
  return res.json({ message: sayHello(query.name) });
});

server.listen(PORT, () => {
  console.log("server started");
});
