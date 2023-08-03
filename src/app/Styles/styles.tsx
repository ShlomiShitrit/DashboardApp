export const paperCompStyle = {
    p: 2,
    display: "flex",
    flexDirection: "column",
};

export const homePageBoxStyle = {
    backgroundColor: (theme: any) =>
        theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[800],
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
};
