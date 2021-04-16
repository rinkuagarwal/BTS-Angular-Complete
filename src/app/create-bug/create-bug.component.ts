import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';
@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit {
  title:string = 'Create Bug';
  bug:Bug=new Bug(); //model -stores all form data
  bugArray:Bug[]=[];
  constructor(private bugService:BugService) { }
  save(){
    const promise = this.bugService.save(this.bug);
    promise.subscribe(response=> {
      console.log(response);
      alert('user added..')
      //this.bugArray.push(Object.assign({}, this.user));
    },
    error=> {
      console.log(error);
      alert('error happenned..')
    })
    // this.user.firstname = 'John';
  }

  ngOnInit(): void {
  }

}
