# Link para o protótipo do projeto:
https://www.figma.com/file/cBBPQFyxAxlSEWnHhFxzIt/Untitled?type=design&node-id=0%3A1&mode=dev

# Projeto de Cálculo de Melhores Fornecedores de Energia

Este projeto visa criar um site para ajudar os usuários a encontrar os melhores fornecedores de energia com base no seu consumo mensal.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- [Python](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Configuração do Backend (Flask)

1. Navegue até a pasta do backend:

    ```bash
    cd backend
    ```

2. Crie e ative um ambiente virtual (opcional, mas recomendado):

    ```bash
    python -m venv venv
    .\venv\Scripts\activate
    ```

3. Instale as dependências do Flask:

    ```bash
    pip install -r requirements.txt
    ```

4. Execute o servidor Flask:

    ```bash
    python app.py
    ```

   O backend estará rodando em `http://127.0.0.1:5000/`.

## Configuração do Frontend (React)

1. Navegue até a pasta do frontend:

    ```bash
    cd frontend
    ```

2. Instale as dependências do React:

    ```bash
    yarn install
    ```

3. Inicie o aplicativo React:

    ```bash
    yarn dev
    ```

   O frontend estará disponível em `http://localhost:5173/`.

Agora, você pode acessar o site em seu navegador e começar a calcular os melhores fornecedores de energia com base no seu consumo mensal.
