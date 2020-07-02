import { Component, OnInit } from '@angular/core';
import {Computer} from '../../models/computer';
import {ComputerService} from '../../services/computer.service';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {

  computerForm: Computer;
  marquesDispo: string[];
  typesDispo: string[];
  categoriesDispo: string[];


  constructor(private computerService: ComputerService) { }

  ngOnInit(): void {

    this.marquesDispo = this.computerService.marquesDisponibles;
    this.typesDispo = this.computerService.typesDisponibles;
    this.categoriesDispo = this.computerService.categoriesDisponibles
    this.computerForm = new Computer();

  }

  addComputer(): void {

    console.log(this.computerForm);

  }

}
