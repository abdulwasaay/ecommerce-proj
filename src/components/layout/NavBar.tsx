"use client";

import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

import { Button, NavDropDowns } from "@/components";

const Navbar = () => {
    const theme = useTheme();
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const eyeGlasses = {
        shop: [
            "Eyeglasses",
            "Men Glasses",
            "Women Glasses",
            "Premium Glasses",
        ],
        Featured: [
            "Tom Ford Glasses",
            "Prada Glasses",
            "Moscot Glasses",
            "David Beckham Glasses",
            "Gucci Glasses"
        ],
        imageLinks: [
            {
                title: "Transparrent Glasses",
                url: "/images/navbar-main/eyeglasses/transparrent.webp"

            },
            {
                title: "Blue Light Glasses",
                url: "/images/navbar-main/eyeglasses/bllight.jpg"
            },
            {
                title: "Transition Glasses",
                url: "/images/navbar-main/eyeglasses/trans.jpg"
            }
        ]
    }
    const sunGlasses = {
        shop: [
            "Sunglasses",
            "Men Sunglasses",
            "Women Sunglasses",
            "Premium Sunglasses",
            "Rayban Wayfarer",
            "Polarized Sunglasses",
        ],
        Featured: [
            "Louis Vuitton Sunglasses",
            "Ray Ban Sunglasses",
            "Tom Ford Sunglasses",
            "Prada Sunglasses",
            "Oliver Peoples"
        ],
        imageLinks: [
            {
                title: "Premium Sunglasses",
                url: "/images/navbar-main/sunglasses/premium.jpg"

            },
            {
                title: "Gucci Sunglasses",
                url: "/images/navbar-main/sunglasses/gucci.jpg"
            },
            {
                title: "Cartier Sunglasses",
                url: "/images/navbar-main/sunglasses/cartier.jpg"
            }
        ]
    }

    const lenses = {
        shop: [
            "Blue Light Glasses",
            "Computer Glasses",
            "Anti Glare Glasses",
            "Transition Glasses",
        ],
        Featured: [
            "Bifocal Glasses",
            "Progressive Glasses",
        ],
        imageLinks: [
            {
                title: "Bifocal Glasses",
                url: "/images/navbar-main/lenses/bifocal.jpg"

            },
            {
                title: "Progressive Glasses",
                url: "/images/navbar-main/lenses/progressive.jpg"
            }
        ]
    }

    const ContLenses = {
        shop: [
            "Contact Lenses",
            "Transparent Lenses",
            "Colored Lenses",
        ],
        Featured: [
            "Daily Disposable Lenses",
            "Silicone Hydrogel Lenses",
            "Bella Lenses",
            "Bausch and Lomb Lenses",
        ],
        imageLinks: [
            {
                title: "Bella Lenses",
                url: "/images/navbar-main/cont-lenses/bella.jpg"

            },
            {
                title: "Biomedics Lenses",
                url: "/images/navbar-main/cont-lenses/biomedicss.webp"
            },
            {
                title: "Acuvue Lenses",
                url: "/images/navbar-main/cont-lenses/acuvues.webp"
            }
        ]
    }

    const mainLinks = [
        {
            title: "Eyeglasses",
            type: "eyeglasses"
        },
        {
            title: "Sunglasses",
            type: "sunglasses"
        },
        {
            title: "Lenses",
            type: "lenses"
        }, {
            title: "Contact Lenses",
            type: "contlenses"
        }];

    const hoverColor = theme.palette.primary.main;

    return (

        <Box sx={{ bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: { xs: "space-between", md: 'space-around' }, px: 5, py: 2 }}>

            {/* Logo */}
            <Image
                src="/images/logo.png"
                width={90}
                height={40}
                alt="logo"
                priority
                className="cursor-pointer w-[70px] h-14  sm:w-[90px] sm:h-20"
            />

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4, position: 'relative' }}>

                {/* Other links */}
                {mainLinks.map((item, ind) => (
                    <Box
                        key={ind}
                        onMouseEnter={() => setOpenMenu(item.type)}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                                color: 'text.disabled',
                                cursor: 'pointer',
                                position: 'relative',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -2,
                                    left: 0,
                                    width: 0,
                                    height: 2,
                                    bgcolor: hoverColor,
                                    transition: 'width 0.3s',
                                },
                                '&:hover': {
                                    color: hoverColor,
                                    '&:after': { width: '100%' }
                                }
                            }}
                        >
                            {item.title}
                            <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
                        </Box>
                    </Box>
                ))}
                <Link href="/" style={{ textDecoration: 'none', position: 'relative' }}>
                    <Box
                        sx={{
                            color: 'text.disabled',
                            cursor: 'pointer',
                            position: 'relative',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -2,
                                left: 0,
                                width: 0,
                                height: 2,
                                bgcolor: hoverColor,
                                transition: 'width 0.3s',
                            },
                            '&:hover': {
                                color: hoverColor,
                                '&:after': { width: '100%' }
                            }
                        }}
                    >
                        Reviews
                    </Box>
                </Link>
            </Box>

            {/* Search + Cart + menu */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button
                    label="Search"
                    disableRipple
                    sx={{
                        display: { xs: "none", sm: "flex" },
                        borderRadius: "20px",          // Rounded corners
                        backgroundColor: theme.palette.background.default,    // Light gray background
                        boxShadow: "none",
                        color: "#000",                 // Text color
                        textTransform: "none",         // Capital letters off
                        px: 3,
                        fontSize: "14px",
                        fontWeight: "normal",
                        "&:hover": {
                            backgroundColor: theme.palette.background.default,  // Hover blue color
                            color: theme.palette.primary.main,               // Hover text color
                            boxShadow: "none"
                        },
                        "&:hover .MuiSvgIcon-root": {
                            color: theme.palette.primary.main,
                        },
                    }}
                    startIcon={<SearchIcon sx={{ fontSize: 20 }}
                        className="text-gray-600" />}
                />
                <Box sx={{ display: { sm: 'none' } }}>
                    <SearchIcon fontSize="medium" />
                </Box>
                <Box sx={{ position: 'relative', cursor: 'pointer' }}>
                    <ShoppingBagIcon fontSize="medium" sx={{ color: 'text.primary' }} />
                    <Box sx={{
                        position: 'absolute',
                        top: -8,
                        right: -8,
                        bgcolor: 'error.main',
                        color: 'common.white',
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.625rem'
                    }}>
                        0
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'flex' , md:"none" }, ml: 1 }}>
                    <MenuIcon fontSize="large" sx={{ color: 'text.primary', cursor: 'pointer' }} />
                </Box>
            </Box>
            {openMenu === "eyeglasses" && (
                <NavDropDowns
                    data={eyeGlasses}
                    openMenuHandler={setOpenMenu}
                    type="eyeglasses"
                />
            )}
            {openMenu === "sunglasses" && (
                <NavDropDowns
                    data={sunGlasses}
                    openMenuHandler={setOpenMenu}
                    type="sunglasses"
                />
            )}
            {openMenu === "lenses" && (
                <NavDropDowns
                    data={lenses}
                    openMenuHandler={setOpenMenu}
                    type="lenses"
                    imgclasses="object-left"
                />
            )}
            {openMenu === "contlenses" && (
                <NavDropDowns
                    data={ContLenses}
                    openMenuHandler={setOpenMenu}
                    type="contlenses"
                />
            )}

        </Box>
    );
};

export default Navbar;
