import Typography from "@mui/material/Typography";

import MiniDrawer from "@/app/Components/UI/Nav";
import Providers from "@/app/store/provider";

function UserPage() {
    return (
        <Providers>
            <MiniDrawer />
            <Typography
                align="center"
                sx={{
                    mt: "25%",
                }}
                variant="h1"
            >
                User Page
            </Typography>
        </Providers>
    );
}
export default UserPage;
