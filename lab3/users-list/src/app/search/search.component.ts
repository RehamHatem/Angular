import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchInput: string = '';
@Output() searchValue= new EventEmitter<string>();
  search(){
  this.searchValue.emit(this.searchInput.toLowerCase());

  }

}
