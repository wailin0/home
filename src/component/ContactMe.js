import React, {useState} from "react";
import "../style/contactme.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";




const SuccessModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h5>
                    Thanks for contacting me I'll get back to u ASAP
                </h5>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}







const ContactMe = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const sendMessage = (e) => {
        e.preventDefault()
        const data = {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message
        }

        fetch("https://wailin-3f518.firebaseio.com/message.json", {
            method: 'POST',
            body: JSON.stringify(data)

        })
            .catch(err => {
                console.log(err)
            })
        setModalShow(true)
    }


    return (
        <>
            <div className="section section-contact" id="contact">
                <div className="container">
                    <h2 className="title-of-section title-border">Contact Me</h2>
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="contact-box">
                                <h4 className="title4">Discord: </h4>
                                <p>OMEGA#5563</p>
                                <h4 className="title4">Phone: </h4>
                                <p>+95 09 963936613</p>
                                <h4 className="title4">Mail: </h4>
                                <p>wailinhtet.dev@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-sm-7">
                            <Form onSubmit={sendMessage}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Name*" name="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="form-input"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Email*" name="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="form-input"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Subject" name="subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="form-input"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control as="textarea" rows="3" placeholder="Message*" name="message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="form-input"/>
                                </Form.Group>
                                <Button variant="danger" type="submit" disabled={!(form.name && form.email && form.message)}>
                                    Send
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <SuccessModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default ContactMe