import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "./media";

export const Wrap = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  height: 365px;
  text-align: center;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  border-radius: 20px;

  .weather-img {
    display: block;
    width: 56px;
    margin: 8px auto 16px;
  }

  p {
    font-size: 12px;
    color: #777;
    font-weight: 600;
  }

  @media ${device.mobile} {
    flex-direction: row;
    align-items: center;
    padding: 16px;

    .weather-img {
      width: 32px;
      margin: 0 16px 0 auto;
    }
  }
`;

export const Temp = styled.div`
  font-size: 1.25em;
  font-weight: 600;

  span {
    margin-left: 8px;
    color: #b8b8b8;
  }

  @media ${device.mobile} {
    width: 58px;
  }
`;