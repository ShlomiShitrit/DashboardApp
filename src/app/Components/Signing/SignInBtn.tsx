import { SignInBtnProps } from "@/app/GeneralResources/interfaces";
import {
    SIGNIN_BTN_TXT_DEFAULT_PROP,
    SIGNIN_BTN_BTN_CLASS,
} from "@/app/GeneralResources/resources";

function SignInBtn({
    signInHandler = () => null,
    disabled = false,
    text = SIGNIN_BTN_TXT_DEFAULT_PROP,
}: SignInBtnProps) {
    return (
        <div>
            <button
                onClick={signInHandler}
                disabled={disabled}
                className={SIGNIN_BTN_BTN_CLASS}
            >
                {text}
            </button>
        </div>
    );
}

export default SignInBtn;
