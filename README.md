# Papelaria Rabisco

## Descrição

Este é um projeto de um site para a Papelaria Rabisco. O site foi desenvolvido utilizando React e Next.js para o frontend e Flask para o backend. Ele permite visualizar produtos disponíveis, detalhes de cada produto e informações sobre os funcionários.

## Funcionalidades

1. **Página Inicial**:
   - Apresenta um carrossel de imagens promocionais.
   - Inclui um título de boas-vindas.

2. **Página de Produtos**:
   - Lista todos os produtos disponíveis.
   - Permite acessar detalhes de cada produto.

3. **Página de Contatos**:
   - Lista informações sobre os funcionários.

4. **Página de Detalhes do Produto**:
   - Exibe informações detalhadas de um produto específico, como nome, descrição, preço e quantidade em estoque.

## Estrutura do Projeto

### Backend (Flask)

- **`app.py`**: Arquivo principal do Flask que contém as rotas para manipulação dos produtos.

### Frontend (React e Next.js)

#### Serviços

- **`api.js`**: Arquivo de serviços para conectar com a API em Flask.
- **`apiEmployees.js`**: Arquivo de serviços para conectar com a API de funcionários do site Reqres.

#### Componentes

- **`H1.jsx`**: Componente para títulos.
- **`HeaderB.jsx`**: Componente do cabeçalho do site.
- **`Carrossel.jsx`**: Componente de carrossel de imagens.
- **`CardProdut.jsx`**: Componente para exibir informações dos produtos.
- **`CardEmployees.jsx`**: Componente para exibir informações dos funcionários.
- **`CardList.jsx`**: Componente para listar todos os produtos.
- **`CardListEmployees.jsx`**: Componente para listar todos os funcionários.

#### Páginas

- **`index.jsx`**: Página inicial.
- **`produtos.jsx`**: Página de produtos.
- **`contatos.jsx`**: Página de contatos.
- **`detalhes.jsx`**: Página de detalhes de um produto específico.

## Instalação e Execução

### Backend

1. Certifique-se de ter o Python instalado.
2. Crie e ative um ambiente virtual:
   ```bash
   python -m venv venv
   source venv/bin/activate  # No Windows use `venv\Scripts\activate`
3. Instale as dependências:
   ```bash
   pip install flask flask-cors
4. Execute a aplicação:
   ```bash
   python app.py

### Frontend

1. Certifique-se de ter o Node.js e npm instalados.
2. Instale as dependências do projeto:
   ```bash
   npm install
3. Execute a aplicação:
   ```bash
   npm run dev

## Tecnologias Utilizadas

- **Frontend:**
  - React
  - Next.js
  - Bootstrap
  - Axios
- **Backend:**
  - Flask
  - Flask-CORS  




