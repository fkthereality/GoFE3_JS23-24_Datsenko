

define(
    //The name of this module
    "controller",

    //The array of dependencies
    ['jquery'],

    //The function to execute when all dependencies have loaded. The
    //arguments to this function are the array of dependencies mentioned
    //above.
    function ($) {
        function Controller(model, view){
        var self = this;

        function updateHandlers() {
            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item-delete', removeItem);
            view.elements.listContainer.on('click', '.item-edit', editItem);
        }

        function addItem() {
            var newItem = view.elements.input.val();
            if (model.editedItem) {
                model.setItemValue(model.editedItem, newItem);
                model.editedItem = 0;
            } else {
                model.addItem(newItem);
            }
            view.renderList(model.data);
            updateHandlers();
            view.elements.input.val('');

        }

        function removeItem() {
            var item = $(this).attr('data-index');

            model.removeItem(item);
            view.renderList(model.data);
            updateHandlers();
        }
            function editItem() {
                var item = $(this).attr('data-index');

                model.setEditedItem(item);
                view.renderList(model.data);
                updateHandlers();
            }
            updateHandlers();
    }

        return Controller;
    }
);

























