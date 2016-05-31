
import {ClientsService} from "./clients.service";
import {Component} from "angular2/core";


@Component({
    selector: 'clients',
    templateUrl:  './app/clients.components.html',
    providers: [ClientsService]
})
export class ClientsComponent{
    title = "Title of authors page";
    clients : string[];

    constructor(clientsService : ClientsService){
        this.clients = clientsService.getClients();
    }
}