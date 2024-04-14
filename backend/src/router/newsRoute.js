import express from 'express';
import NewsController from '../controller/NewsController.js';

import UploadMiddleware from '../middleware/UploadMiddleware.js';

const fInstance=new UploadMiddleware();
const upload=fInstance.upload('news');

const newsRouter=express.Router();
const nInstance=new NewsController();

newsRouter.get('/',nInstance.index);
newsRouter.post('/',upload.single('file'),nInstance.store);
newsRouter.get('/:id',nInstance.show);
newsRouter.put('/:id',nInstance.update);
newsRouter.delete('/:id',nInstance.destroy);

export default newsRouter;