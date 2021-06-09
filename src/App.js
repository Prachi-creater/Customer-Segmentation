import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import AddCustomer from './pages/AddCustomer'
import NewDeals from './pages/NewDeals'
import Home from './pages/Home'
import PersonsInfo from './pages/PersonsInfo'
import About from './pages/About'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider,} from 'react-toast-notifications';


function App() {
  return (
    <div className="App">
    <ToastProvider>
    <Router>
        <Switch>
          <Route exact path='/' render={(props)=><Home  {...props}></Home>}/>
          <Route exact path='/signin' render={(props) => <SignIn propsToSee={props}/> }/>
          <Route exact path='/signup' render={(props) => <SignUp {...props}></SignUp>} />
          <Route exact path='/admin/dashboard/about' render={(props)=><About  {...props}></About>}/>
          <Route exact path='/admin/dashboard' render={(props) => <Dashboard {...props}></Dashboard>} />
          <Route exact path='/admin/dashboard/addcustomer' render={(props)=><AddCustomer {...props}></AddCustomer>}/>
          <Route exact path='/admin/dashboard/newdeals' render={(props)=><NewDeals {...props}></NewDeals>}/>
          <Route exact path='/admin/dashboard/allcustomer' render={(props)=><PersonsInfo {...props}></PersonsInfo>}/>




          
        </Switch>
      </Router>
    </ToastProvider>
    </div>
  );
}

export default App;
