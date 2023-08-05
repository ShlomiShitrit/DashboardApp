import Typography from "@mui/material/Typography";
import { TitleProps } from "@/app/Interfaces/interfaces";

export default function Title({ children = null }: TitleProps) {
    return (
        <Typography variant="h6" gutterBottom>
            {children}
        </Typography>
    );
}
