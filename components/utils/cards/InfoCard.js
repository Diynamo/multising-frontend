import { InfoCardContainer } from '../../../styles/home.styles';
import VoteBtn from '../buttons/VoteBtn';
import MediumCard from './MediumCard';

const InfoCard = () => {
  return (
    <InfoCardContainer>
      <div className="card-wrapper">
        <MediumCard
          title={'Total Funds Withdrawn'}
          names={'USD 500,000'}
          isHistory={true}
        />
        <MediumCard title={'Initiated by'} names={'Electrichain'} />
        <MediumCard title={'Voted by'} />
        <MediumCard
          title={'Number of votes'}
          figures={100}
          totalVotes={110}
          requiredVotes={200}
        />
        <MediumCard title={'Votes required to pass'} figures={200} />
      </div>
      <VoteBtn />
    </InfoCardContainer>
  );
};

export default InfoCard;
