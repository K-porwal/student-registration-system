import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { API_ROOT } from '../urls';
import Footer from './Footer';
import NavBar from './NavBar';
function EditStudent() {
    const [formField, setFormField] = useState({ name: "", address: "", contactNo: "" })
    const [showSuccessful, setShowSuccessful] = useState(false);
    const [showUnsuccessful, setShowUnsuccessful] = useState(false);
    const [errMsg, setErrMsg] = useState("Operation Unsuccessful ! Please try again");

    const { id } = useParams()

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
            setErrMsg("Contact No. should be of length 10 and consisting of digits only") 
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
                .put(`${API_ROOT}/students/${id}`, {
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
                    setErrMsg('Something went wrong ! Please try again');
                    setShowUnsuccessful(true)
                })


        } else {
            console.log('Please fill the input fields properly. All fields are required');
            setShowUnsuccessful(true);
        }
    }



    useEffect(() => {
        axios
            .get(`${API_ROOT}/students/${id}`)
            .then(res => {
                setFormField(res.data);
            })
            .catch(err => {
                console.log(err);
                setErrMsg('Operation Unsuccessful! Please try again !');
                setShowUnsuccessful(true);
            })
    }, [])

    return (
        < div className="EditStudent">

            <div className='text-center'>

                <Alert variant='primary' show={showSuccessful} onClose={() => setShowSuccessful(false)} dismissible>Successfully Edited !</Alert>
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
                                    <div className="col-md-3 col-sm-6"><label for="name">Name:</label></div>

                                    <div className="col-md-9 col-sm-12"><input type="text" className="form-control" id="Name" name="name" value={formField.name} onChange={handleChange} required />
                                    </div>

                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-3 col-sm-6"><label for="Address">Address:</label></div>

                                    <div className="col-md-9 col-sm-12"><input type="text" className="form-control" id="Address" name="address" value={formField.address} placeholder="Enter Address..." onChange={handleChange} required />
                                    </div>

                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-3 col-sm-6"><label for="Contact No.">Contact No:</label></div>

                                    <div className="col-md-9 col-sm-12"><input type="text" className="form-control" id="ContactNo" name="contactNo" value={formField.contactNo} placeholder="Enter Contact No..." onChange={handleChange} required />
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
        </div>

    );
}


export default EditStudent;