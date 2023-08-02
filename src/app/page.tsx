"use client";
import { useState } from "react";
import { Button, Box, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import Dashboard from "./Components/Dashboard";
import DialogForm from "./Components/DialogForm";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function HomePage() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleSubmit = () => {
        console.log("Submitted");
        setOpen(false);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[800],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={8} lg={12}>
                                <Dashboard />
                            </Grid>
                            <Grid item xs={12} md={8} lg={9}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleOpen}
                                >
                                    Add Expanse
                                </Button>
                                <DialogForm
                                    open={open}
                                    handleClose={handleClose}
                                    handleSubmit={handleSubmit}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default HomePage;
