const express = require('express');
const router = express.Router(); //Roteador express adicionar extras
const { verificar } = require('./../middlewares/AutenticacaoMiddleware')
const perfilService = require('../services/PerfilService')

router.get('', async (req, res) => { 
    try{
        const resposta = await perfilService.buscarUltimos();
        res.json(resposta);
    }   
    catch (error) {
        console.log(JSON.stringify(error))//
        res.status(error.status).json({
            message: error.message
        })
    }
})
router.get('/:id', async (req, res) => {
    try{
        const resposta = await perfilService.buscarPorID(req.params.id);
        res.json(resposta)
    }
    catch (error) {
        console.log(JSON.stringify(error))//
        res.status(error.status).json({
            message: error.message
        })
    }
})
router.post('', async (req, res) => {
    try{
        const resposta = await perfilService.cadastrar(req.body);
        res.json(resposta);
    }
    catch (error) {
        console.log(JSON.stringify(error))//
        res.status(error.status).json({
            message: error.message
        })
    }
})
router.put('/:id', verificar,  async (req, res) => {
    try{
        const resposta = await perfilService.editar(req.params.id, req.body);
        res.json(resposta);
    }
    catch (error) {
        console.log(JSON.stringify(error))//
        res.status(error.status).json({
            message: error.message
        })
    }
})
router.post('/conexao', verificar, async (req, res) => {
    try{
        const resposta = await perfilService.conectar(req.body);
        res.json(resposta)
    }
    catch (error) {
        console.log(JSON.stringify(error))//
        res.status(error.status).json({
            message: error.message
        })
    }
})

module.exports = router;