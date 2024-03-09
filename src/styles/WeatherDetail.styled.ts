import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrap = styled(motion.div)`
  flex: 75% 0 1;
`;

export const Title = styled.h2`
  margin-top: 0.5em;
  margin-bottom: 1.25em;
  font-size: 1.25em;
  font-weight: 700;

  &:not(:first-child) {
    margin-top: 2em;
  }
`;