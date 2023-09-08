import { NotMemberBtnProps } from "@/app/Interfaces/interfaces";
import {
    NOT_MEMBER_P_CLASS,
    NOT_MEMBER_BTN_CLASS,
    NOT_MEMBER_P_TXT,
    NOT_MEMBER_BTN_TXT,
} from "@/app/GeneralResources/resources";

function NotMemberBtn({ signUpRouteHandler = () => null }: NotMemberBtnProps) {
    return (
        <p className={NOT_MEMBER_P_CLASS}>
            {NOT_MEMBER_P_TXT} &nbsp;
            <button
                onClick={signUpRouteHandler}
                className={NOT_MEMBER_BTN_CLASS}
            >
                {NOT_MEMBER_BTN_TXT}
            </button>
        </p>
    );
}

export default NotMemberBtn;
