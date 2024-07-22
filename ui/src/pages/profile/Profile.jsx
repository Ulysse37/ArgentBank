import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './profile.css';
import Account from '../../components/account/Account'
import { getProfileInfo, editName } from '../../redux/actions'
function Profile() {
  
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [editingName, setEditingName] = useState(false); // state pour afficher soit le header classique soit header edit name

  useEffect(() => { 
  
    dispatch(getProfileInfo()); // affiche le nom de l'utilisateur
  }, [dispatch]);

  const toggleEditName = () => { // au clic sur bouton edit name on bascule sur l'affichage du form
    setEditingName(true);
  };

  const cancelEditName = () => { // au clic sur bouton cancel on bascule sur affichage du header classique
    setEditingName(false);
  };

  const saveEditName = async (e) => {
    const newFirstName = document.getElementById('firstName').value;
    const newLastName = document.getElementById('lastName').value;
    dispatch(editName({ firstName: newFirstName, lastName: newLastName }));
    setEditingName(false);
  }

  return (
    <main className="bg-dark main-profile">
      {!editingName ? (
        <header className="header">
          <h1 className='profile-title'>Welcome back<br />{user ? `${user.firstName} ${user.lastName}` : ''} !</h1>
          <button className="edit-button" onClick={toggleEditName}>Edit Name</button>
        </header>
      ) : (
        <header className="header">
          <h1 className='profile-title'>Welcome back</h1>
          <form>
            <label aria-label='First Name'></label>
            <input
            type="text"
            className="edit-input"
            id="firstName"
            defaultValue={user.firstName}/>
            <label aria-label='Last Name'></label>
            <input
            type="text"
            className="edit-input"
            id="lastName"
            defaultValue={user.lastName}/>
          </form>
          <fieldset className="edit-fieldset">
            <input type="submit" 
            className="edit-button" 
            onClick={saveEditName} 
            value={"Save"}/>
            <input type="button" 
            className="edit-button" 
            onClick={cancelEditName} 
            value={"Cancel"}/>
          </fieldset>
        </header>
      )}
      
      <h2 className="sr-only">Accounts</h2>
      <Account accountNumber={"(x8349)"} balance={"$2,082.79"} />
      <Account accountNumber={"(x6712)"} balance={"$10,928.42"} />
      <Account accountNumber={"(x8349)"} balance={"$184.30"} />
    </main>
  );
}

export default Profile;
