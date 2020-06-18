import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

const About = ({ portfolio }) => {
  return (
    <div>
      <BaseLayout>
        <BasePage customClassName='about-page' title="I'm about page">
          <h2>{portfolio}</h2>
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default About;
