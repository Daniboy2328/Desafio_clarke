from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.static_folder = 'static'

fornecedores = [
    {"nome": "EcoPower", "logo": "static/logo1.jpeg", "limite_minimo_kwh": 0, "limite_maximo_kwh": 20000},
    {"nome": "VoltLivre", "logo": "static/logos/logo2.jpeg", "limite_minimo_kwh": 15000, "limite_maximo_kwh": 30000},
    {"nome": "BioWatt", "logo": "static/logos/logo3.jpeg", "limite_minimo_kwh": 25000, "limite_maximo_kwh": 40000},
    {"nome": "ClearLight", "logo": "static/logos/logo4.jpeg", "limite_minimo_kwh": 35000, "limite_maximo_kwh": 50000},
    {"nome": "PureWatt", "logo": "static/logos/logo5.jpeg", "limite_minimo_kwh": 45000, "limite_maximo_kwh": 60000},
]

@app.route('/calcular-melhores-fornecedores', methods=['POST'])
def calcular_melhores_fornecedores():
    try:
        dados_cliente = request.get_json()
        consumo_cliente = dados_cliente.get('consumo')

        melhores_fornecedores = [
            {"nome": fornecedor["nome"], "logo": fornecedor["logo"]}
            for fornecedor in fornecedores
            if fornecedor['limite_minimo_kwh'] <= consumo_cliente <= fornecedor['limite_maximo_kwh']
        ]

        return jsonify({"melhores_fornecedores": melhores_fornecedores})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
