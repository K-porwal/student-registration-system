import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { API_ROOT } from '../urls';
import Footer from './Footer';
import NavBar from './NavBar';
function AllStudents() {
    const [students, setStudents] = useState([])
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        axios
            .get(`${API_ROOT}/students`)
            .then(res => {
                console.log(res)
                setStudents(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const history = useHistory();
    const handleEdit = (id) => {
        history.push("/editStudent/" + id);
    }
    const handleSort= ()=> {
        if(!toggle)
        {
            students.sort((a,b) => a.id >b.id ? 1:-1)
        }
        else
        {
            students.sort((a,b) => a.id <b.id ? 1:-1)
           
        }
        setStudents(students);
        setToggle(!toggle);
    }

    return (
        < div className="AllStudents" >
            <NavBar />
            <div className='container fluid'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 pt-5'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Contact No.</th>
                                </tr>
                            </thead>
                            <tbody val = {toggle}>
                                {
                                    students.map((student) => (
                                        <tr key={student.id}>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.address}</td>
                                            <td>{student.contactNo}</td>
                                            <td><Button className="btn btn-danger" onClick={() => handleEdit(student.id)}>
                                                Edit </Button>
                                            </td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </Table>
                        <div className='text-center'>
                                <Button className="btn btn-primary" onClick={() => handleSort()}>
                                    Sort </Button>
                            
                        </div>
                        <br/>
                        <br/>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div >

    );
}


export default AllStudents;