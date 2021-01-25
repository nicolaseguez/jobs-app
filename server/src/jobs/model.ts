import {Model, DataTypes} from 'sequelize';
import { conn } from '../db';

class Log extends Model {}

const definition = {
  time: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  location: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  ip: {
    type: DataTypes.STRING(255)
  }
};

Log.init(definition, { modelName: 'Log', sequelize: conn });

export {Log}