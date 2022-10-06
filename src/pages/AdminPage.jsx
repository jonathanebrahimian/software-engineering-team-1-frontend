import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import ApplicationBar from "../components/ApplicationBar";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import ApplicationCard from '../components/ApplicationCard';
import PublicationCard from '../components/PublicationCard'
import PublicationTable from '../components/PublicationTable';
import s from '../components/styles/Divider.module.css';


//hypothetical data fetched from server
//To be removed, when mock API is operational
function createData(
    className,
    section,
    id,
    applications,
    status
) {
    return { className, section, id, applications, status };
}
const positions = [
    createData('CS 1341', 'N14', '112@1', 5, 'closed'),
    createData('CS 1342', 'N14', 'ascs1', 4, 'open'),
    createData('CS 2341', 'N14', 'ct10z', 2, 'open'),
    createData('CS 1340', 'N14', 'fsfz2', 3, 'closed'),
    createData('CS 2240', 'N14', '34zf2', 1, 'closed'),
]
function AdminPage() {
    return (
        <Stack direction='column'>
            <ApplicationBar />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sx={{ mx: 7, mt: 4 }}>
                    <Divider className={s.title}>Summary</Divider>
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
                    <Divider className={s.title}>Recently Published Positions (5)</Divider>
                </Grid>
                <Grid item xs={12} sx={{ mx: 7, mt: 4 }}>
                    <PublicationTable positions={positions} />
                </Grid>
            </Grid>
        </Stack >
    );
}

export default AdminPage;