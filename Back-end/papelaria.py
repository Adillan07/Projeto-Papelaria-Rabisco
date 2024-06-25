import mysql.connector
import os
conexaodb = mysql.connector.connect(
    host="localhost",
    user="root", 
    password="senai",
    database = "Papelaria"
)
def showHeader():
    os.system('cls')
    print("-"*20)
    print("*** SISTEMA PAPELARIA ***")
    print("-"*20)
    return
def getProduto(idProd):
    idDB = f"SELECT * FROM produto WHERE idProduto='{idProd}'"
    cursorDB = conexaodb.cursor()
    cursorDB.execute(idDB)
    resultado = cursorDB.fetchall()
    return resultado
def cadProd():
    showHeader()
    try:
        nomeProd = input("Muito bem, você escolheu adicionar um produto a lista.\nPrimeiramente, insira o nome do produto: ")
        nomeDB = f"SELECT * FROM produto WHERE nome='{nomeProd}'"
        cursorDB = conexaodb.cursor()
        cursorDB.execute(nomeDB)
        resultado = cursorDB.fetchall()
        if nomeProd.isspace() or nomeProd=="":
            raise ValueError("Não é permitido deixar o nome em branco.")
        elif len(nomeProd) > 50:
            raise ValueError("Nome muito longo!")
        elif resultado:
            raise ValueError("Produto já registrado no estoque! ")
        
        descProd = input("Insira uma descrição para o produto: ")
        if descProd.isspace() or descProd=="":
            raise ValueError("Não é permitido deixar a descrição em branco.")
        valorProd = float(input("Agora, insira o preço do produto (R$): ").replace(',','.'))
        if valorProd < 0:
            raise ValueError("O preço do produto não pode ser negativo.")
        quantProd = int(input("Insira quantas unidades estão no estoque: "))
        if quantProd < 0:
            raise ValueError("Quantidade do produto não pode ser negativa.")
    except ValueError as valerr:
        print(f"Valor inválido! {valerr}")
        os.system("pause")
    else:
        try:
            inserirSQL = f"INSERT INTO produto (nome,descricao,preco,quantidade) VALUES ('{nomeProd}','{descProd}',{valorProd},{quantProd})"
            cursorDB.execute(inserirSQL)
            conexaodb.commit()
            cursorDB.close()
            input(f"Você cadastrou {quantProd} unidade(s) de {nomeProd}, com o valor de R$ {valorProd}. ")
        except mysql.connector.Error as erro:
            print(f"Falha no banco de dados. Erro: {erro}")
            os.system("pause")
        

def updateQuant():
    showHeader()
    try:
        opcao = input("Muito bem, você escolheu alterar a quantidade de um produto da lista.\nPrimeiramente, selecione '1' para incrementar a quantidade ou '2' para decrementar a quantidade: ")
        if opcao != '1' and opcao != '2':
            raise ValueError("Opção inexistente!")
        idProd = input("Insira o código de identificação do produto: ")
        resultado = getProduto(idProd)
        if not resultado:
            raise ValueError(f"Código {idProd} não registrado no estoque!")
        for item in resultado:
            nome = item[1]
            quant = item[4]
            break
        if opcao == '1':   
            addProd = int(input(f"Você escolheu {nome}, cuja quantia em estoque é {quant}.\nInsira quantas unidades deseja incrementar: "))
            if addProd < 0:
                raise ValueError("Valor não pode ser negativo!")
            elif addProd + quant > 10000:
                raise ValueError("Valor exorbitante! Máximo 10000.")
        if opcao == '2':
            rmvProd = int(input(f"Você escolheu {nome}, cuja quantia em estoque é {quant}.\nInsira quantas unidades deseja decrementar: "))
            if rmvProd < 0:
                raise ValueError("Valor não pode ser negativo!")
            elif rmvProd > quant:
                raise ValueError("Valor removido não pode ser maior do que a quantidade em estoque!")
    except ValueError as err:
        input(f"Valor inválido! {err}")
    else:
        if opcao == '1':
            try:
                atualizaSQL = f"UPDATE produto SET quantidade = quantidade + {addProd} WHERE idProduto = {idProd}"
                cursorDB = conexaodb.cursor()
                cursorDB.execute(atualizaSQL)
                conexaodb.commit()
                cursorDB.close()
                input(f"Você adicionou {addProd} unidades de {nome} ao estoque. ")
            except mysql.connector.Error as erro:
                print(f"Falha no banco de dados. Erro: {erro}")
                os.system("pause")
        else:
            try:
                atualizaSQL = f"UPDATE produto SET quantidade = quantidade - {rmvProd} WHERE idProduto = {idProd}"
                cursorDB = conexaodb.cursor()
                cursorDB.execute(atualizaSQL)
                conexaodb.commit()
                cursorDB.close()
                input(f"Você removeu {rmvProd} unidades de {nome} ao estoque. ")
            except mysql.connector.Error as erro:
                print(f"Falha no banco de dados. Erro: {erro}")
                os.system("pause")    


