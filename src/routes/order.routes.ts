import { Router } from 'express';
import { orderController } from '../controllers';

const router = Router();

router.get('/', orderController.getAll);
router.get('/:id', orderController.getById);
router.post('/', orderController.create);
router.put('/:id', orderController.update);
router.delete('/:id', orderController.delete);
router.post('/:id/authorize', orderController.authorizeOrder);

export default router;
