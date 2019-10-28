import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Arrow from '@material-ui/icons/ArrowForward';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/DeleteForever';
import * as styles from './style';
import { deleteDragon, editDragon } from '../../store/dragons/actions';
import InlineFormEdit from '../InlineFormEdit';

const DragonsListItem = ({ dragon }) => {
  const dispatch = useDispatch();
  const { isLoadingEdit } = useSelector(state => state.dragons)
  const [edit, setEdit] = useState(false);
  const onRemoveDragon = async () => {
    if (
      window.confirm(`Você deseja realmente excluir o dragão ${dragon.name}`)
    ) {
      dispatch(deleteDragon(dragon.id));
    }
  };

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    await dispatch(editDragon({...dragon, ...values}));
    setSubmitting(false);
    setEdit(false);
  }

  return (
    <styles.Item>
      <styles.LeftInfo>
        <styles.Actions>
          <EditIcon
            color="primary"
            onClick={() => setEdit(!edit)}
            style={{ width: '15px', height: '15px', cursor: 'pointer' }}
          />
          <RemoveIcon
            color="error"
            onClick={onRemoveDragon}
            style={{ width: '15px', height: '15px', cursor: 'pointer' }}
          />
        </styles.Actions>
        <styles.Info>
          {edit ? (
            <>
              <InlineFormEdit
                isLoadingEdit={isLoadingEdit}
                dragon={{ type: dragon.type, name: dragon.name }}
                onSubmit={onSubmit}
              />
            </>
          ) : (
            <>
              <styles.DragonType>{dragon.type}</styles.DragonType>
              <styles.DragonName>{dragon.name}</styles.DragonName>
            </>
          )}
        </styles.Info>
      </styles.LeftInfo>
      <Link to={`/${dragon.id}`}>
        <Arrow color="primary" />
      </Link>
    </styles.Item>
  );
};

export default DragonsListItem;
