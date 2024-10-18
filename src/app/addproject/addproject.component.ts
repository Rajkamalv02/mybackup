import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProjectdataService } from '../projectdata.service';



@Component({
  selector: 'app-addproject',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './addproject.component.html',
  styleUrl: './addproject.component.css'
  
})
export class AddprojectComponent implements OnInit,OnChanges{
 
    start_date:any  = 0;
    end_date:any = 0;
   isDisable=true
    is_Site = true;
    is_Shift = true;
    formvalue={
      id:"",
      projectName:"",
      projectCategory:"",
      startDate:"",
      projectManager:"",
      contactNumber:"",
      emailAddress:"",
      endDate:""
    }
    constructor(private pd:ProjectdataService){
      this.formvalue = this.pd.addEditData()
      console.log(this.formvalue)
      
    }
    addproject = new FormGroup({
      projectName: new FormControl(this.formvalue.projectName,[Validators.required]),
      projectCategory: new FormControl(this.formvalue.projectCategory,[Validators.required]),
      startDate: new FormControl(this.formvalue.startDate,[Validators.required]),
      projectManager: new FormControl(this.formvalue.projectManager,[Validators.required]),
      contactNumber: new FormControl(this.formvalue.contactNumber,[Validators.required,Validators.maxLength(10)]),
      emailAddress: new FormControl(this.formvalue.emailAddress,[Validators.required,Validators.email]),
      endDate: new FormControl(this.formvalue.endDate,[Validators.required]),
    })
    ngOnInit(): void {
      this.getDateRange()
      this.addproject.patchValue(this.formvalue)
    
    
    }
    
    
 

    ngOnChanges(){
      
      
    }

    
    

    onAdd(data:any){
      {
        console.log("button clicked")
        if(this.addproject.valid){
          console.log("Valid Form")
          this.pd.addData(this.addproject.value)
        }else{
          console.log("Form is Invalid")
        }
        
        // console.log(this.addproject.value)
        // this.pd.updateData(data)

    
    }
    }
    getDateRange(){
        const currentDate = new Date()
        
        // console.log(currentDate)
        this.start_date = new Date(currentDate)
        // console.log(this.start_date)
        this.start_date.setMonth(currentDate.getMonth())
        this.start_date = this.start_date.toISOString().split('T')[0];
        // console.log(this.start_date)
  
        
    }
    ending_date(date:any){
       this.end_date =new Date(date.startDate);
       this.end_date.setDate(this.end_date.getDate()+1)
       this.end_date = this.end_date.toISOString().split('T')[0];
        console.log(this.end_date)
        
    }

    showShift(){
      this.is_Shift = this.is_Shift? false: true;
    }
    showSite(){
      this.is_Site = this.is_Site? false: true;
    }

    clearform(){
      this.addproject.reset()
    }
}
