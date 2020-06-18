import { Link } from '../routes';
import { Children } from 'react';
import { withRouter } from 'next/router';

const ActiveLink = ({ children, router, activeClassName, ...props }) => {
  const child = Children.only(children);
  let className = child.props.className || '';

  if (router.asPath == props.href && activeClassName) {
    className += ' ' + activeClassName;
  }

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);
