import NavBar from './NavBar'
import Footer from './Footer'
import { Navbar, Card, Button } from 'react-bootstrap';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
function Main() {

    const history = useHistory();

    return (
        < div className="Main" >
            <NavBar />
            <div className='container fluid'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 pt-5'>
                        <Button className="btn btn-success" onClick={() => {
                            history.push("/addStudent")
                        }}>
                            Add A Student Information</Button>
                        <hr />                        

                        <Button className="btn btn-success" onClick={() => {
                            history.push("/students")
                        }}>
                            Get All Students</Button>
                        <hr />
                        <Button className="btn btn-success" onClick={() => {
                            history.push("/getStudent")
                        }}> Get A Student By Id</Button>
                        <hr />
                        <Button className="btn btn-success" onClick={() => {
                            history.push("/deleteStudent")
                        }}> Delete A Student Information </Button>
                        <hr />

                        <Footer/>
                    </div>
                </div>
            </div>
        </div>

            );
}

export default Main;
