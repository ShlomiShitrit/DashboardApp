import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Dayjs } from "dayjs";

import { DatePickerCompProps } from "../../Interfaces/interfaces";

function DatePickerComp({
    date = new Dayjs(),
    dateHandler = (newDate) => null,
}: DatePickerCompProps) {
    return (
        <DemoContainer components={["DatePicker"]}>
            <DatePicker
                onChange={dateHandler}
                label="Date of expanse"
                value={date}
            />
        </DemoContainer>
    );
}

export default DatePickerComp;
