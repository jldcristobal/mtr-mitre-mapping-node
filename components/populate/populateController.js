// const log4js = require('log4js');
// const config = require('config');
const jwt = require('jsonwebtoken');

const { Sequelize, Op } = require('sequelize');

const util = require('../../helpers/util');

const Tactic = require('./models/tactic')
const Technique = require('./models/technique')
const TechniqueTactic = require('./models/techniqueTactic');
const Platform = require('./models/platform');
const TechniquePlatform = require('./models/techniquePlatform');
const DataSource = require('./models/dataSource');
const TechniqueDataSource = require('./models/techniqueDataSource');
const Subtechnique = require('./models/subtechniques')
const SubtechniqueTactic = require('./models/subtechniqueTactic');
const SubtechniquePlatform = require('./models/subtechniquePlatform');
const SubtechniqueDataSource = require('./models/subtechniqueDataSource');
const Query = require('./models/query');
const QueryPlatform = require('./models/queryPlatform');
const TechniqueQueryPlatform = require('./models/techniqueQueryPlatform');
const SubtechniqueQueryPlatform = require('./models/subtechniqueQueryPlatform');
const Count = require('./models/count')

// const logger = log4js.getLogger('controllers - accessToken');
// logger.level = config.logLevel;

/**
 * Controller object
 */
const login = {};

/**
function(properties, context) {

    var file = properties['file'];
    var returnData = {};

    returnData['parsedurl'] = url;
    
	// To authenticate we take the AuthKey and add "Basic " to the beginning
    var authKey = 'Basic ' + context.keys.Intelix_User_Key;
    
    // Get the token from the auth endpoint
    const authConfig = {
        url: 'https://api.labs.sophos.com/oauth2/token',
        method: 'POST',
        headers: {
            'Authorization': authKey,
            'Content-Type': 'application/x-www-form-urlencoded' 
        },
        body: 'grant_type=client_credentials'
    };
    
    // Get the access token from the response (it is in a field called access_token)
    var response = context.request(authConfig);
    let responseBody = JSON.parse(response.body);    
    const token = responseBody.access_token;
    
    let formData = new FormData()
    formData.append('file', file)
    
    // for HTML files
    if(properties.url) {
        formData.append('url', properties.url)
    }
    // Check the URL to see if it is malicious
    const staticFileAnalysis = {
        url: 'https://de.api.labs.sophos.com/analysis/file/static/v1',
        method: 'POST',
		headers: {
			'Authorization': token,
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    };

    response = context.request(staticFileAnalysis);
    responseBody = JSON.parse(response.body);
    console.log('Static File Analysis response:')
    console.log(responseBody)
    
    if(responseBody.jobStatus == 'SUCCESS') {
        // Return response
    } else if(responseBody.jobStatus == 'IN_PROGRESS') {
        // Get Report by Job ID
        
    } else {
        // Return Error
        returnData['error'] = responseBody.error
        returnData['message'] = responseBody.message ? responseBody.message : ''
    }
    
    if (responseBody.riskLevel === "HIGH") {
        returnData['malicious'] = "yes"
    } else {
        returnData['malicious'] = "no"
    }
    
	return returnData;
}
**/

