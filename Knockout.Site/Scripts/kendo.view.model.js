function kendoViewModel() {
    var self = {};

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
    self.retailerData = ko.observableArray();
    $.ajax({
        url: "api/KendoApi/GetRetailers",
        success: function (result) {
            self.retailerData(result);
        },
        type: "GET"
    });

    return self;
}