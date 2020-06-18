import Header from '../shared/Header';

const BaseLayout = ({ children, headerType, className }) => (
  <>
    <div className='layout-container'>
      {headerType === 'default' && <Header className='port-nav-default' />}
      {headerType === 'index' && <Header className='port-nav-index' />}
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
