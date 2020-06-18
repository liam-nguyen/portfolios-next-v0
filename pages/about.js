import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

const About = () => {
  return (
    <div>
      <BaseLayout>
        <BasePage customClassName='about-page' title="I'm about page">
          <Row className='mt-5'>
            <Col md='6'>
              <div className='left-side'>
                <h1 className='title fade-in'>Hello, Welcome</h1>
                <h4 className='subtitle fade-in'>To About Page</h4>
                <p className='subSubtitle fade-in'>
                  Feel free to read short description about me.
                </p>
              </div>
            </Col>
            <Col md='6'>
              <div className='fade-in' id='intro'>
                <p>My name is Liam Nguyen and I am a software engineer</p>
                <p>
                  I have a Master's degree in Software Engineering and several
                  years of experience working on a wide range of technologies
                  and projects in web applications in React.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default About;
