import mongoose from 'mongoose';

import { PlayerSchema } from "../models/playerModel.js"

const Player = mongoose.model('Player', PlayerSchema);

// export const addNewPlayer = async (res,req) => {
//    const newPlayer = new Player(req.body);
//    try {
//     await newPlayer.save(Player);

//     res.status(201).json(Player);
//    } catch (err) {
//      res.status(409).json({message: err.message});
//    }
// };

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);
  newPlayer.save((err, Player) => {
      if (err) {
          res.send(err);
      }
      res.json(Player);
  });
};
  
export const getPlayers = (req, res) => {
    Player.find({}, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
  };