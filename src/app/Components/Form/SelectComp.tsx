import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { SelectCompProps } from "../../Interfaces/interfaces";

function SelectComp({
    name = "",
    nameHandler = (event) => null,
    items = [],
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
            {items.map((item) => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
            ))}
        </Select>
    );
}

export default SelectComp;
