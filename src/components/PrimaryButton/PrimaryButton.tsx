import { ArrowRight } from "../../assets";
import { PrimaryButtonStyled } from "./PrimaryButton.styles";
import {PrimaryButtonType} from "./PrimayButton.types";


const PrimaryButton = ({className, disabled, children, background}: PrimaryButtonType): JSX.Element => {
    return <PrimaryButtonStyled 
        disabled={disabled}
        background={background}
        className={className}
    >{children} <ArrowRight /></PrimaryButtonStyled>

};

export default PrimaryButton;