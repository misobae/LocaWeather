import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "./media";

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
  padding: 0 6px;
  text-align: left;

  @media ${device.laptop} {
    margin-bottom: 32px;
  }
`;

export const SearchBtn = styled.button`
  width: 16px;
  height: 16px;
  background: url(${process.env.PUBLIC_URL}/images/icon_search.svg) no-repeat center / contain;
  border: 0;
  cursor: pointer;
`;

export const Input = styled(motion.input)`
  flex: 100% 1 1;
  padding: 4px;
  border: 0;
  background-color: transparent;
  color: ${props => props.theme.color.blk};
  font-family: "Source Sans 3", sans-serif;
  font-size: 13px;
  transform-origin: left;
  
  &:focus {
    outline: 0;
  }
`;