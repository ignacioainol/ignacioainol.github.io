import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Animated } from "react-animated-css";

const Header = () => {

    return (
        <AppBar position="static">
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <img src="/images/ia-logo.png" className='logo-img' alt="" />
                        </Typography>
                    </Animated>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src="/images/ia-logo.png" className='logo-img' alt="" />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

                    <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
                        <h1>we_rock !</h1>
                    </Animated>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
