import { Router } from 'express';
import { body, oneOf, validationResult } from 'express-validator';

const router = Router();

/**
 * Product
 */
router.get('/', (req, res) => {});
router.get('/:id', () => {});
router.post('/', () => {});
router.patch('/:id', () => {});
router.delete('/:id', () => {});

export default router;
