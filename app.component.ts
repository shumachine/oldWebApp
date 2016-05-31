import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.components";
import {AuthorsComponent} from "./authors.components";
import {NavbarComponent} from "./navbar.components";
import {SidenavbarComponent} from "./sidenavbar.components";
import {ClientsComponent} from "./clients.components";
import {HTTPTestComponent} from "./components/http-test.component";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [
        CoursesComponent,
        AuthorsComponent,
        NavbarComponent,
        SidenavbarComponent,
        ClientsComponent,
        HTTPTestComponent
    ]
})
export class AppComponent {
    onInput(newInput : string){
        this.title = newInput;
    }
    onClick(){
        this.title = "";
    }
    title :string = "Title";
}