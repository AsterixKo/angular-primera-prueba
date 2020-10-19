import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footertitle = 'Este es el título de mi footer';
  miParrafoDeFooter = 'mi parrafo de footer';
}
