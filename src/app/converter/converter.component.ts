import { Component } from '@angular/core';
import { NumToWordPipe } from '../num-to-word.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [NumToWordPipe, FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  result: string = "";
  inputValue:string = "";
}
