const { CompaniesModel, UsersModel, VisitsModel} = require('../models');

async function createCompany(data) {
    try {
        const newCompany = await CompaniesModel.create(data);
        return newCompany;
    } catch (error) {
        throw new Error('Error al crear la compañía');
    }
}

async function getCompanies() {
    try {
        const companies = await CompaniesModel.findAll({
            include: {
                model: VisitsModel,
                as: 'visits'
            }
        });
        return companies;
    } catch (error) {
        throw new Error('Error al obtener las compañías');
    }
}

async function getCompanyById(id) {
    try {
        const company = await CompaniesModel.findByPk(id, {
            include: {
                model: VisitsModel,
                as: 'visits'
            }
        });
        if (!company) {
            throw new Error('Compañía no encontrada');
        }
        return company;
    } catch (error) {
        throw new Error('Error al obtener la compañía por ID');
    }
}

async function updateCompany(id, data) {
    try {
        const company = await CompaniesModel.findByPk(id);
        if (!company) {
            throw new Error('Compañía no encontrada');
        }
        await company.update(data);
        return company;
    } catch (error) {
        throw new Error('Error al actualizar la compañía');
    }
}

async function deleteCompany(id) {
    try {
        const company = await CompaniesModel.findByPk(id);
        if (!company) {
            throw new Error('Compañía no encontrada');
        }
        await company.destroy();

        //const deleted = await CompaniesModel.destroy({
        //   where: { id },
        //});

        return id;
    } catch (error) {
        throw new Error('Error al eliminar la compañía');
    }
}

module.exports = {
    createCompany,
    getCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany,
};