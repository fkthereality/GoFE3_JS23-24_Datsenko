//MVC



define(
    //The name of this module
    "model",

    //The array of dependencies
    [],

    //The function to execute when all dependencies have loaded. The
    //arguments to this function are the array of dependencies mentioned
    //above.
    function () {
        function Model(data) {
            var self = this;

            function addItem(item) {
                if (item.length === 0) {
                    return;
                }


                self.data[self.id] = {value: item, id: self.id};
                ++self.id;
                return self.data;
            };

            self.id = 1;
            self.data = {};
            //self.data = data;

            for(var i = 0; i < data.length; ++i) {
                addItem(data[i]);
            }

            self.addItem = addItem;

            self.removeItem = function (index) {

                if (index < 0) {
                    return;
                }

                delete self.data[index];

                return self.data;
            };
            self.setEditedItem = function(item) {
                if(self.data[item]) {
                    self.editedItem = item;
                }
            }
            self.setItemValue = function(id, value) {
                if (self.data[id]) {
                    self.data[id].value = value;
                }
            }
        }
        return Model;
    });