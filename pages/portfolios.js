import axios from 'axios';
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from 'reactstrap';
import portfoliosData from '../public/files/portfolios.json';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

const Portfolios = ({ portfoliosData }) => {
  const renderPost = portfoliosData =>
    portfoliosData.map(({ id, name, description, url }) => (
      <Col md='4' key={id}>
        <React.Fragment key={id}>
          <span>
            <Card className='portfolio-card'>
              {/* <CardHeader className='portfolio-card-header'>{name}</CardHeader> */}
              <CardImg
                className='portfolio-card-img'
                top
                width='100%'
                src={url}
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle className='portfolio-card-title'>{name}</CardTitle>
                <CardText className='portfolio-card-text'>
                  {description}
                </CardText>
                <div className='readMore'> </div>
              </CardBody>
            </Card>
          </span>
        </React.Fragment>
      </Col>
    ));

  return (
    <BaseLayout title='Liam Nguyen - Learn About My Journey'>
      <BasePage title='Portfolios' customClassName='portfolio-page'>
        <Row>{renderPost(portfoliosData)}</Row>
      </BasePage>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  // let posts = [];

  // try {
  //   const res = await axios.get('./files/metadata.json');
  //   console.log(res);
  //   posts = res.data;
  // } catch (e) {
  //   console.error(e);
  // }

  // return { posts: posts.slice(0, 10) };
  return { portfoliosData };
};

export default Portfolios;
