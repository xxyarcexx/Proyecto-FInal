const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Obtener todos los usuarios
router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'username', 'email', 'roleId']
        });
        res.json(users);
    } catch (error) {
        next(error);
    }
});

// Obtener un usuario por ID
router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: ['id', 'username', 'email', 'roleId']
        });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
});

// Actualizar usuario
router.put('/:id', async (req, res, next) => {
    try {
        const { username, email, roleId } = req.body;
        const user = await User.findByPk(req.params.id);
        
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        await user.update({ username, email, roleId });
        
        res.json({
            message: 'Usuario actualizado exitosamente',
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                roleId: user.roleId
            }
        });
    } catch (error) {
        next(error);
    }
});

// Eliminar usuario
router.delete('/:id', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        await user.destroy();
        res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;