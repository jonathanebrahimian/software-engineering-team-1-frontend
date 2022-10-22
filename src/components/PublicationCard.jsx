/**
 * Author:          Kassi Bertrand
 * filename:        PublicationCard.jsx
 * Date:            10-02-2022
 * Description:     This component is used in the "summary" section
 *                  of the admin page to display the total number
 *                  of TA position posted. 
 */
import { Box } from "@mui/material";
import InsightsTwoToneIcon from "@mui/icons-material/InsightsTwoTone";
import s from "./styles/PublicationCard.module.css";


function PublicationCard({ totalPublication }) {
    return (
        <Box sx={{
            bgcolor: "background.paper",
            boxShadow: 1, // This style property does NOT work when theme is applied, so I am styling using CSS
            borderRadius: 2,
            p: 2,
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
    );
}

export default PublicationCard;