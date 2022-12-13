import { Component, OnInit } from '@angular/core';

@Component({//É um decorator
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']//pode colocar mais de um nesse array
})
export class FirstComponentComponent implements OnInit{
  name: string = 'Matheus';
  age: number = 30;
  job = 'Programador'; //embora TS seja opcional ele leva o nosso projeto para o proximo nível
  hobbies = ["Correr", "Jogar", "Estudar"];
  car = {
    name: 'Polo',
    year: 2019,
  }

  constructor() {}

  ngOnInit(): void {}

}
