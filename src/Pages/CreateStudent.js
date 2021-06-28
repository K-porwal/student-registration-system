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
    const [errMsg, setErrMsg] = useState("Operation Unsuccessful ! Please try again");
    const [showSuccessful, setShowSuccessful] = useState(false);
    const [showUnsuccessful, setShowUnsuccessful] = useState(false);

    
    const validateForm = () => {
        const { name, address, contactNo } = formField;
        if (name.trim().length === 0)
        {
            setErrMsg("Name cannot be empty");
            return false;
        }
        else if (name.trim().length > 25)
        {
            setErrMsg("Name cannot be greater than 25 characters");
            return false;
        }
        else if (!RegExp(/^[a-zA-Z ]*$/).test(name))
        {
            setErrMsg("Name can only contain alphabets and space");
            return false;
        }

        else if(address.trim().length === 0)
        {
            setErrMsg("Address cannot be empty");
            return false;
        }
        else if(address.trim().length > 40)
        {
            setErrMsg("Address cannot be greater than 40");
            return false;
        }

        else if(contactNo.trim().length === 0)
        {
            setErrMsg("Contact No. cannot be empty");
            return false;
        }
        else if(!RegExp(/^\d{10}$/).test(contactNo))            
        {
            setErrMsg("Contact No. should be of length 10 and consisting of digits") 
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
                    console.log(err);
                    setErrMsg('Something went wrong ! Please try again');
                    setShowUnsuccessful(true)
                })


        } else {
            console.log('Please fill the input fields properly. All fields are required');
            setShowUnsuccessful(true);
        }
    }

    return (
        < div className="CreateStudent">
             <div className='text-center'>
            <Alert variant='primary' show = {showSuccessful} onClose={() => setShowSuccessful(false)} dismissible>Successfully Created !</Alert>
            <Alert variant='danger' show = {showUnsuccessful} onClose={() => setShowUnsuccessful(false)} dismissible>{errMsg}</Alert>
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

                       
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}


export default CreateStudent;