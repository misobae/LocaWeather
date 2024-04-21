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
  width: 80%;
  max-width: 160px;
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
  }

  @media ${device.laptop} {
    width: 120px;
  }

  @media ${device.mobile} {
    width: 100px;
  }
`;

export const CurrentTemp = styled.div`
  height: 72px;
  margin-top: 2em;

  strong {
    font-size: 3.75em;
    font-weight: 600;
  }
  span {
    font-size: 1.75em;
    vertical-align: top;
  }
`;

export const CurrentDate = styled.div`
  margin-top: 1em;
  font-size: 14px;
`;

export const CurrentCity = styled.div`
  height: 30px;
  font-size: 1.5em;
  font-weight: 600;
  margin-top: 0.35em;
`;

export const CurrentInfo = styled.div`
  margin-top: 48px;
  padding-top: 30px;
  border-top: 1px solid #ddd;
  text-align: left;
  @media ${device.laptop} {
    margin-top: 32px;
    padding-top: 24px;
  }
`;

export const CurrentInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.color.gry};

  &:not(:last-child) {
    margin-bottom: 1em;
  }
  .icon--feelslike {
    width: 34px;
    margin: 0 8px;
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
  }
`;