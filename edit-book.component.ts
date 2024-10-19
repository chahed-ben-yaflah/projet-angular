import { Component,Input, Output  } from '@angular/core';
import{Book} from '../model/book';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {
    @Input() NvtId?:number;
    @Output() bookediter = new EventEditer<Book>();
    
    bookEdit(title:string,author:string,price:number){
        const editerBook= Book(this.NvtId?,
          title,
          author,
          price)
      
        
        this.bookediter.edit(editerBook);
        console.log(editerBook);
      };


    
  
}
