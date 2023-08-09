import { Typography, Box } from "@mui/material";
import { PAGE3_TYP_VAR, PAGE3_TYP_TXT } from "@/app/GeneralResources/resources";
import { page3BoxStyle } from "../Styles/styles";

function Page3() {
    return (
        <Box sx={page3BoxStyle}>
            <Typography variant={PAGE3_TYP_VAR}>{PAGE3_TYP_TXT}</Typography>
        </Box>
    );
}
export default Page3;
