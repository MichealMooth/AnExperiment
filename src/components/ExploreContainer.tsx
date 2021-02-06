import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Derzeit sind keine Experimente vorhanden</strong>
      <p>Bitte Erstelle ein neues Experiment :)</p>
    </div>
  );
};

export default ExploreContainer;
