import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { SelectCompProps } from "../../Interfaces/interfaces";

function SelectComp(props: SelectCompProps) {
    return (
        <Select
                        fullWidth
                        labelId="select-label"
                        id="select"
                        value={props.name}
                        label="Name"
                        onChange={props.nameHandler}
                    >
                        <MenuItem value={"Libi"}>Libi</MenuItem>
                        <MenuItem value={"Shlomi"}>Shlomi</MenuItem>
                    </Select>
    )
}

export default SelectComp;