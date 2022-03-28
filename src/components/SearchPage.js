import React, {useState} from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import {Button, Card, CardGroup, Carousel, Col, Container, Row} from "react-bootstrap";
import {MDBIcon} from "mdb-react-ui-kit";
import '../css/SearchPage.css';
import dummy_image from '../imgs/dummy-restaurant.jpg';

const SearchPage = () => {


    return (
        <>
            <NavigationBar />

            <div className="search-container">
                <div className="search-together">
                    <input type="search" className="search-bar" placeholder="Location, Restaurant, or Cuisine"/>
                    <button type="button" className="search-icon">
                        Search
                    </button>
                </div>
            </div>
            <Container>
                {/*TODO: Add useState to show what user searched for */}
                <h2>Results for </h2>
            </Container>
            <Container>
                {Array.from({ length: 4 }).map((_) => (
                <Card type="button" className="card-container" >
                    <Row>
                        <Col md={4}>
                            <Card.Img variant="top" src={dummy_image}  />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Restaurant Name</Card.Title>
                                <Card.Subtitle>City, State</Card.Subtitle>
                                <Card.Text>
                                    <MDBIcon fas icon="star" />
                                    <MDBIcon fas icon="star" />
                                    <MDBIcon fas icon="star" />
                                    <MDBIcon fas icon="star" />
                                    <MDBIcon far icon="star" />
                                </Card.Text>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis doloremque eaque enim eos eveniet fugiat illum incidunt iusto, maiores molestiae nulla odit sunt suscipit tempora temporibus totam ullam unde veniam vero! Accusamus architecto eveniet, ipsam laboriosam molestias necessitatibus odit perferendis quod rem veritatis. Ea?
                                </Card.Text>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                ))}
            </Container>
            <Footer />
        </>
    )
};

export default SearchPage;