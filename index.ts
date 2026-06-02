import { Core } from './core/core.ts';
import { logger } from './core/middleware/logger.ts';
import { ProductsApi } from './api/produtcs/index.ts';

const core = new Core();

core.router.use([logger]);

new ProductsApi(core).init();

core.router.get('/', (req, res) => {
  res.status(200).json('ola');
});

core.init();
