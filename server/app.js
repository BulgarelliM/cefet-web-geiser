// Fonte: https://fegemo.github.io/cefet-web/classes/ssn3/#15
// importação de dependência(s)
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
var app = express();


// variáveis globais deste módulo
const PORT = 3000;
const db = {};
const __filename = fileURLToPath(import.meta.url);

// carregar "banco de dados" (data/jogadores.json e data/jogosPorJogador.json)
// você pode colocar o conteúdo dos arquivos json no objeto "db" logo abaixo
// dica: 1-4 linhas de código (você deve usar o módulo de filesystem (fs))

// configurar qual templating engine usar. Sugestão: hbs (handlebars)
//app.set('view engine', '???qual-templating-engine???');
//app.set('views', '???caminho-ate-pasta???');
// dica: 2 linhas

// EXERCÍCIO 2
// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json (~3 linhas)

// EXERCÍCIO 3
// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter ~15 linhas de código

// EXERCÍCIO 1
// configurar para servir os arquivos estáticos da pasta "client"
// dica: 1 linha de código
// Fonte: https://nodejs.org/api/path.html#pathdirnamepath
app.use(express.static(path.join(path.parse(path.dirname(__filename)).dir, '/client')));

// abrir servidor na porta 3000 (constante PORT)
// dica: 1-3 linhas de código
//C:\Users\maria\OneDrive\Documents\CEFET\WEB\web-tp-11\cefet-web-geiser
//C:\Users\maria\OneDrive\Documents\CEFET\WEB\web-tp-11\cefet-web-geiser\client
app.listen(PORT, function () {
  console.log("Ready");
});
