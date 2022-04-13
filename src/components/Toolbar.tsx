import { AppBar, Typography, Toolbar as MUIToolbar } from "@mui/material"

const Toolbar = () => {
    return (
        <AppBar sx={{ flexGrow: 1 }}>
            <MUIToolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Meme generator
            </Typography>
          </MUIToolbar>
        </AppBar>
    )
}

export default Toolbar;