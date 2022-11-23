import styled from '@emotion/styled';

export const Spinner = styled.div`
  padding: 0;
  margin: 0;
  height: 30px;
  .svg {
    /* width: 1.6rem; */
    /* height: 1.6rem; */
    border-radius: 6px;
    backface-visibility: visible;
    animation-name: flip;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.7, 0.26, 0, 1);
    @keyframes flip {
      0%,
      100% {
        transform: rotateY(0deg) rotateX(0deg);
        background-color: rgba(26, 85, 234, 0.9);
      }
      15% {
        transform: rotateY(0deg) rotateX(0deg);
        background-color: rgba(26, 85, 234, 0.9);
      }
      25% {
        transform: rotateY(1260deg) rotateX(0deg);
        background-color: rgba(101, 238, 170, 0.9);
      }
      40% {
        transform: rotateY(1260deg) rotateX(0deg);
        background-color: rgba(101, 238, 170, 0.9);
      }
      50% {
        transform: rotateY(1260deg) rotateX(-1260deg);
        background-color: rgba(249, 173, 7, 0.9);
      }
      65% {
        transform: rotateY(1260deg) rotateX(-1260deg);
        background-color: rgba(249, 173, 7, 0.9);
      }
      75% {
        transform: rotateY(0deg) rotateX(-1260deg);
        background-color: rgba(243, 39, 36, 0.9);
      }
      90% {
        transform: rotateY(0deg) rotateX(-1260deg);
        background-color: rgba(243, 39, 36, 0.9);
      }
    }
  }
`;
