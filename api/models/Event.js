"use strict";
const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require('uuid'); // Import the uuid library

module.exports = (sequelize) => {
  class Event extends Model {}

  Event.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(), // Generate a new uuid for each new event
        primaryKey: true,
      },
      title: {
        
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Event",
    }
  );

  Event.associate = (models) => {
    // Define any associations here
  };

  return Event;
};
