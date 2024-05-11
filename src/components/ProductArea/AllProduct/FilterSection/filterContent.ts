interface Filters{
    specials: string[],
    productType: string[],
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
    'Baby Care',
    'Bakery',
    'Beverages',
    'Butchery',
    'Chilled',
    'CHRISTMAS',
    'Fresh Fruit',
    'Fresh Produce',
    'Frozen',
    'General Merchandise',
    'Gift Vouchers',
    'Groceries',
    'Health & Beauty',
    ' Household Items',
    'Other Fresh Product',
    'Pet Care',
    'Stock Clearance',
    ' Sweet & Snacks',
  ],
  availability: ['In stock', 'Out of stock'],
};

export default filters;
