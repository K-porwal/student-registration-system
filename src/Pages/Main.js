import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Footer from './Footer';
import NavBar from './NavBar';
function Main() {

    const history = useHistory();

    return (
        < div className="Main" style={{backgroundImage :  'url("https://amymhaddad.s3.amazonaws.com/morocco-blue.png")'}}>
            <NavBar />
            <div className='container fluid'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 pt-5 text-center'>
                        <Button className="btn btn-success" onClick={() => {
                            history.push("/addStudent")
                        }}>
                            Add A Student Information</Button>
                        <hr />                        

                        <Button className="btn btn-success" onClick={() => {
                            history.push("/students")
                        }}>
                            Display All Students</Button>
                        <hr />
                        <Button className="btn btn-success" onClick={() => {
                            history.push("/getStudent")
                        }}> Display A Student By Id</Button>
                        <hr />
                        <Button className="btn btn-success" onClick={() => {
                            history.push("/deleteStudent")
                        }}> Delete A Student Information </Button>
                        <hr />
                        <br/>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

            );
}

export default Main;
