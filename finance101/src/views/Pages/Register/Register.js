import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import API from "../../../utils/API";
class Register extends Component {
  state = {
    name: "hi",
    email: "",
    password: "",
    age: "10"
  };
  handleInputChange = event => {
    console.log(event.target)
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSaveSubmit = (name, email, password, age) => {
    API.saveUser({
      name: name,
      email: email,
      password: password,
      age: age
    }).then(
      res => {
        if (res.status === 200) {
          alert(res);
        }
      },
    )
      .catch(err => {
        if (err.response.data.code === 11000) {
          alert("Book already saved!!")
        }
        console.log(err)

      });

  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup>
                    <Button onClick={this.handleSaveSubmit(this.name, this.email, this.password, this.age)} color="success" block>Create Account</Button>
                  </Form>
                </CardBody>

              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
