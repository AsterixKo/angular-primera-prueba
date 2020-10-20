import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dni: string;
  inputValueKeyUp: string = '';

  getDni() {
    return 'Hola';
  }

  sayGoodBye() {
    alert('Goodbye!');
  }

  getKeyUp(myEvento: any) {
    console.log('Persionado en el input: ', myEvento.target.value);
    console.log('Key: ', myEvento.key);
    alert(myEvento.target.value);
  }
  dynamicColor(): string {
    let color:string = 'red';
    if (this.dni.length > 0) {
      color = 'green';
    }
    return color;
  }
}
