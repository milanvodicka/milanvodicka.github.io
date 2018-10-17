import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>Who I am</h1>
    <p>Father, husband, full-stack developer, emerging leader.</p>
    <h2>My carrier</h2>
    <ul>
      <li>
        Tech Lead (Lean, Agile, Kanban, Rapid prototyping, Gatsby.js, Firebase)
        in CEAi.io
      </li>
      <li>
        Full-stack developer (JS, React, Redux, Apollo, Graphql, Scala, Sangria, Slick, PostgreSQL)
        in CEAi.io
      </li>
      <li>
        Full-stack developer (PHP, MVC, jQuery, MySQL)
        in ZlavaDna.sk
      </li>
    </ul>
    <Link to="/contact">Contact</Link>
  </Layout>
);

export default IndexPage;
