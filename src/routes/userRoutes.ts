import express from 'express'
import { getusuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } from '../controllers/usuario.controller.js'

const router = express.Router()

router.post('/register', createUsuario)
router.get('/XD', getusuarios)

export default router
