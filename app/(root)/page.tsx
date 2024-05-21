import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Ubaid', lastName: 'Ullah', email: 'contact@jsmastery.pro'};

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficienly."
          />

          <TotalBalanceBox 
            accounts={[]}  
            totalBanks={1}
            totalCurrentBalance={12500.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.5},{currentBalance: 500.3}]}
      />
    </section>
  )
}

export default Home