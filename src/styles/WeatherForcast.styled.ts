import { motion } from "framer-motion";
import styled from "styled-components";

export const Tab = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  margin-left: 4px;
`;

export const Title = styled(motion.h3)`
  position: relative;
  cursor: pointer;
  font-size: 16px;
`;

export const TitleBar = styled(motion.span)`
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 3px;
  transform-origin: left;
  background-color: ${props => props.theme.color.blk};
`;