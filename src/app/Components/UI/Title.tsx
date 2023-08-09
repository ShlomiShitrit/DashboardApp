import Typography from "@mui/material/Typography";
import { TitleProps } from "@/app/Interfaces/interfaces";
import { TITLE_TYP_VAR } from "@/app/GeneralResources/resources";

export default function Title({ children = null }: TitleProps) {
    return (
        <Typography variant={TITLE_TYP_VAR} gutterBottom>
            {children}
        </Typography>
    );
}
