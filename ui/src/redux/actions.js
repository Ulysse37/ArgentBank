export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Response is OK:', response);
        const data = await response.json();
        localStorage.setItem('token', data.token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: data.token });

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
    localStorage.removeItem('token');
    console.log('Log out action');
    dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.log('Error lors du logOut', error);
    }
  };
};