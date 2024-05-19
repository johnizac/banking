import React from 'react'
import HeaderBox from '@/components/ui/headerbox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'

import AnimatedCounter from '@/components/ui/AnimatedCounter'
import RightSideBar from '@/components/ui/RightSideBar'

const Home = () => {
  const loggedIn = { firstName: 'John', lastName: 'Isaac', email: 'john@bankingapp.com' }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transcactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1002.89}
          />


        </header>
        RECENT TRANSACTIONS

      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks=
        {
          [
            { currentBalance: 123.58 },
            { currentBalance: 345.5 }
          ]
        }
      />

    </section>
  )
}

export default Home