import React, { useState } from 'react';
import ReactMini from './projects/ReactMini';

export default function Projects() {
  const [showReactMini, setShowReactMini] = useState(false);

  const handleShowMoreReactMini = () => {
    setShowReactMini(true);
  };

  return (
    <div className="bg-black py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-extrabold text-white text-center mb-12">My Projects</h2>

  {!showReactMini && (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold text-white">React Mini Projects</h2>
      <div className="mt-4">
        <img src="/src/assets/reactmini.png" alt="react mini" className="w-full sm:w-3/4 h-auto mx-auto rounded-lg" />
      </div>
      <button
        onClick={handleShowMoreReactMini}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Show More
      </button>
    </div>
  )}

  {showReactMini && <ReactMini />}
</div>

    </div>
  );
}
