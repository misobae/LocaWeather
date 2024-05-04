import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "./media";

export const Wrap = styled(motion.div)`
  flex-basis: 20%;
  padding: 40px 32px 64px;
  background: #fff;
  border-radius: 24px;
  text-align: center;

  @media ${device.laptop} {
    padding: 40px 32px;
  }
`;

export const WeatherImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
  }

  @media ${device.laptop} {
    width: 120px;
    height: 120px;
  }

  @media ${device.mobile} {
    width: 100px;
    height: 100px;
  }
`;

export const Temp = styled.div`
  height: 72px;
  margin-top: 2em;
`;
export const TempValue = styled.span`
  font-size: 3.75em;
  font-weight: 600;
`;
export const TempDegree = styled.span`
  font-size: 1.75em;
  vertical-align: top;
`;

export const Weekday = styled.div`
  margin-top: 1em;
  font-size: 14px;
`;

export const City = styled.div`
  height: 30px;
  font-size: 1.5em;
  font-weight: 600;
  margin-top: 0.35em;
`;

export const Info = styled.div`
  margin-top: 48px;
  padding-top: 30px;
  border-top: 1px solid #ddd;
  text-align: left;
  @media ${device.laptop} {
    margin-top: 32px;
    padding-top: 24px;
  }
`;
export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;
export const InfoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  flex-shrink: 0;

  svg {
    width: 60%;
  }
`;
export const InfoTxt = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.color.gry};
`;