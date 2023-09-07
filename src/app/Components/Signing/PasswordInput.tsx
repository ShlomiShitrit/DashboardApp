import { PasswordInputProps } from "@/app/Interfaces/interfaces";

function PasswordInput({ passwordHandler = () => null }: PasswordInputProps) {
    return (
        <div className="mt-2">
            <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={passwordHandler}
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
        </div>
    );
}

export default PasswordInput;
