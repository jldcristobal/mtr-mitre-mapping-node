const express = require('express');
// const log4js = require('log4js');
// const config = require('config');

const errorHandler = require('../middlewares/error-handler');
const authHandler = require('../middlewares/authentication-handler');

const app = express();

const health = require('./health');
const populate = require('./populate');

const router = express.Router();

/**
 * Set up logging
 
const logger = log4js.getLogger('routes - index');
logger.level = config.logLevel;
*/

/**
 * Error handler
 */
app.use(errorHandler.catchNotFound);
app.use(errorHandler.handleError);


/**
 * Add routes
 */
router.use('/health', health);
router.use('/populate', populate);
router.use(authHandler.authenticateUser);

module.exports = router;
