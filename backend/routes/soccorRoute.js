import { addNewPlayer, getPlayers} from '../controllers/playerController.js';


const routes = (app) => {
    app.route('/players')
    // get point
    .get(getPlayers)
// post endpoint
       .post(addNewPlayer);

}

export default routes;