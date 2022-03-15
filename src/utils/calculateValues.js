import { data } from '@/constants/data';

const calcTaxes = (taxes, salary, calcFor) => {
  let total = 0;
  const breakdown = taxes.map((tax) => {
    if (tax.type === 'percentage') {
      total = total + salary * tax.percentage;
      return {
        amount: Math.round(salary * tax.percentage) / 100,
        label: tax.label,
      };
    }
    if (tax.type === 'progressive') {
      const amount = tax.brackets.reduce((acc, { from, to, percentage }) => {
        if (salary <= from * 100) {
          // not in bracket - dont calculate for that bracket
          return acc;
        }
        if (!to && salary > from * 100) {
          // is in last bracket
          return acc + (salary - from * 100) * percentage;
        }
        if (salary <= to * 100) {
          // is in one of the middle brackets
          return acc + (salary - from * 100) * percentage;
        }
        // is in first bracket
        return acc + (to * 100 - from * 100) * percentage;
      }, 0);
      total = total + amount;
      return {
        amount: Math.round(amount) / 100,
        label: tax.label,
      };
    }
  });
  if (calcFor === 'employer') {
    total = salary + total;
  }
  if (calcFor === 'employee') {
    total = salary - total;
  }

  return { total: Math.round(total) / 100, breakdown };
};

export const calculateValues = (salary, country) => {
  const { employerTaxes, employeeTaxes } = data[country];
  const convertedSalary = Number(salary) * 100; // best way to deal with money values is to base it off the smallest denominator ( 1 cent ) for easier rounding later
  return {
    employerTaxResults: calcTaxes(employerTaxes, convertedSalary, 'employer'),
    employeeTaxResults: calcTaxes(employeeTaxes, convertedSalary, 'employee'),
  };
};
