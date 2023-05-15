/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger

  console.log('hey, this is a test of Lambda function');
  console.log(event);

  return event;
};
