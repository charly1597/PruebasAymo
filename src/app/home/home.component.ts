import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  {name: 'Malagón'},
  {name: 'Cuenca'},
  {name: 'Las pedroñeras'},
  {name: 'Lillo'},
  {name: 'Aranjuez'},
  {name: 'León'},
  {name: 'Villanueva de la Sagra'},
  {name: 'Ajofrín'},
  {name: 'Sonseca'},
  {name: 'Villafranca de los Caballeros'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['Localidad'];
  dataSource = ELEMENT_DATA

  constructor() { }

  ngOnInit(): void {
  }

}
