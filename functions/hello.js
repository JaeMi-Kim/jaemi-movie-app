exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'JAEMI',
      age: '85',
      email: 'true_hearty@nate.com'
    })
  }
}