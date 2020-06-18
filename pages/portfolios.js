import axios from 'axios';
import { Link } from '../routes';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

const Portfolios = ({ posts }) => {
  const renderPost = posts =>
    posts.map(({ id, title, body }) => (
      <li key={id}>
        <Link route={`/portfolios/${id}`}>
          <a>{title}</a>
        </Link>
      </li>
    ));

  return (
    <BaseLayout>
      <BasePage>
        <h1>I'm in portfolios page</h1>
        <ul>{renderPost(posts)}</ul>
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
