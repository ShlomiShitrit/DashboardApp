import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Dayjs } from "dayjs";

import { DatePickerCompProps } from "../../GeneralResources/interfaces";
import {
    DATE_PICKER_COMP_LABEL,
    DATE_PICKER_COMP,
} from "@/app/GeneralResources/resources";

function DatePickerComp({
    date = new Dayjs(),
    dateHandler = (newDate) => null,
}: DatePickerCompProps) {
    return (
        <DemoContainer components={[DATE_PICKER_COMP]}>
            <DatePicker
                onChange={dateHandler}
                label={DATE_PICKER_COMP_LABEL}
                value={date}
            />
        </DemoContainer>
    );
}

export default DatePickerComp;
