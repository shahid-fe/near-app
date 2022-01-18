import { COLORS, FONT_SIZE } from './../../styles/utils/index';
import { Button } from 'antd';
import styled from 'styled-components';
import { PrimaryButtonStyledType } from './PrimayButton.types';



export const PrimaryButtonStyled = styled(Button)`
  background-color: ${(props: PrimaryButtonStyledType) => props.background ? props.background : COLORS.accent_2};
  font-size: ${FONT_SIZE.large};
  color: ${COLORS.white};
  font-weight: 600;

  svg {
    position: relative;
    top: 2px;
    margin-left: 4px;
  }

  &:disabled {
    background-color: ${COLORS.text_500};
  }
`;
