import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function ResultsTable({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
  //console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest Earned</th>
        <th>Capital Invested </th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((result) => {
            const totalInterestEarned = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
            const totalInvestedAmount = result.valueEndOfYear - totalInterestEarned
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterestEarned)}</td>
              <td>{formatter.format(totalInvestedAmount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
