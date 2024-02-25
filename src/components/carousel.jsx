import Carousel from 'react-bootstrap/Carousel';
import logo from 'components/ExampleCarouselImage/IMG_20220818_141520_HDR.jpg';
import logo1 from 'components/ExampleCarouselImage/IMG-20210928-WA0016.jpg';
import logo2 from 'components/ExampleCarouselImage/IMG_20221225_1410260001.jpg';
function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={logo} alt="First slide" style={{ width: '25%', height: 'auto' }} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={logo1}  alt="Second slide" style={{ width: '25%', height: 'auto' }} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={logo2} alt="Third slide" style={{ width: '25%', height: 'auto' }} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;