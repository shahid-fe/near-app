import { useSelector } from 'react-redux';
import { HeaderStyled } from './Header.styles';
import { RootState } from '../../store';
import { CloseIcon, HomeIcon } from '../../assets';
import { HeaderContentType } from './Header.types';

const defaultHeaderContent = {
  stepNo: 1,
};

const HeaderContent = ({ stepNo }: HeaderContentType = defaultHeaderContent): JSX.Element => {
  if (stepNo === 1)
    return (
      <>
        <HomeIcon /> <span className='title home'>Home</span>page
      </>
    );
  if (stepNo === 2)
    return (
      <div className='title'>
        Verfication 
      </div>
    );
  if (stepNo === 3)
    return (
      <div>
        Create NEAR account <CloseIcon />
      </div>
    );
  if (stepNo === 4 || stepNo === 5) return <div>Secure your account</div>;
  return <div></div>;
};

export const Header = (): JSX.Element => {
  const { stepNo } = useSelector((state: RootState) => state.auth);
  return (
    <HeaderStyled>
      <HeaderContent stepNo={stepNo} />
    </HeaderStyled>
  );
};

export default Header;