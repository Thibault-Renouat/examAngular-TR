import { Component, OnInit } from '@angular/core';
import { Computer } from '../../models/computer';
import {ComputerService} from '../../services/computer.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  computers: Computer[];
  isLoading: boolean;


  constructor(private computerService:ComputerService, private toastr:ToastrService) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.computerService.getAllComputers().subscribe(data => {
      this.computers = data;
      this.isLoading = false;
    });


  }

  removeComputer(computer: Computer) {
    this.isLoading = true;
    this.computerService.removeComputer(computer).subscribe(data => {
      this.computerService.getAllComputers().subscribe(allComputer => {
        this.computers = allComputer;
        this.isLoading = false;
        this.showSuccess();
      });
    });
  }

  showSuccess() {
    this.toastr.success('Ordinateur Supprimé!', 'GoodBye ;(');
  }


}
