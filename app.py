from flask import Flask, render_template, request
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('krystal.html')

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form['name']
    email = request.form['email']
    information = request.form['information']

    # Compose the email message
    message = MIMEMultipart()
    message['From'] = email
    message['To'] = 'empjoshkc@gmail.com'  # Specify the recipient's email address
    message['Subject'] = 'Contact Us Form Submission'
    body = f"Name: {name}\nEmail: {email}\nInformation: {information}"
    message.attach(MIMEText(body, 'plain'))

    # Send the email
    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:  # Specify your SMTP server and port
        smtp.starttls()
        smtp.login('empjoshkc@gmail.com', 'gdktqhvbkkxbuvok')  # Specify your email credentials
        smtp.send_message(message)

    return 'Thank you for your submission!'

if __name__ == '__main__':
    app.run()
