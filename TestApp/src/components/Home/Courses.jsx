import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import FilterAltSharpIcon from "@mui/icons-material/FilterAltSharp";
import Tooltip from "@mui/material/Tooltip";

function Courses() {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState(""); // State for selected domain filter
  const [domains, setDomains] = useState([]); // State for storing domain options
  const [anchorEl, setAnchorEl] = useState(null); // State for anchor element for the dropdown menu

  useEffect(() => {
    fetch("http://localhost:8080/allCourses")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setCourseList(data);

        // Extract unique domains from the fetched data
        const uniqueDomains = [
          ...new Set(data.map((course) => course["Domain"])), // Assuming "Domain" is the field in your data
        ];
        setDomains(uniqueDomains);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
        setLoading(false);
      });
  }, []);

  // Filter courses based on the selected domain
  const filteredCourses = courseList.filter(
    (course) =>
      !selectedDomain || course["Domain"] === selectedDomain // Filter by domain if selected
  );

  // Handle the opening of the dropdown menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle the closing of the dropdown menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle domain selection from the dropdown
  const handleDomainSelect = (domain) => {
    setSelectedDomain(domain);
    handleClose();
  };

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      {/* Filter Dropdown Icon */}
      <Grid container spacing={2} style={{ marginBottom: "20px", alignItems: "center" }}>
        <Grid item>
          <Tooltip title="Filter" arrow>
            <IconButton onClick={handleClick} style={{ padding: "10px" }}>
              <FilterAltSharpIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleDomainSelect("")}>All Domains</MenuItem>
            {domains.map((domain, index) => (
              <MenuItem key={index} onClick={() => handleDomainSelect(domain)}>
                {domain}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    {course["Course name"]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {course["Course description"]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ fontWeight: "bold" }}>
                    Instructor: {course["Instructor name"]}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Enroll
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary">
            No courses available.
          </Typography>
        )}
      </Grid>
    </div>
  );
}

export default Courses;
