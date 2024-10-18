import { Injectable, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService implements OnChanges {
  apiUrl = 'https://run.mocky.io/v3/f6cadef7-af21-42c9-9ffd-cd260d5f3843'
  // apiUrl='https://retoolapi.dev/SSfGlf/data'
  apiData= new Observable<any>()
  projectlist:any[]=[]

  editObject = {}

  constructor(private http:HttpClient) {
    this.apiData=this.http.get(this.apiUrl)
    this.apiData.subscribe(
     (data)=>{
       this.projectlist = data
     }  )
  }
  ngOnChanges(){
    this.apiData=this.http.get(this.apiUrl)
    this.apiData.subscribe(
     (data)=>{
       this.projectlist = data
     }  )
  }

  getData(){
    // console.log(this.projectlist)
     return this.projectlist
     
  }
  deleteDataById(id:number){
    console.log(id)
    const deleteurl = `https://api-generator.retool.com/SSfGlf/data/${id}`
    console.log(Boolean(deleteurl))
    this.apiData = this.http.delete(deleteurl)
  }

  getEditData(data:any){
      this.editObject = data
      // console.log(data);
      // console.log(this.editObject)
  }
  addData(data:any){
    console.log(data)
    this.projectlist.push(data)
  }

  addEditData():any{
    return this.editObject
  }

  updateData(formdata:any){
    console.log(formdata)
    const id = formdata.id
    const updatUrl = `https://api-generator.retool.com/SSfGlf/data/${id}`
    this.apiData = this.http.put(updatUrl,formdata)

  }


  
  
  

//   addData(data :any):void{
//     if(data){
//       this.projectlist.push(data)
//     console.log("Received Data: ",data)
//     // console.log(this.projectlist)
//   }
//   else
//     console.log("Data not found")
// }
//   getData():any{
//     return this.projectlist
//   }
}
