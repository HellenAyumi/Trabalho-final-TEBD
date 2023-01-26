const router = require('express').Router()

const Festa = require('../models/Festa')


//Criar festa
router.post('/', async (req, res) => {
    const { nome, convidados, local, decoracao, buffet } = req.body

    const festa = {
        nome,
        convidados,
        local,
        decoracao,
        buffet
    }


    if (!nome) {
        res.status(422).json({ error: 'Nome obrigatorio' })
    } else {

        try {

            await Festa.create(festa)
            res.status(201).json({ message: 'Festa criada' })

        } catch (error) {
            res.status(500).json({ message: 'erro' })
        }
    }

})

//mostrar todas as festas

router.get('/', async (req, res) => {
    try {
        const festa = await Festa.find()

        res.status(200).json(festa)
    } catch (error) {
        res.status(500).json({ message: 'error' })
    }
})

//mostrar uma festa
/*router.get('/:id', async(req,res) => {
    //extrair dado da requisição,pela URL
    const id = req.params.id
    try{
        const festa = await Festa.findOne({_id: id})

        res.status(200).json(festa)

    }catch(error){
        res.status(500).json({message: 'error'})
    }
})*/


//atualizar festa
router.patch('/:id', async (req, res) => {
    const id = req.params.id

    const { nome, convidados, local, decoracao, buffet } = req.body
    const festa = {
        nome: String,
        convidados: Number,
        local: String,
        decoracao: String,
        buffet: String
    }
    try {
        const updatedFesta = await Festa.updateOne({ _id: id }, festa)

        if (updatedFesta.matchedCount === 0) {
            res.status(422).json({ message: 'Usuario nao encontrado' })
            return

        }
        res.status(200).json(festa)
    } catch (error) {
        res.status(500).json({ message: 'error' })
    }
})

//deletar festa
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const festa = await Festa.findOne({ _id: id })

    if (!person) {
        res.status(422).json({ message: 'usuario nao encontrado' })
        return
    }

    try {
        await Festa.deleteOne({ _id: id })

        res.status(200).json({ message: 'festa deletada' })
    } catch (error) {
        res.status(500).json({ message: 'error' })
    }

})



module.exports = router