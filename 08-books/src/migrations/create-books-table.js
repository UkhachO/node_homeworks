export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Books', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: { type: Sequelize.STRING(255), allowNull: false },
    author: { type: Sequelize.STRING(255), allowNull: false },
    year: { type: Sequelize.INTEGER, allowNull: false },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Books');
}
