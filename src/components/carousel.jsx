import Carousel from 'react-bootstrap/Carousel';
import logo from 'components/ExampleCarouselImage/IMG_20220818_141520_HDR.jpg';
import logo1 from 'components/ExampleCarouselImage/IMG-20210928-WA0016.jpg';
import logo2 from 'components/ExampleCarouselImage/IMG_20221225_1410260001.jpg';
function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={logo} alt="mi mama y yo" style={{ width: '25%', height: 'auto' }} />
                <Carousel.Caption>
                    <h3>coviviendo con mi mama en la catedral</h3>
                    <p>año 2022  </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={logo1}  alt="boda de mi prima reina mayra en tijuana" style={{ width: '25%', height: 'auto' }} />
                <Carousel.Caption>
                    <h3>coviviendo en tijuana </h3>
                    <p>año 2021</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={logo2} alt="paseo en la catedral" style={{ width: '25%', height: 'auto' }} />
                <Carousel.Caption>
                    <h3>pasando en familia en puebla</h3>
                    <p>año 2022</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;