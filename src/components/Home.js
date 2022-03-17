import React from "react";
import {Button, Card, CardGroup, Carousel, Container} from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import HorizontalLine from "./HorizontalLine";
import '../css/Home.css';
import carousel01 from '../imgs/carousel-overhead.jpg';
import carousel02 from '../imgs/carousel-indoor.jpg';
import carousel03 from '../imgs/carousel-outdoor.jpg';
import dummy_image from '../imgs/dummy-restaurant.jpg';

const Home = () => {
    return (
        <>
            {/* TODO: Find a color scheme */}



            {/* TODO: Clean up Navbar */}
            <NavigationBar />

            {/* Container for Carousel Images */}
            {/* TODO: Style image container, add opacity... make sure all images are the same resolution */}
            <Container>
                <Carousel>
                    <Carousel.Item interval={3000}>
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
                    <Carousel.Item interval={3000}>
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
                    <Carousel.Item interval={3000}>
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

            <HorizontalLine />

            {/* TODO: Add hover effect on cards */}
            {/* Notes: Can't edit rounded edges due to bootstrap, tried overriding, but it came out horrible */}

            {/* Container for Cards */}
            <Container>
                <h2>Featured Restaurants</h2>
                <CardGroup>
                    <Card className="restaurant-cards" >
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>El Tizon Taqueria</Card.Title>
                            <Card.Subtitle>Aurora, IL</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button variant="primary">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards" >
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>El Tizon Taqueria</Card.Title>
                            <Card.Subtitle>Aurora, IL</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button variant="primary">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards" >
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>El Tizon Taqueria</Card.Title>
                            <Card.Subtitle>Aurora, IL</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button variant="primary">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards" >
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>El Tizon Taqueria</Card.Title>
                            <Card.Subtitle>Aurora, IL</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button variant="primary">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>


                <h2>Trending Restaurants</h2>
                <CardGroup>
                    <Card className="restaurant-cards" >
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>El Tizon Taqueria</Card.Title>
                            <Card.Subtitle>Aurora, IL</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button variant="primary">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards" >
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>El Tizon Taqueria</Card.Title>
                            <Card.Subtitle>Aurora, IL</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button variant="primary">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards" >
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>El Tizon Taqueria</Card.Title>
                            <Card.Subtitle>Aurora, IL</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button variant="primary">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards" >
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>El Tizon Taqueria</Card.Title>
                            <Card.Subtitle>Aurora, IL</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button variant="primary">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>

            {/* TODO: Clean up Footer */}
            <Footer/>
        </>
    )
};

export default Home;