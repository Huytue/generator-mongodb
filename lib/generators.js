/**
 * Module dependencies
 */
const ft = require('./fileTools');

async function generateModel(path, modelName, cb) {
    var schemaName = modelName[0].toUpperCase() + modelName.substring(1) + 'Schema';

    var model = ft.loadTemplateSync('model.js');
    model = model.replace(/{modelName}/g, modelName[0].toUpperCase() + modelName.substring(1));
    model = model.replace(/schemaName/g, schemaName);

    ft.createDirIfIsNotDefined(path, 'models', function () {
        ft.writeFile(path + '/models/' + modelName + '.js', model, null, cb);
    });
}

async function generateController(path, modelName, cb) {

    var controller = ft.loadTemplateSync('controller.js');
    controller = controller.replace(/{modelName}/g, modelName[0].toUpperCase() + modelName.substring(1));
    controller = controller.replace(/modelPath/g, '../models/' + modelName + '.js');

    ft.createDirIfIsNotDefined(path, 'controllers', function () {
        ft.writeFile(path + '/controllers/' + modelName + '.js', controller, null, cb);
    });
}

async function generateRoute(path, modelName, cb) {

    var route = ft.loadTemplateSync('router.js');
    route = route.replace(/controllerName/g, modelName[0].toUpperCase() + modelName.substring(1));
    route = route.replace(/controllerPath/g, '../controllers/' + modelName + '.js');

    ft.createDirIfIsNotDefined(path, 'routes', function () {
        ft.writeFile(path + '/routes/' + modelName + '.js', route, null, cb);
    });
}

module.exports = {
    generateModel,
    generateController,
    generateRoute
}