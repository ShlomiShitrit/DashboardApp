import { NameInputProps } from "@/app/Interfaces/interfaces";
import {
    NAME_INPUT_LABEL_FOR,
    NAME_INPUT_LABEL_CLASS,
    NAME_INPUT_NAME,
    NAME_INPUT_DIV_CLASS,
    NAME_INPUT_INPUT_CLASS,
    NAME_INPUT_TEXT_PROP_DEFAULT,
} from "@/app/GeneralResources/resources";

function NameInput({
    nameHandler = () => null,
    text = NAME_INPUT_TEXT_PROP_DEFAULT,
}: NameInputProps) {
    return (
        <div>
            <label
                htmlFor={NAME_INPUT_LABEL_FOR}
                className={NAME_INPUT_LABEL_CLASS}
            >
                {text}
            </label>
            <div className={NAME_INPUT_DIV_CLASS}>
                <input
                    id={NAME_INPUT_NAME}
                    name={NAME_INPUT_NAME}
                    type={NAME_INPUT_NAME}
                    autoComplete={NAME_INPUT_NAME}
                    onChange={nameHandler}
                    required
                    className={NAME_INPUT_INPUT_CLASS}
                />
            </div>
        </div>
    );
}

export default NameInput;
