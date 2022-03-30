import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'


class Contact extends Component {

    constructor(props) {
        document.title = "Rajmohol || Contact"
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            telNum: "",
            email: "",
            contactType: "Tel.",
            message: "",
            agree: false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleInputChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name =event.target.name;
    this.setState({
        [name] : value,
    })
}

handleSubmit = event =>{
    console.log(this.state);
    event.preventDefault();
}

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row py-3" style={{paddingLeft:"20px", textAlign: "left"}}>
                        <div className="col-12 mb-3">
                            <h3>Send Your Feedback</h3>
                        </div>
                        <div className="col-12 col-md-10" >
                            <Form onSubmit={this.handleSubmit}>
                                
                                    <FormGroup row>
                                        <Label htmlFor='firstName' md={2}>First Name</Label>
                                        <Col md={10}>
                                            <Input type='text' name='firstName' placeholder='First Name' value={this.state.firstName} id='firstName' onChange={this.handleInputChange}/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label htmlFor='lastName' md={2}>Last Name</Label>
                                        <Col md={10}>
                                            <Input type='text' name='lastName' placeholder='Last Name' value={this.state.lastName} id='lastName' onChange={this.handleInputChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor='telNum' md={2}>Telephone</Label>
                                        <Col md={10}>
                                            <Input type='number' name='telNum' placeholder='Telephone' value={this.state.telNum} id='telNum' onChange={this.handleInputChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor='email' md={2}>Email</Label>
                                        <Col md={10}>
                                            <Input type='email' name='email' placeholder='Email' value={this.state.email} id='email' onChange={this.handleInputChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{ size: 6, offset: 2 }}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type='checkbox' name='agree' checked={this.state.agree} onChange={this.handleInputChange}></Input>
                                                    <strong>May we contact you?</strong>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={{size:3, offset:1, padding:"20px"}}>
                                            <Input type='select' name='contactType' value={this.state.contactType} onChange={this.handleInputChange}>
                                                <option value="tel">Telephone</option>
                                                <option value="email">Email</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor='message' md={2} className='pl-0'>Your Feedback</Label>
                                        <Col md={10} className='pl-0 d-inline-block'>
                                            <Input type='textarea' name='message' value={this.state.message} id='message' onChange={this.handleInputChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col md={{size:10, offset:2}} className='pl-0'>
                                            <Button type='submit' color='primary' >Send Feedback</Button>
                                        </Col>
                                    </FormGroup>
                                
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Contact;