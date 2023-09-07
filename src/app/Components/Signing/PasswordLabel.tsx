import { PasswordLabelProps } from "@/app/Interfaces/interfaces";

function PasswordLabel({
    forgetPasswordRouteHandler = () => {},
    forgetPassword = false,
    text = "",
}: PasswordLabelProps) {
    return (
        <div className="flex items-center justify-between">
            <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
            >
               {text}
            </label>
            {forgetPassword && (
                <div className="text-sm">
                    <div
                        onClick={forgetPasswordRouteHandler}
                        className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300"
                    >
                        Forgot password?
                    </div>
                </div>
            )}
        </div>
    );
}

export default PasswordLabel;
