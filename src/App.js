import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashbord from './components/Dashbord/Dashbord'


function App() {
  return (
   <BrowserRouter>
     <Switch>
       <Route path="/" component={Dashbord}></Route>
     </Switch>
   </BrowserRouter>
  )
}

export default App;
