import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

const About = ({ portfolio }) => {
  return (
    <div>
      <BaseLayout>
        <BasePage className='about-page'>
          <h1>I'm About page</h1>
          <h2>{portfolio}</h2>
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default About;
