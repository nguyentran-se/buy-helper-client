import React from 'react';
import { useParams } from 'react-router-dom';
const Cate = () => {
  const { slug } = useParams();
  return <div>Category: {slug}</div>;
};

export default Cate;
