module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Patients',
    [
      {
        name: 'Avraham',
        date_of_birth: '03/17/1955',
        email: 'leo@test.com',
        address: 'Fools street, 10',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Itzhak',
        date_of_birth: '05/09/1937',
        email: 'leo@test.com',
        address: 'Fools street, 10',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Yaakov',
        date_of_birth: '07/15/1988',
        email: 'leo@test.com',
        address: 'Fools street, 10',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Yosef',
        date_of_birth: '09/08/1990',
        email: 'leo@test.com',
        address: 'Fools street, 10',

        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Moshe',
        date_of_birth: '11/11/2010',
        email: 'leo@test.com',
        address: 'Fools street, 10',

        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }, {
        name: 'David HaMelech',
        date_of_birth: '01/06/1978',
        email: 'leo@test.com',
        address: 'Fools street, 10',

        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Patients', null, {}),
};
