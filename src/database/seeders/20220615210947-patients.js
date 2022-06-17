module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Patients',
    [
      {
        first_name: 'Avraham',
        last_name: 'Avinu ',
        date_of_birth: '03/17/1955',
        email: 'leo@test.com',
        address: 'Fools street, 10',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        first_name: 'Itzhak',
        last_name: 'ben Avraham ',
        date_of_birth: '05/09/1937',
        email: 'leo@test.com',
        address: 'Fools street, 10',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        first_name: 'Yaakov',
        last_name: 'ben Itzhak ',
        date_of_birth: '07/15/1988',
        email: 'leo@test.com',
        address: 'Fools street, 10',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        first_name: 'Yosef',
        last_name: 'ben Yaakov ',
        date_of_birth: '09/08/1990',
        email: 'leo@test.com',
        address: 'Fools street, 10',

        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        first_name: 'Moshe',
        last_name: 'Abeinu ',
        date_of_birth: '11/11/2010',
        email: 'leo@test.com',
        address: 'Fools street, 10',

        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }, {
        first_name: 'David HaMelech',
        last_name: 'ben Father ',
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
