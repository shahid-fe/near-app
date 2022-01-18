import { FONT_SIZE, COLORS } from './../../styles/utils/index';
import styled from "styled-components";

export const HeaderStyled = styled.div`
  background: #F5F5F5;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0px;
  display: inline-flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  font-size: ${FONT_SIZE.large};
  font-weight: bold;
  font-size: 16px;

  .home {
    color: ${COLORS.accent};
  }

  .title {
    font-size: ${FONT_SIZE.large};
  }

`