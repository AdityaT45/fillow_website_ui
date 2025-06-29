import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

interface CardSliderProps {
  cards: {
    title: string;
    subtitle: string;
  }[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const [index, setIndex] = useState(0);

  const handleChange = (direction: "left" | "right") => {
    if (direction === "left") {
      setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    } else {
      setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        width:"50%"
       
        
      }}
    >
      {/* Card */}
      <Card sx={{ width: "90%",  textAlign: "center" }}>
        <CardContent>
          <Typography variant="h6">{cards[index].title}</Typography>
          <Typography variant="caption" mt={2}>
            {cards[index].subtitle}
          </Typography>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <IconButton
          onClick={() => handleChange("left")}
          sx={{
            backgroundColor: "#eee",
            "&:hover": { backgroundColor: "#ccc" },
            borderRadius: "50%",
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>

        <IconButton
          onClick={() => handleChange("right")}
          sx={{
            backgroundColor: "#eee",
            "&:hover": { backgroundColor: "#ccc" },
            borderRadius: "50%",
          }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CardSlider;
