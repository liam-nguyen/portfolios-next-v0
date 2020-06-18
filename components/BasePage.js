import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const BasePage = ({ children, title, customClassName }) => {
  const generateTitle = title && (
    <div className='page-header'>
      <h1 className='page-header-title'>{title}</h1>
    </div>
  );

  return (
    <div className={`base-page ${customClassName}`}>
      <Container>
        {generateTitle}
        {children}
      </Container>
    </div>
  );
};

BasePage.defaultProps = {
  customClassName: '',
};

BasePage.propTypes = {
  customClassName: PropTypes.string.isRequired,
};

export default BasePage;