def updatePrc():
    showHeader()
    try:
        idProd = input("Muito bem, você escolheu atualizar o preço de um produto. Primeiramente, insira o código de identificação do produto: ")
        resultado = getProduto(idProd)
        if not resultado:
            raise ValueError(f"Código {idProd} não registrado no estoque!")
        for item in resultado:
            nome = item[1]
            preco = (f"{item[3]}").replace(".",",")
            break
        preco = float(input(f"Você escolheu o produto {nome}, cujo preço é R$ {preco}.\nInsira o novo preço do produto (R$): "))
        if preco < 0:
            raise ValueError("Preço não pode ser negativo!")
    except ValueError as err:
        input(f"Valor inválido! {err}")
    else:
        try:
            atualizaSQL = f"UPDATE produto SET preco = {preco} WHERE idProduto = {idProd}"
            cursorDB = conexaodb.cursor()
            cursorDB.execute(atualizaSQL)
            conexaodb.commit()
            cursorDB.close()
            preco = (f"{preco}").replace(".",",")
            input(f"Você alterou o preço de {nome} para R$ {preco}. ")
        except mysql.connector.Error as erro:
            print(f"Falha no banco de dados. Erro: {erro}.")
            os.system("pause") 
        
        
def exclProd():
    showHeader()
    try:
        idProd = input("Muito bem, você escolheu excluir um um produto. Primeiramente, insira o código de identificação do produto: ")
        resultado = getProduto(idProd)
        if not resultado:
            raise ValueError(f"Código {idProd} não registrado no estoque!")
        for item in resultado:
            nome = item[1]
            break
        confirmacao = input(f"Você tem certeza que deseja exluir o produto {nome}? Digite '1' para confirmar ou '2' para cancelar: ")
        if confirmacao != '1' and confirmacao != '2':
            raise ValueError("Opção inexistente!")
    except ValueError as err:
        input(f"Valor inválido! {err}")
    else:
        if confirmacao == '1':
            try:
                deletaSQL = f"DELETE FROM produto WHERE idProduto = {idProd}"
                cursorDB = conexaodb.cursor()
                cursorDB.execute(deletaSQL)
                conexaodb.commit()
                input(f"Você deletou {nome}.")
            except mysql.connector.Error as erro:
                print(f"Falha no banco de dados. Erro: {erro}")
                os.system("pause") 
        else:
            input(f"Você desistiu de excluir {nome}.")
def listProd():
    try:
        showHeader()
        comandoSQL = "SELECT * FROM produto"
        cursorDB = conexaodb.cursor()
        cursorDB.execute(comandoSQL)
        resultadoDB = cursorDB.fetchall()
        if not resultadoDB:
            print("Ops! Parece que não há produtos cadastrados até o momento.")
        else:
            print(f"Muito bem, você escolheu consultar todos os produtos disponíveis no estoque.\nNesse caso, aqui está a lista: ")
            for item in resultadoDB:
                print(f"Id: {item[0]} - Produto: {item[1]} - Preco: R$ {(f'{item[3]}').replace('.',',')} - Quantidade: {item[4]} - Descrição: {item[2]}")
        os.system("pause")
    except mysql.connector.Error as erro:
            print(f"Falha no banco de dados. Erro: {erro}")
            os.system("pause")
while True:
    showHeader()
    print("1.    Cadastrar produto;\n2.    Alterar quantidade;\n3.    Alterar preço;\n4.    Excluir produto;\n5.    Listar produtos do estoque;\n6.    Sair do sistema;")
    try:
        opcao = input("\nDigite o número correspondente a opção que você deseja escolher: ")
        if opcao == '1':
            cadProd()
        elif opcao == '2':
            updateQuant()
        elif opcao == '3':
            updatePrc()
        elif opcao == '4':
            exclProd()
        elif opcao == '5':
            listProd()
        elif opcao == '6':
            print(f"Muito bem, você escolheu sair do sistema.\nNesse caso, espero que tenha gostado da experiência. Adeus.")
            break
        else:
            print("Código inválido!")
    except:
        print("Valor inválido!")