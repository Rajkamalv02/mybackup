import { Component} from '@angular/core';
import { AddprojectComponent } from '../addproject/addproject.component';
import { CommonModule } from '@angular/common';
import { ProjectdataService } from '../projectdata.service';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-projectlist',
  standalone: true,
  imports: [AddprojectComponent,CommonModule,RouterLink,NgxPaginationModule],
  templateUrl: './projectlist.component.html',
  styleUrl: './projectlist.component.css'
})
export class ProjectlistComponent{
  projectlist:any = []
  currentPage = 1;      
  itemsPerPage = 5;
  totalItems= 30;
  no_of_site = 2;
    constructor(private pd:ProjectdataService){
      this.projectlist = this.pd.getData()
      // console.log(this.projectlist)
    }
   
    // editForm(project:any){

    //   console.log(project)

    // }

    filterlist(projectfiltered:any){
      if(projectfiltered.projectName!=''){
      this.projectlist = this.projectlist.filter((project:any) => project.projectName.includes(projectfiltered.projectName))
      }
      if(projectfiltered.projectCategory!=''){
        this.projectlist = this.projectlist.filter((project:any) => project.projectCategory.includes(projectfiltered.projectCategory))
        }
        // if(projectfiltered.startDate!=''){
        //   this.projectlist = this.projectlist.filter((project:any) => project.startDate.includes(projectfiltered.startDate))
        //   }

    }

    editData(data:any){
      this.pd.getEditData(data)
      
}
    deleteForm(id:any){
      console.log(id)
        const confirm_message = confirm("Are you sure you want to delete this project")
        if(confirm_message){
          this.projectlist = this.projectlist.filter((project:any) => project.id!==id)
          }
        
      //  const deleteData = this.pd.deleteDataById(id)
      //  console.log(deleteData)
      //  if(deleteData!){
      //     alert("Deleted Successfully")
      //  }
      //  else{
      //   alert("Something went wrong....")
      //  }
    }
    
    
    

}
