import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as styles from './style';
import PageContainer from '../../components/PageContainer';
import { getDragon } from '../../store/dragons/actions';
import Loader from '../../components/Loader';
import { formatDate } from '../../helpers';

const DragonDetails = ({ match, history }) => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.dragons);
  const [dragon, setDragon] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      const data = await dispatch(getDragon(match.params.id));
      setDragon(data);
    };
    getDetails();
  }, [match, dispatch]);

  if (error) return error;
  if(!dragon || isLoading) return <Loader fixed />
  return (
    <PageContainer>
      <styles.Container>
        <styles.Id>{dragon.id}</styles.Id>
        <styles.Title>{dragon.name}</styles.Title>
        <styles.Desc>{dragon.type} - {formatDate(dragon.createdAt)}</styles.Desc>
      </styles.Container>
    </PageContainer>
  );
};

export default DragonDetails;
