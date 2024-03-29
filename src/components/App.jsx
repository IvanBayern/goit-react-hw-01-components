import user from '../data/user.json';
import friends from '../data/friends.json';
import data from '../data/data.json';
import transactions from '../data/transactions.json';


import { Profile } from './Profile/Profile'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';





export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

       <TransactionHistory items={transactions} />


    </div>
  );
};



