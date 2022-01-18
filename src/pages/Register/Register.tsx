import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateStep } from '../../store/auth';
import Signup from '../Signup';
import { UserSignupType } from './Register.types';
import PinConfirmation from '../PinConfirmation';

const Register = (): JSX.Element => {
  const [userInfo, setUserInfo] = useState<UserSignupType>({ isEmailType: false, content: '' });
  const { stepNo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const onContinueClick = useCallback((user: UserSignupType) => {
    setUserInfo({ ...user });
    dispatch(updateStep(2));
  }, [dispatch]);

  const onPinSubmit = useCallback((pin: string) => {}, []);
  return stepNo === 1 ? (
    <Signup OnContinueClick={onContinueClick} />
  ) : (
    <PinConfirmation onSubmit={onPinSubmit} confirmationModeContent={userInfo.content} isEmailType={userInfo.isEmailType} />
  );
};

export default Register;
