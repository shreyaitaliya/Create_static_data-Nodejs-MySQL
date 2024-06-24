// models/reports.js
module.exports = (sequelize, DataTypes) => {
    const Reports = sequelize.define("reports", {
        reportId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        course: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logindate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: "reports"
    });

    return Reports;
};
