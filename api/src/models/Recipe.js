const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [5, 40],
        msg: "El nombre debe contener entre 5 y 10 caracteres",
          }
      }
  },

  imagen:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  resumen_plato:{
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
          len:{
          args:[40,700],
          msg: "La descripción debe contener entre 5 y 700 caracteres"
          }
      }
  },
  Nivel_food:{
      type: DataTypes.INTEGER,
  },
  paso_paso:{
      type:DataTypes.TEXT,
    allowNull:false,

  }
  },
    { freezeTableName: true, timestamps: false }
  );
};
