import React from 'react';
import './Register.scss';
import { useRef } from 'react';
import { useState } from 'react';
import ModalForm from './ModalForm';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

function Register() {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [modal, setModal] = useState(false);
    const [validated, setValidated] = useState(false);

    const closeModal = () => {
        setModal(false);
    }

    return (
        <div className='reg'>
            <h1 id='Register'>
                Contact Us
            </h1>

            <h4> If you want to participate, have questions or have feedback on how to make the tournament better and more accessible please fill out the form below.
            </h4>
        </div>
    )
}

export default Register