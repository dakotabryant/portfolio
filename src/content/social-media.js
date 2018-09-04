import db from '../assets/logos/Logo.svg';
import { faEnvelopeOpen, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default [
  {
    description: 'email',
    text: 'hello@dakotabryant.com',
    icon: faEnvelopeOpen,
    url: 'mailto:hello@dakotabryant.com',
  },
  {
    description: 'phone',
    text: '970.712.7288',
    icon: faMobile,
    url: 'tel:+19707127288',
  },
  {
    description: 'github',
    text: 'dakotabryant',
    icon: faGithub,
    url: 'https://github.com/dakotabryant',
  },
  {
    description: 'linkedin',
    text: 'Dakota Bryant',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/dakota-bryant-5a179995/',
  },
];
