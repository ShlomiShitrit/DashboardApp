import { EmailInputProps } from "@/app/Interfaces/interfaces";

function EmailInput({ emailHandler = () => null }: EmailInputProps) {
    return (
        <div>
            <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
            >
                Email address
            </label>
            <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={emailHandler}
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    );
}

export default EmailInput;
