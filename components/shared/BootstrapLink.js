import Link from 'next/link';

const BootstrapLink = ({ route, title }) => (
  <Link href={route}>
    <a className='nav-link port-navbar-link'>{title}</a>
  </Link>
);

export default BootstrapLink;
