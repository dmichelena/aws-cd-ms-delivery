const sns = require('aws-lambda-sns');

sns.configure({
  paid_order(data) {
    console.log('Sending to delivery provider: ' + JSON.stringify(data));
  }
})

exports.handler = async (event, context) => {
  await sns.process(event);

  return {status: 'OK'};
};