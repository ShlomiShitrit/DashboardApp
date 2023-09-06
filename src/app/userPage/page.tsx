"use client";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import MiniDrawer from "@/app/Components/UI/Nav";
import Providers from "@/app/store/provider";

function UserPage() {
    const router = useRouter();
    const signOutHandler = () => {
        router.push("/");
    };
    return (
        <Providers>
            <MiniDrawer />
            <Box sx={{ textAlign: "center", mt: "25%" }}>
                <Typography variant="h1">User Page</Typography>
                <Button variant="contained" onClick={signOutHandler}>
                    Sign Out
                </Button>
            </Box>
        </Providers>
    );
}
export default UserPage;
