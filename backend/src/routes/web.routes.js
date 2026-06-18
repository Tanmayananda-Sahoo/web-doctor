import {Router} from 'express';
import {analyzeWeb} from '../controllers/web.controllers.js';

const router = Router();
router.route('/submit').post(analyzeWeb);
export default router;