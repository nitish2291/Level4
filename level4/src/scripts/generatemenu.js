import fs from "fs";

// 🔥 Category → Image mapping (single source of truth)
const categoryImages = {
  "Soups": "/images/menu/soup.jpg",
  "Beverages & Shakes": "/images/menu/drinks.jpg",
  "Veg Starters": "/images/menu/starters.jpg",
  "Tandoor (Veg)": "/images/menu/tandoor-veg.jpg",
  "Tandoor (Non-Veg)": "/images/menu/tandoor-nonveg.jpg",
  "Momos": "/images/menu/momos.jpg",
  "Chinese": "/images/menu/chinese.jpg",
  "Biryani": "/images/menu/biryani.jpg",
  "Indian Main Course (Veg)": "/images/menu/curry.jpg",
  "Indian Main Course (Non-Veg)": "/images/menu/curry.jpg",
  "Rice": "/images/menu/rice.jpg",
  "Dal": "/images/menu/dal.jpg",
  "Breads": "/images/menu/bread.jpg",
  "Thali": "/images/menu/thali.jpg"
};

// 🔥 FULL MENU DATA (structured)
const categories = [

  {
    name: "Soups",
    items: [
      ["Veg Sweet Corn Soup",160,"veg"],
      ["Veg Manchow Soup",150,"veg"],
      ["Veg Hot & Sour Soup",159,"veg"],
      ["Lemon Coriander Soup",160,"veg"],
      ["Veg Clear Soup",169,"veg"],
      ["Veg Thuppa Soup",209,"veg"],
      ["Tomato Soup",170,"veg"],
      ["Chicken Manchow Soup",180,"nonveg"],
      ["Chicken Hot & Sour Soup",180,"nonveg"],
      ["Chicken Lemon Coriander Soup",190,"nonveg"],
      ["Chicken Clear Soup",180,"nonveg"]
    ]
  },

  {
    name: "Beverages & Shakes",
    items: [
      ["Masala Cold Drink",69,"veg"],
      ["Milk Shake",159,"veg"],
      ["Vanilla Shake",149,"veg"],
      ["Chocolate Shake",169,"veg"],
      ["Kaju Shake",229,"veg"],
      ["Kitkat Shake",199,"veg"],
      ["Badam Shake",199,"veg"],
      ["Cold Coffee",169,"veg"],
      ["Cold Coffee with Ice Cream",189,"veg"],
      ["Oreo Shake",169,"veg"],
      ["Hot Coffee",69,"veg"],
      ["Butter Milk",69,"veg"],
      ["Lassi",89,"veg"],
      ["Blue Lagoon",129,"veg"],
      ["Virgin Mojito",129,"veg"],
      ["Lemonade",129,"veg"],
      ["Soft Drink",49,"veg"]
    ]
  },

  {
    name: "Veg Starters",
    items: [
      ["Veg Sizzler",400,"veg"],
      ["Veg Manchurian Dry",220,"veg"],
      ["Paneer Stick",249,"veg"],
      ["Paneer Bullet",299,"veg"],
      ["Baby Corn Chilli Dry",289,"veg"],
      ["Mushroom Chilli Dry",289,"veg"],
      ["Baby Corn Crispy Dry",289,"veg"],
      ["American Salt Pepper",289,"veg"],
      ["Red Chilli Pasta",229,"veg"],
      ["White Sauce Pasta",309,"veg"],
      ["Spring Roll",189,"veg"],
      ["French Fries",129,"veg"],
      ["Peri Peri Fries",150,"veg"],
      ["Crispy Chilli Potato",209,"veg"],
      ["Honey Chilli Potato",220,"veg"],
      ["Chilli Paneer Dry",289,"veg"],
      ["Onion Pakoda",139,"veg"],
      ["Veg Pakoda",149,"veg"]
    ]
  },

  {
    name: "Momos",
    items: [
      ["Veg Momos",149,"veg"],
      ["Veg Fry Momos",169,"veg"],
      ["Paneer Cheese Momos",179,"veg"],
      ["Veg Afghani Momos",179,"veg"],
      ["Veg Tandoori Momos",199,"veg"]
    ]
  },

  {
    name: "Chinese",
    items: [
      ["Veg Fried Rice",200,"veg"],
      ["Veg Hakka Noodles",209,"veg"],
      ["Veg Chilli Garlic Noodles",240,"veg"],
      ["Veg Schezwan Fried Rice",250,"veg"],
      ["Chicken Fried Rice",250,"nonveg"],
      ["Chicken Schezwan Fried Rice",270,"nonveg"],
      ["Chicken Hakka Noodles",250,"nonveg"],
      ["Chicken Schezwan Noodles",260,"nonveg"]
    ]
  },

  {
    name: "Biryani",
    items: [
      ["Paneer Tikka Biryani",269,"veg"],
      ["Veg Dum Biryani",239,"veg"],
      ["Egg Dum Biryani",239,"egg"],
      ["Chicken Dum Biryani",289,"nonveg"],
      ["Chicken Tikka Biryani",299,"nonveg"],
      ["Mutton Dum Biryani",350,"nonveg"]
    ]
  },

  {
    name: "Indian Main Course (Veg)",
    items: [
      ["Paneer Kolhapuri",330,"veg"],
      ["Paneer Lababdar",349,"veg"],
      ["Paneer Do Pyaza",300,"veg"],
      ["Paneer Butter Masala",320,"veg"],
      ["Paneer Kadhai",330,"veg"],
      ["Paneer Tikka Masala",370,"veg"],
      ["Palak Paneer",289,"veg"],
      ["Matar Paneer",289,"veg"],
      ["Kaju Curry",350,"veg"],
      ["Mix Veg",299,"veg"],
      ["Veg Kofta",299,"veg"],
      ["Malai Kofta",400,"veg"],
      ["Navratna Korma",400,"veg"]
    ]
  },

  {
    name: "Indian Main Course (Non-Veg)",
    items: [
      ["Chicken Masala",350,"nonveg"],
      ["Chicken Curry",329,"nonveg"],
      ["Chicken Kadhai",370,"nonveg"],
      ["Chicken Butter Masala",380,"nonveg"],
      ["Chicken Kolhapuri",399,"nonveg"],
      ["Chicken Mughlai",399,"nonveg"],
      ["Chicken Do Pyaza",370,"nonveg"],
      ["Chicken Tikka Masala",380,"nonveg"],
      ["Chicken Dehati",549,"nonveg"],
      ["Mutton Kassa",399,"nonveg"],
      ["Mutton Handi",400,"nonveg"]
    ]
  },

  {
    name: "Rice",
    items: [
      ["Steam Rice",129,"veg"],
      ["Jeera Rice",149,"veg"],
      ["Veg Pulao",239,"veg"],
      ["Kashmiri Pulao",270,"veg"]
    ]
  },

  {
    name: "Dal",
    items: [
      ["Dal Fry",149,"veg"],
      ["Dal Tadka",179,"veg"],
      ["Dal Makhani",289,"veg"]
    ]
  },

  {
    name: "Breads",
    items: [
      ["Tandoori Roti",29,"veg"],
      ["Butter Tandoori Roti",39,"veg"],
      ["Plain Naan",49,"veg"],
      ["Butter Naan",59,"veg"],
      ["Garlic Naan",80,"veg"]
    ]
  },

  // 🔥 NEW THALI SECTION
  {
    name: "Thali",
    items: [
      ["Veg Thali",199,"veg"],
      ["Special Veg Thali",249,"veg"],
      ["Paneer Thali",299,"veg"],
      ["Egg Thali",249,"egg"],
      ["Chicken Thali",349,"nonveg"],
      ["Special Chicken Thali",399,"nonveg"]
    ]
  }

];

// 🔥 Transform to final JSON
const final = {
  categories: categories.map(cat => ({
    name: cat.name,
    items: cat.items.map(([name, price, type]) => ({
      name,
      price,
      type,
      image: categoryImages[cat.name] || "/images/menu/default.jpg"
    }))
  }))
};

fs.writeFileSync("../content/menu.json", JSON.stringify(final, null, 2));

console.log("✅ Full menu with images + thali generated");