import {Toolbar, styled, Typography } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import PetsIcon from '@mui/icons-material/Pets';
import AppBar from '@mui/material/AppBar/AppBar';



export default function NAvbar() {

    const StyleToobar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
        
    });
    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding : "0 10px",
        borderRadius: theme.shape.borderRadius,
        width : "40%",
    }) )
    const Icons = styled("div")(({ theme }) => ({
        backgroundColor: "white"
    }) )
    
  return (
    <AppBar position='sticky'>
          <StyleToobar>
              <Typography variant='h6' sx={{display:{xs: "none", sm :"block"}}} >Shahmeer Dev</Typography>
              <PetsIcon sx={{ display: { xs: "black", sm: "none" } }} />
              <Search>
                  <InputBase placeholder='search...' />
              </Search>
              <Icons>icons</Icons>
        </StyleToobar>
    </AppBar>
  )
}
