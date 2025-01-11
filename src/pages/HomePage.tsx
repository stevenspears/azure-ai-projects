import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const projects = [
    { name: 'Chatbot', path: '/chatbot' },
    { name: 'News Recommendation', path: '/news' },
    { name: 'Real-Time Translation', path: '/translation' },
    { name: 'Document Scanner', path: '/scanner' },
    { name: 'Sentiment Dashboard', path: '/sentiment-dashboard' },
    { name: 'Image Recognition', path: '/image-recognition' },
    { name: 'Custom Search Engine', path: '/search-engine' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Azure AI Project Hub</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.path} style={{ margin: '1rem 0' }}>
            <Link to={project.path} style={{ textDecoration: 'none', color: 'blue' }}>
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
