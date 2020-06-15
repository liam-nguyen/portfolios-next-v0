import BaseLayout from '../components/layouts/BaseLayout';

const Portfolio = ({ portfolio }) => {
  return (
    <div>
      <BaseLayout>
        <h1>I'm Portfolios page</h1>
        <h2>{portfolio}</h2>
      </BaseLayout>
    </div>
  );
};

export default Portfolio;
