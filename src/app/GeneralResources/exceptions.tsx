import {
    EXCEPTIONS_EMPTY_NAME_ERROR_MSG,
    EXCEPTIONS_EMPTY_NAME_ERROR_NAME,
    EXCEPTIONS_EMPTY_NAME_ERROR_CODE,
    EXCEPTIONS_PASS_MATCH_ERROR_MSG,
    EXCEPTIONS_PASS_MATCH_ERROR_NAME,
    EXCEPTIONS_PASS_MATCH_ERROR_CODE,
} from "@/app/GeneralResources/resources";

export class EmptyNameError extends Error {
    public code: string;
    constructor(public whatName: string) {
        super();
        this.message = `${whatName} ${EXCEPTIONS_EMPTY_NAME_ERROR_MSG}`;
        this.name = EXCEPTIONS_EMPTY_NAME_ERROR_NAME;
        this.code = EXCEPTIONS_EMPTY_NAME_ERROR_CODE;
    }
}

export class PasswordDontMatchError extends Error {
    public code: string;
    constructor() {
        super();
        this.message = EXCEPTIONS_PASS_MATCH_ERROR_MSG;
        this.name = EXCEPTIONS_PASS_MATCH_ERROR_NAME;
        this.code = EXCEPTIONS_PASS_MATCH_ERROR_CODE;
    }
}
