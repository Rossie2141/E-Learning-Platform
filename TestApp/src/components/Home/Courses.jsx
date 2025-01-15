import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const courseList = {
  "Course 1": "https://via.placeholder.com/150",
  "Course 2": "https://via.placeholder.com/150",
  "Course 3": "https://via.placeholder.com/150",
};

function Courses() {
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        {Object.entries(courseList).map(([course, imgData]) => (
          <Grid item xs={12} sm={6} md={4} key={course}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image={imgData}
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
    </div>
  );
}

export default Courses;
