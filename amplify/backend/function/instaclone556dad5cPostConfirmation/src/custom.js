/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const env = process.env.NODE_ENV;
const AppsyncID = process.env.API_INSTACLONE_GRAPHQLAPIIDOUTPUT;
const TableName = `User-${AppsyncID}-${env}`;
// const TableName = 'User-x43psk3r2jcatebf527lgf35oe-production';


const userExists = async id => {
  const params = {
    TableName,
    Key: id,
  };
  try {
    const response = await docClient.get(params).promise();
    return !!response?.Item;
  } catch (error) { 
    return false;
  }
 };

const saveUser = async user => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  const Item = {
    ...user,
    _typeName: 'User',
    createdAt: dateStr,
    updatedAt: dateStr,
    _lastChangedAt: timestamp,
    _version: 1,
  }
  const params = {
    TableName,
    Item,
  };
  try {
    await docClient.put(params).promise();
  } catch (error) {
    console.log(error);
  }
 }; 


exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger

  console.log('hey, this is a test of Lambda function');
  console.log(event);

  if (event?.request?.userAttributes) {
    console.log('no user data avialable');
    return;
  };

  const userAttributes = event.request.userAttributes; //{sub, email, name}



const {sub, email, name} = event.request.userAttributes;
  const newUser = {
    id: sub,
    email,
    name,
  }

  //check if the user alredy exist
  if (!(await userExists(newUser.id))) {
    //if not save the user to the database
    await saveUser(newUser);
     console.log(`user ${newUser.id} has been saved to the database`);
  } else {
    console.log(`user ${newUser.id} already exists`);
  }

  return event;
};
