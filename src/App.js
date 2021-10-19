
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound'
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Register from './components/Register/Register'
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div >
    <AuthProvider>
    <Router>
       <Header></Header>
       <Banner></Banner>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path ="/home">
           <Home></Home>
         </Route>
         <Route path ="/services">
           <Services></Services>
         </Route>
         <Route path ="/about">
           <About></About>
         </Route>
         <Route path ="/contact">
           <Contact></Contact>
         </Route>
         <Route path ="/login">
           <Login></Login>
         </Route>
         <Route path ="/register">
           <Register></Register>
         </Route>
         <PrivateRoute path ="/details/:serviceId">
           <Details></Details>
         </PrivateRoute>
         <Route path ="*">
          <NotFound></NotFound>
         </Route>
         
       </Switch>
       <Footer></Footer>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