login.login = async (req, res) => {
    // logger.debug('inside login()...');
    let jsonRes;

    try {
        const body = req.body;
        // add tactics to db
        // const tactics = body.tactics
        // let newbody = []
        // tactics.forEach(async (e) => {
        //     await newbody.push({
        //         tactic_id: e.ID,
        //         tactic_name: e.name,
        //         tactic_description: e.description,
        //         tactic_url: e.url
        //     })
        // })
        // try {
        //     const create = await Tactic.bulkCreate(newbody)
        //     if(create) {

        //         jsonRes = {
        //             statusCode: 200,
        //             success: true,
        //             result: newbody
        //         }
        //     }
        // } catch(e) {
        //     jsonRes = {
        //         statusCode: 500,
        //         success: false,
        //         result: e
        //     }
        // }

        // add techniques to db 
        // const techniques = body.techniques

        // await techniques.forEach(async(e) => {
        //     let tacticList = e.tactics.split(', ')
        //     let platformList = e.platforms.split(', ')
        //     let dataSources = e.data_sources ? e.data_sources.split(', ') : null

        //     if(e.is_sub_technique === "TRUE") {
        //         // add to matrix_subtechnique
        //         await Subtechnique.create({
        //             sub_technique_id: e.ID,
        //             sub_technique_name: e.name,
        //             sub_technique_description: e.description,
        //             sub_technique_detection: e.detection,
        //             sub_technique_url: e.url,
        //             created: e.created,
        //             modified: e.last_modified,
        //             query: e.query,
        //             frequency: e.frequency,
        //             technique_name_id: e.sub_technique_of
        //         })

        //         // add to matrix_subtechnique_tactic_name
        //         await tacticList.forEach(async t => {
        //             let mst = {
        //                 subtechnique_id: e.ID,
        //                 tactic_id: t
        //             } 
        //             await SubtechniqueTactic.create(mst)
        //         })

        //         // add to matrix_subtechnique_platform
        //         await platformList.forEach(async (p) => {
        //             //insert platform if not existing
        //             await Platform.findOrCreate({
        //                 where: {platform_name: p}
        //             })
    
        //             let mstp = {
        //                 subtechnique_id: e.ID,
        //                 platform_id: p
        //             }
        //             await SubtechniquePlatform.create(mstp)
        //         })

        //         // add to matrix_subtechnique_data_source
        //         if(dataSources != null) {
        //             await dataSources.forEach(async ds => {
        //                 const [,datasources] = await DataSource.findOrCreate({
        //                     where: {data_source: ds}
        //                 })
        
        //                 let mtds = {
        //                     subtechnique_id: e.ID,
        //                     datasource_id: ds
        //                 }
        //                 await SubtechniqueDataSource.create(mtds)
        //             })
        //         }
        //     } else if(e.is_sub_technique === "FALSE") { 
        //         // add to matrix_technique
        //         await Technique.create({
        //             technique_id: e.ID,
        //             technique_name: e.name,
        //             technique_description: e.description,
        //             technique_url: e.url,
        //             technique_detection: e.detection,
        //             created: e.created,
        //             modified: e.last_modified,
        //         })
                
        //         // add to matrix_technique_tactic_name
        //         await tacticList.forEach(async t => {
        //             let mt = {
        //                 technique_id: e.ID,
        //                 tactic_id: t
        //             } 
        //             await TechniqueTactic.create(mt)
        //         })
    
        //         // add to matrix_technique_platform
        //         await platformList.forEach(async (p) => {
        //             //insert platform if not existing
        //             await Platform.findOrCreate({
        //                 where: {platform_name: p}
        //             })
    
        //             let mtp = {
        //                 technique_id: e.ID,
        //                 platform_id: p
        //             }
        //             await TechniquePlatform.create(mtp)
        //         })
    
        //         if(dataSources != null) {
        //             // add to matrix_technique_data_source
        //             await dataSources.forEach(async ds => {
        //                 const [,datasources] = await DataSource.findOrCreate({
        //                     where: {data_source: ds}
        //                 })
        
        //                 let mtds = {
        //                     technique_id: e.ID,
        //                     datasource_id: ds
        //                 }
        //                 await TechniqueDataSource.create(mtds)
        //             })
        //         }
        //     }

            
        //     jsonRes = {
        //         statusCode: 200,
        //         success: true,
        //         error: 'success',
        //     };
        // })

        /*
        // ADD TO QUERY
        let result = []
        await Object.entries(body).forEach(async ([key, value]) => {
            let subtechniques = value.subtechniques[0]
            if(subtechniques) {
                await result.push({
                    query_title: subtechniques.TechniqueID,
                    query_description: subtechniques.Description,
                    query_text: subtechniques.Query,
                    query_frequency: subtechniques.Frequency
                })
                if(subtechniques.Query) subtechniques.Query.trim()
                // add to matrix query
                let technique = subtechniques.TechniqueID.slice(0, 5)
                let subtechnique 
                if(subtechniques.TechniqueID.includes('.00')) {
                    subtechnique = subtechniques.TechniqueID.split(':')[0] 

                    // insert query in subtechniques table
                    await Subtechnique.update(
                        {
                            query_title: subtechniques.TechniqueID.trim(),
                            query_description: subtechniques.Description.trim(),
                            query_text: subtechniques.Query,
                            query_frequency: subtechniques.Frequency.trim()
                        },
                        { where: {sub_technique_id: subtechnique}}
                    )

                    // add to matrix query platform
                    if(subtechniques.OperatingSystem) {
                        let platformList = subtechniques.OperatingSystem.split(', ')
                        await platformList.forEach(async (p) => {
                            //insert platform if not existing
                            await MatrixQueryPlatform.findOrCreate({
                                where: {platform_name: p}
                            })
            
                            let mqp = {
                                subtechnique_id: subtechnique,
                                qplatform_id: p
                            }
                            await SubtechniqueQueryPlatform.create(mqp)
                        })
                    }
                } else {
                    // insert query in techniques table
                    await Technique.update(
                        {
                            query_title: subtechniques.TechniqueID.trim(),
                            query_description: subtechniques.Description.trim(),
                            query_text: subtechniques.Query,
                            query_frequency: subtechniques.Frequency.trim()
                        },
                        { where: {technique_id: technique.trim()}}
                    )

                    // add to matrix query platform
                    if(subtechniques.OperatingSystem) {
                        let platformList = subtechniques.OperatingSystem.split(', ')
                        await platformList.forEach(async (p) => {
                            //insert platform if not existing
                            await MatrixQueryPlatform.findOrCreate({
                                where: {platform_name: p}
                            })
            
                            let mqp = {
                                technique_id: technique,
                                qplatform_id: p
                            }
                            await TechniqueQueryPlatform.create(mqp)
                        })
                    }
                }
            }
        })

        */

         // add to matrix count
         await Object.entries(body).forEach(async ([tactic, value]) => {
            await Object.entries(value.techniques).forEach(async ([technique, v]) => {
                console.log(tactic, technique, v.count)
                let t
                let subtechnique
                if(technique.includes('.00')) {
                    t = technique.slice(0, 5)
                    subtechnique = technique
                } else t = technique
                await Count.create({
                    tactic_name_id: value.name,
                    technique_name_id: t,
                    sub_technique_name_id: subtechnique,
                    count: v.count
                })
                await Technique.update({has_count: true}, {where: {technique_id: t}})
            })
        })

        jsonRes = {
            statusCode: 200,
            success: true,
            result
        }
    } catch(error) {
        jsonRes = {
            statusCode: 500,
            success: false,
            error: error,
        };
    } finally {
        util.sendResponse(res, jsonRes); 
    }
};

module.exports = login;