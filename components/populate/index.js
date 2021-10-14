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
router.post('/tactic', populateCtrl.tactic)
router.post('/technique', populateCtrl.technique)
router.post('/query', populateCtrl.query)
router.post('/count', populateCtrl.count)

module.exports = router
