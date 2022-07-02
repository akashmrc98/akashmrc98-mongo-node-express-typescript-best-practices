import express from 'express'

const router = express.Router()

import { DomainController } from './controller'

router.post("/", DomainController.operationOne);
router.get("/fork", DomainController.forkExample);

export { router as TestRoutes } 