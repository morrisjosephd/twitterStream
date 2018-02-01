import React from 'react';
import uuid from 'uuid';
import Tweet from './Tweet';


export default ({tweets}) => {
  const content = tweets.map((tweet) => {
    return (
      <Tweet key={uuid()} tweet={tweet} />
    );
  });
  return (
    <ul>{content}</ul>
  );
};