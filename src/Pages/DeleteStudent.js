import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { API_ROOT } from '../urls';
import Footer from './Footer';
import NavBar from './NavBar';
function DeleteStudent() {
    const [formField, setFormField] = useState({ id: "" })
    const [showSuccessful, setShowSuccessful] = useState(false);
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
                .delete(`${API_ROOT}/students/${id}`)
                .then(() => {
                    setShowSuccessful(true)
                })
                .catch(err => {
                    setShowUnsuccessful(true);
                    console.log(err);
                })


        } else {
            setShowUnsuccessful(true);
            console.log('Please fill the values');
        }
    }




    return (
        < div className="DeleteStudent" >
            <div className='text-center'>

                <Alert variant='primary' show={showSuccessful} onClose={() => setShowSuccessful(false)} dismissible>Successfully Deleted !</Alert>
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


export default DeleteStudent;