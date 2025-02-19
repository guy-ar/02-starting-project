import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvetmentInputData } from '../invetment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //@Output() userInput = new EventEmitter<UserInputData>();
  userInput = output<InvetmentInputData>();
  enteredInitialInvestment = signal('0'); // no need to change the HTM template as ngModel knows top handle signal
  enteredAnualInvestment = signal('0');
  enteredExpectedReturn = signal('0');
  enteredDuration = signal('10');
  onSubmit() {
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnualInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);

    this.userInput.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(), 
    })
    this.enteredInitialInvestment.set('0');
    this.enteredAnualInvestment.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('10');
  }

}
