import React from "react";
import {Button, Card, CardGroup, Carousel, Container} from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import HorizontalLine from "./HorizontalLine";
import ShowMore from "./ShowMore";
import '../css/Home.css';
import carousel01 from '../imgs/carousel-overhead.jpg';
import carousel02 from '../imgs/carousel-outdoor.jpg';
import carousel03 from '../imgs/carousel-indoor.jpg';
import carousel04 from '../imgs/carousel-food.jpg';
import carousel05 from '../imgs/carousel-eating.jpg';
import dummy_image from '../imgs/dummy-restaurant.jpg';

const Home = () => {
    return (
        <>
            <NavigationBar />

            {/* TODO: Add Search Bar into Carousel */}
            {/* Container for Carousel Images */}
            <Container>
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel01}
                            height="650"
                            alt="Overhead of Restaurant"
                        />
                        <Carousel.Caption>
                            <h3>Slide Label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel02}
                            height="650"
                            alt="Two people dining outside."
                        />
                        <Carousel.Caption>
                            <h3>Slide Label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel03}
                            height="650"
                            alt="Indoor Dining"
                        />
                        <Carousel.Caption>
                            <h3>Slide Label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel04}
                            height="650"
                            alt="Food from a Restaurant"
                        />
                        <Carousel.Caption>
                            <h3>Slide Label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel05}
                            height="650"
                            alt="Woman eating food"
                        />
                        <Carousel.Caption>
                            <h3>Slide Label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <HorizontalLine />

            {/* TODO: Add view all link inside Card Group */}
            {/* Container for Cards */}
            <Container>
                <h2>Featured Restaurants</h2>
                <CardGroup>
                    <Card className="restaurant-cards">
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>Restaurant Name</Card.Title>
                            <Card.Subtitle>City, State</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button className="cards-button">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards">
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>Restaurant Name</Card.Title>
                            <Card.Subtitle>City, State</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button className="cards-button">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards">
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>Restaurant Name</Card.Title>
                            <Card.Subtitle>City, State</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button className="cards-button">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards">
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>Restaurant Name</Card.Title>
                            <Card.Subtitle>City, State</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button className="cards-button">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>

            <ShowMore />

            <Container>
                <h2>Trending Restaurants</h2>
                <CardGroup>
                    <Card className="restaurant-cards">
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>Restaurant Name</Card.Title>
                            <Card.Subtitle>City, State</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button className="cards-button">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards">
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>Restaurant Name</Card.Title>
                            <Card.Subtitle>City, State</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button className="cards-button">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards">
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>Restaurant Name</Card.Title>
                            <Card.Subtitle>City, State</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button className="cards-button">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className="restaurant-cards">
                        <Card.Img variant="top" className="restaurant-cards-img" src={dummy_image} />
                        <Card.Body>
                            <Card.Title>Restaurant Name</Card.Title>
                            <Card.Subtitle>City, State</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam repellendus saepe.
                            </Card.Text>
                            <Button className="cards-button">Reserve Now</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>

            <ShowMore />


            {/* TODO: Clean up Footer */}
            <Footer/>
        </>
    )
};

export default Home;