import React, { useState } from 'react';

const AddCollectionForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !artist) return;
    const newCollection = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      artist
    };
    onAdd(newCollection);
    setTitle('');
    setArtist('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button type="submit" style={{ alignSelf: 'flex-start' }}>Add</button>
    </form>
  );
}

export default AddCollectionForm;