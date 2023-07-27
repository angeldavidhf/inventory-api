const { CompaniesModel, UsersModel, VisitsModel} = require('../models');

async function createCompany(data) {
    try {
        const newCompany = await CompaniesModel.create(data);
        return newCompany;
    } catch (error) {
        throw new Error(`Error al crear la compañía: ${error}`);
    }
}

async function getCompanies() {
    try {
        const companies = await CompaniesModel.findAll({
            include: {
                model: VisitsModel,
                as: 'visits',
                include: [
                    { model: UsersModel, as: 'user' }
                ]
            }
        });

        companies.forEach((company) => {
            company.visits = company.visits || [];
        });

        return companies;
    } catch (error) {
        throw new Error(`Error al obtener las compañías: ${error}`);
    }
}

async function getCompanyById(id) {
    try {
        const company = await CompaniesModel.findByPk(id, {
            include: {
                model: VisitsModel,
                as: 'visits',
                include: [
                    { model: UsersModel, as: 'user' }
                ]
            }
        });

        if (!company) {
            throw new Error('Compañía no encontrada');
        }

        company.visits = company.visits || [];

        return company;
    } catch (error) {
        throw new Error(`Error al obtener la compañía por ID: ${error}`);
    }
}

async function updateCompany(id, data) {
    try {
        const [rowsUpdated, [updatedCompany]] = await CompaniesModel.update(data, {
            where: { id },
            returning: true
        });
        if (rowsUpdated === 0) {
            throw new Error('Empresa no encontrada');
        }
        return updatedCompany;
    } catch (error) {
        throw new Error(`Error al actualizar la compañía: ${error}`);
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
        throw new Error(`Error al eliminar la compañía: ${error}`);
    }
}

module.exports = {
    createCompany,
    getCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany,
};