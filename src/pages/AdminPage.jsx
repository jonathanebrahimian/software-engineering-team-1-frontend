import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import ApplicationBar from "../components/ApplicationBar";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import ApplicationCard from '../components/ApplicationCard';
import PublicationCard from '../components/PublicationCard'

function AdminPage() {
    return (
        <Stack direction='column'>
            <ApplicationBar />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sx={{ mx: 7, mt: 4 }}>
                    <Typography
                        variant="h5"
                        noWrap
                        component='div'
                        sx={{ display: { sm: 'block' } }}
                    >
                        Summary
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ mx: 7 }}>
                    <Divider></Divider>
                </Grid>
                <Grid item xs={12} sx={{ mx: 7 }}>
                    <PublicationCard totalPublication={4} />
                </Grid>
                <Grid item xs={12} sx={{ mx: 7 }}>
                    <ApplicationCard totalApplication={2} />
                </Grid>
            </Grid>
        </Stack >
    );
}

export default AdminPage;