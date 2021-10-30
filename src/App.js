import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import AddNewProduct from './components/pages/AddNewProducts';
import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import ManageAllOrder from './components/pages/ManageAllOrder';
import NotFound from './components/pages/NotFound';
import Order from './components/pages/Order';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import SingleFood from './components/SingleFood';
import AuthProvider from "./contexts/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/home" component={Home}/>
          <PrivateRoute  path="/orders" >
            <Order/>
          </PrivateRoute>
          <PrivateRoute  path="/manageOrder">
            <ManageAllOrder/>
          </PrivateRoute>
          <PrivateRoute  path="/addNewProduct">
            <AddNewProduct/>
          </PrivateRoute>
          <PrivateRoute  path="/foods/:id">
            <SingleFood/>
          </PrivateRoute>
          <PublicRoute  path="/login" >
            <Login/>
          </PublicRoute>
          <Route  path="*" component={NotFound}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

