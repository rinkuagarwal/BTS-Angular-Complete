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
  constructor(private bugService:BugService) { }

  ngOnInit(): void {
    const observable = this.bugService.getBugs();
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;
     });
  }

}
