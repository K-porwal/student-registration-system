import { Route, Switch } from 'react-router-dom';
import './App.css';
import AllStudents from './Pages/AllStudents.js';
import CreateStudent from './Pages/CreateStudent';
import DeleteStudent from './Pages/DeleteStudent';
import EditStudent from './Pages/EditStudent';
import GetStudent from './Pages/GetStudent';
import Main from './Pages/Main.js';
import PageNotFound from './Pages/PageNotFound.js';
function App() {
  return (
   
        <Switch>
          <Route path = "/" exact component= {Main}/>
          <Route path = "/addStudent" exact component= {CreateStudent}/>
          <Route path = "/students" exact component= {AllStudents}/>
          <Route path = "/getStudent" exact component= {GetStudent}/>
          <Route path = "/editStudent/:id" exact component= {EditStudent}/>
          <Route path = "/deleteStudent" exact component= {DeleteStudent}/>
          <Route path = "*" exact component= {PageNotFound}/>
        </Switch>  

  );
}

export default App;
