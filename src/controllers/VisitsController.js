const { VisitsModel, UsersModel, CompaniesModel } = require('../models');

async function createVisit(data) {
    try {
        const newVisit = await VisitsModel.create(data);
        return newVisit;
    } catch (error) {
        throw new Error(`Error al crear la visita: ${error}`);
    }
}

async function getVisits() {
    try {
        const visits = await VisitsModel.findAll({
            include: [
                { model: UsersModel, as: 'user' },
                { model: CompaniesModel, as: 'company' }
            ]
        });
        visits.forEach((visit) => {
            visit.user = visit.user || {};
        });
        visits.forEach((visit) => {
            visit.company = visit.company || {};
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
                { model: UsersModel, as: 'user' },
                { model: CompaniesModel, as: 'company' }
            ]
        });
        if (!visit) {
            throw new Error('Visita no encontrada');
        }
        visit.user = visit.user || {};
        visit.company = visit.company || {};
        return visit;
    } catch (error) {
        throw new Error(`Error al obtener la visita por ID: ${error}`);
    }
}

async function updateVisit(id, data) {
    try {
        const [rowsUpdated, [updatedVisit]] = await VisitsModel.update(data, {
            where: { id },
            returning: true
        });
        if (rowsUpdated === 0) {
            throw new Error('Visita no encontrado');
        }
        return updatedVisit;
    } catch (error) {
        throw new Error(`Error al actualizar la visita: ${error}`);
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
        throw new Error(`Error al eliminar la visita: ${error}`);
    }
}

module.exports = {
    createVisit,
    getVisits,
    getVisitById,
    updateVisit,
    deleteVisit,
};