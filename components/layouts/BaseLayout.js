import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = ({ title, children, headerType, className }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content="My name is Liam Nguyen and I am a software engineer. I have a Master' s degree and experience working with full stack web applications."
      />
      <meta
        name='keywords'
        content='liam nguyen, liam developer, liam software, liam programming'
      />
      <meta
        property='og:title'
        content='Liam Nguyen - programmer, developer, engineer'
      />
      <meta property='og:locale' content='en_US' />
      <meta property='og:url' content='http://localhost:3000' />
      <meta property='og:type' content='website' />
      <meta
        property='og:description'
        content="My name is Liam Nguyen and I am a software engineer. I have a Master' s degree and experience working with full stack web applications."
      />
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
