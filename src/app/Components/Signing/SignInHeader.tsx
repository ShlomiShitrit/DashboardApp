import { SignInHeaderProps } from "@/app/Interfaces/interfaces";
import {
    SIGNIN_HEAD_TXT_PROP_DEFAULT,
    SIGNIN_HEAD_DIV_CLASS,
    SIGNIN_HEAD_IMG_CLASS,
    SIGNIN_HEAD_IMG_SRC,
    SIGNIN_HEAD_IMG_ALT,
    SIGNIN_HEAD_H2_CLASS,
} from "@/app/GeneralResources/resources";

function SignInHeader({
    text = SIGNIN_HEAD_TXT_PROP_DEFAULT,
}: SignInHeaderProps) {
    return (
        <div className={SIGNIN_HEAD_DIV_CLASS}>
            <img
                className={SIGNIN_HEAD_IMG_CLASS}
                src={SIGNIN_HEAD_IMG_SRC}
                alt={SIGNIN_HEAD_IMG_ALT}
            />
            <h2 className={SIGNIN_HEAD_H2_CLASS}>{text}</h2>
        </div>
    );
}

export default SignInHeader;
