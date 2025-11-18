"use client";
import { useEffect, useState, useRef } from "react";
import { Box, useTheme } from "@mui/material";
import { Navbar, NavSlider } from "@/components";

const ResponsiveLayout = () => {
    const theme = useTheme();
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 180) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Box sx={{ width: "100%", position: "relative", zIndex: 50 }}>

            <NavSlider />

            <Box
                sx={{
                    width: "100%",
                    borderBottom: "2px solid",
                    borderColor: "#eeeeee",
                    position: isFixed ? "fixed" : "relative",
                    top: isFixed ? 0 : "auto",
                    left: 0,
                    right: 0,
                    backgroundColor: theme.palette.background.paper,
                    transition: "all 0.2s ease-in-out",
                    boxShadow: "none",
                    zIndex: 100,
                }}
            >
                <Navbar />
            </Box>
        </Box>
    );
};

export default ResponsiveLayout;
