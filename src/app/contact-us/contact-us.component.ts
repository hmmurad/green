import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  messageForm: FormGroup;

  // messageForm = new FormGroup({
  //   firstName: new FormControl('hm'),
  //   lastName: new FormControl('murad'),
  //   message: new FormControl('this is message')
  // })


  constructor( private fb: FormBuilder) {
    this.messageForm = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(5)]],
    })
    // this.messageForm = fb.group({
    //   firstName: new FormControl('hm'),
    //   lastName: new FormControl('murad'),
    //   message: new FormControl('thsi is message'),
    // })
  }

  ngOnInit(): void {
    console.log(this.messageForm.controls);
  }

  onSubmitMessage() {
    console.log(this.messageForm.value);
  }

}
