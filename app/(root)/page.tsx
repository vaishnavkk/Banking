import RightSidebar from '@/components/RightSidebar';
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
const Home = () => {
    const loggedIn = { firstName:'Vaishnav', lastName: 'K.K', email:'helpbyjsmastry.yt'};
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transaction efficiently"
                    />

                    <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={601.03}
                    />
                    </header>
                RECENT TRANSACTIONS    
            </div>

            <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.50},{currentBalance: 60000.50}]}
            />
        </section>
    )
}

export default Home