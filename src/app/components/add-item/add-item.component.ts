import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { debounceTime } from 'rxjs/operators';
import { Item } from 'src/app/interfaces/api.interface';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  form: FormGroup;
  item: Item;

  constructor(private _apiService: ApiService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      creator: new FormControl('', [Validators.required]),
      chapter: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      season: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      saga: new FormControl('', [Validators.required])
    });

    this.form.valueChanges.pipe(debounceTime(500)).subscribe(value => console.log(value))
  }

  save(event: Event){
    event.preventDefault();
    this.item = this.form.value;
    this._apiService.addItem(this.item).then(() => {
      console.log('creado');
    }).catch(err => console.log(err))
  }

}
