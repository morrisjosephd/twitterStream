import React from 'react';

const styles = {
  margin: '5px',
  padding: '10px',
  backgroundColor: 'black',
  color: 'white',
  listStyleType: 'none',
};

export default ({tweet}) => {
  return (
    <li style={styles}>{tweet}</li>
  );
};