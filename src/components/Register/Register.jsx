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

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            console.log('invalid');
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);//these are the messages that appear when the form is invalid

        } else {
            e.preventDefault();
            setDone(true);
            setModal(true);
            console.log("Submitted");
            emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, formRef.current, process.env.REACT_APP_USERID)
                .then((result) => {
                    console.log(result.text);
                    setDone(true);
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    return (
        <div className='reg'>
            <h1 id='Register'>
                <u>Register or Contact Us</u>
            </h1>

            <h4>
            </h4>
            <div className="c-right">
                <p className="c-desc">If you want to participate, have questions or have feedback on how to make the tournament better and more accessible please fill out the form below. </p>

                <Form className="form" ref={formRef} onSubmit={handleSubmit} noValidate validated={validated}>

                    <Form.Group>
                        <input required className="c-input" type="text" placeholder="Email" name="user_email" />
                        <Form.Control.Feedback type="invalid"> Please enter an email </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <textarea required className="textarea" rows="5" placeholder="Im interested in participating, the format is not good, entry fee is too high. etc." name="message" />
                        <Form.Control.Feedback type="invalid"> Please enter a message </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <button type="submit">Submit</button>
                    {done && <ModalForm show={modal} onHide={closeModal} />}
                </Form>
            </div>
        </div>
    )
}

export default Register