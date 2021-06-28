import { Navbar, Card, Button, Table, Alert } from 'react-bootstrap';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { API_ROOT } from '../urls';
import NavBar from './NavBar';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
function GetStudent() {
    const [students, setStudents] = useState([])
    const [formField, setFormField] = useState({ id: "" })
    const history = useHistory()
    const [showUnsuccessful, setShowUnsuccessful] = useState(false);

    const validateForm = () => {
        const { id } = formField;
        if (id.trim().length === 0) {
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
                    console.log(err);
                })


        } else {
            console.log('Please fill the input field');
        }
    }




    return (
        < div className="GetStudent" >
            <div className='text-center'>
                <Alert variant='danger' show={showUnsuccessful} onClose={() => setShowUnsuccessful(false)} dismissible>Please enter correct id !</Alert>
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

                        <Footer />
                    </div>
                </div>
            </div>
        </div >

    );
}


export default GetStudent;