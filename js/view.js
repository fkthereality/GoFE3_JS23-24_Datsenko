
define(
    //The name of this module
    "view",

    //The array of dependencies
    ['jquery', 'tmpl'],

    //The function to execute when all dependencies have loaded. The
    //arguments to this function are the array of dependencies mentioned
    //above.
    function ($, tmpl) {
        function View(model) {
            var self = this;

            function init(){



                self.renderList();
            };


            self.renderList = function () {
                var editedValue = model.editedItem? model.data[model.editedItem].value: '';
                var btnText = model.editedItem? 'Edit': 'Add';
                var data = {data: model.data, btnText:btnText, editedValue: editedValue};
                var wrapper = tmpl($('#wrapper-template').html(), data);

                $('.container').html(wrapper);

                self.elements = {
                    input: $('.item-value'),
                    addBtn: $('.item-add'),
                    listContainer: $('.item-list')
                };

                var list = tmpl($('#list-template').html(),data);
                self.elements.listContainer.html(list);
            };
            init();
        }

        return View;
    }
);






















