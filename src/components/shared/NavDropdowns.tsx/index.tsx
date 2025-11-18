import { Box, Theme, useTheme } from "@mui/material"
import Image from "next/image"
import React from "react";

interface NavDropdownProps {
    data: any;
    openMenuHandler: (e: string | null) => void;
    type?: string;
    imgclasses?: string;
}

const NavDropDowns: React.FC<NavDropdownProps> = (
    {
        data,
        openMenuHandler,
        type = "sunglasses",
        imgclasses = ""
    }
) => {
    const theme = useTheme();
    const hoverColor = theme.palette.primary.main;

    return (
        <Box
            className="max-[1217px]:w-full"
            onMouseEnter={() => openMenuHandler(type)}
            onMouseLeave={() => openMenuHandler(null)}
            sx={{
                position: "absolute",
                bgcolor: "background.paper",
                boxShadow: 3,
                p: 4,
                display: "flex",
                // justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 6,
                borderRadius: 1,
                mt: 1.7,
                left: "50%",
                transform: "translateX(-50%)",
                top: "57px",
                // ---- RESPONSIVE ----
                width: { xs: "100%", lg: "1090px" },
            }}
        >


            <Box sx={{ display: "flex", gap: 2 }}>
                {/* Column 1 */}
                <Box>
                    <Box sx={{ fontWeight: 600, mb: 1, color: 'text.disabled' }}>Shop</Box>
                    {data.shop.map((item: string, ind: number) => (
                        <Box
                            key={ind}
                            sx={{
                                color: 'text.primary',
                                mb: 0.5,
                                cursor: 'pointer',
                                fontSize: '1.2rem',
                                '&:hover': { color: hoverColor }
                            }}
                        >
                            {item}
                        </Box>
                    ))}
                </Box>

                {/* Column 2 */}
                <Box>
                    <Box sx={{ fontWeight: 600, mb: 1, color: 'text.disabled' }}>Featured</Box>
                    {data.Featured.map((item: string, ind: number) => (
                        <Box
                            key={ind}
                            sx={{
                                color: 'text.primary',
                                mb: 0.5,
                                cursor: 'pointer',
                                fontSize: '1.2rem',
                                '&:hover': { color: hoverColor }
                            }}
                        >
                            {item}
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
                {
                    data.imageLinks.map((Obj: { title: string, url: string }, ind: number) => (
                        <Box key={ind} sx={{ cursor: 'pointer', position: "relative" }}>
                            <Image
                                src={Obj.url}
                                width={180}
                                height={240}
                                alt="Premium"
                                className={`rounded-md object-cover h-60 ${imgclasses}`}
                            />
                            <Box width={180} height={240} sx={{ background: "#000000", borderRadius: "6px", opacity: 0.3, position: "absolute", top: 0 }}></Box>
                            <Box sx={{ mt: 1, fontSize: '1.2rem', textAlign: "center", fontWeight: 600, color: 'text.secondary', position: "absolute", top: "65%", lineHeight: 1.3, left: "50%", transform: "translateX(-50%)" }}>
                                {Obj.title}
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Box >
    )
}

export default NavDropDowns