import React from 'react';
import navLinks from '../content/navLinks';
import logo from '../assets/logos/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { toggleModal } from '../actions/main';
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
  toggleModal = () => {
    this.props.dispatch(toggleModal());
  };
  render() {
    const { isOpen } = this.props;
    return (
      <header className={`${isOpen ? 'menu is-open' : 'menu'}`}>
        <Link to="/" className="link-logo">
          <img src={logo} alt="dakota bryant logo" className="logo" />
        </Link>

        <div className="links">
          {navLinks &&
            navLinks.map(link => {
              if (link.text === 'Contact') {
                return <p onClick={this.toggleModal}>{link.text}</p>;
              } else {
                return (
                  <Link key={link.text} to={link.path}>
                    {link.text}
                  </Link>
                );
              }
            })}
        </div>
      </header>
    );
  }
}

export default connect()(Menu);
// export default Menu;
