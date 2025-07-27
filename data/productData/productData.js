const products = [
  // 1-5 (already present)
  {
    name: "Paneer Butter Masala",
    category: ["Main Course", "Vegetarian", "North Indian", "Rich", "Creamy", "Dinner"],
    price: 220,
    description: "Rich, creamy curry made with paneer and Indian spices.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Paneer%20Butter%20Masala?seed=1&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Chicken Biryani",
    category: ["Main Course", "Non-Vegetarian", "Rice Dish", "Spicy", "Aromatic", "Lunch", "Dinner", "Indian"],
    price: 250,
    description: "Aromatic rice cooked with marinated chicken and spices.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chicken%20Biryani?seed=2&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Veg Momos",
    category: ["Snacks", "Appetizer", "Vegetarian", "Street Food", "Steamed", "Asian"],
    price: 80,
    description: "Steamed dumplings stuffed with spiced vegetables.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Veg%20Momos?seed=3&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Tibetan/Nepali",
    spiceLevel: "Medium"
  },
  {
    name: "Cold Coffee",
    category: ["Beverage", "Cold Drink", "Coffee", "Sweet", "Refreshing", "Snack"],
    price: 90,
    description: "Chilled coffee blended with milk and ice.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Cold%20Coffee?seed=4&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Continental",
    spiceLevel: "None"
  },
  {
    name: "Gulab Jamun",
    category: ["Dessert", "Sweet", "Indian Sweet", "Deep Fried", "Milk-based", "Dinner"],
    price: 60,
    description: "Sweet, soft dumplings soaked in sugar syrup.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Gulab%20Jamun?seed=5&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "None"
  },
  // 6-100 (add 95 more unique, diverse food product objects)
  {
    name: "Margherita Pizza",
    category: ["Main Course", "Vegetarian", "Italian", "Cheese", "Lunch", "Dinner"],
    price: 300,
    description: "Classic Italian pizza with tomato sauce, mozzarella, and basil.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Margherita%20Pizza?seed=6&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Italian",
    spiceLevel: "None"
  },
  {
    name: "Sushi Platter",
    category: ["Main Course", "Seafood", "Japanese", "Rice", "Lunch", "Dinner"],
    price: 450,
    description: "Assorted sushi rolls with fresh fish and vegetables.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Sushi%20Platter?seed=7&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Japanese",
    spiceLevel: "Mild"
  },
  {
    name: "Falafel Wrap",
    category: ["Snacks", "Vegetarian", "Middle Eastern", "Wrap", "Lunch"],
    price: 120,
    description: "Crispy falafel balls wrapped in pita with veggies and tahini.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Falafel%20Wrap?seed=8&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Middle Eastern",
    spiceLevel: "Medium"
  },
  {
    name: "Caesar Salad",
    category: ["Appetizer", "Salad", "Continental", "Healthy", "Lunch"],
    price: 150,
    description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Caesar%20Salad?seed=9&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Continental",
    spiceLevel: "None"
  },
  {
    name: "Tacos al Pastor",
    category: ["Main Course", "Mexican", "Pork", "Spicy", "Dinner"],
    price: 180,
    description: "Corn tortillas filled with marinated pork, pineapple, and salsa.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Tacos%20al%20Pastor?seed=10&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Mexican",
    spiceLevel: "Hot"
  },
  {
    name: "Masala Dosa",
    category: ["Breakfast", "Vegetarian", "South Indian", "Crispy", "Savory"],
    price: 90,
    description: "Thin, crispy crepe made from fermented rice and lentil batter, filled with spiced potato mash.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Masala%20Dosa?seed=11&model=flux&width=1024&height=1024",
    mealType: "breakfast",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "French Toast",
    category: ["Breakfast", "Sweet", "Continental", "Bread-based", "Snack"],
    price: 110,
    description: "Bread slices dipped in egg, milk, and cinnamon, pan-fried until golden.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20French%20Toast?seed=12&model=flux&width=1024&height=1024",
    mealType: "breakfast",
    cuisine: "Continental",
    spiceLevel: "None"
  },
  {
    name: "Croissant",
    category: ["Breakfast", "Snacks", "French", "Pastry", "Baked", "Sweet"],
    price: 70,
    description: "Flaky, buttery pastry, perfect for breakfast or a light snack.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Croissant?seed=13&model=flux&width=1024&height=1024",
    mealType: "breakfast",
    cuisine: "French",
    spiceLevel: "None"
  },
  {
    name: "Aloo Paratha",
    category: ["Breakfast", "Vegetarian", "North Indian", "Bread", "Savory"],
    price: 85,
    description: "Whole wheat flatbread stuffed with spiced mashed potatoes.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Aloo%20Paratha?seed=14&model=flux&width=1024&height=1024",
    mealType: "breakfast",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Pancakes with Maple Syrup",
    category: ["Breakfast", "Sweet", "American", "Baked", "Dessert"],
    price: 140,
    description: "Fluffy pancakes served with rich maple syrup and butter.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Pancakes%20with%20Maple%20Syrup?seed=15&model=flux&width=1024&height=1024",
    mealType: "breakfast",
    cuisine: "American",
    spiceLevel: "None"
  },
  {
    name: "Spaghetti Carbonara",
    category: ["Main Course", "Italian", "Pasta", "Non-Vegetarian", "Creamy", "Dinner"],
    price: 320,
    description: "Classic Italian pasta dish with eggs, hard cheese, cured pork, and black pepper.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Spaghetti%20Carbonara?seed=16&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Italian",
    spiceLevel: "Mild"
  },
  {
    name: "Tom Yum Goong",
    category: ["Main Course", "Seafood", "Thai", "Spicy", "Soup", "Dinner"],
    price: 280,
    description: "Hot and sour Thai soup with shrimp, lemongrass, galangal, and lime leaves.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Tom%20Yum%20Goong?seed=17&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Thai",
    spiceLevel: "Hot"
  },
  {
    name: "Ramen",
    category: ["Main Course", "Japanese", "Noodles", "Soup", "Non-Vegetarian", "Lunch", "Dinner"],
    price: 350,
    description: "Japanese noodle soup dish, with various toppings and broth bases.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Ramen?seed=18&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Japanese",
    spiceLevel: "Medium"
  },
  {
    name: "Fish and Chips",
    category: ["Main Course", "Seafood", "British", "Fried", "Lunch", "Dinner"],
    price: 280,
    description: "Classic British dish of battered fish and deep-fried potato chips.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Fish%20and%20Chips?seed=19&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "British",
    spiceLevel: "None"
  },
  {
    name: "Shepherd's Pie",
    category: ["Main Course", "British", "Meat", "Comfort Food", "Dinner"],
    price: 290,
    description: "A savory pie with a minced meat filling topped with a mashed potato crust.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Shepherd's%20Pie?seed=20&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "British",
    spiceLevel: "Mild"
  },
  {
    name: "Chicken Tikka Masala",
    category: ["Main Course", "Non-Vegetarian", "Indian", "Curry", "Spicy", "Dinner"],
    price: 260,
    description: "Grilled chicken pieces cooked in a rich, creamy, and spicy tomato-based sauce.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chicken%20Tikka%20Masala?seed=21&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Butter Chicken",
    category: ["Main Course", "Non-Vegetarian", "Indian", "Creamy", "Mild", "Dinner"],
    price: 270,
    description: "Tender chicken cooked in a mildly spiced tomato-butter gravy.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Butter%20Chicken?seed=22&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Tandoori Chicken",
    category: ["Main Course", "Non-Vegetarian", "Indian", "Grilled", "Smoky", "Dinner"],
    price: 240,
    description: "Chicken marinated in yogurt and spices, then roasted in a tandoor.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Tandoori%20Chicken?seed=23&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Chana Masala",
    category: ["Main Course", "Vegetarian", "Indian", "Curry", "Spicy", "Lunch", "Dinner"],
    price: 180,
    description: "Spicy and tangy chickpea curry, popular in North India.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chana%20Masala?seed=24&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Dal Makhani",
    category: ["Main Course", "Vegetarian", "Indian", "Lentil", "Creamy", "Dinner"],
    price: 200,
    description: "Black lentils cooked slowly with butter, cream, and spices.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Dal%20Makhani?seed=25&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Idli Sambar",
    category: ["Breakfast", "Vegetarian", "South Indian", "Steamed", "Healthy"],
    price: 70,
    description: "Soft, fluffy steamed rice cakes served with a flavorful lentil stew.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Idli%20Sambar?seed=26&model=flux&width=1024&height=1024",
    mealType: "breakfast",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Vada Pav",
    category: ["Snacks", "Vegetarian", "Street Food", "Indian", "Fried"],
    price: 40,
    description: "A popular Mumbai street food, a deep-fried potato dumpling in a bread bun.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Vada%20Pav?seed=27&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Samosa",
    category: ["Snacks", "Vegetarian", "Indian", "Fried", "Street Food"],
    price: 30,
    description: "Crispy fried pastry with a savory filling of spiced potatoes and peas.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Samosa?seed=28&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Pani Puri",
    category: ["Snacks", "Vegetarian", "Street Food", "Indian", "Tangy"],
    price: 50,
    description: "Hollow, crispy fried balls filled with spiced mashed potatoes and tangy flavored water.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Pani%20Puri?seed=29&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "Hot"
  },
  {
    name: "Chole Bhature",
    category: ["Main Course", "Vegetarian", "North Indian", "Fried Bread", "Spicy", "Lunch"],
    price: 150,
    description: "Spicy chickpea curry served with large, fluffy fried bread.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chole%20Bhature?seed=30&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Indian",
    spiceLevel: "Hot"
  },
  {
    name: "Vegetable Pulao",
    category: ["Main Course", "Vegetarian", "Indian", "Rice Dish", "Aromatic", "Lunch", "Dinner"],
    price: 160,
    description: "Fragrant rice dish cooked with mixed vegetables and mild spices.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Vegetable%20Pulao?seed=31&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Rajma Chawal",
    category: ["Main Course", "Vegetarian", "North Indian", "Beans", "Rice Dish", "Lunch", "Dinner"],
    price: 190,
    description: "Red kidney bean curry served with steamed rice, a North Indian staple.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Rajma%20Chawal?seed=32&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Masoor Dal Tadka",
    category: ["Main Course", "Vegetarian", "Indian", "Lentil", "Healthy", "Lunch", "Dinner"],
    price: 130,
    description: "Simple and flavorful red lentil soup tempered with spices.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Masoor%20Dal%20Tadka?seed=33&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Lemon Rice",
    category: ["Main Course", "Vegetarian", "South Indian", "Rice Dish", "Tangy", "Lunch"],
    price: 120,
    description: "Fragrant rice flavored with lemon juice, mustard seeds, and curry leaves.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Lemon%20Rice?seed=34&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Indian",
    spiceLevel: "None"
  },
  {
    name: "Poha",
    category: ["Breakfast", "Vegetarian", "Indian", "Flattened Rice", "Savory"],
    price: 60,
    description: "Light and healthy breakfast dish made from flattened rice, tempered with spices.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Poha?seed=35&model=flux&width=1024&height=1024",
    mealType: "breakfast",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Upma",
    category: ["Breakfast", "Vegetarian", "South Indian", "Semolina", "Savory"],
    price: 70,
    description: "Savory semolina porridge cooked with vegetables and spices.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Upma?seed=36&model=flux&width=1024&height=1024",
    mealType: "breakfast",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Pav Bhaji",
    category: ["Main Course", "Vegetarian", "Street Food", "Indian", "Spicy", "Lunch", "Dinner"],
    price: 170,
    description: "A spicy blend of mashed vegetables served with buttered bread rolls.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Pav%20Bhaji?seed=37&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Spring Rolls (Veg)",
    category: ["Snacks", "Appetizer", "Vegetarian", "Asian", "Fried"],
    price: 100,
    description: "Crispy fried rolls filled with finely chopped vegetables.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Veg%20Spring%20Rolls?seed=38&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Chinese",
    spiceLevel: "None"
  },
  {
    name: "Fried Rice (Chicken)",
    category: ["Main Course", "Non-Vegetarian", "Chinese", "Rice Dish", "Lunch", "Dinner"],
    price: 210,
    description: "Wok-fried rice with chicken, eggs, and mixed vegetables.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chicken%20Fried%20Rice?seed=39&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Chinese",
    spiceLevel: "Mild"
  },
  {
    name: "Hakka Noodles (Veg)",
    category: ["Main Course", "Vegetarian", "Chinese", "Noodles", "Lunch", "Dinner"],
    price: 190,
    description: "Stir-fried noodles with crisp vegetables and savory sauces.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Veg%20Hakka%20Noodles?seed=40&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Chinese",
    spiceLevel: "Medium"
  },
  {
    name: "Manchurian (Gobi)",
    category: ["Appetizer", "Vegetarian", "Indo-Chinese", "Fried", "Spicy", "Snacks"],
    price: 170,
    description: "Crispy fried cauliflower florets tossed in a spicy, tangy Indo-Chinese sauce.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Gobi%20Manchurian?seed=41&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indo-Chinese",
    spiceLevel: "Hot"
  },
  {
    name: "Chilli Paneer (Dry)",
    category: ["Appetizer", "Vegetarian", "Indo-Chinese", "Spicy", "Snacks"],
    price: 200,
    description: "Cubes of paneer stir-fried with bell peppers, onions, and spicy sauces.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chilli%20Paneer?seed=42&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indo-Chinese",
    spiceLevel: "Hot"
  },
  {
    name: "Hot and Sour Soup (Veg)",
    category: ["Appetizer", "Soup", "Vegetarian", "Chinese", "Spicy"],
    price: 110,
    description: "A spicy and tangy soup with mixed vegetables, perfect for a starter.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Hot%20and%20Sour%20Soup%20Veg?seed=43&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Chinese",
    spiceLevel: "Hot"
  },
  {
    name: "Thukpa (Veg)",
    category: ["Main Course", "Vegetarian", "Tibetan/Nepali", "Noodles", "Soup", "Lunch", "Dinner"],
    price: 180,
    description: "Hearty Tibetan noodle soup with mixed vegetables and spices.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Veg%20Thukpa?seed=44&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Tibetan/Nepali",
    spiceLevel: "Medium"
  },
  {
    name: "Shawarma (Chicken)",
    category: ["Main Course", "Non-Vegetarian", "Middle Eastern", "Wrap", "Street Food", "Lunch", "Dinner"],
    price: 190,
    description: "Marinated chicken cooked on a vertical spit, shaved and served in a wrap.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chicken%20Shawarma?seed=45&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Middle Eastern",
    spiceLevel: "Medium"
  },
  {
    name: "Hummus with Pita Bread",
    category: ["Appetizer", "Vegetarian", "Middle Eastern", "Dip", "Snacks"],
    price: 140,
    description: "Creamy chickpea dip served with warm, soft pita bread.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Hummus%20with%20Pita%20Bread?seed=46&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Middle Eastern",
    spiceLevel: "None"
  },
  {
    name: "Baklava",
    category: ["Dessert", "Sweet", "Middle Eastern", "Pastry", "Nuts"],
    price: 100,
    description: "Rich, sweet pastry made of layers of filo dough filled with chopped nuts and sweetened with syrup.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Baklava?seed=47&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Middle Eastern",
    spiceLevel: "None"
  },
  {
    name: "Dabeli",
    category: ["Snacks", "Vegetarian", "Indian", "Street Food", "Spicy"],
    price: 50,
    description: "Sweet and spicy potato mixture stuffed in a bun, garnished with pomegranate and sev.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Dabeli?seed=48&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Misal Pav",
    category: ["Main Course", "Vegetarian", "Indian", "Spicy", "Curry", "Breakfast", "Lunch"],
    price: 130,
    description: "Spicy sprouted bean curry topped with farsan, served with pav.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Misal%20Pav?seed=49&model=flux&width=1024&height=1024",
    mealType: "breakfast",
    cuisine: "Indian",
    spiceLevel: "Hot"
  },
  {
    name: "Poori Bhaji",
    category: ["Breakfast", "Vegetarian", "Indian", "Fried Bread", "Potato Curry"],
    price: 110,
    description: "Deep-fried puffed bread served with a savory potato curry.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Poori%20Bhaji?seed=50&model=flux&width=1024&height=1024",
    mealType: "breakfast",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Veg Kebab Platter",
    category: ["Appetizer", "Vegetarian", "Indian", "Grilled", "Snacks"],
    price: 250,
    description: "Assortment of grilled vegetarian kebabs, marinated in spices.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Veg%20Kebab%20Platter?seed=51&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Chicken Seekh Kebab",
    category: ["Appetizer", "Non-Vegetarian", "Indian", "Grilled", "Spicy", "Snacks"],
    price: 280,
    description: "Minced chicken mixed with spices, skewered and grilled.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chicken%20Seekh%20Kebab?seed=52&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "Hot"
  },
  {
    name: "Fish Fry (Bengali Style)",
    category: ["Appetizer", "Seafood", "Indian", "Fried", "Spicy", "Snacks"],
    price: 320,
    description: "Marinated fish fillets, shallow-fried until crispy.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Bengali%20Fish%20Fry?seed=53&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Chicken Curry (Homestyle)",
    category: ["Main Course", "Non-Vegetarian", "Indian", "Curry", "Lunch", "Dinner"],
    price: 230,
    description: "Classic Indian chicken curry made with traditional spices.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Homestyle%20Chicken%20Curry?seed=54&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Goan Fish Curry",
    category: ["Main Course", "Seafood", "Indian", "Curry", "Spicy", "Dinner"],
    price: 300,
    description: "Tangy and spicy fish curry with coconut milk, a Goan specialty.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Goan%20Fish%20Curry?seed=55&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Hot"
  },
  {
    name: "Kashmiri Rogan Josh",
    category: ["Main Course", "Non-Vegetarian", "Indian", "Lamb", "Rich", "Dinner"],
    price: 380,
    description: "Aromatic lamb curry from Kashmir, slow-cooked with spices and yogurt.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Kashmiri%20Rogan%20Josh?seed=56&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Palak Paneer",
    category: ["Main Course", "Vegetarian", "North Indian", "Spinach", "Healthy", "Dinner"],
    price: 210,
    description: "Cottage cheese cubes in a creamy spinach gravy.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Palak%20Paneer?seed=57&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Baingan Bharta",
    category: ["Main Course", "Vegetarian", "North Indian", "Smoky", "Dinner"],
    price: 170,
    description: "Smoky roasted eggplant mash cooked with onions, tomatoes, and spices.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Baingan%20Bharta?seed=58&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Malai Kofta",
    category: ["Main Course", "Vegetarian", "North Indian", "Creamy", "Rich", "Dinner"],
    price: 240,
    description: "Deep-fried paneer and potato balls served in a rich, creamy gravy.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Malai%20Kofta?seed=59&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Gajar Halwa",
    category: ["Dessert", "Sweet", "Indian Sweet", "Carrot", "Milk-based", "Dinner"],
    price: 80,
    description: "Sweet dessert made from grated carrots, milk, sugar, and ghee.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Gajar%20Halwa?seed=60&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "None"
  },
  {
    name: "Jalebi",
    category: ["Dessert", "Sweet", "Indian Sweet", "Fried", "Syrup"],
    price: 50,
    description: "Crispy, spiraled sweet dipped in sugar syrup.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Jalebi?seed=61&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "None"
  },
  {
    name: "Rasgulla",
    category: ["Dessert", "Sweet", "Indian Sweet", "Milk-based", "Syrup"],
    price: 70,
    description: "Spongy, sweet cottage cheese balls soaked in light sugar syrup.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Rasgulla?seed=62&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "None"
  },
  {
    name: "Pista Kulfi",
    category: ["Dessert", "Sweet", "Indian", "Ice Cream", "Nutty"],
    price: 90,
    description: "Traditional Indian frozen dessert made with pistachio and condensed milk.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Pista%20Kulfi?seed=63&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "None"
  },
  {
    name: "Masala Chai",
    category: ["Beverage", "Hot Drink", "Tea", "Indian", "Spiced"],
    price: 40,
    description: "Fragrant black tea brewed with aromatic Indian spices and milk.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Masala%20Chai?seed=64&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "None"
  },
  {
    name: "Lassi (Sweet)",
    category: ["Beverage", "Cold Drink", "Yogurt-based", "Indian", "Sweet", "Refreshing"],
    price: 80,
    description: "Traditional Indian yogurt-based drink, sweet and refreshing.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Sweet%20Lassi?seed=65&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "None"
  },
  {
    name: "Mango Lassi",
    category: ["Beverage", "Cold Drink", "Yogurt-based", "Indian", "Sweet", "Fruity"],
    price: 95,
    description: "Creamy yogurt drink blended with fresh mango pulp.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Mango%20Lassi?seed=66&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "None"
  },
  {
    name: "Fresh Lime Soda (Sweet)",
    category: ["Beverage", "Cold Drink", "Refreshing", "Indian"],
    price: 70,
    description: "Refreshing drink made with fresh lime juice, sugar, and soda water.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Sweet%20Lime%20Soda?seed=67&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indian",
    spiceLevel: "None"
  },
  {
    name: "Chicken Korma",
    category: ["Main Course", "Non-Vegetarian", "Indian", "Creamy", "Mild", "Dinner"],
    price: 270,
    description: "Mild and creamy chicken curry, often made with yogurt or coconut milk.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chicken%20Korma?seed=68&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Bhindi Masala",
    category: ["Main Course", "Vegetarian", "North Indian", "Okra", "Dry Curry", "Dinner"],
    price: 180,
    description: "Stir-fried okra with onions, tomatoes, and Indian spices.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Bhindi%20Masala?seed=69&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Dal Fry",
    category: ["Main Course", "Vegetarian", "Indian", "Lentil", "Lunch", "Dinner"],
    price: 140,
    description: "Simple and comforting lentil dish, tempered with spices and ghee.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Dal%20Fry?seed=70&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Indian",
    spiceLevel: "Mild"
  },
  {
    name: "Mushroom Masala",
    category: ["Main Course", "Vegetarian", "Indian", "Mushroom", "Curry", "Dinner"],
    price: 200,
    description: "Mushrooms cooked in a spicy onion-tomato gravy.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Mushroom%20Masala?seed=71&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indian",
    spiceLevel: "Medium"
  },
  {
    name: "Gobi Manchurian (Gravy)",
    category: ["Main Course", "Vegetarian", "Indo-Chinese", "Gravy", "Lunch", "Dinner"],
    price: 190,
    description: "Crispy fried cauliflower florets in a savory and spicy gravy.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Gobi%20Manchurian%20Gravy?seed=72&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Indo-Chinese",
    spiceLevel: "Hot"
  },
  {
    name: "Chilli Chicken (Dry)",
    category: ["Appetizer", "Non-Vegetarian", "Indo-Chinese", "Spicy", "Snacks"],
    price: 260,
    description: "Crispy fried chicken tossed in a spicy and tangy Indo-Chinese sauce.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chilli%20Chicken%20Dry?seed=73&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Indo-Chinese",
    spiceLevel: "Hot"
  },
  {
    name: "Kung Pao Chicken",
    category: ["Main Course", "Non-Vegetarian", "Chinese", "Spicy", "Nuts", "Dinner"],
    price: 290,
    description: "Spicy, stir-fried Chinese dish with chicken, peanuts, vegetables, and chili peppers.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Kung%20Pao%20Chicken?seed=74&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Chinese",
    spiceLevel: "Hot"
  },
  {
    name: "Pad Thai (Chicken)",
    category: ["Main Course", "Non-Vegetarian", "Thai", "Noodles", "Sweet & Savory", "Lunch", "Dinner"],
    price: 310,
    description: "Stir-fried rice noodle dish with chicken, eggs, peanuts, and bean sprouts.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chicken%20Pad%20Thai?seed=75&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Thai",
    spiceLevel: "Medium"
  },
  {
    name: "Green Curry (Veg)",
    category: ["Main Course", "Vegetarian", "Thai", "Curry", "Spicy", "Coconut-based", "Dinner"],
    price: 260,
    description: "Spicy and aromatic Thai green curry with mixed vegetables and coconut milk.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Veg%20Green%20Curry?seed=76&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Thai",
    spiceLevel: "Hot"
  },
  {
    name: "Pho (Beef)",
    category: ["Main Course", "Non-Vegetarian", "Vietnamese", "Noodles", "Soup", "Lunch", "Dinner"],
    price: 340,
    description: "Fragrant Vietnamese noodle soup with tender beef slices and herbs.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Beef%20Pho?seed=77&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Vietnamese",
    spiceLevel: "Mild"
  },
  {
    name: "Bún Chả",
    category: ["Main Course", "Non-Vegetarian", "Vietnamese", "Noodles", "Grilled Pork", "Lunch", "Dinner"],
    price: 280,
    description: "Grilled pork with rice noodles and fresh herbs, served with a dipping sauce.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Bun%20Cha?seed=78&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Vietnamese",
    spiceLevel: "Medium"
  },
  {
    name: "Gyoza (Pork)",
    category: ["Appetizer", "Non-Vegetarian", "Japanese", "Dumplings", "Fried/Steamed", "Snacks"],
    price: 160,
    description: "Pan-fried or steamed Japanese dumplings filled with seasoned pork.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Pork%20Gyoza?seed=79&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Japanese",
    spiceLevel: "None"
  },
  {
    name: "Takoyaki",
    category: ["Snacks", "Seafood", "Japanese", "Street Food", "Octopus"],
    price: 130,
    description: "Ball-shaped Japanese snack made of wheat flour batter and cooked in a special pan, filled with diced octopus.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Takoyaki?seed=80&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Japanese",
    spiceLevel: "None"
  },
  {
    name: "Kimchi Fried Rice",
    category: ["Main Course", "Korean", "Rice Dish", "Spicy", "Lunch", "Dinner"],
    price: 240,
    description: "Korean fried rice made with kimchi, often with a fried egg on top.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Kimchi%20Fried%20Rice?seed=81&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Korean",
    spiceLevel: "Hot"
  },
  {
    name: "Bibimbap",
    category: ["Main Course", "Korean", "Rice Bowl", "Mixed Vegetables", "Non-Vegetarian (optional)", "Lunch", "Dinner"],
    price: 280,
    description: "Mixed rice with sautéed vegetables, gochujang (chili pepper paste), and often meat or egg.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Bibimbap?seed=82&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Korean",
    spiceLevel: "Medium"
  },
  {
    name: "Korean Fried Chicken",
    category: ["Snacks", "Main Course", "Non-Vegetarian", "Korean", "Fried", "Spicy"],
    price: 300,
    description: "Crispy fried chicken glazed with a spicy and sweet sauce.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Korean%20Fried%20Chicken?seed=83&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Korean",
    spiceLevel: "Hot"
  },
  {
    name: "Fish Taco",
    category: ["Main Course", "Seafood", "Mexican", "Wrap", "Lunch", "Dinner"],
    price: 200,
    description: "Soft tortillas filled with crispy fish, cabbage, and creamy sauce.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Fish%20Taco?seed=84&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Mexican",
    spiceLevel: "Medium"
  },
  {
    name: "Enchiladas (Chicken)",
    category: ["Main Course", "Non-Vegetarian", "Mexican", "Baked", "Cheesy", "Dinner"],
    price: 270,
    description: "Corn tortillas rolled around a chicken filling, covered with chili sauce and cheese, then baked.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chicken%20Enchiladas?seed=85&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Mexican",
    spiceLevel: "Medium"
  },
  {
    name: "Guacamole with Tortilla Chips",
    category: ["Appetizer", "Vegetarian", "Mexican", "Dip", "Snacks"],
    price: 150,
    description: "Fresh avocado dip with onions, tomatoes, cilantro, served with crispy tortilla chips.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Guacamole%20with%20Chips?seed=86&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Mexican",
    spiceLevel: "Mild"
  },
  {
    name: "Churros with Chocolate Sauce",
    category: ["Dessert", "Sweet", "Spanish/Mexican", "Fried", "Snacks"],
    price: 110,
    description: "Fried dough pastries dusted with cinnamon sugar, served with warm chocolate sauce.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Churros%20with%20Chocolate?seed=87&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Spanish",
    spiceLevel: "None"
  },
  {
    name: "Paella (Seafood)",
    category: ["Main Course", "Seafood", "Spanish", "Rice Dish", "Dinner"],
    price: 400,
    description: "Traditional Spanish rice dish with a variety of seafood, saffron, and vegetables.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Seafood%20Paella?seed=88&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Spanish",
    spiceLevel: "None"
  },
  {
    name: "Crepes (Sweet)",
    category: ["Breakfast", "Dessert", "French", "Sweet", "Thin Pancake"],
    price: 120,
    description: "Thin French pancakes, often served with fruit, cream, or chocolate.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Sweet%20Crepes?seed=89&model=flux&width=1024&height=1024",
    mealType: "breakfast",
    cuisine: "French",
    spiceLevel: "None"
  },
  {
    name: "Quiche Lorraine",
    category: ["Main Course", "French", "Savory Tart", "Non-Vegetarian", "Lunch"],
    price: 230,
    description: "Savory French tart with a filling of eggs, cream, bacon, and cheese.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Quiche%20Lorraine?seed=90&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "French",
    spiceLevel: "None"
  },
  {
    name: "Souvlaki (Chicken)",
    category: ["Main Course", "Non-Vegetarian", "Greek", "Grilled", "Street Food", "Lunch", "Dinner"],
    price: 250,
    description: "Grilled chicken skewers, often served in pita bread with tzatziki.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Chicken%20Souvlaki?seed=91&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Greek",
    spiceLevel: "Mild"
  },
  {
    name: "Moussaka",
    category: ["Main Course", "Greek", "Layered Dish", "Meat", "Dinner"],
    price: 310,
    description: "Traditional Greek casserole with layers of eggplant, minced meat, and béchamel sauce.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Moussaka?seed=92&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Greek",
    spiceLevel: "Mild"
  },
  {
    name: "Spanakopita",
    category: ["Appetizer", "Vegetarian", "Greek", "Pastry", "Spinach", "Feta"],
    price: 160,
    description: "Savory Greek pastry filled with spinach and feta cheese.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Spanakopita?seed=93&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Greek",
    spiceLevel: "None"
  },
  {
    name: "Borscht (Vegetarian)",
    category: ["Main Course", "Soup", "Vegetarian", "Eastern European", "Healthy", "Lunch", "Dinner"],
    price: 180,
    description: "Hearty and colorful beetroot soup, a staple of Eastern European cuisine.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Vegetarian%20Borscht?seed=94&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Eastern European",
    spiceLevel: "None"
  },
  {
    name: "Pierogi (Potato & Cheese)",
    category: ["Main Course", "Vegetarian", "Eastern European", "Dumplings", "Lunch", "Dinner"],
    price: 200,
    description: "Boiled or fried dumplings filled with mashed potatoes and cheese.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Pierogi%20Potato%20Cheese?seed=95&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Eastern European",
    spiceLevel: "None"
  },
  {
    name: "Goulash (Beef)",
    category: ["Main Course", "Non-Vegetarian", "Hungarian", "Stew", "Spicy", "Dinner"],
    price: 330,
    description: "Hearty Hungarian stew made with beef, vegetables, and paprika.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Beef%20Goulash?seed=96&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Hungarian",
    spiceLevel: "Medium"
  },
  {
    name: "Wiener Schnitzel",
    category: ["Main Course", "Non-Vegetarian", "Austrian", "Fried", "Veal", "Dinner"],
    price: 360,
    description: "Thin, pan-fried, breaded cutlet of veal, a classic Austrian dish.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Wiener%20Schnitzel?seed=97&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Austrian",
    spiceLevel: "None"
  },
  {
    name: "Apple Strudel",
    category: ["Dessert", "Sweet", "Austrian", "Pastry", "Baked", "Fruity"],
    price: 130,
    description: "Classic Austrian pastry with a sweet apple filling, often served warm.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Apple%20Strudel?seed=98&model=flux&width=1024&height=1024",
    mealType: "snack",
    cuisine: "Austrian",
    spiceLevel: "None"
  },
  {
    name: "Fettuccine Alfredo",
    category: ["Main Course", "Vegetarian", "Italian", "Pasta", "Creamy", "Dinner"],
    price: 290,
    description: "Classic Italian pasta tossed in a rich, creamy Parmesan cheese sauce.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Fettuccine%20Alfredo?seed=99&model=flux&width=1024&height=1024",
    mealType: "dinner",
    cuisine: "Italian",
    spiceLevel: "None"
  },
  {
    name: "Minestrone Soup",
    category: ["Appetizer", "Soup", "Vegetarian", "Italian", "Healthy"],
    price: 140,
    description: "Thick Italian soup made with vegetables, pasta or rice, and sometimes beans.",
    image: "https://image.pollinations.ai/prompt/Image%20of%20Minestrone%20Soup?seed=100&model=flux&width=1024&height=1024",
    mealType: "lunch",
    cuisine: "Italian",
    spiceLevel: "None"
  }
];

module.exports = products;