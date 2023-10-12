import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoHome() {
  let { category } = useParams();
  return <div>{category}videohome</div>;
}
