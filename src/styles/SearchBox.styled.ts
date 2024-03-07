import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 48px;
  padding: 0 6px;
  text-align: left;
`;

export const SearchBtn = styled.button`
  width: 16px;
  height: 16px;
  background: url(${process.env.PUBLIC_URL}/images/icon_search.svg) no-repeat center / contain;
  border: 0;
`;

export const Input = styled.input`
  flex: 100% 1 1;
  padding: 4px;
  border: 0;
  color: ${props => props.theme.color.blk};
  font-family: "Source Sans 3", sans-serif;
  font-size: 13px;
  
  &:focus {
    outline: 0;
  }
`;