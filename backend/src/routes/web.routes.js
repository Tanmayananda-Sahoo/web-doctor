import {Router} from 'express';
import {analyzeWeb, traceRouter} from '../controllers/web.controllers.js';

const router = Router();
router.route('/submit').post(analyzeWeb);
router.route('/submit/analyze').post(traceRouter);
export default router;