import {Link} from "react-router-dom";
import {Carousel, Container} from "react-bootstrap";
import {MDBIcon} from "mdb-react-ui-kit";
import HomeSuggestions from "./HomeSuggestions";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import HorizontalLine from "./HorizontalLine";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../css/HomePage.css';
import carousel01 from '../imgs/carousel-overhead.jpg';
import carousel02 from '../imgs/carousel-outdoor.jpg';
import carousel03 from '../imgs/carousel-indoor.jpg';
import carousel04 from '../imgs/carousel-food.jpg';
import carousel05 from '../imgs/carousel-eating.jpg';

const HomePage = () => {

    return (
        <>
            <NavigationBar />

            {/* Container for Carousel Images */}
            <Container>
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img
                            className="carousel-img-home"
                            src={carousel02}
                            alt="Overhead of Restaurant"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="carousel-img-home"
                            src={carousel02}
                            alt="Two people dining outside."
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="carousel-img-home"
                            src={carousel02}
                            alt="Indoor Dining"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="carousel-img-home"
                            src={carousel02}
                            alt="Food from a Restaurant"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="carousel-img-home"
                            src={carousel02}
                            alt="Woman eating food"
                        />
                    </Carousel.Item>
                </Carousel>

                {/* Search Button in Carousel */}
                <div className="carousel-search-section">
                    <div className="carousel-header">Find a meal for every occasion.</div>
                    <input type="search" className="search-bar-carousel" placeholder="Location, Restaurant, or Cuisine"/>
                    <Link to="/search" >
                        <button type="button" className="search-icon-carousel">
                            <MDBIcon fas icon="search" />
                        </button>
                    </Link>
                </div>
            </Container>

            <HorizontalLine />

            {/* Container for Cards */}
            {Array.from({ length: 2 }).map((_) => (
                <HomeSuggestions />
            ))}

            <Footer/>
        </>
    )
};

export default HomePage;