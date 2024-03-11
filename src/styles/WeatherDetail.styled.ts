import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "./media";

export const Wrap = styled(motion.div)`
  flex: 80% 0 1;
`;

export const Title = styled.h2`
  margin-top: 0.5em;
  margin-bottom: 1em;
  font-size: 1.25em;
  font-weight: 700;

  &:not(:first-child) {
    margin-top: 2em;
  }

  @media ${device.mobile} {
    margin-top: 48px;
    &:not(:first-child) {
      margin-top: 48px;
    }
  }
`;