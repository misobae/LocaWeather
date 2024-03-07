import styled from "styled-components";

export const Wrap = styled.div`
  flex-basis: 25%;
  max-width: 340px;
  padding: 64px 32px;
  background: #fff;
  border-radius: 24px;
  text-align: center;
`;

export const WeatherImgWrap = styled.div`
  width: 160px;
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
  }
`;

export const CurrentTemp = styled.div`
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

  span {
    color: ${props => props.theme.color.gry};
    font-weight: 500;
  }
`;

export const CurrentCity = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  margin-top: 0.35em;
`;

export const CurrentInfo = styled.div`
  margin-top: 3.5em;
  padding-top: 2em;
  border-top: 1px solid #ddd;
  text-align: left;
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
`;