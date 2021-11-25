import todoRouter from "./todoRoute";
import todoOrderRouter from "./todoOrderRouter";
import { Application } from "../../deps";

const apiVersion = Deno.env.get("API_VERSION");
const apiUrl = `/api/${apiVersion}`;
const initRouters = (app: Application) => {
  app.use(todoRouter(apiUrl).routes());
  app.use(todoOrderRouter(apiUrl).routes());
};

export default initRouters;
