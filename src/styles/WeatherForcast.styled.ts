import styled from "styled-components";

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  text-align: center;
`;

export const Item = styled.div`
  padding: 24px;
  background: #fff;
  border-radius: 20px;

  .weather-img {
    display: block;
    width: 80px;
    margin: 16px auto 24px;
  }

  p {
    font-size: 12px;
    color: #777;
    font-weight: 600;
  }
`;

export const Temp = styled.div`
  font-size: 1.25em;
  font-weight: 600;

  span {
    margin-left: 0.25em;
    color: #b8b8b8;
  }
`;