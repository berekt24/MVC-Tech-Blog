const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogComment extends Model {}

BlogComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    blogPost_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'blogPost',
        key: 'id'
      }
    },
    blogComment_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogComment',
  }
);

module.exports = BlogComment;
