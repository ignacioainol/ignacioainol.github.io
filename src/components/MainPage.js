import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function MainPage() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat est temporibus, corrupti modi facilis illum! Maxime quasi fuga animi doloremque iusto voluptatum quidem distinctio dicta. Deserunt, eius. Soluta, mollitia doloremque?
                </Grid>
                <Grid item xs={6}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eius pariatur? Magnam quasi inventore illo perspiciatis, laudantium aspernatur illum nam ea, molestiae officia repellat culpa! Pariatur suscipit nam eos voluptates!
                </Grid>
            </Grid>
        </Box>
    );
}