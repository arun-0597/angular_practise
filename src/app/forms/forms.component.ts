import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  posttitle: string = '';
  postdetail: string = '';
  imgUrl: string = '';
  postUrl: string = '';
  titleBackground: Boolean = false;

}
