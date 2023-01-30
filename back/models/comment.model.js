module.exports = (sequelize, Sequelize) => {
    class Comment extends Sequelize.Model {
      static createTable() {
        return this.init(
          {
            content: {
              type: Sequelize.TEXT(),
              allowNull: false,
            },
          },
          {
            sequelize,
            timestamp: true
          }
        );
      }
      static associate(models) {
          this.belongsTo(models.Board, {
              foreignKey: "boardid",
          })
          this.belongsTo(models.User, {
              foreignKey: "userid"
          })
          this.hasMany(models.PointUp, {
            foreignKey: "commentid",
          });
      }
    }
    Comment.createTable();
  };
  