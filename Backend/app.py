from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'VinD1120'
app.config['MYSQL_DB'] = 'congo'

mysql = MySQL(app)

@app.route('/categories', methods=['GET'])
def get_categories():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM category;')
        data = cur.fetchall()
        cur.close()
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/film')
def film():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM film;')
    data = cur.fetchall()
    cur.close()
    return jsonify(data)

# @app.route('/films', methods=['GET'])
# def get_films_by_category():
#     try:
#         category = request.args.get('category', default='', type=str)
#         if not category:
#             return jsonify(error='Category parameter is missing'), 400

#         cur = mysql.connection.cursor()
#         cur.execute(f'SELECT * FROM film WHERE category = "{category}";')
#         films = cur.fetchall()
#         cur.close()
#         return jsonify(films)
#     except Exception as e:
#         return jsonify(error=str(e)), 500

@app.route('/films', methods=['GET'])
def get_films_by_category():
    try:
        category_name = request.args.get('category')
        
        # Fetch the category_id based on the category_name
        cur = mysql.connection.cursor()
        cur.execute('SELECT category_id FROM category WHERE type_ = %s;', (category_name,))
        category_id = cur.fetchone()[0]
        cur.close()

        # Fetch films using the film_category junction table
        cur = mysql.connection.cursor()
        cur.execute('SELECT f.* FROM film f JOIN film_category fc ON f.film_id = fc.film_id WHERE fc.category_id = %s;', (category_id,))
        films = cur.fetchall()
        cur.close()

        return jsonify(films)
    except Exception as e:
        print(f"Error fetching films: {str(e)}")
        return jsonify({'error': 'Internal Server Error'}), 500



if __name__ == '__main__':
    app.run(debug=True)