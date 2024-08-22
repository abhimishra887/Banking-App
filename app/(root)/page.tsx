import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Abhishek', lastName: 'Mishra', email: 'abhishek42387@gmail.com'};
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transaction efficiently."
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={2450.45}
            />
          </header>

          RECENT TRANSACTION 
        </div>

        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{},{}]}
        />
      </section>
    </div>
  )
}

export default Home
