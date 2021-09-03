import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors
} from '@angular/forms';

import { Observable, of } from 'rxjs';

interface IColor {
  name: string;
  value: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedValue: string;

  public colors: Array<IColor> = [
    {
      name: 'Lime Green',
      value: '#00ff00'
    },
    {
      name: 'Red',
      value: '#ff0000'
    },
    {
      name: 'Blue',
      value: '#0000ff'
    }
  ];

  ngOnItit() {}

  changeColor(data) {
    console.log('Value: ' + data);
  }

  public profile: FormGroup = new FormGroup({
    color: new FormControl(null, [Validators.required]),
    username: new FormControl(
      null,
      [Validators.required],
      [this.validateUsername]
    )
  });

  public validateUsername(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return of(null);
  }
}
