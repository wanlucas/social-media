import React, { useContext, useEffect } from 'react';
import PostCard from '../components/PostCard';
import { GlobalContext } from '../context/GlobalProvider';

import './Feed.css';

export default function Feed() {
  const { posts: { feed }, getFeed } = useContext(GlobalContext);

  useEffect(() => getFeed(), []);

  return (
    <div className="feed">
      {feed.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}