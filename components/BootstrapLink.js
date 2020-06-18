import ActiveLink from './ActiveLink';

const BootstrapLink = ({ route, title }) => (
  <ActiveLink href={route} activeClassName='active'>
    <a className='nav-link port-navbar-link'>{title}</a>
  </ActiveLink>
);

export default BootstrapLink;
