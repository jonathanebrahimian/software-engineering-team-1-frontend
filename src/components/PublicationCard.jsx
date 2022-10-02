/**
 * Author:          Kassi Bertrand
 * filename:        PublicationCard.jsx
 * Date:            10-02-2022
 * Description:     This component is used in the "summary" section
 *                  of the admin page to display the total number
 *                  of TA position posted. 
 */
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/system";
import InsightsTwoToneIcon from "@mui/icons-material/InsightsTwoTone";
import s from "./styles/PublicationCard.module.css";

const theme = createTheme({
    palette: {
        background: {
            paper: "#fff",
        },
        text: {
            primary: "#2980b9 ",
            secondary: "#46505A",
        },
        success: {
            dark: "#009688",
        },
    },
});

function PublicationCard({ totalPublication }) {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                bgcolor: "background.paper",
                boxShadow: 1, // This style property does NOT work when theme is applied, so I am styling using CSS
                borderRadius: 2,
                p: 2,
                m: 2,
                width: 'auto',
                border: "1px solid #EAECEE"
            }}
                className={s.card}
            >
                <Box sx={{ color: "text.secondary" }}>
                    <InsightsTwoToneIcon />
                </Box>
                <Box sx={{ color: "text.primary", fontSize: '3.5rem', fontWeight: "medium" }}>
                    {totalPublication}
                </Box>
                <Box
                    sx={{
                        color: "success.dark",
                        display: "inline",
                        fontWeight: "bold",
                        mx: 0.5,
                        fontSize: '1rem'
                    }}
                >
                    Total Published TA Positions
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default PublicationCard;