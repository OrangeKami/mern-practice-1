import  mongoose from 'mongoose';

import {PlayerSchema} from "../models/playerModel.js"

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = async (res,req) => {
    let newPlayer = new Player(req.body);
   try {
    await newPlayer.save();

    res.status(201).json(newPlayer);
   } catch (err) {
     res.status(409),json({message: err.message});
   }
}