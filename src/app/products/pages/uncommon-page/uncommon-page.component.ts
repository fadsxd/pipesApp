import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18n Select 
  public name:string = 'micky';
  public gender: 'male'|'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //ui18Plural
  public clients: string[] = ['Maria','Pedro','Fernando','Juan'];
  public clientsMap = {
    '=0':'no tenemos ningun cliente esperado',
    '=1':'tenemos un cliente esperado',
    'other': 'tenemos # clientes esperando',
  }
  deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }
  //async pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log(value)
     )
  );

  public promiseValue:Promise<string> = new Promise( (resolve, reject)=> {
    setTimeout(()=>{
      resolve('tenemos data en la promesa')
    },3500)
  });

}
