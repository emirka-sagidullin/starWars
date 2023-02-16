import React from 'react';

const Postlist = ({ fetchPosts }) => {
  return (
    <div>
      <form onSubmit={fetchPosts}>
        <button type="submit">eura</button>
      </form>
    </div>
  );
};

export default Postlist;
