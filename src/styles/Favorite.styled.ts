import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "./media";


export const Wrap = styled.div`
  position: absolute;
  top: 20px;
  right: 4%;
  display: flex;
  align-items: center;
  gap: 16px;

  @media ${device.mobile} {
    position: static;
    width: 100%;
    justify-content: space-between;
  }
`;

export const FavoriteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  background-color: #fff;
  border: 0;
  border-radius: 8px;
`;

export const FavoriteBtnHeart = styled(motion.div)`
  cursor: pointer;
`;

export const SelectBox = styled.div`
  position: relative;
  width: 180px;
  cursor: pointer;
`;

export const SelectBtn = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  padding: 4px 0;
  font-size: 16px;
  font-weight: 600;
  &::before {
    content: '►';
    margin-right: 8px;
    font-size: 12px;
    transition: .25s;
    transform: rotate(${props => props.$isOpen ? '90deg' : '0'});
  }
`;

export const OptionList = styled(motion.ul)`
  overflow-y: scroll;
  position: absolute;
  z-index: 1;
  top: 38px;
  left: 0;
  width: 100%;
  max-height: 0;
  background-color: #fff;
  border-radius: 14px;
  list-style: none;
`;

export const Option = styled.li`
  padding: 8px 16px;
  font-size: 15px;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export const NoOption = styled.li`
  padding: 8px 16px;
  font-size: 14px;
  color: ${props => props.theme.color.gry};
`;