// employees.js
var faker = require('faker')
function generateEmployees () {
  var employees = []
  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email()
    var image = faker.image.imageUrl()
    employees.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "image": image,
    })
  }
  return { "employees": employees }
}
module.exports = generateEmployees