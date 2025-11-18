import { CategorySHop, Faqs, HomeBanner, Products } from "@/components";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <HomeBanner />
      <CategorySHop />
      <Products />
      <Faqs />
    </Box>
  );
}
