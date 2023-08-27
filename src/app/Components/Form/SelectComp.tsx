import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { SelectCompProps } from "../../Interfaces/interfaces";
import {
    SELECT_COMP_NAME_PROP,
    SELECT_COMP_LABEL_ID,
    SELECT_COMP_LABEL,
    SELECT_COMP_ID,
} from "@/app/GeneralResources/resources";

import {
    SELECT_COMP_VALUE_CHART_AT,
    SELECT_COMP_VALUE_SLICE,
} from "@/app/GeneralResources/constants";

function SelectComp({
    name = SELECT_COMP_NAME_PROP,
    nameHandler = (event) => null,
    items = [],
}: SelectCompProps) {
    return (
        <Select
            fullWidth
            labelId={SELECT_COMP_LABEL_ID}
            id={SELECT_COMP_ID}
            value={
                name.charAt(SELECT_COMP_VALUE_CHART_AT).toUpperCase() +
                name.slice(SELECT_COMP_VALUE_SLICE)
            }
            label={SELECT_COMP_LABEL}
            onChange={nameHandler}
        >
            {items.map((item) => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
            ))}
        </Select>
    );
}

export default SelectComp;
