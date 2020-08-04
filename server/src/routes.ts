import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

const routes = express.Router();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
