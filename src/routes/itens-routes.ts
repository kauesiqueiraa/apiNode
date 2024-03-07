// POST: Criar novo item /api/itens
// GET: ler todos os itens /api/itens
// GET: ler um item específico /api/itens/{id}
// PUT: atualixar um item /api/itens/{id}
// DELETE: apagar um item /api/itens/{id}

import express from 'express';

const itensRouter = express.Router();

itensRouter.post( '/itens', (req, res) => {
  res.send('Criar um novo item')
})

itensRouter.get( '/itens', (req, res) => {
  res.send('Lêr todos os itens')
})

itensRouter.get( '/itens/:id', (req, res) => {
  res.send('Lê o item ${id}')
})

itensRouter.post( '/itens', (req, res) => {
  res.send('Criar um novo item')
})

itensRouter.post( '/itens', (req, res) => {
  res.send('Criar um novo item')
})