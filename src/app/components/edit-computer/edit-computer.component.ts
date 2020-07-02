import { Component, OnInit } from '@angular/core';
import {Computer} from '../../models/computer';
import {ComputerService} from '../../services/computer.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {
  isLoading:boolean;
  computerForm: Computer;
  marquesDispo: string[];
  typesDispo: string[];
  categoriesDispo: string[];


  constructor(private computerService: ComputerService, private activatedRoute: ActivatedRoute, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.marquesDispo = this.computerService.marquesDisponibles;
    this.typesDispo = this.computerService.typesDisponibles;
    this.categoriesDispo = this.computerService.categoriesDisponibles
    this.computerForm = new Computer();


    this.isLoading=true;
    this.computerService.getOneById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(data =>{
      this.computerForm=data;
      this.isLoading=false;
      console.log(this.computerForm);
    })


  }

  editComputer() {
    this.computerService.editComputer(this.computerForm).subscribe((data:Computer)=> {
      this.router.navigate(['/computers']);
      this.showSuccess();
    });
  }


  showSuccess() {
    this.toastr.success('Ordinateur modifié !', 'Félicitations!');
  }


}
