import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Navbar';
import { Container, Table, Row, Col, Badge} from 'reactstrap';

import { connect } from 'react-redux';

const Users  = (props) => {

    useEffect(() => {
        if(!props.users.email)
            props.history.push('/register');
      });
    return (
        <>
            <Header />
            <div className="container p-5">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="8" className="text-right mb-3">
                            <Link className="btn btn-danger" to="/">Edit Profile</Link>
                            {/* <Button color="danger">Edit Profile</Button> */}
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="8">
                            <div className="custom-container">
                                <Table className="user-table">
                                    <tbody>
                                        <tr>
                                            <td>Email:</td>
                                            <td>{props.users.email} <Badge color="success">Verified</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>Mobile:</td>
                                            <td>{props.users.mobile} <Badge color="success">Verified</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>Nickname:</td>
                                            <td>{props.users.nick_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Name:</td>
                                            <td>{props.users.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Birth Date:</td>
                                            <td>{props.users.birth_date}</td>
                                        </tr>
                                        <tr>
                                            <td>Gender:</td>
                                            <td>{props.users.gender}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        users : state.users
    }
}

export default connect(mapStateToProps)(Users);