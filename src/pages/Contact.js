import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Contact.css'; 

function Contact() {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contact: '',
        email: '',
        message: '',
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleShow(); // Show modal on submit
    };

    return (
      <div className="contact-main-content">
        <h3>Hi! would you like to reach out to me?</h3>
        
         <Form onSubmit={handleSubmit}> 
            <div className="contact-form">
                <Form.Group className="form-group" controlId="firstName">
                    <Form.Label><strong>First Name:</strong></Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" value={formData.firstName} onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="form-group" controlId="lastName">
                    <Form.Label><strong>Last Name:</strong></Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" value={formData.lastName} onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="form-group" controlId="contact">
                    <Form.Label><strong>Contact No.:</strong></Form.Label>
                    <Form.Control type="tel" placeholder="Enter contact number" value={formData.contact} onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="form-group" controlId="email">
                    <Form.Label><strong>Email Address:</strong></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required/>
                </Form.Group>
            </div>

            <div className="contact-textarea">
                <Form.Group controlId="message">
                    <Form.Control as="textarea" rows={3} value={formData.message} onChange={handleChange} placeholder="Message" required/>
                </Form.Group>
            

            <Button variant="primary" type="submit">
                Submit
            </Button>

            </div>
        </Form>

    <Modal
         show={show}
         onHide={handleClose}
         backdrop="static"
         keyboard={false}
         className="dark-modal"
    >

    <Modal.Header closeButton>
        <Modal.Title>Owner's Message</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <p> Thank you, user {formData.lastName}, {formData.firstName} i appreciate you</p>
    <p> reaching out to us your contact, {formData.contact}, and</p>
    <p>email, {formData.email} will be used to contact you soon</p>

        <p>Your message, "{formData.message}" is greatly appreciated</p>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
    </Modal.Footer>
</Modal>
        
      </div>
    );
}

export default Contact;
