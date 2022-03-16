import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import {Button, Card, CardGroup, Carousel, Container} from "react-bootstrap";
import carousel01 from '../imgs/carousel-overhead.jpg';
import carousel02 from '../imgs/carousel-indoor.jpg';
import carousel03 from '../imgs/carousel-outdoor.jpg';
import dummy_image from '../imgs/dummy-restaurant.jpg';



const Home = () => {
    return (
        <>
            <NavigationBar/>

            {/* Container for Carousel Images */}
            <Container>
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel01}
                            height="650"
                            alt="Outdoor Dining"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel02}
                            height="650"
                            alt="Indoor Dining"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel03}
                            height="650"
                            alt="Outdoor Dining"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            {/* Container for Cards */}
            <Container>
                <h2>Featured Restaurants</h2>
                <CardGroup>
                    <Card className="restaurant-cards" >
                        <Card.Img variant="top" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards" >
                        <Card.Img variant="top" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards">
                        <Card.Img variant="top" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards" >
                        <Card.Img variant="top" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </CardGroup>
            </Container>

            <Footer/>
        </>
    )
};

export default Home;