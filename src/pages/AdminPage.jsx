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
                    <Divider>Summary</Divider>
                </Grid>
                <Grid container sx={{ mx: 7, mt: 4 }} spacing={2}>
                    <Grid item xs={6}>
                        <PublicationCard totalPublication={4} />
                    </Grid>
                    <Grid item xs={6}>
                        <ApplicationCard totalApplication={2} />
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mx: 7, mt: 4 }}>
                    <Divider>Recently Published Positions (3)</Divider>
                </Grid>
            </Grid>
        </Stack >
    );
}

export default AdminPage;