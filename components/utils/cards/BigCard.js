import { BigCardContainer } from '../../../styles/home.styles';
import BaseAvatar from '../avatars/BaseAvatar';
import { Text3XL, TextXS } from '../typography/Typography';

const BigCard = ({ title, figures, avatar }) => {
  return (
    <BigCardContainer>
      <div className="title-container">
        <div className="title">
          <TextXS>{title}</TextXS>
        </div>
      </div>
      <div className="figures">
        <Text3XL>{figures}</Text3XL>
      </div>
      {avatar && (
        <div className="experts-avatars">
          <BaseAvatar />
          <BaseAvatar />
          <BaseAvatar />
        </div>
      )}
    </BigCardContainer>
  );
};

export default BigCard;
