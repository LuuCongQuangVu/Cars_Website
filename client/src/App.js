
import './App.css';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Landing from './components/layout/Landing';
import Error from './views/components/page/Error';
import Loading from './views/loading/Loading';
import Admin from './views/admin/Admin';
import AdminHome from './views/components/page/AdminHome';
import AdminProduct from './views/components/page/AdminProduct';
import AdminQuote from './views/components/page/AdminQuote';
import AdminComment from './views/components/page/AdminComment';
import AdminAccount from './views/components/page/AdminAccount';
import AdminNew from './views/components/page/AdminNew';
import AdminChangeSilder from './views/components/page/AdminChangeSilder';
import AdminPriceList from './views/components/page/AdminPriceList';
import ProtectedRoute from './components/routing/ProtectedRoute';
import AccountContextProvider from './contexts/AccountContext';
import ConfirmContextProvider from './contexts/ConfirmContext';
import QuoteContextProvider from './contexts/QuoteContext';
import CartContextProvider from './contexts/CartContext';
import ProductContextProvider from './contexts/ProductContext';
import ScrollToTop from './components/scroll/ScrollToTop';

function App() {
  return (
    <AccountContextProvider>
      <ConfirmContextProvider>
        <QuoteContextProvider>
            <CartContextProvider>
                <ProductContextProvider>
                  <Router>
                    <ScrollToTop>
                      <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/home'render={props=><Loading {...props} PageRoute='home' />} />
                        <Route exact path='/introduce'render={props=><Loading {...props} PageRoute='introduce' />} />
                        <Route exact path='/products'render={props=><Loading {...props} PageRoute='products' />} />
                        <Route exact path='/news'render={props=><Loading {...props} PageRoute='news' />} />
                        <Route exact path='/installment'render={props=><Loading {...props} PageRoute='installment' />} />
                        <Route exact path='/pricelist'render={props=><Loading {...props} PageRoute='pricelist' />} />
                        <Route exact path='/contact'render={props=><Loading {...props} PageRoute='contact' />} />
                        <Route exact path='/cart'render={props=><Loading {...props} PageRoute='cart' />} />
                        <Route exact path='/products/:slug'render={props=><Loading {...props} PageRoute='productDetail' />} />
                        <Route exact path='/admin' render={props=><Admin {...props} AdminRoute='AdminLogin' />} />
                        <ProtectedRoute exact path='/admin/home' component={AdminHome} />
                        <ProtectedRoute exact path='/admin/products' component={AdminProduct} />
                        <ProtectedRoute exact path='/admin/quotes' component={AdminQuote} />
                        <ProtectedRoute exact path='/admin/comments' component={AdminComment} />
                        <ProtectedRoute exact path='/admin/news' component={AdminNew} />
                        <ProtectedRoute exact path='/admin/accounts' component={AdminAccount} />
                        <ProtectedRoute exact path='/admin/silder' component={AdminChangeSilder} />
                        <ProtectedRoute exact path='/admin/pricelist' component={AdminPriceList} />
                        <Route exact path='/:something' component={Error} />
                      </Switch>
                    </ScrollToTop>
                  </Router>
                </ProductContextProvider>
              </CartContextProvider>
          </QuoteContextProvider>
      </ConfirmContextProvider>
    </AccountContextProvider>
  );
}

export default App;
