import express from 'express';
import userRouter from './userRoute.js';
import categoryRouter from './categoryRoute.js';
import newsRouter from './newsRoute.js';

const router= express.Router();

router.get('/',(req,res)=>{
    res.send('Hello World!!');
})

router.use('/users',userRouter);
router.use('/category',categoryRouter);
router.use('/news',newsRouter);

export default router;