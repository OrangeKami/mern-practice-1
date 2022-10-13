import { addNewPlayer } from '../controllers/playerController.js';


const routes = (app) => {
    app.route('/players')
// post endpoint
       .post(addNewPlayer);

}

export default routes;