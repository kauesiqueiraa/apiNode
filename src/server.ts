import express from 'express';
import cors from 'cors';


const PORT = process.env.PORT || 3333;

const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express();

app.get('/', (req, res) => {
  res.send('Hii');
});

app.use(cors({
  origin: `${HOSTNAME}:${PORT}`,
}));

// resposta padrão para qualquer outra requisição
app.use((req, res) => {
  res.status(404)
});

app.listen(PORT, () => {
  console.log(`Servidor HTTP está no ar, endereço: ${HOSTNAME}:${PORT}!`);
});