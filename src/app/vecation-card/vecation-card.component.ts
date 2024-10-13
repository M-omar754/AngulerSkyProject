import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-vecation-card',
  standalone: true,
  imports: [],
  templateUrl: './vecation-card.component.html',
  styleUrl: './vecation-card.component.css'
})
export class VecationCardComponent {
  @Input() label: string = '';
  @Input() count: number = 0;
  @Input() icon: string = '';
}
