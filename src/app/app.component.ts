import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import type { InvestmentResult, InvetmentInputData } from './invetment-input.model';
import { InvetmentResultComponent } from './invetment-result/invetment-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvetmentResultComponent],
})
export class AppComponent {
  resultsData = signal<InvestmentResult[]| undefined>(undefined) ;
  calculateInvestmentResults(data: InvetmentInputData) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;

    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    console.log(annualData);
    this.resultsData.set(annualData);
  }
}
function siganl<T>() {
  throw new Error('Function not implemented.');
}

