import { TopCardsContainer } from '../../../styles/home.styles';
import AddIcon from '../icons/AddIcon';
import { Text2XS, TextXL } from '../typography/Typography';
import BigCard from './BigCard';
import SmallCard from './SmallCard';

const TopCards = () => {
  return (
    <TopCardsContainer>
      <div className="top-card-left">
        <BigCard title={'No of DAO members'} figures={50} avatar={true} />
        <BigCard title={'No of Transactions'} figures={100} />
      </div>
      <div className="top-card-right">
        <div className="right-card-title">
          <TextXL>Assets</TextXL>
        </div>

        <div className="assets-container">
          <div className="assets-card-wrapper">
            <SmallCard currency={'Ethereum'} figures={50} />
            <SmallCard currency={'Matic'} figures={100} />
          </div>
          <div className="add-icon-container">
            <AddIcon />
            <div style={{ color: '#848484' }}>
              <Text2XS>Add Asset</Text2XS>
            </div>
          </div>
        </div>
      </div>
    </TopCardsContainer>
  );
};

export default TopCards;
