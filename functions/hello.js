export.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: '',
      age: '',
      email: ''
    })
  }
}