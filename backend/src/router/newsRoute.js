import express from 'express';
import NewsController from '../controller/NewsController.js';

import UploadMiddleware from '../middleware/UploadMiddleware.js';


const newsRouter=express.Router();
const nInstance=new NewsController();
const fInstance=new UploadMiddleware();
const upload=fInstance.upload('news');

newsRouter.get('/',nInstance.index);
newsRouter.post('/',upload.single('image'),nInstance.store);
newsRouter.get('/:id',nInstance.show);
newsRouter.put('/:id',nInstance.update);
newsRouter.delete('/:id',nInstance.destroy);

export default newsRouter;