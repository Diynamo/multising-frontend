import { DashboardHeaderContainer } from '../../styles/home.styles';
import { Text2XL, TextBase } from './typography/Typography';

const DashboardHeader = () => {
  return (
    <DashboardHeaderContainer>
      <div>
        <Text2XL>Dashboard</Text2XL>
        <div className="greeting">
          <TextBase>Hello, good day</TextBase>
        </div>
      </div>

      <button className="connect-btn">Connect Wallet</button>
    </DashboardHeaderContainer>
  );
};

export default DashboardHeader;
