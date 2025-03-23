import { Router } from 'express';
import { body, oneOf, validationResult } from 'express-validator';

// handlers
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  patchProduct
} from './handlers/product';

const router = Router();

/**
 * Product
 */
router.get('/', getProducts);
router.get('/:id', getOneProduct);
router.post('/', createProduct);
router.patch('/:id', patchProduct);
router.delete('/:id', deleteProduct);

export default router;
