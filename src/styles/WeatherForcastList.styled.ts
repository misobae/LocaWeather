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
export const Weekday = styled.span`
  font-size: 12px;
  color: ${props => props.theme.color.gry};
  font-weight: 600;
`;

export const TempWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  @media ${device.mobile} {
    width: 60px;
  }
`;
export const TempMax = styled.span`
  font-weight: 600;
`;
export const TempMin = styled.span`
  margin-left: 8px;
  color: ${props => props.theme.color.gry};
`;