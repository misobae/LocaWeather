import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;
  background-color: ${props => props.theme.color.ltGry};
  padding: 4%;
  font-size: 16px;
`;

const loading = keyframes`
  100% {box-shadow: 0 0 0 30px #000}
`;
export const Loader = styled.div`
  width: 25px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  box-shadow: 0 0 0 0 #0004;
  animation: ${loading} 1.35s infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;