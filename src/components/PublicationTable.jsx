/**
 * Author:          Kassi Bertrand
 * filename:        PublicationTable.jsx
 * Date:            10/04/2022
 * Description:     This component is used in the admin page to displays
 *                  the 5 most recent TA positions posted + some other 
 *                  information.
 */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

function PublicationTable({ positions }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="5 recent position">
                <caption>Visit the classes for a complete overview</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Class</TableCell>
                        <TableCell>Lab section</TableCell>
                        <TableCell align='center'>ID</TableCell>
                        <TableCell align='center'>Received Applications</TableCell>
                        <TableCell align='center'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {positions.map((position) => (
                        <TableRow
                            key={position.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{position.className}</TableCell>
                            <TableCell>{position.section}</TableCell>
                            <TableCell align='center'>{position.id}</TableCell>
                            <TableCell align='center'>{position.applications}</TableCell>
                            <TableCell align='center'>
                                {
                                    //I am using a ternary notation here
                                    //is status 'open' render green chip, otherwise render red chip
                                    position.status === 'open'
                                        ? <Chip label="Open" variant='outlined' color='success' />
                                        : <Chip label="Closed" variant='outlined' color='error' />
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PublicationTable;