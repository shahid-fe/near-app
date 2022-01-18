import { useState } from 'react';
import ReactCodeInput from 'react-code-input';
import { PinConfirmationFormProps } from './PinConfirmation.types';
import PrimaryButton from '../../components/PrimaryButton';
import { PinConfirmationStyled } from './PinConfirmation.styles';

const PinConfirmationForm = ({ onSubmit, isEmailType, confirmationModeContent }: PinConfirmationFormProps): JSX.Element => {
  const [values, setValues] = useState('');
  return (
    <PinConfirmationStyled>
      {isEmailType ? (
        <p className='center-text'>We've sent a 6-digit verification code to the email address <br/> <span className='link-text'>{confirmationModeContent}</span></p>
      ) : (
        <p className='center-text'>We've sent a 6-digit verification code to the phone <br/><span className='link-text'>{confirmationModeContent}</span></p>
      )}

      <p className='center-text'>Enter verification code</p>
      <div className='flex'>
        <ReactCodeInput
          type="number"
          fields={6}
          inputMode="numeric"
          name="pin-confirmation"
          value={values}
          onChange={setValues}
        />
      </div>
      <div className='continue-btn flex'>
      <PrimaryButton
        disabled={values.length !== 6}
        onClick={(): void => {
          onSubmit(values);
        }}
      >
        CONTINUE
      </PrimaryButton>
      </div>
      <hr />
      <p className='center-text'>Didn't receive your code?</p>
      <p className='center-text link-text'>Send to a different email address</p>
      <p className='center-text link-text'>Resend your code </p>
    </PinConfirmationStyled>
  );
};

export default PinConfirmationForm;
