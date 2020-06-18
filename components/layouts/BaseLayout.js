import Header from '../shared/Header';

const BaseLayout = ({ children, className = '' }) => (
  <>
    <div className='layout-container'>
      <Header />
      <main className={`cover ${className}`}>
        <div className='wrapper'>{children}</div>
      </main>
    </div>
  </>
);

export default BaseLayout;
