const express = require('express');
// const log4js = require('log4js');
// const config = require('config');

const populateCtrl = require('./populateController');

const router = express.Router();

/**
 * Set up logging

const logger = log4js.getLogger('routes - accessToken');
logger.level = config.logLevel;

logger.debug('setting up /accessToken route');
 */

/**
 * Add routes
 */
router.post('/', populateCtrl.login);

module.exports = router;
