export const logIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      const token = data.body.token;

      if (response.ok) {
        console.log('Response is OK:', response);
        localStorage.setItem('token', token); // Ajout d'un localStorage pour gérer le login
        sessionStorage.setItem('token', data.token); // Ajout d'un sessionStorage pour gérer persistance du login
        dispatch({ type: 'LOGIN_SUCCESS', payload: token });

      } else {
        console.log('Response is not OK:', response);
        dispatch({ type: 'LOGIN_FAILURE' });
      }

    } catch (error) {
      console.log('Error:', error);
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
};

export const logOut = () => {
  return (dispatch) =>  {
    try {
    localStorage.removeItem('token'); // suppression des tokens pour la déconnexion
    sessionStorage.removeItem('token');
    console.log('Log out action');
    dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.log('Error lors du logOut', error);
    }
  };
};

