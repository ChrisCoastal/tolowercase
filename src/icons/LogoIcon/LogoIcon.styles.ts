import styled from '@emotion/styled';

export const Spinner = styled.div`
  padding: 0;
  margin: 0;
  height: 24px;
  .svg {
    /* width: 1.6rem; */
    /* height: 1.6rem; */
    border-radius: 6px;
    backface-visibility: visible;
    animation-name: flip;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.39, 0.15, 0.26, 1);
    @keyframes flip {
      0%,
      100% {
        transform: rotateY(0deg) rotateX(0deg);
        background-color: rgba(26, 85, 234, 0.3);
      }
      18% {
        transform: rotateY(0deg) rotateX(0deg);
        background-color: rgba(26, 85, 234, 0.3);
      }
      25% {
        transform: rotateY(1260deg) rotateX(0deg);
        background-color: rgba(101, 238, 170, 0.3);
      }
      43% {
        transform: rotateY(1260deg) rotateX(0deg);
        background-color: rgba(101, 238, 170, 0.3);
      }
      50% {
        transform: rotateY(1260deg) rotateX(-1260deg);
        background-color: rgba(249, 173, 7, 0.3);
      }
      68% {
        transform: rotateY(1260deg) rotateX(-1260deg);
        background-color: rgba(249, 173, 7, 0.3);
      }
      75% {
        transform: rotateY(0deg) rotateX(-1260deg);
        background-color: rgba(243, 39, 36, 0.3);
      }
      93% {
        transform: rotateY(0deg) rotateX(-1260deg);
        background-color: rgba(243, 39, 36, 0.3);
      }
    }
  }
`;
