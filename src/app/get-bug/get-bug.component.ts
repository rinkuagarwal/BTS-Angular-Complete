import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';
@Component({
  selector: 'app-get-bug',
  templateUrl: './get-bug.component.html',
  styleUrls: ['./get-bug.component.css']
})
export class GetBugComponent implements OnInit {
  title:string = 'Get Bug';
  bug:Bug=new Bug(); //model -stores all form data
  bugArray:any;
  bugResult: any;

  constructor(private bugService:BugService) { }
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
        alert('error happened..')
      });
    }


}
getBugbyStatus(status:any)
{
this.bugService.getBugbyStatus(status).subscribe(response=>
  {
    this.bugArray=response;
    console.log(response);
    alert('bug found....');

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
     });
  }

}
