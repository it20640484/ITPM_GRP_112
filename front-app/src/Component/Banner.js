import Carousel from 'react-bootstrap/Carousel';

function banner() {
    return (
        <div>                           
            <Carousel>

                <Carousel.Item>

                    <img
                        className="d-block w-100"
                        src="https://cdn.wallpapersafari.com/68/72/wqJMUV.jpg"
                        alt="First slide"
                        style={{ height: '60vh' }}
                    />

                    <Carousel.Caption>
                    <div style={{paddingBottom:'25%'}}>
                    <img src='https://res.cloudinary.com/iplus/image/upload/v1680665738/shac_Logo_ac3enu.png' alt='Logo' style={{ width: '9%',float:'left' }} />
                    </div>

                        <h3>SHAC SL</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.pixel4k.com/wp-content/uploads/2018/09/hong-kong-china-skyscrapers-night-city-city-lights-4k_1538068866.jpg"
                        alt="Second slide"
                        style={{ height: '60vh' }}
                    />

                    <Carousel.Caption>
                    <div style={{paddingBottom:'25%'}}>
                    <img src='https://res.cloudinary.com/iplus/image/upload/v1680665738/shac_Logo_ac3enu.png' alt='Logo' style={{ width: '9%',float:'left' }} />
                    </div>
                        <h3>SHAC SL</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default banner;