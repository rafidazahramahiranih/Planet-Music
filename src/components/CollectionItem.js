import React, { useState } from 'react';

const CollectionItem = ({ collection, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCollection, setEditedCollection] = useState(collection);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCollection(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedCollection);
    setIsEditing(false);
  };

  return (
    <div className="collection-item">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label htmlFor={`title-${collection.id}`}>Title</label>
            <input
              id={`title-${collection.id}`}
              type="text"
              name="title"
              placeholder="Title"
              value={editedCollection.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`artist-${collection.id}`}>Artist</label>
            <input
              id={`artist-${collection.id}`}
              type="text"
              name="artist"
              placeholder="Artist"
              value={editedCollection.artist}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <span>{collection.title} by {collection.artist}</span>
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(collection.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CollectionItem;
