import express from 'express'

const router = express.Router()

import { DomainController } from './controller'

router.post("/", DomainController.operationOne);

export { router as TestRoutes } 