import { KeyboardEvent } from "react";
import { PasswordInputProps } from "@/app/Interfaces/interfaces";
import {
    PASS_INPUT_KEY,
    PASS_INPUT_DIV_CLASS,
    PASS_INPUT_PASSWORD,
    PASS_INPUT_AUTO_COMP,
    PASS_INPUT_INPUT_CLASS,
} from "@/app/GeneralResources/resources";

function PasswordInput({
    passwordHandler = () => null,
    submitHandler = () => null,
    isKeyPressWork = false,
    isDisable = false,
}: PasswordInputProps) {
    const enterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === PASS_INPUT_KEY && isKeyPressWork) {
            if (isDisable) {
                return;
            }
            submitHandler();
        }
    };

    return (
        <div className={PASS_INPUT_DIV_CLASS}>
            <input
                id={PASS_INPUT_PASSWORD}
                name={PASS_INPUT_PASSWORD}
                type={PASS_INPUT_PASSWORD}
                autoComplete={PASS_INPUT_AUTO_COMP}
                onChange={passwordHandler}
                required
                className={PASS_INPUT_INPUT_CLASS}
                onKeyUp={enterPress}
            />
        </div>
    );
}

export default PasswordInput;
