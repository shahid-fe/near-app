import { SimpleInputStyled } from './SimpleInput.styles';
import { SimpleIputType } from './SimpleInput.types';

const SimpleInput = ({ onChange, placeholder,...props }: SimpleIputType): JSX.Element => {
  return <SimpleInputStyled {...props} onChange={onChange} placeholder={placeholder} />;
};

export default SimpleInput;
