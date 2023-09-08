import { EmailInputProps } from "@/app/Interfaces/interfaces";
import {
    EMAIL_INPUT_LABEL_FOR,
    EMAIL_INPUT_LABEL_CLASS,
    EMAIL_INPUT_LABEL_TXT,
    EMAIL_INPUT_EMAIL,
    EMAIL_INPUT_DIV_CLASS,
    EMAIL_INPUT_INPUT_CLASS,
} from "@/app/GeneralResources/resources";

function EmailInput({ emailHandler = () => null }: EmailInputProps) {
    return (
        <div>
            <label
                htmlFor={EMAIL_INPUT_LABEL_FOR}
                className={EMAIL_INPUT_LABEL_CLASS}
            >
                {EMAIL_INPUT_LABEL_TXT}
            </label>
            <div className={EMAIL_INPUT_DIV_CLASS}>
                <input
                    id={EMAIL_INPUT_EMAIL}
                    name={EMAIL_INPUT_EMAIL}
                    type={EMAIL_INPUT_EMAIL}
                    autoComplete={EMAIL_INPUT_EMAIL}
                    onChange={emailHandler}
                    required
                    className={EMAIL_INPUT_INPUT_CLASS}
                />
            </div>
        </div>
    );
}

export default EmailInput;
