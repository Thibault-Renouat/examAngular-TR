import { Component, OnInit } from '@angular/core';
import {Computer} from '../../models/computer';
import {ComputerService} from '../../services/computer.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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


  constructor(private computerService: ComputerService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.marquesDispo = this.computerService.marquesDisponibles;
    this.typesDispo = this.computerService.typesDisponibles;
    this.categoriesDispo = this.computerService.categoriesDisponibles
    this.computerForm = new Computer();

  }

  addComputer(): void {

    console.log(this.computerForm);
    this.computerService.addComputer(this.computerForm).subscribe(data => {
      this.router.navigate(['/computers'])
      this.showSuccess();
    })

   }

  showSuccess() {
    this.toastr.success('Hello to added computer :) !', 'Félicitations!');
  }


}
