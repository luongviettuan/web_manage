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

function App() {
  return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Statistic} />
                    <Route path='/user' component={User} />
                    <Route path='/product' component={Product} />
                    <Route path='/category' component={Category} />
                    <Route path='/brand' component={Brand} />
                    <Route path='/voucher' component={Voucher} />
                    <Route path='/color' component={Color} />
                    <Route path='/order' component={Order} />
                </Switch>
            </Router>
          )
}
export default App;
