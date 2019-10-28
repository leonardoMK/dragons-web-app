import { saveSessionToken, logoutSession, isLogged } from '../../helpers/auth';

describe('auth helper tests', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('Should save sessionToken', () => {
    const response = saveSessionToken();
    expect(typeof response).toEqual('number');
    expect(localStorage.getItem('sessionToken')).toEqual(String(response));
  });

  it('Should clear sessionToken', () => {
    const response = saveSessionToken();
    expect(typeof response).toEqual('number');
    expect(localStorage.getItem('sessionToken')).toEqual(String(response));
    logoutSession();
    expect(localStorage.getItem('sessionToken')).toBeNull();
  });

  it('Should return islogged true after save session', () => {
    expect(isLogged()).toBe(false);
    saveSessionToken();
    expect(isLogged()).toBe(true);
  });

  it('Should return islogged false after logout', () => {
    expect(isLogged()).toBe(false);
    saveSessionToken();
    expect(isLogged()).toBe(true);
    logoutSession();
    expect(isLogged()).toBe(false);
  });
});
