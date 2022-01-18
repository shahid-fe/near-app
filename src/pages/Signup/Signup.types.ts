import { UserSignupType } from "../Register/Register.types";

export type SignupType = {
    OnContinueClick: (userInfo: UserSignupType) => void;
}