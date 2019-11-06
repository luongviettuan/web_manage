import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import User from './component/user/index';
import Product from './component/product/index';
import Category from './component/category/index';
import Brand from './component/brand/index';
import Statistic from './component/statistic/index'
import Voucher from './component/voucher/index';
import Color from './component/color/index';
import Order from './component/order/index';
import AddUser from './component/user/add_user';
import AddProduct from './component/product/add_product';
import AddCategory from './component/category/add_category';
import AddBrand from './component/brand/add_brand';
import AddVoucher from './component/voucher/add_voucher';
import AddColor from './component/color/add_color';
import UpdateDeleteUser from './component/user/update_delete_user';
import UpdateDeleteCategory from './component/category/update_delete_category';
import UpdateDeleteColor from './component/color/update_delete_color';
import UpdateDeleteVoucher from './component/voucher/update_delete_voucher';

function App() {
  return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Statistic} />
                    <Route path='/user/add' component={AddUser} />
                    <Route path='/user/:id' component={UpdateDeleteUser} />
                    <Route path='/user' component={User} />
                    <Route path='/product/add' component={AddProduct} />
                    <Route path='/product' component={Product} />
                    <Route path='/category/add' component={AddCategory} />
                    <Route path='/category/:id' component={UpdateDeleteCategory} />
                    <Route path='/category' component={Category} />
                    <Route path='/brand/add' component={AddBrand} />
                    <Route path='/brand' component={Brand} />
                    <Route path='/voucher/add' component={AddVoucher} />
                    <Route path='/voucher/:id' component={UpdateDeleteVoucher} />
                    <Route path='/voucher' component={Voucher} />
                    <Route path='/color/add' component={AddColor} />
                    <Route path='/color/:id' component={UpdateDeleteColor} />
                    <Route path='/color' component={Color} />
                    <Route path='/order' component={Order} />
                </Switch>
            </Router>
          )
}
export default App;
