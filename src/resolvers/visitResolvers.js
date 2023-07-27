const VisitsController = require('../controllers/VisitsController');
const RolesController = require("../controllers/RolesController");

const visitResolvers = {
    Query: {
        visits: async () => {
            try {
                const visits = await VisitsController.getVisits()
                return visits;
            } catch (error) {
                throw new Error('Error fetching visits: ' + error.message);
            }
        },
        visit: async (parent, { id }) => {
            try {
                const visit = await VisitsController.getVisitById(id)
                return visit;
            } catch (error) {
                throw new Error('Error fetching visit: ' + error.message);
            }
        },
    },
    Mutation: {
        createVisit: async (parent, { input }) => {
            try {
                const visit = await VisitsController.createVisit(input);
                return visit;
            } catch (error) {
                throw new Error('Error creating visit: ' + error.message);
            }
        },
        updateVisit: async (parent, { id, input }) => {
            try {
                const visit = await VisitsController.getVisitById(id);
                if (!visit) {
                    throw new Error('Visit not found');
                }
                await VisitsController.updateVisit(id, input);
                return visit;
            } catch (error) {
                throw new Error('Error updating visit: ' + error.message);
            }
        },
        deleteVisit: async (parent, { id }) => {
            try {
                const visit = await VisitsController.getVisitById(id);
                if (!visit) {
                    throw new Error('Visit not found');
                }
                await VisitsController.deleteVisit(id);
                return true;
            } catch (error) {
                throw new Error('Error deleting visit: ' + error.message);
            }
        },
    },
};

module.exports = visitResolvers;