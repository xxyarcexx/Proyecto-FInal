const express = require('express');
const router = express.Router();
const { Company } = require('../models');

// Obtener todas las compañías
router.get('/', async (req, res, next) => {
    try {
        const companies = await Company.findAll();
        res.json(companies);
    } catch (error) {
        next(error);
    }
});

// Obtener una compañía por ID
router.get('/:id', async (req, res, next) => {
    try {
        const company = await Company.findByPk(req.params.id);
        if (!company) {
            return res.status(404).json({ message: 'Compañía no encontrada' });
        }
        res.json(company);
    } catch (error) {
        next(error);
    }
});

// Crear nueva compañía
router.post('/', async (req, res, next) => {
    try {
        const { name, address, phone } = req.body;
        const company = await Company.create({ name, address, phone });
        res.status(201).json({
            message: 'Compañía creada exitosamente',
            company
        });
    } catch (error) {
        next(error);
    }
});

// Actualizar compañía
router.put('/:id', async (req, res, next) => {
    try {
        const { name, address, phone } = req.body;
        const company = await Company.findByPk(req.params.id);
        
        if (!company) {
            return res.status(404).json({ message: 'Compañía no encontrada' });
        }

        await company.update({ name, address, phone });
        res.json({
            message: 'Compañía actualizada exitosamente',
            company
        });
    } catch (error) {
        next(error);
    }
});

// Eliminar compañía
router.delete('/:id', async (req, res, next) => {
    try {
        const company = await Company.findByPk(req.params.id);
        
        if (!company) {
            return res.status(404).json({ message: 'Compañía no encontrada' });
        }

        await company.destroy();
        res.json({ message: 'Compañía eliminada exitosamente' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;