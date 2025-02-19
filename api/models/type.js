const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const typeSchema = new Schema({
  name: { type: String },
  damageFromNormal: { type: Number },
  damageFromFire: { type: Number },
  damageFromWater: { type: Number },
  damageFromElectric: { type: Number },
  damageFromGrass: { type: Number },
  damageFromIce: { type: Number },
  damageFromFighting: { type: Number },
  damageFromPoison: { type: Number },
  damageFromGround: { type: Number },
  damageFromFlying: { type: Number },
  damageFromPsychic: { type: Number },
  damageFromBug: { type: Number },
  damageFromRock: { type: Number },
  damageFromGhost: { type: Number },
  damageFromDragon: { type: Number },
});

module.exports = mongoose.model("Type", typeSchema, "Types");
