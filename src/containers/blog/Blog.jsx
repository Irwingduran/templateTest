import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog03, blog04 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Están ocurriendo muchas cosas, <br /> Estamos escribiendo sobre ello.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Abril 26, 2024" text="La centralización de la aplicación y la gestión de usuarios en el servidor. Exploremos cómo es..." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog04} date="Abril 26, 2024" text="La centralización de la aplicación y la gestión de usuarios en el servidor. Exploremos cómo es..." />
        <Article imgUrl={blog03} date="Abril 26, 2024" text="La centralización de la aplicación y la gestión de usuarios en el servidor. Exploremos cómo es..." />
        <Article imgUrl={blog04} date="Abril 26, 2024" text="La centralización de la aplicación y la gestión de usuarios en el servidor. Exploremos cómo es..." />
        <Article imgUrl={blog03} date="Abril 26, 2024" text="La centralización de la aplicación y la gestión de usuarios en el servidor. Exploremos cómo es..." />
      </div>
    </div>
  </div>
);

export default Blog;
