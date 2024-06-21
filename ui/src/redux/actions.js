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
        /* console.log('Response is OK:', response); */
        localStorage.setItem('token', token); // Ajout d'un localStorage pour gérer le login
        sessionStorage.setItem('token', data.token); // Ajout d'un sessionStorage pour gérer persistance du login
        dispatch({ type: 'LOGIN_SUCCESS', payload: token });

      } else {
        /* console.log('Response is not OK:', response); */
        dispatch({ type: 'LOGIN_FAILURE' });
      }

    } catch (error) {
      /* console.log('Error:', error); */
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
};

export const logOut = () => {
  return (dispatch) =>  {
    try {
    localStorage.removeItem('token'); // suppression des tokens pour la déconnexion
    sessionStorage.removeItem('token');
    /* console.log('Log out action'); */
    dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.log('Error lors du logOut', error);
    }
  };
};

export const getProfileInfo = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Get profile response is OK:', response);
        console.log("data body",data.body);
        dispatch({ type: 'GET_PROFILE_INFO', payload: data.body });

      } else {
        console.log('Get profile response is not OK:', response);
        dispatch({ type: 'GET_PROFILE_FAILURE' });
      }
    }
    catch (error) {
      console.log('Error:', error);
      dispatch({ type: 'GET_PROFILE_FAILURE' });
    }
  };
};
