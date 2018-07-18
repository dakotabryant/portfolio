import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../assets/logos/Logo.svg';
import Menu from '../components/Menu';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }
  _clickHandler = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  render() {
    const { siteTitle, navLinks } = this.props;
    const { menuOpen } = this.state;
    return (
      <div className="header">
        <img src={logo} alt="dakota bryant logo" className="logo" />
        <div className="nav-links">
          <svg
            class={menuOpen ? 'sun is-open' : 'sun'}
            viewBox="0 0 128 128"
            onClick={this._clickHandler}
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="23.4594228%"
                x2="50%"
                y2="100%"
                id="sunGradient"
              >
                <stop stop-color="#FF00B4" offset="0%" />
                <stop stop-color="#ef5a29" offset="100%" />
              </linearGradient>
            </defs>
            <path
              d="M127.50485,72 C127.165233,74.7235104 126.65449,77.3938769 125.98372,80 L2.01627976,80 C1.34551003,77.3938769 0.834766977,74.7235104 0.49515004,72 L127.50485,72 Z M128,64 C128,28.653776 99.346224,0 64,0 C28.653776,0 0,28.653776 0,64 L128,64 Z M123.347864,88 C122.227329,90.7681898 120.91874,93.440137 119.43794,96 L8.5620605,96 C7.08125972,93.440137 5.77267112,90.7681898 4.65213638,88 L123.347864,88 Z M113.962968,104 C111.653318,106.881192 109.099608,109.558309 106.33319,112 L21.6668097,112 C18.9003917,109.558309 16.3466821,106.881192 14.0370324,104 L113.962968,104 Z M95.0080537,120.000002 C85.8220563,125.097304 75.2500086,128 64,128 C52.7499914,128 42.1779437,125.097304 32.9919463,120.000002 L95.0080574,120 Z"
              stroke="none"
              fill="url(#sunGradient)"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <Menu isOpen={menuOpen} />
      </div>
    );
  }
}

export default Header;
