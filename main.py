import psycopg2
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

try:
    connection = psycopg2.connect(
        user="postgres.wammdmlpnicsdnpmlffc",
        password="Shripss@sql19",
        host="aws-0-ap-south-1.pooler.supabase.com",
        port=6543,
        dbname="postgres"
    )
    print("Database connection successful!")
except Exception as e:
    print(f"Failed to connect to the database: {e}")
    connection = None

@app.route('/allCourses', methods=['GET'])
def get_courses():
    if not connection:
        return jsonify({"error": "Database connection not available"}), 500

    try:
        table_name="Course Details"
        cursor = connection.cursor()
        cursor.execute(f'SELECT * FROM "{table_name}"')
        rows = cursor.fetchall()
        column_names = [desc[0] for desc in cursor.description]
        courses = [dict(zip(column_names, row)) for row in rows]
        cursor.close()
        return jsonify(courses)
    except Exception as e:
        return jsonify({"error": f"Failed to fetch courses: {e}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8080)
