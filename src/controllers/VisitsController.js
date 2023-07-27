const { VisitsModel, UsersModel, CompaniesModel } = require('../models');

async function createVisit(data) {
    try {
        const newVisit = await VisitsModel.create(data);
        return newVisit;
    } catch (error) {
        throw new Error('Error al crear la visita');
    }
}

async function getVisits() {
    try {
        const visits = await VisitsModel.findAll({
            include: [
                { model: UsersModel, as: 'users' },
                { model: CompaniesModel, as: 'companies' }
            ]
        });
        return visits;
    } catch (error) {
        throw new Error('Error al obtener las visitas');
    }
}

async function getVisitById(id) {
    try {
        const visit = await VisitsModel.findByPk(id, {
            include: [
                { model: UsersModel, as: 'users' },
                { model: CompaniesModel, as: 'companies' }
            ]
        });
        if (!visit) {
            throw new Error('Visita no encontrada');
        }
        return visit;
    } catch (error) {
        throw new Error('Error al obtener la visita por ID');
    }
}

async function updateVisit(id, data) {
    try {
        const visit = await VisitsModel.findByPk(id);
        if (!visit) {
            throw new Error('Visita no encontrada');
        }
        await visit.update(data);
        return visit;
    } catch (error) {
        throw new Error('Error al actualizar la visita');
    }
}

async function deleteVisit(id) {
    try {
        const visit = await VisitsModel.findByPk(id);
        if (!visit) {
            throw new Error('Visita no encontrada');
        }
        await visit.destroy();
        return id;
    } catch (error) {
        throw new Error('Error al eliminar la visita');
    }
}

module.exports = {
    createVisit,
    getVisits,
    getVisitById,
    updateVisit,
    deleteVisit,
};