import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';
import { STATUS } from '../STATUS';
@Component({
  selector: 'app-get-bug',
  templateUrl: './get-bug.component.html',
  styleUrls: ['./get-bug.component.css']
})
export class GetBugComponent implements OnInit {//controller
  title:string = 'Get Bug';
  bug:Bug=new Bug(); //model -stores all form data
  bugArray:any;
  bugResult: any;
  bugList: any;
  constructor(private bugService:BugService) { }
  getBugbyNameStatus() {
    let status = (<HTMLInputElement>document.getElementById('Status')).value;
      let name = (<HTMLInputElement>document.getElementById('bugName')).value;
    const promise = this.bugService.getBugbyStatusAndName(name, status);
        promise.subscribe(response => {
        console.log(response);
          this.bugList = response;
          if (this.bugList!=0) {
            this.bugArray = this.bugList;
          }
          else {
            alert("No Bug with Name : " + name + " and Status : " + status + " found");
            this.bugArray = [];
          }
        },
          error => {
            alert('error happened..')
          })
      }


  reloadPage() {
    window.location.reload();
 }
 deleteBug(id:number, index:number){
  var txt;
  var r = confirm("Press OK to delete the bug " + name);
  if (r == true) {
  const observable = this.bugService.delete(id);
  observable.subscribe(response=> this.bugArray.splice(index,1));
  alert("Bug Deleted Successfully");
}
else{

    alert('Bug not deleted..');
  }
}



getBugbyName(name:any)
{
  const bugName =name;

    if(bugName!=null){
      const promise = this.bugService.getBugbyName(bugName);
    promise.subscribe(response => {
      this.bugResult = response;
      if (this.bugResult!=0) {
        this.bugArray = this.bugResult;
        console.log(response);

      }
      else {
        alert("Record not found");
      }
    },
      error => {
        console.log(error);
        alert('error happened..')
      });
    }


}
getBugbyStatus(status:any)
{
  const bugstatus =status;
  const promise = this.bugService.getBugbyStatus(status);
  promise.subscribe(response => {
    this.bugResult = response;
    if (this.bugResult!=0) {
      this.bugArray = this.bugResult;
    }
    else {
      alert("No Bug with  " + status + " status found");
    }
  },
  error=>{
    console.log(error);
    alert('No data found....');

  }
  )
}
  ngOnInit(): void {
    const observable = this.bugService.getBugs();
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;
      if (this.bugArray[0] == undefined) {
        return alert("No Records available  currently from server");
      }
     });
  }

}
