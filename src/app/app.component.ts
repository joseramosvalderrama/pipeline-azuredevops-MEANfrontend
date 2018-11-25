import { Component, OnInit } from '@angular/core';
import { PersonaService } from './services/persona.service';
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonaService]
})
export class AppComponent implements OnInit {
  title = 'app';
  getList;

  constructor(
   private _exampleService: PersonaService) { 
     this.getList = [];
   }

  ngOnInit() {
    this._exampleService.getExample().subscribe(res => {
      this.getList = res.response;
    })
  }

  onSubmit() {
    let form = document.querySelectorAll('#example_form > input');
    let name = (<HTMLInputElement>form[0]).value;
    let description = (<HTMLInputElement>form[1]).value;
    if(name != '' && description != '') {
      let example = new Persona(name,description);
      this._exampleService.saveExample(example).subscribe(response => {
        this.ngOnInit();
      });
    }
  }
}
