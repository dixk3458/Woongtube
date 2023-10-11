import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  let { keyword } = useParams();
  console.log(keyword);
  return <div>{keyword}</div>;
}
