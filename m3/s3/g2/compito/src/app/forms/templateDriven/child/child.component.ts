import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @ViewChild('f',{static: true}) form!: NgForm;


  submit(form:NgForm){
    console.log(form);
    console.log(form.form.value);
  }

  ngOnInit(){
    this.form.statusChanges?.subscribe(status => {
      console.log(status);
    })
  }
}
