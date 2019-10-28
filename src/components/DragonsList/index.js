import React from 'react';
import * as styles from './style';
import DragonsListItem from '../DragonListItem';
import Loader from '../Loader';

const DragonsList = ({ dragons, error, isLoading, isLoadingDelete }) => {
  if (isLoading) return <Loader />;
  if (error) return error;
  return (
    <>
      <styles.List>
        {dragons.map(dragon => (
          <DragonsListItem
            key={dragon.id}
            dragon={dragon}
          />
        ))}
      </styles.List>
      {isLoadingDelete && (
        <Loader fixed />
      )}
    </>
  );
};

export default DragonsList;
