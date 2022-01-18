import { COLORS } from './../../styles/utils/index';
import styled from 'styled-components';

export const SignupStyled = styled.div`
  position: absolute;
  top: 50px;
  height: calc(100% - 50px);
  margin: 0 auto 0 auto;

  .btns {
    display: flex;
    justify-content: center;
    margin: 21px 0 26px 0px;

    .btn-not-selected {
      border: none;
    }
  }

  .input {
    margin-bottom: 20px;
  }

  .container {
    margin: 20px 0 24px 0;
  }

  .center-text {
    max-width: 80%;
    margin: auto;
  }

  hr {
    margin: 17px auto 24px auto;
    max-width: 90%;
    color: ${COLORS.text_600};
  }

  .login-btn{
    margin-top: 10px;
  }
`;
