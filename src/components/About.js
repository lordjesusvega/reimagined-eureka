import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends Component {
  render() {
    return (
      <div className="about">
      <Container fluid>
        <Row>
          <Col>
          </Col>
          <Col>
            <h1 className="h1 about-title">About</h1>
            <div className="lead">
              <p>
                Vega Digital Media Agency was started because founder Jesus Vega saw a problem in the marketplace. Although businesses were established and had regular business coming in, their story was lost in translation. The biggest differentiator in the world we live in now is a powerful story. With Vega Digital Media Agency, we enable businesses to tell their story in a more meaningful way with the distribution and production of a Fortune 500 Company at a fraction of the cost and with the ease and grace of a small business.
              </p>

              <p>
                Our logo with the depiction of a rooster is the epitome of what we believe at Vega Digital Media Agency. Roosters are notorious for having the following qualities: they are constantly growing, they lead to self sufficiency, and although they are pretty they are pretty with a purpose. We are constantly learning more and more about the ever expanding digital media landscape, which is an important trait to have as the industry is in an upwards growth spiral. With our constant growth, we offer constant re-education for our customers to not only entertain but inform. Lastly, we are pretty with a purpose. At the core of every business you inherently need to answer the question of “Why do you exist?” Our answer to that is to give businesses and brands an opportunity to put themselves on the map by enabling them to share their most authentic version of their story.
              </p>

              <p>
                This company was founded on the notion that digital marketing is the way to sustain growth and longevity of businesses in the future. We truly believe this, a quote we have around here is “Digital Marketing is not the thing. It is the thing that gets your thing seen.” With attention there is power.
              </p>
            </div>
          </Col>

          <Col>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
export default About;
