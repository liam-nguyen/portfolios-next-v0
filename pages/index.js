import ReactTyped from 'react-typed';
import { useState } from 'react';
import { useInterval } from '../services/customHooks';

import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayout';

const roles = ['Developer', 'Tech Lover', 'Team Player', 'Full Stack', 'React'];

export default function Home() {
  const [isFlipping, setIsFlipping] = useState(false);

  useInterval(() => {
    setIsFlipping(!isFlipping);
  }, 5000);

  return (
    <BaseLayout className='cover' headerType='index'>
      <div className='main-section'>
        <div className='background-image'>
          <img src='/images/background-index.png' />
        </div>

        <Container>
          <Row>
            <Col md='6'>
              <div className='hero-section'>
                <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                  <div className='back'>
                    <div className='hero-section-content'>
                      <h2> Full Stack Web Developer </h2>
                      <div className='hero-section-content-intro'>
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <img className='image' src='/images/section-1.png' />
                    <div className='shadow-custom'>
                      <div className='shadow-inner'> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md='6' className='hero-welcome-wrapper'>
              <div className='hero-welcome-text'>
                <h1>
                  Welcome to my portfolio site. Get informed, collaborate and
                  discover projects I was working on through out the years!
                </h1>
              </div>
              <ReactTyped
                className='self-typed'
                loop
                typeSpeed={60}
                backSpeed={60}
                strings={roles}
                backDelay={1000}
                loopCount={0}
                showCursor
                cursorChar='|'
              />

              <div className='hero-welcome-bio'>
                <h1>Let's take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
}
