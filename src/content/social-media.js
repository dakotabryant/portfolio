import db from '../assets/logos/Logo.svg';
import { faEnvelopeOpen, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default [
  {
    path: db,
    description: 'email',
    text: 'hello@dakotabryant.com',
    icon: faEnvelopeOpen,
  },
  {
    path: db,
    description: 'phone',
    text: '970.712.7288',
    icon: faMobile,
  },
  {
    path: db,
    description: 'github',
    text: 'dakotabryant',
    icon: faGithub,
  },
  {
    path: db,
    description: 'linkedin',
    text: 'Dakota Bryant',
    icon: faLinkedin,
  },
];
