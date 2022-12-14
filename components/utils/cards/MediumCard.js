import ProgressBar from '@ramonak/react-progress-bar';
import { MediumCardContainer } from '../../../styles/home.styles';
import { Text2XL, TextBg, TextXL, TextXS } from '../typography/Typography';

const MediumCard = ({
  title,
  names,
  figures,
  isHistory,
  totalVotes,
  requiredVotes,
}) => {
  return (
    <MediumCardContainer>
      <div className="info-container">
        <div className="title-container">
          <div className="title">
            <TextXS>{title}</TextXS>
          </div>
        </div>

        <div className="figures">
          {names !== undefined && <TextXL>{names}</TextXL>}
          {figures !== undefined && <Text2XL>{figures}</Text2XL>}
        </div>

        {isHistory && (
          <div className="history-text">
            <TextXS>View History</TextXS>
          </div>
        )}

        {totalVotes !== undefined && (
          <div className="progress-bar-container">
            <div className="progress-max">
              <TextBg>{`Max ${requiredVotes}`}</TextBg>
            </div>
            <ProgressBar
              completed={`${totalVotes}`}
              maxCompleted={requiredVotes}
              isLabelVisible={false}
              bgColor="#70FC8A"
              baseBgColor="#1F2325"
              height="8px"
              animateOnRender={true}
            />
          </div>
        )}
      </div>
    </MediumCardContainer>
  );
};

export default MediumCard;
