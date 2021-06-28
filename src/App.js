import './App.css';
import Main from './Pages/Main.js'
import AllStudents from './Pages/AllStudents.js';
import GetStudent from './Pages/GetStudent';
import EditStudent from './Pages/EditStudent';
import DeleteStudent from './Pages/DeleteStudent';
import PageNotFound from './Pages/PageNotFound.js';
import {Route, Switch} from 'react-router-dom';
import CreateStudent from './Pages/CreateStudent';
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
