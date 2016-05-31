import {Component} from "angular2/core";
import {HTTPTestService} from "../services/http-test.service";



@Component({
    selector: 'http-test',
    template:`<div>
                <h1>HTTPConnectorTest BÄM!</h1>
                <input id="#nameInput" name="nameInput" [(ngModel)]="customer"/>
                <input type="button" value="GetName" (click)="onGetName()">
                <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Customer Number</th>
                        <th>Customer Name</th>
                        <th>Telephone Number</th>
                        <th>User In Charge</th>
                    </tr>
                        
                    </thead>
                    <tbody>
                        <tr *ngFor="#cus of returnedCustomerList">
                            <td>{{cus.Number}}</td>
                            <td>{{cus.Name}}</td>
                            <td>{{cus.TelephoneNumber}}</td>
                            <td>{{cus.UserInCharge}}
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>`,
    providers: [HTTPTestService]

})
export class HTTPTestComponent {
    getData:string;
    postData:string;
    customer: string;
    returnedCustomerList : Array<ICustomer>;

    constructor(private _httpService:HTTPTestService) {
    }

    onTest(){
        this._httpService.getCurrentTime()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => alert(error.message),
                () => console.log("Finished")
            );
    }

    onGetName(){
        console.log(this.customer);
        this._httpService.getCustomers(this.customer)
            .subscribe(
                data => {
                    this.getData = JSON.stringify(data);
                    var x = JSON.parse(this.getData);
                    this.returnedCustomerList = x;
                },
                error => alert(error.message),
                () => console.log("Finished")
            );
    }
}