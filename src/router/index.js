import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Account from '@/components/Account/Account';
import HelpCenter from '@/components/HelpCenter/HelpCenter';
import Sales from '@/components/Sales/Sales';
import Customers from '@/components/Customers/Customers';
import Maps from '@/components/Maps/Maps';
import Products from '@/components/Products/Products';
import TermsandCondition from '@/components/TermsandCondition/TermsandCondition';
import TransactionCenter from '@/components/TransactionCenter/TransactionCenter';
import TheProgram from '@/components/TheProgram/TheProgram';

// import Settings from '@components/Settingss/Settingss';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account,
    },
    {
      path: '/HelpCenter',
      name: 'HelpCenter',
      component: HelpCenter,
    },
    {
      path: '/Sales',
      name: 'Sales',
      component: Sales,
    },
    {
      path: '/Customers',
      name: 'Customers',
      component: Customers,
    },
   
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/Maps',
      name: 'Maps',
      component: Maps,
    },
    {
      path: '/transactioncenter',
      name: 'TransactionCenter',
      component: TransactionCenter
    },
    {
      path:'/termsandcondition',
      name: 'TermsandCondition',
      component: TermsandCondition
    },
    {
      path:'/theprogram',
      name: 'TheProgram',
      component: TheProgram
    },
    // {
    //   path: '/Settingss',
    //   name: 'Settingss',
    //   component: Settings,
    // },
    
  ],
  mode: 'history'
});
