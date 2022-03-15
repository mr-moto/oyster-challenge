const Column = ({ results, label, totalLabel }) => {
  return (
    <div className="flex flex-col">
      <p className="text-lg font-bold">{label}</p>
      <ul className="flex-1">
        {results.breakdown.map((result) => (
          <li key={result.label}>
            {result.label}:{' '}
            <span className="font-bold">${result.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <p className="font-bold mt-4">
        {totalLabel}: ${results.total.toFixed(2)}
      </p>
    </div>
  );
};

const TaxChart = ({ results }) => {
  return (
    <div className="flex gap-8 mt-8">
      <Column
        results={results.employerTaxResults}
        label="Employer Taxes"
        totalLabel="Total Cost"
      />
      <Column
        results={results.employeeTaxResults}
        label="Employee Taxes"
        totalLabel="Net Salary"
      />
    </div>
  );
};

export default TaxChart;
