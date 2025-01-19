// cd Test

// Sample data for enrolled courses
const courses = [
  {
    id: 1,
    name: "Introduction to Data Science",
    description: "Learn the basics of data science and its applications.",
    progress: 50, // Progress in percentage
  },
  {
    id: 2,
    name: "React for Beginners",
    description: "A beginner's guide to building React applications.",
    progress: 75,
  },
  {
    id: 3,
    name: "Machine Learning Fundamentals",
    description: "Understand the fundamentals of machine learning.",
    progress: 20,
  },
];

const MyDashboard = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>My Dashboard</h1>
      <h2>Enrolled Courses</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <div
                style={{
                  background: "#f3f3f3",
                  borderRadius: "8px",
                  overflow: "hidden",
                  height: "10px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: `${course.progress}%`,
                    height: "100%",
                    background: "#4caf50",
                  }}
                ></div>
              </div>
              <p style={{ marginTop: "5px" }}>{course.progress}% completed</p>
            </div>
          ))
        ) : (
          <p>You are not enrolled in any courses yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyDashboard;
