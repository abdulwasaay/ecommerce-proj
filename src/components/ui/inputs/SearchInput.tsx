"use client";

import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    iconSize?: number; // optional icon size
    inputClassName?: string;
    onEnter?: () => void;
}

const SearchInput = ({
    value,
    onChange,
    placeholder = "Search",
    className = "",
    iconSize = 20,
    inputClassName = "",
    onEnter,
}: SearchInputProps) => {
    return (
        <Box
            className={`flex items-center bg-gray-100 rounded-full px-3 border py-1 ${className}`}
        >
            {/* Search Icon */}
            <SearchIcon
                sx={{ fontSize: iconSize }}
                className="text-gray-600"
            />

            {/* Input Field */}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`bg-transparent outline-none px-2 text-sm w-full ${inputClassName}`}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && onEnter) onEnter();
                }}
            />
        </Box>
    );
};

export default SearchInput;
