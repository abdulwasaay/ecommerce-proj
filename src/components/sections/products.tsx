"use client";

import { Box, Chip, Typography, useTheme } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";
import { Button } from "@/components"

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    tags?: string[];
};

const products: Product[] = [
    { id: 1, title: "RAY BAN AVIATOR POLARIZED", price: 13500, image: "/images/any.jpg", tags: ["New", "Polarized", "Premium"] },
    { id: 2, title: "LOUIS VUITTON Z1505E", price: 15000, image: "/images/any.jpg", tags: ["New", "Premium"] },
    { id: 3, title: "LOUIS VUITTON Z1584U", price: 15000, image: "/images/any.jpg", tags: ["New", "Premium"] },
    { id: 4, title: "TOM FORD FT0711", price: 15000, image: "/images/any.jpg", tags: ["Premium"] }
];

const Products = () => {
    const theme = useTheme();
    return (
        <Box>
            <Box className="w-full py-14 bg-white px-3">

                {/* Heading */}
                <Box className="text-center mb-10">
                    <Typography variant="h4" fontWeight={700}>Premium Sunglasses</Typography>
                    <Typography variant="body1" className="text-gray-600 pt-5">Acetate Material | Premium Finishing | Life Long Quality</Typography>
                </Box>

                {/* Product Grid */}
                <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-20 place-items-center justify-items-center pt-7">
                    {products.map((item) => (
                        <Box key={item.id} className="flex flex-col items-center text-center shadow-none border-none">
                            <Box sx={{ position: "relative" }}>
                                <Image src={item.image} alt={item.title} width={200} height={200} priority className="max-[639px]:w-full w-44" />
                                <Button
                                    label="Try on"
                                    sx={{ position: "absolute", top: -30, right: 0, py: 0.3, textTransform: "capitalize" }}
                                    startIcon={<VisibilityIcon />}
                                />
                            </Box>

                            <Box className="mt-4 w-full flex flex-col items-center">

                                {/* Tags */}
                                <Box className="flex justify-center flex-wrap gap-2 mb-3">
                                    {item.tags?.map((tag) => (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            size="small"
                                            color={tag === "New" ? "success" : tag === "Premium" ? "warning" : tag === "Polarized" ? "info" : "default"}
                                        />
                                    ))}
                                </Box>

                                {/* Title */}
                                <Typography variant="subtitle1" fontWeight={600}>{item.title}</Typography>

                                {/* Price */}
                                <Typography variant="h6" fontWeight={700} className="mt-1">Rs {item.price}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box className="flex justify-center mt-16">
                    <Button label="Explore Premium Sunglasses" sx={{ textTransform: "capitalize", fontSize: { xs: 15, sm: 19 } }} />
                </Box>
            </Box>

            <Box className="w-full py-14 bg-white px-3">

                {/* Heading */}
                <Box className="text-center mb-10">
                    <Typography variant="h4" fontWeight={700}>Online Glasses in Pakistan</Typography>
                    <Typography variant="body1" className="text-gray-600 pt-5">Luxury Designs | Finest Quality Material | 6 Months Warranty</Typography>
                </Box>

                {/* Product Grid */}
                <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-20 place-items-center justify-items-center pt-7">
                    {products.map((item) => (
                        <Box key={item.id} className="flex flex-col items-center text-center shadow-none border-none">
                            <Box sx={{ position: "relative" }}>
                                <Image src={item.image} alt={item.title} width={200} height={200} priority className="max-[639px]:w-full w-44" />
                                <Button
                                    label="Try on"
                                    sx={{ position: "absolute", top: -30, right: 0, py: 0.3, textTransform: "capitalize" }}
                                    startIcon={<VisibilityIcon />}
                                />
                            </Box>

                            <Box className="mt-4 w-full flex flex-col items-center">

                                {/* Tags */}
                                <Box className="flex justify-center flex-wrap gap-2 mb-3">
                                    {item.tags?.map((tag) => (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            size="small"
                                            color={tag === "New" ? "success" : tag === "Premium" ? "warning" : tag === "Polarized" ? "info" : "default"}
                                        />
                                    ))}
                                </Box>

                                {/* Title */}
                                <Typography variant="subtitle1" fontWeight={600}>{item.title}</Typography>

                                {/* Price */}
                                <Typography variant="h6" fontWeight={700} className="mt-1">Rs {item.price}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box className="flex justify-center mt-16">
                    <Button label="Explore Collection" sx={{ textTransform: "capitalize", fontSize: { xs: 15, sm: 19 } }} />
                </Box>
            </Box>
            <Box className="w-full py-14 bg-white px-3">

                {/* Heading */}
                <Box className="text-center mb-10">
                    <Typography variant="h4" fontWeight={700}>Eyeglasses For Men</Typography>
                    <Typography variant="body1" className="text-gray-600 pt-5">400 + Eyeglasses Frames | Lowest Prices | Anti-Glare Lens</Typography>
                </Box>

                {/* Product Grid */}
                <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-20 place-items-center justify-items-center pt-7">
                    {products.map((item) => (
                        <Box key={item.id} className="flex flex-col items-center text-center shadow-none border-none">
                            <Box sx={{ position: "relative" }}>
                                <Image src={item.image} alt={item.title} width={200} height={200} priority className="max-[639px]:w-full w-44" />
                                <Button
                                    label="Try on"
                                    sx={{ position: "absolute", top: -30, right: 0, py: 0.3, textTransform: "capitalize" }}
                                    startIcon={<VisibilityIcon />}
                                />
                            </Box>

                            <Box className="mt-4 w-full flex flex-col items-center">

                                {/* Tags */}
                                <Box className="flex justify-center flex-wrap gap-2 mb-3">
                                    {item.tags?.map((tag) => (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            size="small"
                                            color={tag === "New" ? "success" : tag === "Premium" ? "warning" : tag === "Polarized" ? "info" : "default"}
                                        />
                                    ))}
                                </Box>

                                {/* Title */}
                                <Typography variant="subtitle1" fontWeight={600}>{item.title}</Typography>

                                {/* Price */}
                                <Typography variant="h6" fontWeight={700} className="mt-1">Rs {item.price}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box className="flex justify-center mt-16">
                    <Button label="Explore Men Eyeglasses" sx={{ textTransform: "capitalize", fontSize: { xs: 15, sm: 19 } }} />
                </Box>
            </Box>
            <Box className="w-full py-14 bg-white px-3">

                {/* Heading */}
                <Box className="text-center mb-10">
                    <Typography variant="h4" fontWeight={700}>Eyeglasses For Women</Typography>
                    <Typography variant="body1" className="text-gray-600 pt-5">400+ Stylish Designer Glasses Frames | Prescription Glasses Price in Pakistan</Typography>
                </Box>

                {/* Product Grid */}
                <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-20 place-items-center justify-items-center pt-7">
                    {products.map((item) => (
                        <Box key={item.id} className="flex flex-col items-center text-center shadow-none border-none">
                            <Box sx={{ position: "relative" }}>
                                <Image src={item.image} alt={item.title} width={200} height={200} priority className="max-[639px]:w-full w-44" />
                                <Button
                                    label="Try on"
                                    sx={{ position: "absolute", top: -30, right: 0, py: 0.3, textTransform: "capitalize" }}
                                    startIcon={<VisibilityIcon />}
                                />
                            </Box>

                            <Box className="mt-4 w-full flex flex-col items-center">

                                {/* Tags */}
                                <Box className="flex justify-center flex-wrap gap-2 mb-3">
                                    {item.tags?.map((tag) => (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            size="small"
                                            color={tag === "New" ? "success" : tag === "Premium" ? "warning" : tag === "Polarized" ? "info" : "default"}
                                        />
                                    ))}
                                </Box>

                                {/* Title */}
                                <Typography variant="subtitle1" fontWeight={600}>{item.title}</Typography>

                                {/* Price */}
                                <Typography variant="h6" fontWeight={700} className="mt-1">Rs {item.price}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box className="flex justify-center mt-16">
                    <Button label="Explore Women Eyeglasses" sx={{ textTransform: "capitalize", fontSize: { xs: 15, sm: 19 } }} />
                </Box>
            </Box>
            <Box className="w-full py-14 bg-white px-3">

                {/* Heading */}
                <Box className="text-center mb-10">
                    <Typography variant="h4" fontWeight={700}>Sunglasses For Men</Typography>
                    <Typography variant="body1" className="text-gray-600 pt-5">UV Protected | Gradient Tinted | Polarized Filters</Typography>
                </Box>

                {/* Product Grid */}
                <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-20 place-items-center justify-items-center pt-7">
                    {products.map((item) => (
                        <Box key={item.id} className="flex flex-col items-center text-center shadow-none border-none">
                            <Box sx={{ position: "relative" }}>
                                <Image src={item.image} alt={item.title} width={200} height={200} priority className="max-[639px]:w-full w-44" />
                                <Button
                                    label="Try on"
                                    sx={{ position: "absolute", top: -30, right: 0, py: 0.3, textTransform: "capitalize" }}
                                    startIcon={<VisibilityIcon />}
                                />
                            </Box>

                            <Box className="mt-4 w-full flex flex-col items-center">

                                {/* Tags */}
                                <Box className="flex justify-center flex-wrap gap-2 mb-3">
                                    {item.tags?.map((tag) => (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            size="small"
                                            color={tag === "New" ? "success" : tag === "Premium" ? "warning" : tag === "Polarized" ? "info" : "default"}
                                        />
                                    ))}
                                </Box>

                                {/* Title */}
                                <Typography variant="subtitle1" fontWeight={600}>{item.title}</Typography>

                                {/* Price */}
                                <Typography variant="h6" fontWeight={700} className="mt-1">Rs {item.price}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box className="flex justify-center mt-16">
                    <Button label="Explore Men Sunglasses" sx={{ textTransform: "capitalize", fontSize: { xs: 15, sm: 19 } }} />
                </Box>
            </Box>
            <Box className="w-full py-14 bg-white px-3">

                {/* Heading */}
                <Box className="text-center mb-10">
                    <Typography variant="h4" fontWeight={700}>Sunglasses For Women</Typography>
                    <Typography variant="body1" className="text-gray-600 pt-5">Stylish Collection | Mirrored Designs | UV Protection</Typography>
                </Box>

                {/* Product Grid */}
                <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-20 place-items-center justify-items-center pt-7">
                    {products.map((item) => (
                        <Box key={item.id} className="flex flex-col items-center text-center shadow-none border-none">
                            <Box sx={{ position: "relative" }}>
                                <Image src={item.image} alt={item.title} width={200} height={200} priority className="max-[639px]:w-full w-44" />
                                <Button
                                    label="Try on"
                                    sx={{ position: "absolute", top: -30, right: 0, py: 0.3, textTransform: "capitalize" }}
                                    startIcon={<VisibilityIcon />}
                                />
                            </Box>

                            <Box className="mt-4 w-full flex flex-col items-center">

                                {/* Tags */}
                                <Box className="flex justify-center flex-wrap gap-2 mb-3">
                                    {item.tags?.map((tag) => (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            size="small"
                                            color={tag === "New" ? "success" : tag === "Premium" ? "warning" : tag === "Polarized" ? "info" : "default"}
                                        />
                                    ))}
                                </Box>

                                {/* Title */}
                                <Typography variant="subtitle1" fontWeight={600}>{item.title}</Typography>

                                {/* Price */}
                                <Typography variant="h6" fontWeight={700} className="mt-1">Rs {item.price}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box className="flex justify-center mt-16">
                    <Button label="Explore Women Sunglasses" sx={{ textTransform: "capitalize", fontSize: { xs: 15, sm: 19 } }} />
                </Box>
            </Box>
            <Box className="w-full py-14 bg-white px-3">

                {/* Heading */}
                <Box className="text-center mb-10">
                    <Typography variant="h4" fontWeight={700}>Contact Lenses</Typography>
                    <Typography variant="body1" className="text-gray-600 pt-5">Colored Lenses | Branded Contact Lenses | Transparent Lenses</Typography>
                </Box>

                {/* Product Grid */}
                <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-20 place-items-center justify-items-center pt-7">
                    {products.map((item) => (
                        <Box key={item.id} className="flex flex-col items-center text-center shadow-none border-none">
                            <Box sx={{ position: "relative" }}>
                                <Image src={item.image} alt={item.title} width={200} height={200} priority className="max-[639px]:w-full w-44" />
                                <Button
                                    label="Try on"
                                    sx={{ position: "absolute", top: -30, right: 0, py: 0.3, textTransform: "capitalize" }}
                                    startIcon={<VisibilityIcon />}
                                />
                            </Box>

                            <Box className="mt-4 w-full flex flex-col items-center">

                                {/* Tags */}
                                <Box className="flex justify-center flex-wrap gap-2 mb-3">
                                    {item.tags?.map((tag) => (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            size="small"
                                            color={tag === "New" ? "success" : tag === "Premium" ? "warning" : tag === "Polarized" ? "info" : "default"}
                                        />
                                    ))}
                                </Box>

                                {/* Title */}
                                <Typography variant="subtitle1" fontWeight={600}>{item.title}</Typography>

                                {/* Price */}
                                <Typography variant="h6" fontWeight={700} className="mt-1">Rs {item.price}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box className="flex justify-center mt-16">
                    <Button label="Explore Contact Lenses" sx={{ textTransform: "capitalize", fontSize: { xs: 15, sm: 19 } }} />
                </Box>
            </Box>
        </Box>
    );
};

export default Products;
