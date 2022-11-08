const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [{
      name: 'Oleg',
      email: 'example@mail.ru',
      password: await bcrypt.hash('12345678', 10),
    },
    {
      name: 'Tony',
      email: 'example@ya.ru',
      password: await bcrypt.hash('qwerty', 10),
    },
    ];
    const users = data.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
