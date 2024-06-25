from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error
app = Flask(__name__)
CORS(app)

DB_CONFIG = {
    'host':"localhost",
    'user':"root", 
    'password':"senai",
    'database':"Papelaria"
}

def conecta_db():
    conexaodb = mysql.connector.connect(**DB_CONFIG)
    cursorDB = conexaodb.cursor()
    return conexaodb, cursorDB

# FECHAR CONEXÃO COM BANCO DE DADOS
def close_db(conexaodb,cursorDB):
    cursorDB.close()
    conexaodb.close()

# CADASTRO DE PRODUTOS
@app.route('/produto', methods=['POST'])
def cadastro_produto():
    try:
        dados = request.json
        try:
            nome = dados['nome']
            descricao = dados['descricao']
            preco = dados['preco']
            quantidade = dados['quantidade']
        except KeyError:
            return jsonify({'messagem':'Não deixe campos vazios!'}), 400
        if not all([nome,descricao,preco,quantidade]):
            return jsonify({'messagem':'Não deixe campos vazios!'}), 400
        conexaodb, cursorDB = conecta_db()
        comandoSQL = "INSERT INTO produto (nome,descricao,preco,quantidade) VALUES (%s,%s,%s,%s);"
        cursorDB.execute(comandoSQL, (nome,descricao,preco,quantidade))
        conexaodb.commit()
        return jsonify({'messagem':'Produto cadastrado com sucesso!'}), 200
    except Error as erro:
        return jsonify({"erro":f"{erro}"}), 500
    finally:
        close_db(conexaodb,cursorDB)


# CADASTRO DE PRODUTOS
@app.route('/produto', methods=['GET'])
def listar_produtos():
    try:
        conexaodb, cursorDB = conecta_db()
        comandoSQL = "SELECT * FROM produto"
        cursorDB.execute(comandoSQL)
        produtos = cursorDB.fetchall()
        if not produtos:
            return jsonify({'messagem':'Não há produtos cadastrados!'}), 200
        return jsonify(produtos),200
    except Error as erro:
        return jsonify({"erro":f"{erro}"}), 500
    finally:
        close_db(conexaodb, cursorDB)

# CADASTRO DE PRODUTOS
@app.route('/produto/<int:id_produto>', methods=['GET'])
def get_produto(id_produto):
    try:
        conexaodb, cursorDB = conecta_db()
        comandoSQL = "SELECT * FROM produto WHERE idProduto=%s"
        cursorDB.execute(comandoSQL,(id_produto,))
        produto = cursorDB.fetchone()
        if not produto:
            return jsonify({'messagem':'Produto não encontrado!'}), 200
        produtojson = {
            'idproduto':produto[0],
            'nome':produto[1],
            'descrição':produto[2],
            'preço':produto[3],
            'quantidade':produto[4]
        }
        return jsonify(produtojson),200
    except Error as erro:
        return jsonify({"erro":f"{erro}"}), 500
    finally:
        close_db(conexaodb, cursorDB)

# CADASTRO DE PRODUTOS
@app.route('/produto', methods=['PUT'])
def edit_produto():
    try:
        dados = request.json
        try:
            id_produto = dados['idproduto']
            nome = dados['nome']
            descricao = dados['descricao']
            preco = dados['preco']
            quantidade = dados['quantidade']
        except KeyError:
            return jsonify({'messagem':'Não deixe campos vazios!'}), 400
        if not all([id_produto,nome,descricao,preco,quantidade]):
            return jsonify({'messagem':'Não deixe campos vazios!'}), 400
        conexaodb, cursorDB = conecta_db()
        comandoSQL = "SELECT * FROM produto WHERE idProduto=%s"
        cursorDB.execute(comandoSQL,(id_produto,))
        produto = cursorDB.fetchone()
        if not produto:
            return jsonify({'messagem':'Produto não encontrado!'}), 200
        comandoSQL = "UPDATE produto SET nome=%s, descricao=%s, preco=%s, quantidade=%s WHERE idProduto=%s;"
        cursorDB.execute(comandoSQL,(nome, descricao, preco, quantidade,id_produto))
        conexaodb.commit()
        return jsonify({'messagem':'Produto atualizado com sucesso!'}), 200
    except Error as erro:
        return jsonify({"erro":f"{erro}"}), 500
    finally:
        close_db(conexaodb, cursorDB)

# CADASTRO DE PRODUTOS
@app.route('/produto', methods=['DELETE'])
def deletar_produto():
    try:
        dados = request.json
        id_produto = dados['idproduto']

        conexaodb, cursorDB = conecta_db()
        comandoSQL = "SELECT * FROM produto WHERE idProduto=%s"
        cursorDB.execute(comandoSQL,(id_produto,))
        produto = cursorDB.fetchone()
        if not produto:
            return jsonify({'messagem':'Produto não encontrado!'}), 200

        comandoSQL = 'DELETE FROM produto WHERE idProduto=%s'
        cursorDB.execute(comandoSQL,(id_produto,))
        conexaodb.commit()
        return jsonify({'messagem':'Produto excluído com sucesso!'}), 200
    except Error as erro:
        return jsonify({"erro":f"{erro}"}), 500
    finally:
        close_db(conexaodb,cursorDB)

#ERRO 404
@app.errorhandler(404)
def pagina_nao_encontrada(erro):
    return jsonify({'erro':'Página não encontrada'}),404

#ERRO 405
@app.errorhandler(405)
def metodo_invalido(erro):
    return jsonify({'erro':'Método HTTP inválido'}), 405

#ERRO 500
@app.errorhandler(500)
def metodo_invalido(erro):
    return jsonify({'erro':'Erro interno no servidor'}),500        
  
if __name__ == '__main__':
  app.run(host='0.0.0.0', port=80)