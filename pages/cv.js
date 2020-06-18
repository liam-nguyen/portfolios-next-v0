import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';

const CV = () => (
  <BaseLayout>
    <BasePage customClassName='cv-page'>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <div className='cv-title'>
            <a
              className='btn btn-success'
              download='resume.pdf'
              href='files/resume_v7.pdf'>
              Download
            </a>
          </div>
          <iframe
            src='files/resume_v7.pdf'
            style={{ width: '100%', height: '800px' }}></iframe>
        </Col>
      </Row>
    </BasePage>
  </BaseLayout>
);

export default CV;
