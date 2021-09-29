import { createStore } from 'vuex';
import Invoice from '@/modules/sale/store/invoice';
import Client from '@/modules/sale/store/client';
import Contact from '@/modules/contact/store/contact';
import Stock from '@/modules/stock/store/product';
import ui from './ui';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    Invoice,
    Client,
    Contact,
    Stock,
    ui,
  },
  strict: debug,
});
