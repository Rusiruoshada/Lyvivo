interface Filters{
    specials: string[],
    productType: {key:string ,label:string}[],
    availability: string[]
}

const filters:Filters = {
  specials: [
    'Lyvivo Great Savings',
    'Lyvivo Every Day Low Price',
    'Newest Products',
    'Lyvivo Products',
  ],
  productType: [
    { key: '1', label: 'Baby Care' },
    { key: '2', label: 'Bakery' },
    { key: '3', label: 'Beverages' },
    { key: '4', label: 'Butchery' },
    { key: '5', label: 'Chilled' },
    { key: '6', label: 'CHRISTMAS' },
    { key: '7', label: 'Fresh Fruit' },
    { key: '8', label: 'Fresh Produce' },
    { key: '9', label: 'Frozen' },
    { key: '10', label: 'General Merchandise' },
    { key: '11', label: 'Gift Vouchers' },
    { key: '12', label: 'Groceries' },
    { key: '13', label: 'Health & Beauty' },
    { key: '14', label: 'Household Items' },
    { key: '15', label: 'Other Fresh Product' },
    { key: '16', label: 'Stock Clearance' },
    { key: '17', label: 'Sweet & Snacks' },
  ],
  availability: ['In stock', 'Out of stock'],
};

export default filters;
