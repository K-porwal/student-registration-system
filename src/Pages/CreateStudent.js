import { Navbar, Card, Button, Alert } from 'react-bootstrap';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { API_ROOT } from '../urls';
import NavBar from './NavBar';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
function CreateStudent() {
    const [formField, setFormField] = useState({ name: "", address: "", contactNo: "" })
    const [showSuccessful, setShowSuccessful] = useState(false);
    const [showUnsuccessful, setShowUnsuccessful] = useState(false);

    console.log(formField);
    const validateForm = () => {
        const { name, address, contactNo } = formField;
        if (name.trim().length === 0 || address.trim().length === 0 || contactNo.trim().length === 0) {
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
       
        console.log(formField);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            axios
                .post(`${API_ROOT}/students`, {
                    name: formField.name,
                    address: formField.address,
                    contactNo: formField.contactNo
                }
                )
                .then(res => {
                    console.log(res)
                    setShowSuccessful(true)
                })
                .catch(err => {
                    console.log(err)
                    setShowUnsuccessful(true)
                })


        } else {
            console.log('Please fill the input fields. All fields are required');
        }
    }

    return (
        < div className="CreateStudent" >
             <div className='text-center'>
            <Alert variant='primary' show = {showSuccessful} onClose={() => setShowSuccessful(false)} dismissible>Successfully Created !</Alert>
            <Alert variant='danger' show = {showUnsuccessful} onClose={() => setShowUnsuccessful(false)} dismissible>Operation Unsuccessful !</Alert>
            </div>
            <NavBar />
            <div className='container fluid'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 pt-5'>
                        <form>
                            <div className='text-center'>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6"><label for="name">Name:</label></div>

                                    <div className="col-md-9 col-sm-12"><input type="text" className="form-control" id="Name" name="name" placeholder="Enter Name..." onChange={handleChange} required />
                                    </div>

                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-3 col-sm-6"><label for="Address">Address:</label></div>

                                    <div className="col-md-9 col-sm-12"><input type="text" className="form-control" id="Address" name="address" placeholder="Enter Address..." onChange={handleChange} required />
                                    </div>

                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-3 col-sm-6"><label for="Contact No.">Contact No:</label></div>

                                    <div className="col-md-9 col-sm-12"><input type="text" className="form-control" id="ContactNo" name="contactNo" placeholder="Enter Contact No..." onChange={handleChange} required />
                                    </div>

                                </div>
                                <br />
                                
                                    <div className = 'text-center'>
                                        <Button className="mybtn" onClick={handleSubmit}>
                                            Submit </Button>
                                    </div>
                                

                                <br />
                            </div>
                        </form>
                        <br/>

                       <Footer/>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default CreateStudent;