import React from 'react';

interface HTMLRendererProps {
  html: string;
}

const HTMLRenderer: React.FC<HTMLRendererProps> = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HTMLRenderer;
