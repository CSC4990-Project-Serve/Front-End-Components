import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import HorizontalLine from "./HorizontalLine";
import ShowMore from "./ShowMore";
import {Button, Card, CardGroup, Carousel, Container} from "react-bootstrap";
import {MDBIcon} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
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

            {/* Container for Carousel Images */}
            <Container>
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel02}
                            height="650"
                            alt="Overhead of Restaurant"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel02}
                            height="650"
                            alt="Two people dining outside."
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel02}
                            height="650"
                            alt="Indoor Dining"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel02}
                            height="650"
                            alt="Food from a Restaurant"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={carousel02}
                            height="650"
                            alt="Woman eating food"
                        />
                    </Carousel.Item>
                </Carousel>

                <div className="carousel-search-section">
                    <div className="carousel-header">Find a meal for every occasion.</div>

                    <input type="search" className="search-bar-carousel" placeholder="Location, Restaraunt, or Cuisine"/>
                    <button type="button" className="search-icon-carousel" >
                        <MDBIcon fas icon="search" />
                    </button>
                </div>

            </Container>

            <HorizontalLine />

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

            <Footer/>
        </>
    )
};

export default Home;