const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Book }) {
      // define association here
      Comment.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE'});
      Comment.belongsTo(Book, { foreignKey: 'bookId', onDelete: 'CASCADE' });
    }
  }
  Comment.init({
    comment: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
