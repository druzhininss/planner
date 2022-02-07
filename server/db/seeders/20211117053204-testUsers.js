module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Test',
        password: '$2b$10$h2dcRhHNrOsakgAZbnzdDuF3itVWtRYYY2IFDWJB6d2O5x9TUZQwS',
        email: 'test@test.ru',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
