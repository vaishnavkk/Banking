import RightSidebar from '@/components/RightSidebar';
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';



const Home = async() => {
    const loggedIn = await getLoggedInUser();
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.name || 'Guest'}
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