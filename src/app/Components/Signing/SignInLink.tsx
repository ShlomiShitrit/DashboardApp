import Link from "@mui/material/Link";

import { SignInLinkProps } from "@/app/Interfaces/interfaces";
import {
    SIGNIN_LINK_VAR,
    SIGNIN_LINK_HREF_DEFAULT,
    SIGNIN_LINK_TXT_DEFAULT,
    SIGNIN_LINK_COLOR,
} from "@/app/GeneralResources/resources";

function SignInLink({
    href = SIGNIN_LINK_HREF_DEFAULT,
    text = SIGNIN_LINK_TXT_DEFAULT,
}: SignInLinkProps) {
    return (
        <Link href={href} variant={SIGNIN_LINK_VAR} color={SIGNIN_LINK_COLOR}>
            {text}
        </Link>
    );
}

export default SignInLink;
