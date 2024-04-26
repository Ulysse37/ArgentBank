import './profile.css';
import Account from '../../components/account/Account'

function Profile() {

  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <Account accountNumber={"(x8349)"} balance={"$2,082.79"} />
      <Account accountNumber={"(x6712)"} balance={"$10,928.42"} />
      <Account accountNumber={"(x8349)"} balance={"$184.30"} />
    </main>
  );
}

export default Profile;
