const CompaniesController = require('../controllers/CompaniesController');

const companyResolvers = {
    Query: {
        companies: async () => {
            try {
                const companies = await CompaniesController.getCompanies()
                return companies;
            } catch (error) {
                throw new Error('Error fetching companies: ' + error.message);
            }
        },
        company: async (parent, { id }) => {
            try {
                const company = await CompaniesController.getCompanyById(id)
                return company;
            } catch (error) {
                throw new Error('Error fetching company: ' + error.message);
            }
        },
    },
    Mutation: {
        createCompany: async (parent, { input }) => {
            try {
                const company = await CompaniesController.createCompany(input);
                return company;
            } catch (error) {
                throw new Error('Error creating company: ' + error.message);
            }
        },
        updateCompany: async (parent, { id, input }) => {
            try {
                const company = await CompaniesController.getCompanyById(id);
                if (!company) {
                    throw new Error('Company not found');
                }
                await CompaniesController.updateCompany(id, input);
                return company;
            } catch (error) {
                throw new Error('Error updating company: ' + error.message);
            }
        },
        deleteCompany: async (parent, { id }) => {
            try {
                const company = await CompaniesController.getCompanyById(id);
                if (!company) {
                    throw new Error('Company not found');
                }
                await CompaniesController.deleteCompany(id);
                return true;
            } catch (error) {
                throw new Error('Error deleting company: ' + error.message);
            }
        },
    },
};

module.exports = companyResolvers;