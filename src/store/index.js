import { createStore } from 'vuex';
import Sale from '@/modules/sale/store';
// import Client from '@/modules/sale/store/client';
import Contact from '@/modules/contact/store/contact';
// import Sale from '@/modules/stock/store/product';
import Project from '@/modules/project/store/project';
import Addresse from '@/modules/addresse/store/addresse';
import ui from './ui';

const debug = process.env.NODE_ENV !== 'production';
export default createStore({
  modules: {
    Addresse,
    // Client,
    Contact,
    Sale,
    Project,
    ui,
  },
  strict: debug,
});
