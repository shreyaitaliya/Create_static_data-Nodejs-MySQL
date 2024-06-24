const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Reports = require('../models/reports')(sequelize, DataTypes);

async function createStaticData() {
    try {
        const staticReports = [
            {
                course: 'Mathematics',
                logindate: '2024-06-22',
                time: '10:00:00'
            },
            {
                course: 'English',
                logindate: '2024-06-22',
                time: '12:30:00'
            },
            {
                course: 'History',
                logindate: '2024-06-23',
                time: '14:15:00'
            }
        ];

        for (const report of staticReports) {
            const existingReport = await Reports.findOne({
                where: {
                    course: report.course,
                    logindate: report.logindate,
                    time: report.time
                }
            });

            if (!existingReport) {
                await Reports.create(report);
            }
        }

        console.log('Static reports created successfully.');
    } catch (error) {
        console.error('Error creating static reports:', error);
    }
}


const reportsShow = async (req, res) => {
    try {
        const all_data = await Reports.findAll();
        return res.json(all_data); // Respond with JSON data

    } catch (error) {
        console.error('Error retrieving reports:', error);
        return res.status(500).json({ error: 'Failed to retrieve reports' });
    }
};

module.exports = {
    createStaticData,
    reportsShow
};
