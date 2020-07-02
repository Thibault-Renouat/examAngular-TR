import { Component, OnInit } from '@angular/core';
import { Computer } from '../../models/computer';
import {ComputerService} from '../../services/computer.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  computers: Computer[];
  isLoading: boolean;

  constructor(private computerService:ComputerService) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.computerService.getAllComputers().subscribe(data => {
      this.computers = data;
      this.isLoading = false;
    });


  }

}
