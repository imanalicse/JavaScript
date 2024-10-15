const orders = [
  {
    orderId: 1,
    items: [
      { name: "Laptop", category: "Electronics", price: 1500 },
      { name: "Mouse", category: "Electronics", price: 50 }
    ]
  },
  {
    orderId: 2,
    items: [
      { name: "Phone", category: "Electronics", price: 800 },
      { name: "Headphones", category: "Electronics", price: 200 }
    ]
  },
  {
    orderId: 3,
    items: [
      { name: "Shoes", category: "Fashion", price: 100 },
      { name: "Watch", category: "Fashion", price: 250 }
    ]
  }
];

const filteredOrders = orders.map(order => ({
  ...order,  // Spread the order object to preserve other properties
  items: order.items.filter(item => item.category === "Electronics" && item.price > 500)
}));

console.log(filteredOrders);


output_result = [
  {
    orderId: 1,
    items: [
      { name: "Laptop", category: "Electronics", price: 1500 }
    ]
  },
  {
    orderId: 2,
    items: [
      { name: "Phone", category: "Electronics", price: 800 }
    ]
  },
  {
    orderId: 3,
    items: []
  }
]
