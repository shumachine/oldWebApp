System.register(['angular2/core', "./courses.components", "./authors.components", "./navbar.components", "./sidenavbar.components", "./clients.components", "./components/http-test.component"], function(exports_1, context_1) {
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
    var core_1, courses_components_1, authors_components_1, navbar_components_1, sidenavbar_components_1, clients_components_1, http_test_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_components_1_1) {
                courses_components_1 = courses_components_1_1;
            },
            function (authors_components_1_1) {
                authors_components_1 = authors_components_1_1;
            },
            function (navbar_components_1_1) {
                navbar_components_1 = navbar_components_1_1;
            },
            function (sidenavbar_components_1_1) {
                sidenavbar_components_1 = sidenavbar_components_1_1;
            },
            function (clients_components_1_1) {
                clients_components_1 = clients_components_1_1;
            },
            function (http_test_component_1_1) {
                http_test_component_1 = http_test_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Title";
                }
                AppComponent.prototype.onInput = function (newInput) {
                    this.title = newInput;
                };
                AppComponent.prototype.onClick = function () {
                    this.title = "";
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/app.component.html',
                        directives: [
                            courses_components_1.CoursesComponent,
                            authors_components_1.AuthorsComponent,
                            navbar_components_1.NavbarComponent,
                            sidenavbar_components_1.SidenavbarComponent,
                            clients_components_1.ClientsComponent,
                            http_test_component_1.HTTPTestComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map