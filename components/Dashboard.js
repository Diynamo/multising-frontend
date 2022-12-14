import { DashboardContainer } from '../styles/home.styles';
import InfoCard from './utils/cards/InfoCard';
import TopCards from './utils/cards/TopCards';
import DashboardHeader from './utils/DashboardHeader';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardHeader />
      <TopCards />
      <InfoCard />
    </DashboardContainer>
  );
};

export default Dashboard;
