import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentResult } from '../invetment-input.model';

@Component({
  selector: 'app-invetment-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invetment-result.component.html',
  styleUrl: './invetment-result.component.css'
})
export class InvetmentResultComponent {
  results = input<InvestmentResult[]>();
}
