import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headertitle = 'Este es el título de mi header';
  miParrafo = 'mi parrafo';
}
