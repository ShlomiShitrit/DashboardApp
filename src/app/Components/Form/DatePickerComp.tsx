import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import { DatePickerCompProps } from "../../Interfaces/interfaces";

function DatePickerComp(props: DatePickerCompProps) {
    return (
        <DemoContainer components={["DatePicker"]}>
            <DatePicker
                onChange={props.dateHandler}
                label="Date of expanse"
                value={props.date}
            />
        </DemoContainer>
    );
}

export default DatePickerComp;
