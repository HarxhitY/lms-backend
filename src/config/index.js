require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5000,
    databaseUrl: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
};
