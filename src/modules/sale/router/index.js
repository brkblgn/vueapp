import invoiceRouter from './invoice';
import clientRouter from './client';

const saleRouter = [
  ...clientRouter,
  ...invoiceRouter,
];
export default saleRouter;
