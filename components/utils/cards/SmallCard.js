import { SmallCardContainer } from '../../../styles/home.styles';
import PolygonIcon from '../icons/PolygonIcon';
import { Text2XL, TextBg } from '../typography/Typography';

const SmallCard = ({ currency, figures }) => {
  return (
    <SmallCardContainer>
      <PolygonIcon />
      <div className="currency-text">
        <TextBg>{currency}</TextBg>
      </div>
      <div className="figures-text">
        <Text2XL>{figures}</Text2XL>
      </div>
    </SmallCardContainer>
  );
};

export default SmallCard;
