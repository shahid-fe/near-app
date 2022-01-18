import { ArrowRight } from "../../assets";
import { PrimaryButtonStyled } from "./PrimaryButton.styles";
import {PrimaryButtonType} from "./PrimayButton.types";


const PrimaryButton = ({onClick, className, disabled, children, background}: PrimaryButtonType): JSX.Element => {
    return <PrimaryButtonStyled 
        disabled={disabled}
        background={background}
        className={className}
        onClick={onClick}
    >{children} <ArrowRight /></PrimaryButtonStyled>

};

export default PrimaryButton;