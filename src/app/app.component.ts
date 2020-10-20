import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dni: string;
  inputValueKeyUp: string = '';
  publications = [{ name: 'Climate Change', post: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo a pariatur reprehenderit commodi quae. Quod, nihil. Et tenetur exercitationem eos quisquam debitis, quibusdam soluta fuga quas officiis minima, saepe excepturi.' },
  { name: 'Angular Directives', post: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo a pariatur reprehenderit commodi quae. Quod, nihil. Et tenetur exercitationem eos quisquam debitis, quibusdam soluta fuga quas officiis minima, saepe excepturi.' }]

  constructor() {
    this.dni = '';
  }
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
    let color: string = 'red';
    if (this.dni.length > 0) {
      color = 'green';
    }
    return color;
  }
}
