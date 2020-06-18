import axios from 'axios';
import { Link } from '../routes';
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

const Portfolios = ({ posts }) => {
  const renderPost = posts =>
    posts.map(({ id, title, body }) => (
      <Col md='4'>
        <React.Fragment key={id}>
          <span>
            <Card className='portfolio-card'>
              <CardHeader className='portfolio-card-header'>
                Some Position {id}
              </CardHeader>
              <CardBody>
                <p className='portfolio-card-city'> Some Location {id} </p>
                <CardTitle className='portfolio-card-title'>
                  Some Company {id}
                </CardTitle>
                <CardText className='portfolio-card-text'>
                  Some Description {id}
                </CardText>
                <div className='readMore'> </div>
              </CardBody>
            </Card>
          </span>
        </React.Fragment>
      </Col>
    ));

  return (
    <BaseLayout>
      <BasePage title="I'm portfolios page" className='portfolio-page'>
        <Row>{renderPost(posts)}</Row>
      </BasePage>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts = res.data;
  } catch (e) {
    console.error(e);
  }

  return { posts: posts.slice(0, 10) };
};

export default Portfolios;
