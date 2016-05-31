System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClientsService;
    return {
        setters:[],
        execute: function() {
            ClientsService = (function () {
                function ClientsService() {
                }
                ClientsService.prototype.getClients = function () {
                    return [
                        "Author 1",
                        "Author 2",
                        "Author 3"
                    ];
                };
                return ClientsService;
            }());
            exports_1("ClientsService", ClientsService);
        }
    }
});
//# sourceMappingURL=clients.service.js.map