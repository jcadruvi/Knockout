function kendoViewModel() {
    var self = {};

    self.district = ko.observable();
    self.districtOptions = {
        dataSource: {
            type: "json",
            transport: {
                read: function (options) {
                    $.ajax({
                        url: "api/KendoApi/GetDistricts",
                        success: function (result) {
                            options.success(result);
                        },
                        type: "GET"
                    });
                }
            }
        }
    };

    return self;
}