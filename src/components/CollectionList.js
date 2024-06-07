import React from 'react';
import CollectionItem from './CollectionItem';

const CollectionList = ({ collections, onDelete, onUpdateCollection }) => {
  return (
    <div className="collection-list">
      <h2>Music Playlist</h2>
      <div className="collections">
        {collections.map((collection, index) => (
          <CollectionItem
            key={index}
            collection={collection}
            onDelete={onDelete}
            onUpdate={onUpdateCollection}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
