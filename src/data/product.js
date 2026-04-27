export const LOCAL_PRODUCTS_STORAGE_KEY = "items";

export const DEFAULT_PRODUCTS = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 99,
    rating: 4.8,
    image: "🎧",
    description:
      "High-quality wireless headphones with active noise cancellation, long battery life, and comfortable ear cushions for everyday use.",
    specs: [
      "Noise Cancellation",
      "30 Hours Battery",
      "Bluetooth 5.3",
      "Fast Charging",
    ],
  },
  {
    id: 2,
    title: "Smart Watch",
    category: "Electronics",
    price: 149,
    rating: 4.6,
    image: "⌚",
    description:
      "A stylish smart watch that helps you track fitness, monitor heart rate, receive notifications, and stay connected all day.",
    specs: [
      "Heart Rate Monitor",
      "Water Resistant",
      "Fitness Tracking",
      "AMOLED Display",
    ],
  },
  {
    id: 3,
    title: "Running Shoes",
    category: "Fashion",
    price: 79,
    rating: 4.5,
    image: "👟",
    description:
      "Lightweight and breathable running shoes designed for comfort, durability, and better performance during workouts.",
    specs: [
      "Breathable Mesh",
      "Lightweight Design",
      "Soft Cushion",
      "Anti-slip Sole",
    ],
  },
  {
    id: 4,
    title: "Backpack",
    category: "Fashion",
    price: 49,
    rating: 4.3,
    image: "🎒",
    description:
      "A durable and modern backpack with multiple compartments, perfect for school, office, travel, and daily use.",
    specs: [
      "Laptop Compartment",
      "Water Resistant",
      "Large Capacity",
      "Comfort Straps",
    ],
  },
  {
    id: 5,
    title: "Coffee Maker",
    category: "Home",
    price: 120,
    rating: 4.7,
    image: "☕",
    description:
      "Brew rich and fresh coffee at home with an easy one-touch coffee maker designed for quick and consistent brewing.",
    specs: [
      "One-touch Brew",
      "Reusable Filter",
      "Compact Design",
      "Easy Cleaning",
    ],
  },
  {
    id: 6,
    title: "Desk Lamp",
    category: "Home",
    price: 35,
    rating: 4.2,
    image: "💡",
    description:
      "A modern LED desk lamp with adjustable brightness levels, ideal for studying, working, and reading at night.",
    specs: [
      "LED Light",
      "Adjustable Brightness",
      "Flexible Neck",
      "Energy Saving",
    ],
  },
];

// Backwards-compatible export for older imports.
export const items = DEFAULT_PRODUCTS;
