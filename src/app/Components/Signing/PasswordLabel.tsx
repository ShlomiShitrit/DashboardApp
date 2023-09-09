import { PasswordLabelProps } from "@/app/GeneralResources/interfaces";
import {
    PASS_LABEL_TXT_DEFAULT_PROP,
    PASS_LABEL_DIV1_CLASS,
    PASS_LABEL_LABEL_FOR,
    PASS_LABEL_LABEL_CLASS,
    PASS_LABEL_DIV2_CLASS,
    PASS_LABEL_DIV3_CLASS,
    PASS_LABEL_DIV3_TXT,
} from "@/app/GeneralResources/resources";

function PasswordLabel({
    forgetPasswordRouteHandler = () => {},
    forgetPassword = false,
    text = PASS_LABEL_TXT_DEFAULT_PROP,
}: PasswordLabelProps) {
    return (
        <div className={PASS_LABEL_DIV1_CLASS}>
            <label
                htmlFor={PASS_LABEL_LABEL_FOR}
                className={PASS_LABEL_LABEL_CLASS}
            >
                {text}
            </label>
            {forgetPassword && (
                <div className={PASS_LABEL_DIV2_CLASS}>
                    <div
                        onClick={forgetPasswordRouteHandler}
                        className={PASS_LABEL_DIV3_CLASS}
                    >
                        {PASS_LABEL_DIV3_TXT}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PasswordLabel;
