import styled from 'styled-components';

export const HomePageContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  background: rgba(14, 17, 21, 1);
  padding: 2rem 1.5rem;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopCardsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  // display: felx;
  margin: 3rem 0;
  height: 12.5rem;
  gap: 2rem;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  .top-card-left {
    display: flex;
    gap: 1rem;
  }

  .top-card-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .right-card-title {
    color: #fff;
    font-weight: 600;
  }

  .assets-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .assets-card-wrapper {
    display: flex;
    gap: 1rem;
  }
`;

export const DashboardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  .greeting {
    color: #8c8e8f;
    margin-top: 0.5rem;
  }

  .connect-btn {
    cursor: pointer;
    height: 3rem;
    width: 10.5rem;
    background: linear-gradient(
      95.25deg,
      #88a7ed 3.05%,
      #8fcdda 55.63%,
      #f1c58d 103.41%
    );
    border: none;
    border-radius: 10px;
    color: #20232a;
  }
`;

export const BigCardContainer = styled.div`
  height: 100%;
  width: 290px;
  background: rgba(17, 24, 29, 1);
  border: none;
  border-radius: 12px;
  color: #e9dbaa;
  padding: 1rem;

  .title-container {
    display: flex;
    align-items: flex-start;
  }

  .title {
    color: #b2e9aa;
    background: rgba(56, 255, 23, 0.03);
    border: none;
    border-radius: 5px;
    margin-bottom: 2rem;
    font-weight: 600;
    padding: 0 1rem;
  }

  .figures {
    font-weight: 600;
  }

  .experts-avatars {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 0.5rem;
    margin-top: 2rem;
  }

  .avatar {
    background: gray;
    margin: 0px -4px;
  }

  .add-icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SmallCardContainer = styled.div`
  height: 100%;
  width: 12.5rem;
  background: rgba(17, 24, 29, 1);
  border: none;
  border-radius: 12px;
  color: #ffffff;
  padding: 1rem;

  .currency-text {
    font-size: 1.125rem;
    color: #ffffff;
    font-weight: 600;
    margin: 0.2rem 0 0.5rem 0;
  }

  .figures-text {
    color: #9d9d9d;
  }
`;

export const MediumCardContainer = styled.div`
  height: 100%;
  width: 265px;
  background: rgba(14, 17, 21, 1);
  border: none;
  border-radius: 5px;
  color: #e9dbaa;
  padding: 1rem;

  .info-container {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .title-container {
    display: flex;
    align-items: flex-start;
  }

  .title {
    color: #b2e9aa;
    background: rgba(56, 255, 23, 0.03);
    border: none;
    border-radius: 5px;
    margin-bottom: 2rem;
    font-weight: 600;
    padding: 0 1rem;
  }

  .figures {
    font-weight: 600;
    font-size: 22px;
  }

  .history-text {
    color: #515151;
    text-decoration: underline;
    padding: 0;
    margin-top: 2rem;
    cursor: pointer;
  }

  .progress-container {
    width: 100%;
    margin-top: 1rem;
  }

  .progress-max {
    display: flex;
    justify-content: flex-end;
    padding-right: 0.5rem;
    margin-bottom: 0.5rem;
    color: #848484;
  }

  .progress-bar {
    width: 100%;
    height: 6px;
  }
`;

export const InfoCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 235px;
  background: rgba(17, 24, 29, 1);
  border: none;
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
  margin-bottom: 3rem;

  .card-wrapper {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 0.8rem;
    object-fit: cover;
    margin-bottom: 0.8rem;
    height: 100%;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const VoteBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: 100%;
  cursor: pointer;
  color: #fff;
  background: rgba(251, 231, 125, 0.03);
  border-radius: 10px;
  border: 1px solid #292d32;
  margin-left: 0.8rem;
`;

// export const BaseAvatar = styled(Avatar)`
//   cursor: pointer;
// `;
