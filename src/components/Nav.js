import React, {Component} from 'react';

class Nav extends Component{
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      pressed: false,
    }
  }

  showMenu() {
    if(!this.state.pressed) {
      this.setState({display: "grid"});
      this.setState({pressed: true});
    } else {
      this.setState({display: "none"});
      this.setState({pressed: false});
    }
  }

  render() {
    return (
      <>
        <button className="menuButton" onClick={() => {this.showMenu()}}>menu.</button>
        <nav style={{display: this.state.display}} className="social-links">
          <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@lordjesusvega">TikTok</a>
          <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/vegadma">Facebook</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vegadma">Instagram</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/vega-digital-media-agency/">LinkedIn</a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/vegadma">Twitter</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/vegadma/">Pinterest</a>
        </nav>
      </>
    );
  }
}

export default Nav;
