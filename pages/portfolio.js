import axios from 'axios';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

const Portfolio = ({ portfolio }) => {
  const { title, body, id } = portfolio;

  return (
    <div>
      <BaseLayout>
        <BasePage>
          <h1>I'm Portfolio page</h1>
          <p>Title: {title}</p>
          <p>Body: {body}</p>
        </BasePage>
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
