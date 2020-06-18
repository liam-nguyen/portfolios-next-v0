import Header from '../shared/Header';

const BaseLayout = ({ children, headerType, className }) => (
  <>
    <div className='layout-container'>
      <Header className={`port-nav-${headerType}`} />
      <main className={`cover ${className}`}>
        <div className='wrapper'>{children}</div>
      </main>
    </div>
  </>
);

BaseLayout.defaultProps = {
  className: '',
  headerType: 'default',
};

export default BaseLayout;
