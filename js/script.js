requirejs.config({
    paths: {
        'jquery': 'http://code.jquery.com/jquery-1.7.2'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'tmpl':{
            exports: 'tmpl'
        }
    }
});

require(
    [
        'model', 'view', 'controller'
    ],
        function(Model, View, Controller){
            var firstToDoList = ['learn javascript', 'learn html', 'make coffe'];
            var model =  new Model(firstToDoList);
            var view = new View(model);
            var controller = new Controller(model, view);
        }
)





























