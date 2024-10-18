import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProjectlistComponent } from '../projectlist/projectlist.component';
import { AddprojectComponent } from '../addproject/addproject.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-projectdisplay',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,ProjectlistComponent,AddprojectComponent,CommonModule],
  templateUrl: './projectdisplay.component.html',
  styleUrl: './projectdisplay.component.css'
})
export class ProjectdisplayComponent {
  @ViewChild(ProjectlistComponent) childfunction! : ProjectdisplayComponent
  start_date:any  = 0;
    end_date:any = 0;
    showForm:boolean = true;
    isDisable:boolean = true
  constructor(){}
  addproject = new FormGroup({
    projectName: new FormControl(''),
    projectCategory: new FormControl(''),
    startDate: new FormControl(''),
  })
  
  showfilterForm(){
    this.showForm = this.showForm?false:true
  }
  colored():any {
    if(this.addproject.touched && this.addproject.valid){
      this.isDisable = false;
      return "#3280e2";
    }
    return "gray";
  }
    

  ngOnInit(): void {
    this.getDateRange()
  }
  getDateRange(){
    const currentDate = new Date()
    // console.log(currentDate)
    this.start_date = new Date(currentDate)
    this.start_date.setMonth(currentDate.getMonth()-3)
    this.start_date = this.start_date.toISOString().split('T')[0];
    // console.log(this.start_date)
    this.end_date = new Date(currentDate)
    this.end_date.setMonth(currentDate.getMonth()+1)
    this.end_date = this.end_date.toISOString().split('T')[0];
    
}
  promptbox(){
    alert("Download will start soon..........")
  }

  clearfilter(){
    this.addproject.reset()
  }

  filterlist(addproject:any){
    console.log(addproject)
    this.childfunction.filterlist(addproject);
      console.log("filter button clicked")
  }
}
