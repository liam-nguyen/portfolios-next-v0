import BaseLayout from '../../components/layouts/BaseLayout';
import axios from 'axios';

const Portfolio = ({ portfolio }) => {
  console.log(portfolio);
  return (
    <div>
      <BaseLayout>
        <h1>I'm Portfolios page</h1>
        <h2>{portfolio.body}</h2>
      </BaseLayout>
    </div>
  );
};

Portfolio.getInitialProps = async ({ query }) => {
  const { id } = query;
  let post = {};

  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );

    post = res.data;
  } catch (e) {
    console.error(e);
  }

  return { portfolio: post };
};

export default Portfolio;
