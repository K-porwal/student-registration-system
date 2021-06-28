import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { API_ROOT } from '../urls';
import Footer from './Footer';
import NavBar from './NavBar';
function GetStudent() {
    const [formField, setFormField] = useState({ id: "" })
    const history = useHistory()
    const [errMsg, setErrMsg] = useState("Operation Unsuccessful ! Please try again");
    const [showUnsuccessful, setShowUnsuccessful] = useState(false);

    const validateForm = () => {
        const { id } = formField;
        if (id.trim().length === 0) {
            setErrMsg("Id should be atleast of length 1");
            return false;
        }
        else if(!RegExp(/^[0-9]+$/).test(id)){
            setErrMsg("Id should be only postive integers");
            return false;
        }
        return true;
    }

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setFormField({
            ...formField,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const id = formField.id;
            axios
                .get(`${API_ROOT}/students/${id}`)
                .then(res => {
                    history.push("/editStudent/" + id);
                })
                .catch(err => {
                    setShowUnsuccessful(true);
                    setErrMsg('Something went wrong ! Please try again');
                    console.log(err);
                })


        } else {
            setShowUnsuccessful(true);
            console.log('Please fill the input field properly');
        }
    }




    return (
        < div className="GetStudent">
            <div className='text-center'>
                <Alert variant='danger' show={showUnsuccessful} onClose={() => setShowUnsuccessful(false)} dismissible>{errMsg}</Alert>
            </div>
            <NavBar />
            <div className='container fluid'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 pt-5'>
                        <form>
                            <div className='text-center'>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6"><label for="id">Id:</label></div>

                                    <div className="col-md-9 col-sm-12"><input type="text" className="form-control" id="Id" name="id" placeholder="Enter Id..." onChange={handleChange} required />
                                    </div>
                                </div>
                                <br />
                                <div className="text-center">


                                    <Button className="mybtn" onClick={handleSubmit}>
                                        Submit </Button>

                                </div>

                                <br />
                            </div>
                        </form>

                        
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    );
}


export default GetStudent;