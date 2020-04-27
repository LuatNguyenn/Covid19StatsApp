import { Component, OnInit } from '@angular/core';
import { Service } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [Service],
})
export class MainPageComponent implements OnInit {
  result;
  location: any;

  countryForm: FormGroup;
  displayInfo: boolean;
  error: boolean;
  constructor(private formBuilder: FormBuilder, private service: Service) {
    this.countryForm = this.formBuilder.group({
      country: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.displayInfo = false;
    this.service.getLocation().subscribe(
      (val) => {
        this.location = val;
        this.onLoad(this.location.country_name);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onLoad(country: string) {
    console.log('here:' + this.location);
    this.service.getCorona(country).subscribe(
      (da) => (this.result = da),
      (error) => console.log(error),
      () => console.log('complete')
    );
  }

  onSubmit() {
    let country = Object.values(this.countryForm.value);
    console.log(this.countryForm.value);
    let c: any = country[0];
    console.log(c);
    this.service.getCorona(c).subscribe(
      (da) => (this.result = da),
      (error) => console.log(error),
      () => console.log('complete')
    );
    this.countryForm.reset();
  }
}

// $('.timer').each(function () {
//   var $this = $(this);
//   var val = $(this).data('count');
//   jQuery({
//       Counter: 0
//   }).animate({
//       Counter: val
//   }, {
//       duration: 500,
//       easing: 'swing',
//       step: function () {
//           $this.text(Math.ceil(this.Counter));
//       }
//   });
// });
