import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardMedia,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

function PrimeVideoClone() {
  return (
    <Box sx={{ bgcolor: "#00050d", minHeight: "100vh" }}>
      {/* AppBar for Navigation */}
      <AppBar
        position="static"
        sx={{
          bgcolor: "#00050d",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Toolbar sx={{ minHeight: "72px !important", gap: 0.5 }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "24px",
              fontWeight: "normal",
              color: "#00a8e1",
              cursor: "pointer",
              mr: 3,
            }}
          >
            prime video
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "normal",
                minWidth: "auto",
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "normal",
                minWidth: "auto",
              }}
            >
              Movies
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "normal",
                minWidth: "auto",
              }}
            >
              TV shows
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "normal",
                minWidth: "auto",
              }}
            >
              Live TV
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton color="inherit" size="large">
            <SearchIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mx: 2 }}>
            <LanguageIcon fontSize="small" />
            <Select
              value="EN"
              variant="standard"
              sx={{
                color: "white",
                "&:before": { borderColor: "transparent" },
                "&:after": { borderColor: "transparent" },
                "& .MuiSelect-select": {
                  paddingRight: "24px",
                  fontSize: "0.9rem",
                },
              }}
            >
              <MenuItem value="EN">EN</MenuItem>
            </Select>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#1b98e0",
              "&:hover": { bgcolor: "#40a9e6" },
              borderRadius: "3px",
              textTransform: "none",
              fontSize: "1rem",
              px: 2.5,
              py: 0.7,
              minWidth: "auto",
            }}
          >
            Join Prime
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          px: 8,
          py: 6,
          color: "white",
          textAlign: "left",
        }}
      >
        <Box sx={{ maxWidth: "45%" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "48px",
              fontWeight: "500",
              mb: 2,
              lineHeight: 1.1,
            }}
          >
            Welcome to Prime Video
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "21px",
              mb: 3,
              opacity: 0.9,
              lineHeight: 1.3,
            }}
          >
            Join Prime to watch the latest movies, TV shows and award-winning
            Amazon Originals
          </Typography>
          <Button
            sx={{
              bgcolor: "#1b98e0",
              color: "white",
              "&:hover": { bgcolor: "#40a9e6" },
              borderRadius: "3px",
              textTransform: "none",
              fontSize: "17px",
              px: 3,
              py: 1,
              minWidth: "auto",
            }}
          >
            Sign in to join Prime
          </Button>
        </Box>
      </Box>

      {/* Movie Rentals Section */}
      <Box sx={{ px: 8, py: 4, color: "white" }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "32px",
            fontWeight: "500",
            mb: 3,
          }}
        >
          Movie rentals on Prime Video
        </Typography>
        <Grid container spacing={2}>
          {[1, 2, 3].map((index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ bgcolor: "transparent", boxShadow: "none" }}>
                <CardMedia
                  component="img"
                  alt={`Movie ${index}`}
                  sx={{
                    borderRadius: "6px",
                    height: "400px",
                    objectFit: "cover",
                  }}
                  image={`https://via.placeholder.com/400x600?text=Movie+${index}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default PrimeVideoClone;
