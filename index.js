const express = require('express');
const sequelize = require('./config/db'); // Import sequelize correctly
const { createStaticData } = require('./controller/reportController'); // Import createStaticData from your controller
const routes = require('./routes/reportRoutes'); // Adjust path as per your project structure

const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', routes);


async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        // Uncomment the next line if you need to synchronize the database schema
        await sequelize.sync({ force: false });

        // Call function to create static data
        await createStaticData();

        // Start server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

startServer();
