import psycopg2
from flask import Flask, request, jsonify
from flask_cors import CORS
import hashlib

app = Flask(__name__)
CORS(app)

# Database connection
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

# Sign-up endpoint
@app.route('/signup', methods=['POST'])
def sign_up():
    if not connection:
        return jsonify({"error": "Database connection not available"}), 500

    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return jsonify({"error": "All fields are required."}), 400

    try:
        table_name = "Users"
        cursor = connection.cursor()

        # Check if the email is already in use
        query_check = f'''
            SELECT "Users"."User_email"
            FROM "{table_name}"
            WHERE "Users"."User_email" = %s
        '''
        cursor.execute(query_check, (email,))
        if cursor.fetchone():
            return jsonify({"error": "Email is already registered."}), 400

        # Hash the password for security
        hashed_password = hashlib.sha256(password.encode()).hexdigest()

        # Insert the new user into the database
        query_insert = f'''
            INSERT INTO "{table_name}" ("User_name", "User_email", "User_password")
            VALUES (%s, %s, %s)
        '''
        cursor.execute(query_insert, (name, email, hashed_password))
        connection.commit()

        cursor.close()
        return jsonify({"message": "User registered successfully!"}), 201
    except Exception as e:
        return jsonify({"error": f"Failed to register user: {e}"}), 500

# Login endpoint
@app.route('/login', methods=['POST'])
def login():
    if not connection:
        return jsonify({"error": "Database connection not available"}), 500

    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password are required."}), 400

    try:
        cursor = connection.cursor()

        # Hash the input password for comparison
        hashed_password = hashlib.sha256(password.encode()).hexdigest()

        # Query to check user credentials
        query_login = '''
            SELECT "User_name", "User_email"
            FROM "Users"
            WHERE "User_email" = %s AND "User_password" = %s
        '''
        cursor.execute(query_login, (email, hashed_password))
        user = cursor.fetchone()

        if user:
            # Login successful
            cursor.close()
            return jsonify({
                "message": "Login successful!",
                "user": {
                    "name": user[0],
                    "email": user[1]
                }
            }), 200
        else:
            # Invalid credentials
            cursor.close()
            return jsonify({"error": "Invalid email or password."}), 401
    except Exception as e:
        return jsonify({"error": f"Failed to process login: {e}"}), 500


# Get all courses endpoint
@app.route('/allCourses', methods=['GET'])
def get_courses():
    if not connection:
        return jsonify({"error": "Database connection not available"}), 500

    try:
        table_name = "Course Details"
        cursor = connection.cursor()
        query_courses = f'''
            SELECT *
            FROM "{table_name}"
        '''
        cursor.execute(query_courses)
        rows = cursor.fetchall()
        column_names = [desc[0] for desc in cursor.description]
        courses = [dict(zip(column_names, row)) for row in rows]
        cursor.close()
        return jsonify(courses)
    except Exception as e:
        return jsonify({"error": f"Failed to fetch courses: {e}"}), 500


if __name__ == '__main__':
    app.run(debug=True, port=8080)
