import React from 'react';
import navLinks from '../content/navLinks';
import logo from '../assets/logos/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
// import Sound from 'react-sound';
// import Song from '../assets/afterHoursRun.mp3';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      playMusic: false,
    };
  }
  clickHandler = () => {
    this.setState({ playMusic: !this.state.playMusic });
  };
  render() {
    const { isOpen } = this.props;
    // const musicValue = this.state.playMusic
    //   ? Sound.status.PLAYING
    //   : Sound.status.PAUSED;
    return (
      <header className={`${isOpen ? 'menu is-open' : 'menu'}`}>
        <Link to="/" className="link-logo">
          <img src={logo} alt="dakota bryant logo" className="logo" />
        </Link>

        <div className="links">
          {navLinks &&
            navLinks.map(link => {
              return (
                <Link key={link.text} to={link.path}>
                  {link.text}
                </Link>
              );
            })}
        </div>
        {/* <div className="button-wrapper">
          <FontAwesomeIcon
            className="music-icon"
            icon={faMusic}
            onClick={this.clickHandler}
          />
          <Sound url={Song} playStatus={musicValue} />
        </div> */}
      </header>
    );
  }
}

export default Menu;
