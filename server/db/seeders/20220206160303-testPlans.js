module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Plans', [
      {
        userId: 1,
        title: 'Go shopping',
        description: 'Buy jeans',
        date: '2022-02-12',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Plans', null, {});
  },
};
