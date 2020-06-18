import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = ({ title, children, headerType, className }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
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
  title: '',
};

export default BaseLayout;
