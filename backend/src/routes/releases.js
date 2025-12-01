import { Router } from 'express';
import { createRelease, listReleases, updateRelease } from '../controllers/releasesController.js';

const router = Router();

router.get('/', listReleases);
router.post('/', createRelease);
router.patch('/:id', updateRelease);

export default router;
