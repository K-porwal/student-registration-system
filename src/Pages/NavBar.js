import { Navbar, Card, Button } from 'react-bootstrap';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link,BrowserRouter} from 'react-router-dom';

function NavBar() {
    return (
        
    < div className = "NavBar" >
        <div className='container fluid'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6 pt-5 text-center'>
                <h4>
                    
                        <Link to ="/">Home</Link>
                        </h4>
                    <hr/>
                    <h2>
                    Welcome User</h2>
                    <hr />
                </div>
            </div>
        </div>
    </div >
    );

}
export default NavBar;