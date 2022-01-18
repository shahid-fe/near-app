import { useCallback, useState } from 'react';
import { SignupStyled } from './Signup.styles';
import SimpleInput from '../../components/SimpleInput';
import PrimaryButton from '../../components/PrimaryButton';
import { COLORS } from '../../styles/utils';

export const Signup = (): JSX.Element => {
  const [isEmailTab, setEmailTab] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const onTabClick = useCallback((isEamil: boolean) => {
    setEmailTab(isEamil);
  }, []);

  const onEmailChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const onPhoneChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPhone(e.target.value);
  }, []);

  return (
    <SignupStyled>
      <div className="btns">
        <button
          className={`btn ${isEmailTab ? '' : 'btn-not-selected'}`}
          onClick={() => {
            onTabClick(true);
          }}
        >
          Email
        </button>
        <button
          className={`btn ${isEmailTab ? 'btn-not-selected' : ''}`}
          onClick={() => {
            onTabClick(false);
          }}
        >
          Phone
        </button>
      </div>
      {isEmailTab ? (
        <SimpleInput placeholder="johndoe@gmail.com" value={email} onChange={onEmailChange} />
      ) : (
        <SimpleInput placeholder="Ex (337) 378 8383" value={phone} onChange={onPhoneChange} />
      )}
      <div className="container flex">
        <PrimaryButton disabled={isEmailTab ? !email : !phone}>Continue</PrimaryButton>
      </div>
      <p className="center-text">
        by clicking continue you must agree to near labs <span className="link-text">Terms & Conditions</span> ans{' '}
        <span className="link-text">Privacy Policy</span>
      </p>
      <hr />

      <p className="center-text">Already have NEAR account?</p>
      <div className="login-btn flex">
        <PrimaryButton background={COLORS.text_200}>Log in with NEAR</PrimaryButton>
      </div>
    </SignupStyled>
  );
};

export default Signup;
