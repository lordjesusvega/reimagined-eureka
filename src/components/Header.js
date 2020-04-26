import React, {Component} from 'react';
import ReactPlayer from 'react-player';
class Header extends Component {
  render() {
    return (
      <div className="header">
      <div className="row">
        <div className="column overlap player-wrapper">
          <ReactPlayer
          className="video"
          url={require("../assets/waves.mp4")}
          width = '100%'
          height = '100%'
          loop playing />
          // <h1 className="waves-japanese" data-hover="Let's make waves.">波を作ろう</h1>
        </div>

         <div className="column">
          <div className="card">
            <h1 className="title">Vega Digital Media Agency</h1>
            <h2>Lets Make Waves.</h2>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Header;
