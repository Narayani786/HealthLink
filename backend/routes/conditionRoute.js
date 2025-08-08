import expree from 'express';
import { getConditionFromSymptoms } from '../controllers/symptomController';
const router = express.Router();

// POST /api/symptoms
router.post('/', getConditionFromSymptoms);

export default router;
