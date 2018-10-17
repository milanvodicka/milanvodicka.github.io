import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    <h1>Contact</h1>
    <dl>
      <dt>Gmail</dt>
      <dd>vodicka.milan</dd>
      <dt>LinkedIn</dt>
      <dd><a href="https://www.linkedin.com/in/milan-vodicka/">https://www.linkedin.com/in/milan-vodicka/</a></dd>
      <dt>GitHub</dt>
      <dd><a href="https://github.com/milanvodicka">https://github.com/milanvodicka</a></dd>
    </dl>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
