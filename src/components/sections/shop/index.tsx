import { Box, Typography, useTheme } from "@mui/material";

const categories = [
    { id: 1, img: "/images/category/eyeglasses.jpg", title: "Eyeglasses" },
    { id: 2, img: "/images/category/tomford.webp", title: "Tom Ford Glasses" },
    { id: 3, img: "/images/category/premium.jpg", title: "Premium Glasses" },
    { id: 4, img: "/images/category/sunglasses.webp", title: "Sunglasses" },
    { id: 5, img: "/images/category/premium-s.jpg", title: "Premium Sunglasses" },
    { id: 6, img: "/images/category/tomford-s.jpg", title: "Tom Ford Sunglasses" },
    { id: 7, img: "/images/category/rayban-s.webp", title: "Ray ban Sunglasses" },
];

const CategorySHop = () => {

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                py: 6,
                px: 2,
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    bgcolor: "#e8f2ff",
                    borderRadius: "30px",
                    py: 6,
                    px: { xs: 2, sm: 4, md: 6 },
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight={700}
                    textAlign="center"
                    mb={5}
                    sx={{ fontSize: { xs: "20px", md: "26px" } }}
                >
                    Shop By Category
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(2, 1fr)",
                            sm: "repeat(3, 1fr)",
                            md: "repeat(4, 1fr)",
                            lg: "repeat(7, 1fr)",
                        },
                        gap: { xs: 3, sm: 4, md: 5 },
                        justifyItems: "center",
                    }}
                >
                    {categories.map((item) => (
                        <Box key={item.id} sx={{ textAlign: "center" }}>
                            <Box
                                sx={{
                                    flexBasis: {
                                        xs: "50%",   // 2 per row (mobile)
                                        sm: "33.33%", // 3 per row (small tablet)
                                        md: "25%",    // 4 per row (tablet)
                                        lg: "14.28%"  // 7 per row (desktop)
                                    },
                                    display: "flex",
                                    justifyContent: "center",
                                    mb: { xs: 3, sm: 4 },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: { xs: 100, sm: 120, md: 140 },
                                        height: { xs: 100, sm: 120, md: 140 },
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                                    }}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </Box>
                            </Box>

                            <Typography
                                mt={1.5}
                                fontWeight={600}
                                fontSize={{ xs: "13px", sm: "14px", md: "15px" }}
                            >
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default CategorySHop