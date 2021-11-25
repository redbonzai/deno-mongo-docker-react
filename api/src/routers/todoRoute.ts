import { Router } from '../../deps';
import {
  get,
  post,
  getAll,
  remove,
  update,
} from '../controller/todoController';

function routerWithUrl(url: string) {
  const routerUrl = `${url}/todo`;
  const routerOptions = { prefix: routerUrl };
  const router = new Router(routerOptions);
  router
    .options('/')
    .options('/:id')
    .get('/:id', get)
    .get('/', getAll)
    .post('/', post)
    .delete('/:id', remove)
    .put('/:id', update);
  return router;
}

export default routerWithUrl;
