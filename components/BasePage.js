import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const BasePage = ({ children, title, className }) => {
  const generateTitle = title && (
    <div className='page-header'>
      <h1 className='page-header-title'>{title}</h1>
    </div>
  );

  return (
    <div className={`base-page ${className}`}>
      <Container>
        {generateTitle}
        {children}
      </Container>
    </div>
  );
};

BasePage.defaultProps = {
  className: '',
};

BasePage.propTypes = {
  className: PropTypes.string.isRequired,
};

export default BasePage;
