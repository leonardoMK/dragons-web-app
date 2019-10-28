import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logout } from '../../store/auth/actions';
import { isLogged } from '../../helpers/auth';

const Header = ({ history, logout }) => {
  const isUserLogged = isLogged();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6">Dragons Web App</Typography>
          </Link>
          <Button
            onClick={!isUserLogged ? () => history.push('/') : logout}
            color="inherit"
          >
            {isUserLogged ? 'LOGOUT' : 'LOGIN'}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const HeaderComponent = connect(
  null,
  mapDispatchToProps
)(Header);

export default withRouter(HeaderComponent);
