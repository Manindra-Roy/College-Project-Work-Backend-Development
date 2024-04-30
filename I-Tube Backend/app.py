
from flask import Flask, render_template, request, redirect, url_for, Response
from pymongo import MongoClient
from gridfs import GridFS
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

# Connect to MongoDB
client = MongoClient("mongodb+srv://sgg349:sgg349password@cluster0.cbncjeu.mongodb.net/")
db = client["itubedb"]
collection = db["usersss"]
fs = GridFS(db)

# Set the upload directory
UPLOAD_FOLDER = 'temp'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/uploadvideo')
def uploadvid():
    return render_template('uploadvideo.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return redirect(request.url)
    file = request.files['file']
    if file.filename == '':
        return redirect(request.url)
    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        # Save file to MongoDB using GridFS
        with open(os.path.join(app.config['UPLOAD_FOLDER'], filename), 'rb') as f:
            fs.put(f, filename=filename)
        os.remove(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return redirect(url_for('view_uploaded_videos'))

@app.route('/videos')
def view_uploaded_videos():
    # Retrieve all uploaded videos from MongoDB
    uploaded_videos = [file for file in fs.find()]
    return render_template('index.html', uploaded_videos=uploaded_videos)


@app.route('/signin')
def sigin():
    return render_template('Sign in page.html')

@app.route('/signuppage', methods=['GET', 'POST'])
def signup():
    return render_template('sign-up.html')

@app.route('/submit_signup', methods=['POST'])
def submitsignupform():
    if request.method == 'POST':
        # Get form data
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        email = request.form['email']
        password = request.form['password']
        dob = request.form['dob']

        # Create a document to insert into MongoDB
        user_data = {
            'firstname': firstname,
            'lastname': lastname,
            'email': email,
            'password': password,
            'dob': dob
        }

        # Insert data into MongoDB
        collection.insert_one(user_data)

        return render_template('homepage.html')

@app.route('/video/<video_id>')
def video(video_id):
    # Retrieve video from MongoDB using GridFS
    video_file = fs.find_one({"filename": video_id})
    if video_file is None:
        return 'Video not found', 404
    response = Response(video_file.read(), mimetype='video/mp4')
    return response

if __name__ == '__main__':
    app.run(debug=True)

# Date: 15/02/2024, by -S.R.