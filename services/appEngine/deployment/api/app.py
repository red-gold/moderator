from flask import Flask, request
from flask import jsonify
from moderator import GoogleNLP
g = GoogleNLP({})

app = Flask(__name__)

@app.route('/')
def main():
    dictionary = {'message': 'this is deployment'}
    return jsonify(dictionary)

@app.route('/deployment')
def deployment():
    content = str(request.args.get('content'))    
    insights = g.predict(content)
    return jsonify(insights)

if __name__ == '__main__':
    app.run(debug=True)
