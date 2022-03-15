export const data = {
  a: {
    country: 'Country A',
    value: 'a',
    employerTaxes: [
      {
        type: 'percentage',
        label: 'Health Insurance',
        percentage: 0.1,
      },
      {
        type: 'percentage',
        label: 'Social Security',
        percentage: 0.05,
      },
      {
        type: 'progressive',
        label: 'Payroll Tax',
        brackets: [
          { from: 0, to: 50000, percentage: 0.1 },
          { from: 50000, to: null, percentage: 0.3 },
        ],
      },
    ],
    employeeTaxes: [
      {
        type: 'percentage',
        label: 'Social Security',
        percentage: 0.2,
      },
      {
        type: 'progressive',
        label: 'Income Tax',
        brackets: [
          { from: 0, to: 25000, percentage: 0.2 },
          { from: 25000, to: null, percentage: 0.4 },
        ],
      },
    ],
  },
  b: {
    country: 'Country B',
    value: 'b',
    employerTaxes: [
      {
        type: 'percentage',
        label: 'Health Insurance',
        percentage: 0.215,
      },
      {
        type: 'percentage',
        label: 'Social Security',
        percentage: 0.012,
      },
      {
        type: 'progressive',
        label: 'Payroll Tax',
        brackets: [
          { from: 0, to: 10000, percentage: 0.05 },
          { from: 10000, to: 22000, percentage: 0.08 },
          { from: 22000, to: 60000, percentage: 0.12 },
          { from: 60000, to: null, percentage: 0.15 },
        ],
      },
    ],
    employeeTaxes: [
      {
        type: 'percentage',
        label: 'Social Security',
        percentage: 0.065,
      },
      {
        type: 'progressive',
        label: 'Income Tax',
        brackets: [
          { from: 0, to: 25000, percentage: 0.05 },
          { from: 25000, to: 75000, percentage: 0.13 },
          { from: 75000, to: null, percentage: 0.25 },
        ],
      },
    ],
  },
};
