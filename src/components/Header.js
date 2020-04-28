import React, {Component} from 'react';
import ReactPlayer from 'react-player';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Header extends Component {
  render() {
    return (
      <Container>
        <Row className="row-header">
          <Col className="center">
            <ReactPlayer
              className="react-player"
              url={require("../assets/waves.mp4")}
              width="100%"
              height="100%"
              loop
              playing
            />
            <h1 className="waves-japanese" data-hover="Let's make waves.">
              波を作ろう
            </h1>
          </Col>

          <Col className="center">
            <h1 className="title">Vega Digital Media Agency</h1>
            <h2>Lets Make Waves.</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
