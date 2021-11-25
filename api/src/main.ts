import { Application, Router /*, oakCors */ } from "../deps";

import initRouters from "./routers/index";
import notFound from "./middlewares/notFound";
import startListeningForTerminationSignal from "./utils/SignalManager";

const controller = new AbortController();
const { signal } = controller;
startListeningForTerminationSignal(controller);

const app = new Application();
const URL = Deno.env.get('URL') || "http://localhost";

const PORT = +(Deno.env.get('PORT') || 3001);

const router = new Router();

//app.use(setContentType);
//const allowedOrigins = oakCors({ origin: "http://localhost:3000" });

//app.use(allowedOrigins);

// initRouters(app);
//
// app.use(notFound);

app.addEventListener("listen", () => {
  console.log(`Server listening at ${URL}:${PORT}`);
});

await app.listen({ port: PORT, signal });
