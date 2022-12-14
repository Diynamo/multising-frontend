import styled from 'styled-components';

function EthereumIcon() {
  const StyledIconBtn = styled.div`
    padding: 0;
    border-radius: 50%;
  `;

  return (
    <StyledIconBtn>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#C8C8C8"
      >
        <path
          fill="#fff"
          d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z"
        />
        <path
          fill="#343434"
          d="m24.038 9.6-.193.656v19.039l.193.193 8.837-5.224L24.038 9.6Z"
        />
        <path fill="#8C8C8C" d="M24.038 9.6 15.2 24.264l8.838 5.224V9.6Z" />
        <path
          fill="#3C3C3B"
          d="m24.038 31.161-.11.133v6.782l.11.318L32.88 25.94l-8.842 5.221Z"
        />
        <path
          fill="#8C8C8C"
          d="M24.038 38.394V31.16L15.2 25.94l8.838 12.454Z"
        />
        <path fill="#141414" d="m24.038 29.488 8.837-5.224-8.837-4.017v9.24Z" />
        <path fill="#393939" d="m15.2 24.264 8.838 5.224v-9.241L15.2 24.264Z" />
      </svg>
    </StyledIconBtn>
  );
}

export default EthereumIcon;
