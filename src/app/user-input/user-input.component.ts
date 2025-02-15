import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputData } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() userInput = new EventEmitter<UserInputData>();
  enteredInitialInvestment = '0';
  enteredAnualInvestment = '0';
  enteredExpectedReturn = '0';
  enteredDuration = '10';
  onSubmit() {
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnualInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);

    this.userInput.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration, 
    })
  }

}
