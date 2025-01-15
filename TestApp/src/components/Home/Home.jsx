import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Paper,
} from "@mui/material";

const Home = () => {
  const courseList = ["Course 1", "Course 2", "Course 3"];
  const professors = ["John Doe", "Jane Smith", "Alice Brown","John Brown","Jane Doe"];
  const instructors = {
    "John Doe": "MS in Data Science",
    "Jane Smith": "MS in Mathematics",
    "Alice Brown": "MS in Physics",
    "John Brown":"MS in Chemistry ",
    "Jane Doe":"MS in Biology "
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="primary" sx={{ paddingX: { xs: 2, sm: 4 } }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            E-Learn
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: { xs: "30px 10px", sm: "50px 20px" },
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}>
          Welcome to E-Learn
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, marginBottom: 2 }}
        >
          Learn from the best instructors, anytime, anywhere.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>

      {/* Featured Courses */}
      <Container sx={{ marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>
          Featured Courses
        </Typography>
        <Grid container spacing={3}>
          {courseList.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.dribbble.com/users/458944/screenshots/16483774/media/a3497be19a0537cd1ae55d3ad5c0acff.png?format=webp&resize=400x300&vertical=center"
                  alt={course}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h5">{course}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    A brief description of {course}.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials */}
      {/* Testimonials */}
<Box
  sx={{
    backgroundColor: "#e8eaf6",
    padding: { xs: "30px 10px", sm: "40px 20px" },
    marginTop: 5,
  }}
>
  <Container>
    <Typography variant="h4" gutterBottom>
      Meet our Instructors
    </Typography>
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: 3,
        paddingY: 2,
      }}
    >
      {professors.map((name, index) => (
        <Box
          key={index}
          sx={{
            minWidth: "250px",
            maxWidth: "250px",
            flexShrink: 0,
          }}
        >
          <Paper sx={{ padding: 3 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://m.media-amazon.com/images/I/81yP+dpbmeL._AC_UF1000,1000_QL80_.jpg"
              alt={name}
              sx={{ objectFit: "cover" }}
            />
            <Typography variant="h6" textAlign="center" mt={2}>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              {instructors[name]}
            </Typography>
          </Paper>
        </Box>
      ))}
    </Box>
  </Container>
</Box>


      {/* Call to Action */}
      <Box
        sx={{
          backgroundColor: "#3f51b5",
          color: "#fff",
          textAlign: "center",
          padding: { xs: "20px 10px", sm: "30px" },
          marginTop: 5,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Ready to start your learning journey?
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Join Now
        </Button>
      </Box>
    </>
  );
};

export default Home;
