import {calculateInvestmentResults, formatter} from "../util/investment.js";

export function Results({input}) {
    const investmentResults = calculateInvestmentResults(input);
    const initialInvestment =
        investmentResults[0].valueEndOfYear -
        investmentResults[0].interest -
        investmentResults[0].annualInvestment
    return (<>
        <table id={"result"}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interests (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {investmentResults.map(annualData => {
                const totalInterest =
                    annualData.valueEndOfYear -
                    annualData.annualInvestment *
                    annualData.year -
                    initialInvestment
                const totalAmountInvested =
                    annualData.valueEndOfYear -
                    totalInterest
                return (
                    <tr key={annualData.year}>
                        <td>{annualData.year}</td>
                        <td>{formatter.format(annualData.valueEndOfYear)}</td>
                        <td>{formatter.format(annualData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </>)
}