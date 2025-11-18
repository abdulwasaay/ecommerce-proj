import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faqs = () => {
    return (
        <Box>
            <Box sx={{ width: "100%", marginTop: "20px", px: { md: 15, sm: 10, xs: 5 } }}>

                {/* Accordion 1 */}
                <Accordion elevation={0} sx={{ borderBottom: "1px solid #ddd" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography fontWeight={600} fontSize="20px">
                            Glasses Price in Pakistan
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography fontSize="15px" color="#333">
                            Eyeglasses prices in Pakistan vary due to the different qualities and
                            variety of glasses. Generally, you can get decent plastic frame
                            glasses of good quality within 1500–2500 Rs. Gone are the days when
                            you had to go to the optical store…
                        </Typography>

                        <Typography
                            fontWeight={700}
                            fontSize="20px"
                            marginTop={3}
                            marginBottom={1}
                        >
                            Glasses Frames in Pakistan
                        </Typography>
                        <Typography fontSize="15px" color="#333">
                            Glasses frames or replica eyeglasses frames in Pakistan are commonly
                            used by people who have vision problems…
                        </Typography>

                        <Typography
                            fontWeight={700}
                            fontSize="20px"
                            marginTop={3}
                            marginBottom={1}
                        >
                            Tinted Glasses
                        </Typography>
                        <Typography fontSize="15px" color="#333">
                            Grab your hands on our exceedingly trendy tinted glasses to spice up
                            any outfit…
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Accordion 2 */}
                <Accordion elevation={0} sx={{ borderBottom: "1px solid #ddd" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography fontWeight={600} fontSize="20px">
                            Online Glasses in Pakistan
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography fontSize="15px" color="#333">
                            Your content for this section goes here…
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Accordion 3 */}
                <Accordion elevation={0} sx={{ borderBottom: "1px solid #ddd" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography fontWeight={600} fontSize="20px">
                            Eyeglasses Frames
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography fontSize="15px" color="#333">
                            Your content for this section goes here…
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Box>
            <Box sx={{ width: "100%", marginTop: "80px", px: { md: 15, sm: 10, xs: 5 } }}>
                <Typography variant="h4" fontWeight={700} className="text-center">FAQS</Typography>
                {/* Accordion 1 */}
                <Accordion elevation={0} sx={{ borderBottom: "1px solid #ddd" ,mt:6 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography fontWeight={600} fontSize="20px">
                          How to Buy Online Glasses in Pakistan?
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography fontSize="15px" color="#333">
                            Eyeglasses prices in Pakistan vary due to the different qualities and
                            variety of glasses. Generally, you can get decent plastic frame
                            glasses of good quality within 1500–2500 Rs. Gone are the days when
                            you had to go to the optical store…
                        </Typography>

                        <Typography
                            fontWeight={700}
                            fontSize="20px"
                            marginTop={3}
                            marginBottom={1}
                        >
                           What Glasses Frames are Trending?
                        </Typography>
                        <Typography fontSize="15px" color="#333">
                            Glasses frames or replica eyeglasses frames in Pakistan are commonly
                            used by people who have vision problems…
                        </Typography>

                        <Typography
                            fontWeight={700}
                            fontSize="20px"
                            marginTop={3}
                            marginBottom={1}
                        >
                             What Is The Most Popular Frame For Glasses?
                        </Typography>
                        <Typography fontSize="15px" color="#333">
                            Grab your hands on our exceedingly trendy tinted glasses to spice up
                            any outfit…
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Accordion 2 */}
                <Accordion elevation={0} sx={{ borderBottom: "1px solid #ddd" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography fontWeight={600} fontSize="20px">
                            Online Glasses in Pakistan
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography fontSize="15px" color="#333">
                            Your content for this section goes here…
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Accordion 3 */}
                <Accordion elevation={0} sx={{ borderBottom: "1px solid #ddd" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography fontWeight={600} fontSize="20px">
                            Eyeglasses Frames
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography fontSize="15px" color="#333">
                            Your content for this section goes here…
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
}


export default Faqs