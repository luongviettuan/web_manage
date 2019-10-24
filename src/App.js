import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import User from './component/user/index';
import Product from './component/product/index';
import Category from './component/category/index';
import Brand from './component/brand';


const Home = () => <div>Đây là trang Home</div>


function App() {
  return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/user' component={User} />
                    <Route path='/product' component={Product} />
                    <Route path='/category' component={Category} />
                    <Route path='/brand' component={Brand} />
                </Switch>
            </Router>
          )
}
export default App;
