import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  updatePalyer,
  deletePalyer,
} from "../controllers/playerController.js";

const routes = (app) => {
  app
    .route("/players")
    // get point
    .get(getPlayers)
    // post endpoint
    .post(addNewPlayer);

  app
    .route("/player/:PlayerId")
    .get(getPlayerWithID)
    .put(updatePalyer)
    .delete(deletePalyer);
};

export default routes;
