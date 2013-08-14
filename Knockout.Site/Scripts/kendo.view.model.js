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
    self.retailer = ko.observable();
    self.retailerData = ko.observableArray();
    $.ajax({
        url: "api/KendoApi/GetRetailers",
        success: function (result) {
            self.retailerData(result);
        },
        type: "GET"
    });


    self.onAddRetailerClick = function() {
        self.retailerData.push({ Key: 0, Value: self.retailer() });
        window.retailerData = self.retailerData;
    };

    return self;
}