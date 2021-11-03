const routeController = require('../controllers/routeController')

const Index = app =>{
  app.get('/',routeController.home);
}


module.exports = Index