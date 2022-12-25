const buttonsData = [
    {
        solo: 'Penny Rolls',
        group: 'Penny Boxes',
        single: .5,
        bunch: 25,
        container: 'containers_ex-buttons',
        button: 'button__label',
        count: 'count',
        square: 'container_square',
        name: 'Pennies'
    },
    {
        solo: 'Nickel Rolls',
        group: 'Nickel Boxes',
        single: 2,
        bunch: 100,
        container: 'containers_ex-buttons',
        button: 'button__label',
        count: 'count',
        square: 'container_square',
        name: 'Nickels'
    },
    {
        solo: 'Dime Rolls',
        group: 'Dime Boxes',
        single: 5,
        bunch: 250,
        container: 'containers_ex-buttons',
        button: 'button__label',
        count: 'count',
        square: 'container_square',
        name: 'Dimes'
    },
    {
        solo: 'Quarter Rolls',
        group: 'Quarter Boxes',
        single: 10,
        bunch: 500,
        container: 'containers_ex-buttons',
        button: 'button__label',
        count: 'count',
        square: 'container_square',
        name: 'Quarters'
    },
    {
        solo: '$1 Bills',
        group: '$1 Bundles',
        single: 1,
        bunch: 100,
        container: 'containers_bills containers_ex-buttons',
        button: 'button__label button__label_bills',
        count: 'count count_bills',
        square: 'container_square container_square_bills',
        name: 'Dollars'
    },
    {
        solo: '$5 Bills',
        group: '$5 Bundles',
        single: 5,
        bunch: 500,
        container: 'containers_bills containers_ex-buttons',
        button: 'button__label button__label_bills',
        count: 'count count_bills',
        square: 'container_square container_square_bills',
        name: 'Fives'
    },
    {
        solo: '$10 Bills',
        group: '$10 Bundles',
        single: 10,
        bunch: 100,
        container: 'containers_bills containers_ex-buttons',
        button: 'button__label button__label_bills',
        count: 'count count_bills',
        square: 'container_square container_square_bills',
        name: 'Tens'
    }
];

const defaultSafe = {
  'Pennies': 0,
  'Nickels': 0,
  'Dimes': 0,
  'Quarters': 0,
  'Dollars': 0,
  'Fives': 0,
  'Tens': 0,
  'Large Bills': 0
};

const convertDateToString = (date) => {
  const today = new Date(date);
  return today.toDateString();
}

export {buttonsData, defaultSafe, convertDateToString};