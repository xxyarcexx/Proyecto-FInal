const express = require('express');
const router = express.Router();
const { Role } = require('../models');

// Obtener todos los roles
router.get('/', async (req, res, next) => {
    try {
        const roles = await Role.findAll();
        res.json(roles);
    } catch (error) {
        next(error);
    }
});

// Obtener un rol por ID
router.get('/:id', async (req, res, next) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (!role) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }
        res.json(role);
    } catch (error) {
        next(error);
    }
});

// Crear nuevo rol
router.post('/', async (req, res, next) => {
    try {
        const { name } = req.body;
        const role = await Role.create({ name });
        res.status(201).json({
            message: 'Rol creado exitosamente',
            role
        });
    } catch (error) {
        next(error);
    }
});

// Actualizar rol
router.put('/:id', async (req, res, next) => {
    try {
        const { name } = req.body;
        const role = await Role.findByPk(req.params.id);
        
        if (!role) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        await role.update({ name });
        res.json({
            message: 'Rol actualizado exitosamente',
            role
        });
    } catch (error) {
        next(error);
    }
});

// Eliminar rol
router.delete('/:id', async (req, res, next) => {
    try {
        const role = await Role.findByPk(req.params.id);
        
        if (!role) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        await role.destroy();
        res.json({ message: 'Rol eliminado exitosamente' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;