"use client"; // Client component kyunki hum MUI use kar rahe hain

import { Button as MUIButton, ButtonProps } from "@mui/material";
import React from "react";

// Props extend kar di TypeScript ke liye, extra props bhi pass kar sakte ho
interface CustomButtonProps extends ButtonProps {
  label: string;        // Button ka text
  variant?: "text" | "contained" | "outlined"; // MUI variants
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  fullWidth?: boolean;
}

const Button: React.FC<CustomButtonProps> = ({
  label,
  variant = "contained",
  color = "primary",
  fullWidth = false,
  ...rest
}) => {
  return (
    <MUIButton
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      {...rest} // extra props jaise onClick, disabled waghera
    >
      {label}
    </MUIButton>
  );
};

export default Button;
