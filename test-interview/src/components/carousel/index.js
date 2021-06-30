import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'



export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="Carousel">
                <img
                    className="w-100"
                    src="https://www.eletrojr.com.br/wp-content/uploads/2020/03/lighting-1368798_1280.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Duis quam erat, sollicitudin</h2>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

            <img
                    className="w-100"
                    src="https://s1.1zoom.me/big0/228/Russia_Siberia_Rivers_Sky_Grasslands_Grass_Clouds_532187_1280x480.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2>Proin convallis vulputate dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                    className="w-100"
                    src="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/951/2018/03/sunset_hero-1280x480.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2>Donec lobortis quam</h2>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}
