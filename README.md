# Micro Bills

## Dependências básicas necessárias

- Node.js (https://nodejs.org/en/);
- Expo;
- MongoDB

## Como instalar o MongoDB

- Baixar o instalador do MongoDB community server (https://www.mongodb.com/try/download/community);
- Executar o instalador e finalizar o download;
- Após instalado, abrir o explorer e seguir o caminho:
- Este Computador > Windows (C:) > Arquivos de Programas > MongoDB > Server > 6.0 (ou o número da sua versão) > bin;
- Copiar o caminho no topo do explorer, depois clicar com o botão direito em "Este computador" e escolher "Propriedades";
- Nas configurações, clicar em "Configurações avançadas do sistema";
- Ir janela aberta, escolher a aba "Avançado", e clicar em "Variáveis de Ambiente..."
- Em "Variáveis do sistema", clicar na linha escrita "Path" e no botão "Editar..."
- Clique em "Novo", após, cole o caminho copiado da pasta "bin" do MondoDB;
- Estes passos são de extrema importância para o seu backend conseguir reconhecer o banco de dados local para testes;

## Rodar o back-end

- Entrar na pasta backend com um terminal (sugerido cmd);
- Rodar o seguinte comando:

```shell
npm install
```

- Após finalizar todo o processo de instalação, tente rodar o servidor digitando:

```shell
npm start
```

<p>ou...</p>

```shell
nodemon
```

- Para instalar o nodemon:

```shell
npm install -g nodemon
```

- Após isso, fechar o prompt de comando e abrir novamente na pasta;

- Caso apareça a mensagem "Servidor rodando na porta ${n° da porta}", o servidor está rodando
- Caso apareça a mensagem "Banco conectado ao MongoDB", o banco está conectado com o servidor local;

## Para rodar o Aplicativo

- Entrar na pasta "app" com algum prompt;
- Executar o comando:

```shell
npm install
```

- Para conseguir rodar, teremos que instalar o expo-CLI, então execute o comando:

```shell
npm install --global expo-CLI
```

- Após o processo de instalação, execute o comando:

```shell
npx expo start
```

- Caso não dê certo, tente fechar e abrir o prompt novamente;

## OBS:

- Sugerimos rodar o aplicativo em um emulador Android (como o Android Studio) ou instalar o aplicativo "Expo Go" no celular e realizar os testes por ele, pois a experiência será melhor, e eles possuem diversos recursos que os navegadores não terão;
