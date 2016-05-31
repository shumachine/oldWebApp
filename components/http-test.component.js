System.register(["angular2/core", "../services/http-test.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_test_service_1;
    var HTTPTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HTTPTestComponent = (function () {
                function HTTPTestComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HTTPTestComponent.prototype.onTest = function () {
                    var _this = this;
                    this._httpService.getCurrentTime()
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error.message); }, function () { return console.log("Finished"); });
                };
                HTTPTestComponent.prototype.onGetName = function () {
                    var _this = this;
                    console.log(this.customer);
                    this._httpService.getCustomers(this.customer)
                        .subscribe(function (data) {
                        _this.getData = JSON.stringify(data);
                        var x = JSON.parse(_this.getData);
                        _this.returnedCustomerList = x;
                    }, function (error) { return alert(error.message); }, function () { return console.log("Finished"); });
                };
                HTTPTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "<div>\n                <h1>HTTPConnectorTest B\u00C4M!</h1>\n                <input id=\"#nameInput\" name=\"nameInput\" [(ngModel)]=\"customer\"/>\n                <input type=\"button\" value=\"GetName\" (click)=\"onGetName()\">\n                <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                    <tr>\n                        <th>Customer Number</th>\n                        <th>Customer Name</th>\n                        <th>Telephone Number</th>\n                        <th>User In Charge</th>\n                    </tr>\n                        \n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"#cus of returnedCustomerList\">\n                            <td>{{cus.Number}}</td>\n                            <td>{{cus.Name}}</td>\n                            <td>{{cus.TelephoneNumber}}</td>\n                            <td>{{cus.UserInCharge}}\n                        </tr>\n                    </tbody>\n                    </table>\n                </div>\n                </div>",
                        providers: [http_test_service_1.HTTPTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
                ], HTTPTestComponent);
                return HTTPTestComponent;
            }());
            exports_1("HTTPTestComponent", HTTPTestComponent);
        }
    }
});
//# sourceMappingURL=http-test.component.js.map