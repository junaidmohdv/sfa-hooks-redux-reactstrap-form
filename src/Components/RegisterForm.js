import React, {useState} from 'react';
import { useForm } from 'react-hook-form'
import Input from  './Input';
import RadioInput from './RadioInput';
import Header from './Navbar';
import { Button, Form, FormGroup, Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { addUser } from  '../actions/index';

const mapDispatchToProps = (dispatch) => {
    return {
      addUser: data => dispatch(addUser(data))
    };
}

const mapStateToProps = state => {
    return {
        users : state.users
    }
}

const RegisterForm = ({addUser, users, history}) => {

    const [user, setUser] = useState({
        email: users.email,
        password: users.password,
        mobile: users.mobile,
        nick_name: users.nick_name,
        name: users.name,
        birth_date: users.birth_date,
        gender: users.gender
    });

    const [isDisabled, setIsDisabled] = useState({
        email : users.email? true : false,
        mobile: users.mobile? true : false,
        password: users.password? true : false,
    });

    const [checked, setChecked] = useState('male');

    const radioChange = (e) => {
        setChecked(e.target.value);
        setUser({...user, gender: e.target.value});
    }
  
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {
        addUser(data);
        // setIsDisabled(true)   
        history.push('/users');
    }

    return (
        <>
            <Header />
            <div className="container p-5">
            <Container className="custom-container col-6">
                <Form name="register_form" onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                {users.email?
                                    <Button color="link" 
                                        className = "input-edit-btn" 
                                        onClick={e=>setIsDisabled({...isDisabled, email : false })}>Edit</Button> : "" 
                                }
                                <Input
                                title="Email" 
                                type="email" 
                                name="email" 
                                id="email" 
                                autocomplete="off"
                                placeholder="Enter you email" 
                                value={user.email || ''}
                                isDisabled={isDisabled.email}
                                onChange = {e=>setUser({...user, email : e.target.value })}
                                innerRef={register({
                                            required:true,
                                            pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "invalid email address"
                                            }
                                            })}/>
                                {errors.email && <p className="text-danger">This is required</p>}
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                {users.mobile?
                                    <Button color="link" 
                                        className = "input-edit-btn" 
                                        onClick={e=>setIsDisabled({...isDisabled, mobile : false })}>Edit</Button> : "" 
                                }
                                <Input 
                                title="Mobile"
                                type="number" 
                                name="mobile" 
                                id="mobile" 
                                autocomplete="off"
                                placeholder="Enter your mobile number" 
                                value={user.mobile || ''}
                                isDisabled={isDisabled.mobile}
                                onChange = {e=>setUser({...user, mobile : e.target.value })}
                                innerRef={register({required:true})}/>
                                {errors.mobile && <p className="text-danger">This is required</p>}
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                {users.password?
                                    <Button color="link" 
                                        className = "input-edit-btn" 
                                        onClick={e=>setIsDisabled({...isDisabled, password : false })}>Edit</Button> : "" 
                                }
                                <Input
                                title="Password"
                                type="password" 
                                name="password" 
                                id="password" 
                                autocomplete="off"
                                placeholder="Enter your password" 
                                value={user.password || ''} 
                                isDisabled={isDisabled.password}
                                onChange = {e=>setUser({...user, password : e.target.value })}
                                innerRef={register({required:true})}/>
                                {errors.password && <p className="text-danger">This is required</p>}
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                <Input 
                                title="Nick name"
                                type="text" 
                                name="nick_name" 
                                id="nick_name"
                                autocomplete="off"
                                value={user.nick_name || ''} 
                                placeholder="Enter your nick name"
                                isDisabled={false}
                                onChange = {e=>setUser({...user, nick_name : e.target.value })}
                                innerRef={register({required:true})}/>
                                {errors.nick_name && <p className="text-danger">This is required</p>}
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                <Input 
                                title="Name"
                                type="text" 
                                name="name" 
                                id="name" 
                                autocomplete="off"
                                value={user.name || ''}
                                placeholder="Enter your name"
                                isDisabled={false}
                                onChange = {e=>setUser({...user, name : e.target.value })}
                                innerRef={register({required:true})}/>
                                {errors.name && <p className="text-danger">This is required</p>}
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                <Input 
                                title="Birth date"
                                type="text" 
                                name="birth_date" 
                                id="birth_date" 
                                autocomplete="off"
                                value={user.birth_date || ''}
                                placeholder="Enter your date of birth"
                                isDisabled={false}
                                onChange = {e=>setUser({...user, birth_date : e.target.value })}
                                innerRef={register({required:true})}/>
                                {errors.birth_date && <p className="text-danger">This is required</p>}
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup tag="fieldset">
                                <FormGroup check className="form-check-inline">
                                    <RadioInput 
                                    changed = {radioChange}
                                    checked={ checked === "male" } 
                                    name="gender" 
                                    id="male" 
                                    title='Male'
                                    value="male"
                                    innerRef={register({required:true})}/>
                                    {errors.gender && <p className="text-danger">This is required</p>}
                                </FormGroup>
                                <FormGroup check className="form-check-inline">
                                <RadioInput 
                                    changed = {radioChange} 
                                    checked={ checked === "female" }
                                    name="gender" 
                                    id="female" 
                                    title='Female'
                                    value="female"
                                    innerRef={register({required:true})}/>
                                    {errors.gender && <p className="text-danger">This is required</p>}
                                </FormGroup>
                            </FormGroup>
                        </Col>
                        <Col md="12" className="mt-4">
                        <Button block color="danger">Submit</Button>
                    </Col>
                    </Row>
                </Form>
            </Container>
            </div>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);