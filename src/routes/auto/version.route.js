/**
 * GET /version → { version: "<package.json version>" }
 * Reads version from package.json (via the shared appInfo helper)
 * to keep package.json as the single source of truth.
 */
import { Router } from 'express'
import { getPackageInfo } from '../../utils/appInfo.js'

const router = Router()

router.get('/version', (_req, res) => {
  const { version } = getPackageInfo()
  res.status(200).json({ version })
})

export default router
