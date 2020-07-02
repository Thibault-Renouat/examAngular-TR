import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Computer } from '../../models/computer';
import {ComputerService} from '../../services/computer.service';

@Component({
  selector: 'app-computers-detail',
  templateUrl: './computers-detail.component.html',
  styleUrls: ['./computers-detail.component.css']
})
export class ComputersDetailComponent implements OnInit {

  computer: Computer;
  isLoading: boolean;


  constructor(private computerService: ComputerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.computerService.getOneById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(data =>{
      this.computer=data;
      this.isLoading=false;
    })


  }

}
