import { NotMemberBtnProps } from "@/app/Interfaces/interfaces";

function NotMemberBtn({ signUpRouteHandler = () => null }: NotMemberBtnProps) {
    return (
        <p className="mt-10 text-center text-sm text-gray-400">
            Not a member?
            <button
                onClick={signUpRouteHandler}
                className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
            >
                Sign Up
            </button>
        </p>
    );
}

export default NotMemberBtn;
