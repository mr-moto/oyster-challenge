export const data = [
  {
    country: 'Country A',
    meta: {
      inputIdentifier: 'a',
    },
    employerTaxes: [
      {
        type: 'percentage',
        label: 'Health Insurance',
        percentage: 10,
      },
      {
        type: 'percentage',
        label: 'Social Security',
        percentage: 5,
      },
      {
        type: 'progressive',
        label: 'Payroll Tax',
        brackets: [
          { from: 0, to: 50000, percentage: 10 },
          { from: 50001, to: null, percentage: 30 },
        ],
      },
    ],
    employeetaxes: [
      {
        type: 'percentage',
        label: 'Social Security',
        percentage: 5,
      },
      {
        type: 'progressive',
        label: 'Income Tax',
        brackets: [
          { from: 0, to: 25000, percentage: 20 },
          { from: 25001, to: null, percentage: 40 },
        ],
      },
    ],
  },
  {
    country: 'Country B',
    meta: {
      inputIdentifier: 'b',
    },
    employerTaxes: [
      {
        type: 'percentage',
        label: 'Health Insurance',
        percentage: 21.5,
      },
      {
        type: 'percentage',
        label: 'Social Security',
        percentage: 1.2,
      },
      {
        type: 'progressive',
        label: 'Payroll Tax',
        brackets: [
          { from: 0, to: 10000, percentage: 5 },
          { from: 10001, to: 22000, percentage: 8 },
          { from: 22001, to: 60000, percentage: 12 },
          { from: 60001, to: null, percentage: 15 },
        ],
      },
    ],
    employeetaxes: [
      {
        type: 'percentage',
        label: 'Social Security',
        percentage: 5,
      },
      {
        type: 'brackets',
        label: 'Income Tax',
        brackets: [
          { from: 0, to: 25000, percentage: 5 },
          { from: 25001, to: 75000, percentage: 13 },
          { from: 75001, to: null, percentage: 25 },
        ],
      },
    ],
  },
];
