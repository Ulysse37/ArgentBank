import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './profile.css';
import Account from '../../components/account/Account'
import { getProfileInfo } from '../../redux/actions'
function Profile() {
  const { firstName, lastName } = useSelector(state => state.login.user);
  const dispatch = useDispatch();

  const [displayName, setDisplayName] = useState(`${firstName} ${lastName}`);

  useEffect(() => { // affiche le nom de l'utilisateur
    dispatch(getProfileInfo());
  }, [dispatch]);

  const handleEditName = () => {
    const newDisplayName = prompt("Enter your new name:");
    if (newDisplayName) {
      // Si utilisateur saisit un nouveau nom
      setDisplayName(newDisplayName);// met à jour état local displayName avec le nouveau nom
    }
  };

  return (
    <main className="main bg-dark main-profile">
      <div className="header">
        <h1 className='profile-title'>Welcome back<br />{/* {firstName} {lastName} */} {displayName}!</h1>
        <button className="edit-button" onClick={handleEditName}>Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account accountNumber={"(x8349)"} balance={"$2,082.79"} />
      <Account accountNumber={"(x6712)"} balance={"$10,928.42"} />
      <Account accountNumber={"(x8349)"} balance={"$184.30"} />
    </main>
  );
}

export default Profile;
