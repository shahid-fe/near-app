import styled from "styled-components";
import { COLORS } from "../../styles/utils";

export const PinConfirmationStyled = styled.div`
    height: calc(100% - 50px);
    top: 50px;
    position: absolute;
    width: 100%;

    .continue-btn {
        margin: 20px 0;
    }

    hr {
    margin: 17px auto 24px auto;
    max-width: 90%;
    color: ${COLORS.text_600};
  }

`