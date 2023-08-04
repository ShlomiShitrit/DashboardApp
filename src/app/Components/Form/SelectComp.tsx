import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { SelectCompProps } from "../../Interfaces/interfaces";

function SelectComp({
    name = "",
    nameHandler = (event) => null,
}: SelectCompProps) {
    return (
        <Select
            fullWidth
            labelId="select-label"
            id="select"
            value={name}
            label="Name"
            onChange={nameHandler}
        >
            <MenuItem value={"Libi"}>Libi</MenuItem>
            <MenuItem value={"Shlomi"}>Shlomi</MenuItem>
        </Select>
    );
}

export default SelectComp;
