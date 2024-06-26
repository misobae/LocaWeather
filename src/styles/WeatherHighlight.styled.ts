import styled from "styled-components";
import { device } from "./media";

export const Wrap = styled.div`
  display: flex;
  padding: 24px 8px;
  background: #fff;
  border-radius: 20px;
  @media ${device.tablet} {
    flex-wrap: wrap;
    padding: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 110px;
  padding: 0 20px;

  @media ${device.tablet} {
    padding: 0;
  }
`;

export const Item = styled.div`
  flex: 25% 0 1;

  &:not(:last-child) > ${Content} {
    border-right: 1px solid #dfdfdf;
  }

  @media ${device.tablet} {
    flex: 50% 0 0;
    padding: 24px;

    &:nth-child(1), &:nth-child(2) {
      border-bottom: 1px solid #dfdfdf;
    }
    &:nth-child(odd) {
      border-right: 1px solid #dfdfdf;
    }

    &:not(:last-child) > ${Content} {
      border-right: 0;
    }
  }

  @media ${device.mobile} {
    flex: 100% 0 0;
    padding: 24px 0;

    &:nth-child(odd) {
      border-right: 0;
      border-bottom: 1px solid #dfdfdf;
    }
  }
`;

export const ContentChart = styled.div`
  position: relative;
  width: 160px;
  height: 80px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
    border: 20px solid #ddd;
    border-bottom: none;
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
  }
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
  }
`;
export const Chart = styled.div<{ $uvi: number }>`
  transform: rotate(${(props) => (props.$uvi / 11) * 180}deg);
  transition: .55s;
  z-index: 4;
  position: absolute;
  top: 100%;
  left: 0;
  width: inherit;
  height: inherit;
  border: 20px solid;
  border-top: none;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  transform-origin: 50% 0;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;
export const ChartData = styled.span`
  position: absolute;
  z-index: 5;
  bottom: 1px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  font-size: 2em;
  text-align: center;

  &::before {
    content: '0';
    position: absolute;
    left: 8px;
    bottom: 1px;
    color: #fff;
    font-size: 12px;
  }
  &::after {
    content: '11';
    position: absolute;
    right: 5px;
    bottom: 0;
    color: #fff;
    font-size: 12px;
  }
`;

export const ContentSun = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const SunImgWrap = styled.div`
  width: 40px;
  img {
    display: block;
    width: 100%;
  }
`;
export const SunTime = styled.span`
  margin-left: 1em;
  font-size: 0.95em;
`;

export const ContentCommon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .icon--wind {
    width: 40px;
  }
`;
export const CommonNumber = styled.span`
  font-size: 2.25em;
  span {
    font-size: 0.5em;
    vertical-align: super;
  }
`;

export const Range = styled.div`
  position: relative;
  width: 24px;
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 24px;
`;
export const RangeCircle = styled.span<{ $humidity: number }>`
  position: absolute;
  left: 50%;
  bottom: calc(4px + ${(props) => (props.$humidity / 100) * 74}px);
  width: 16px;
  height: 16px;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  transition: .55s;
`;

export const Title = styled.h3`
  display: block;
  margin-bottom: 1.75em;
  padding: 0 1em;
  font-size: 13px;
  font-weight: 700;
  color: ${props => props.theme.color.gry};

  @media ${device.tablet} {
    padding: 0;
  }
`;
