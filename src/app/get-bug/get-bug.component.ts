import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';
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

  constructor(private bugService:BugService) { }
  reloadPage() {
    window.location.reload();
 }
getBug(name:any)
{
  const bugName =name;

    if(bugName!=null){
      const promise = this.bugService.getBug(bugName);
    promise.subscribe(response => {
      this.bugResult = [response];
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
        alert('No data found..')
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
