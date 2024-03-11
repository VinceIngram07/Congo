from flask import Flask, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'VinD1120'
app.config['MYSQL_DB'] = 'congo'

mysql = MySQL(app)

@app.route('/category')
def hello_world():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM category;')
    data = cur.fetchall()
    cur.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)