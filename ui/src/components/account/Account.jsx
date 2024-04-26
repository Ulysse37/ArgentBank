import './account.css';

function Account({ accountNumber, balance}) {

  return (
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">Argent Bank Checking {accountNumber}</h3>
        <p class="account-amount">{balance}</p>
        <p class="account-amount-description">Available Balance</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default Account;
