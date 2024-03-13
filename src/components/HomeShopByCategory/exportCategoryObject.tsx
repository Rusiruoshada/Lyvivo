

  interface Category {
    value: string;
    label: string;
    children: {value: string; label: string;}[];
    imgPath: string
  }

const categories: Category[] = [
  {
    value: 'All',
    label: 'All',
    children: [],
    imgPath: '/images/category Images/cosmetics.png'
  },
  {
    value: 'Grocery',
    label: 'Grocery',
    children: [
      {
        value: 'Fruits & Vegetables',
        label: 'Fruits & Vegetables'
      },
      {
        value: 'Dairy Products',
        label: 'Dairy Products'
      },
      {
        value: 'Meat & Poultry',
        label: 'Meat & Poultry'
      },
      {
        value: 'Bakery & Bread',
        label: 'Bakery & Bread'
      },
      {
        value: 'Canned Goods',
        label: 'Canned Goods'
      },
      {
        value: 'Beverages',
        label: 'Beverages'
      },
      {
        value: 'Snacks & Confectionery',
        label: 'Snacks & Confectionery'
      },
      {
        value: 'Condiments & Sauces',
        label: 'Condiments & Sauces'
      },
      {
        value: 'Frozen Foods',
        label: 'Frozen Foods'
      },
      {
        value: 'Grains, Pasta & Rice',
        label: 'Grains, Pasta & Rice'
      },
      {
        value: 'Breakfast Foods',
        label: 'Breakfast Foods'
      },
      {
        value: 'Organic & Natural Products',
        label: 'Organic & Natural Products'
      },
      {
        value: 'International Foods',
        label: 'International Foods'
      }
    ],
    imgPath: '/images/category Images/shopping.png'
  },
  {
    value: 'Pharmacy',
    label: 'Pharmacy',
    children: [
      {
        value: 'Prescription Medications',
        label: 'Prescription Medications'
      },
      {
        value: 'Over-the-counter Medications',
        label: 'Over-the-counter Medications'
      },
      {
        value: 'Vitamins & Supplements',
        label: 'Vitamins & Supplements'
      },
      {
        value: 'First Aid Supplies',
        label: 'First Aid Supplies'
      },
      {
        value: 'Personal Care Products',
        label: 'Personal Care Products'
      },
      {
        value: 'Baby Care Products',
        label: 'Baby Care Products'
      },
      {
        value: 'Feminine Hygiene Products',
        label: 'Feminine Hygiene Products'
      },
      {
        value: 'Health Monitoring Devices',
        label: 'Health Monitoring Devices'
      },
      {
        value: 'Medical Equipment',
        label: 'Medical Equipment'
      },
      {
        value: 'Homeopathic Remedies',
        label: 'Homeopathic Remedies'
      }
    ],
    imgPath: '/images/category Images/stethoscope.png'
  },
  {
    value: 'Food',
    label: 'Food',
    children: [
      {
        value: 'Restaurants & Cafes',
        label: 'Restaurants & Cafes'
      },
      {
        value: 'Fast Food',
        label: 'Fast Food'
      },
      {
        value: 'Fine Dining',
        label: 'Fine Dining'
      },
      {
        value: 'Ethnic Cuisine',
        label: 'Ethnic Cuisine'
      },
      {
        value: 'Desserts & Sweets',
        label: 'Desserts & Sweets'
      },
      {
        value: 'Beverages',
        label: 'Beverages'
      },
      {
        value: 'Healthy & Organic Food Options',
        label: 'Healthy & Organic Food Options'
      },
      {
        value: 'Meal Kits & Delivery Services',
        label: 'Meal Kits & Delivery Services'
      },
      {
        value: 'Specialty Foods',
        label: 'Specialty Foods'
      }
    ],
    imgPath: '/images/category Images/pizza.png'
  },
  {
    value: 'Electronics',
    label: 'Electronics',
    children: [
      {
        value: 'Computers & Laptops',
        label: 'Computers & Laptops'
      },
      {
        value: 'Smartphones & Tablets',
        label: 'Smartphones & Tablets'
      },
      {
        value: 'Televisions & Home Entertainment Systems',
        label: 'Televisions & Home Entertainment Systems'
      },
      {
        value: 'Cameras & Photography Equipment',
        label: 'Cameras & Photography Equipment'
      },
      {
        value: 'Audio Equipment',
        label: 'Audio Equipment'
      },
      {
        value: 'Gaming Consoles & Accessories',
        label: 'Gaming Consoles & Accessories'
      },
      {
        value: 'Home Appliances',
        label: 'Home Appliances'
      },
      {
        value: 'Kitchen Appliances',
        label: 'Kitchen Appliances'
      },
      {
        value: 'Wearable Technology',
        label: 'Wearable Technology'
      },
      {
        value: 'Accessories',
        label: 'Accessories'
      }
    ],
    imgPath: '/images/category Images/keyboard.png'
  }]
  


  export  default categories;
