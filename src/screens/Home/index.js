import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import { getDragons } from '../../store/dragons/actions';
import DragonsList from '../../components/DragonsList';
import * as styles from './style';

const Home = () => {
  const dispatch = useDispatch();
  const { list, isLoading, isLoadingDelete, error } = useSelector(
    state => state.dragons
  );
  useEffect(() => {
    dispatch(getDragons());
  }, [dispatch]);

  return (
    <PageContainer>
      <styles.HeaderList>
        <Typography variant="h3" gutterBottom>
          Lista de Dragões
        </Typography>
        <Link to="/create_dragon">
          <CreateIcon color="primary" style={{ width: 30, height: 30 }} />
        </Link>
      </styles.HeaderList>
      <DragonsList
        dragons={list}
        isLoading={isLoading}
        isLoadingDelete={isLoadingDelete}
        error={error}
      />
    </PageContainer>
  );
};

export default Home;
