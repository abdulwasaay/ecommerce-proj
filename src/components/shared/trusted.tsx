"use client"
import { Box, Typography, useTheme } from "@mui/material"
import ShieldIcon from "@mui/icons-material/Shield";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import StarIcon from "@mui/icons-material/Star";

const Trusted = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                py: 3,
                mt: 5,
                px: 3,
            }}
        >
            <Box
                sx={{
                    bgcolor: theme.palette.divider,
                    width: "100%",
                    maxWidth: "1100px",
                    borderRadius: { xs: "20px", md: "999px" },
                    px: 6,
                    py: 2.5,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                }}
            >
                <Box sx={{display:"flex" ,flexDirection:{md:"row" , xs:"column"}, gap:4 , alignItems:"center"}}>
                    {/* Item 1 */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <ShieldIcon sx={{ color: theme.palette.primary.main }} />
                        <Typography fontWeight={500}>Premium Quality Products</Typography>
                    </Box>


                    <Box sx={{ width: "3px", height: "40px", bgcolor: theme.palette.primary.main, opacity: 0.4, display: { xs: "none", md: "flex" } }} />


                    {/* Item 2 */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <LocalShippingIcon sx={{ color: theme.palette.primary.main }} />
                        <Typography fontWeight={500}>Free Delivery In Pakistan</Typography>
                    </Box>


                    <Box sx={{ width: "3px", height: "40px", bgcolor: theme.palette.primary.main, opacity: 0.4, display: { xs: "none", md: "flex" } }} />
                </Box>
                <Box sx={{ width: "3px", height: "40px", bgcolor: theme.palette.primary.main, opacity: 0.4, display: { xs: "none", sm: "flex" , md:"none" } }} />
                <Box sx={{display:"flex" ,flexDirection:{md:"row" , xs:"column"} , gap:4 , alignItems:"center"}}>
                    {/* Item 3 */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <ReplayIcon sx={{ color: theme.palette.primary.main }} />
                        <Typography fontWeight={500}>7 Days Exchange or Return</Typography>
                    </Box>


                    <Box sx={{ width: "3px", height: "40px", bgcolor: theme.palette.primary.main, opacity: 0.4, display: { xs: "none", md: "flex" } }} />


                    {/* Item 4 */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <StarIcon key={i} sx={{ color: "#ffb400", fontSize: "20px" }} />
                        ))}
                        <Typography fontWeight={500} sx={{ ml: 1 }}>12K+ Reviews</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Trusted