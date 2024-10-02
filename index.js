// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const axios = require('axios');

 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  function spreadsheet(agent){
    agent.add(`welcome to my agent`);
  
  }
function insurancetype(){
  const typeofinsurance = agent.parameters.typeofinsurance;
}
function termlifeinsurance(){
  const termlifeinsurance = agent.parameters.termlifeinsurance;
}
function healthinsurance(){
  const healthinsurance = agent.parameters.healthinsurance;
  
}
function investmentinsurance(){
  const investmentsinsurance = agent.parameters.investmentsinsurance;
}
function otherplans(){
  const otherplans = agent.parameters.otherplans;
}
function businessinsurance(){
  const businessinsurance = agent.parameters.businessinsurance;
}
  
 function savehandler(agent)
  {
    const {
      name,age,phone,email,typeofinsurance,yearlyincome,investmentinsurance
    } =agent.parameters;
    const data=[{
      Name: name,
      Age: age,
      Phone:phone,
      Email: email,
      Type_of_Insurance: typeofinsurance,
      Yearly_Income: yearlyincome
    }];
    axios.post('https://sheetdb.io/api/v1/i90uxq2pvtapg',data);
    agent.end("");
  }
  
  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Spreadsheetdemo', spreadsheet);
  intentMap.set('Insurancetype',insurancetype);
  intentMap.set('investmentinsurance',investmentinsurance);
  intentMap.set('businessinsurance',businessinsurance);
  intentMap.set('otherplans',otherplans);
  intentMap.set('healthinsurance',healthinsurance);
  //intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Chatbot', savehandler);
  

  agent.handleRequest(intentMap);
});
 function savehandler(agent)
  {
    const {
      name,age,phone,email,typeofinsurance,yearlyincome,investmentinsurance
    } =agent.parameters;
    const data=[{
      Name: name,
      Age: age,
      Phone:phone,
      Email: email,
      Type_of_Insurance: typeofinsurance,
      Yearly_Income: yearlyincome
    }];
    axios.post('https://sheetdb.io/api/v1/i90uxq2pvtapg',data);
    agent.end("");
  }
  
  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Spreadsheetdemo', spreadsheet);
  intentMap.set('Insurancetype',insurancetype);
  intentMap.set('Termlifeinsurance',termlifeinsurance);
  //intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Chatbot', savehandler);
  

  agent.handleRequest(intentMap);
});
