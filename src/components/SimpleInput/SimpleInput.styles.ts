import { FONT_SIZE, COLORS } from './../../styles/utils/index';
import { Input } from "antd";
import styled from "styled-components";

export const SimpleInputStyled = styled(Input)`
    display: block;
    margin: auto;
    padding: 12px 20px;
    font-size: ${FONT_SIZE.large};
    border-radius: 8px;
    border: 1px solid ${COLORS.text_800};
    outline: none;
    &:active, &:focus-within {
        border: 2px solid ${COLORS.accent_2};
    }
`