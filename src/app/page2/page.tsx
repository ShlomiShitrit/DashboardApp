import { Typography, Box } from "@mui/material";
import { PAGE2_TYP_VAR, PAGE2_TYP_TXT } from "@/app/GeneralResources/resources";
import { page2BoxStyle } from "../Styles/styles";

function Page2() {
    return (
        <Box sx={page2BoxStyle}>
            <Typography variant={PAGE2_TYP_VAR}>{PAGE2_TYP_TXT}</Typography>
        </Box>
    );
}
export default Page2;
