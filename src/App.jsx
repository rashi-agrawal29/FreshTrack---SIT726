import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Clock,
  Leaf,
  User,
  Home,
  Plus,
  Bell,
  DollarSign,
  CheckCircle,
} from "lucide-react";

const FreshTrackPrototype = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [pantryItems, setPantryItems] = useState([
    { id: 1, name: "Organic Tomatoes", quantity: "500g", addedDate: "2025-09-15", daysLeft: 2, status: "warning" },
    { id: 2, name: "Fresh Spinach", quantity: "200g", addedDate: "2025-09-14", daysLeft: 1, status: "urgent" },
    { id: 3, name: "Local Carrots", quantity: "1kg", addedDate: "2025-09-13", daysLeft: 5, status: "good" },
  ]);

  const [recipes] = useState([
    { id: 1, name: "Quick Tomato Spinach Pasta", time: "15 min", usesItems: ["Tomatoes", "Spinach"], difficulty: "Easy" },
    { id: 2, name: "Garden Fresh Salad", time: "10 min", usesItems: ["Spinach", "Carrots"], difficulty: "Easy" },
    { id: 3, name: "Roasted Vegetable Medley", time: "25 min", usesItems: ["Tomatoes", "Carrots"], difficulty: "Medium" },
  ]);

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const addToPantry = (item) => {
    const newItem = {
      id: pantryItems.length + 1,
      name: item.name,
      quantity: "1 unit",
      addedDate: "2025-09-18",
      daysLeft: 7,
      status: "good",
    };
    setPantryItems([...pantryItems, newItem]);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "urgent": return "bg-red-100 text-red-800 border-red-200";
      case "warning": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "good": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // ----------------- Pages -----------------
  const HomePage = () => (
    <div className="p-10 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            Supporting Victorian Farmers
          </span>
          <h1 className="text-5xl font-extrabold mt-4 text-gray-900">
            Reduce Waste,<br /> Support Local,<br /> Eat Fresh
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Timely reminders, fresh produce, and simple recipes all in one platform.
            Join Victoria's movement to reduce food waste while supporting local agriculture.
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setCurrentPage("pantry")}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700"
            >
              Start Reducing Waste
            </button>
            <button
              onClick={() => setCurrentPage("produce")}
              className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
            >
              Explore Local Produce
            </button>
          </div>

          <div className="flex gap-6 mt-6 text-sm text-gray-600">
            <span>✔ No subscription fees</span>
            <span>✔ Victorian farms only</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <img
            src="src/assets/image.png"
            alt="Fresh produce"
            className="rounded-2xl shadow-lg"
          />
          <div className="bg-white rounded-lg shadow px-4 py-2 mt-4 w-fit">
            <p className="text-lg font-bold text-gray-800">$486</p>
            <p className="text-sm text-gray-500">Avg. saved per family/year</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: "🥦", title: "Weekly produce listings", desc: "Browse local farm produce" },
          { icon: "⏰", title: "Expiry reminders", desc: "Never waste food again" },
          { icon: "🍳", title: "Recipe suggestions", desc: "Based on your pantry" },
          { icon: "🌱", title: "Support community", desc: "Back Victorian farmers" },
        ].map((b) => (
          <div key={b.title} className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl mb-2">{b.icon}</div>
            <h3 className="font-semibold text-lg">{b.title}</h3>
            <p className="text-gray-500 text-sm">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* Social Proof */}
      <div className="mt-20 bg-green-100 p-10 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">The Food Waste Crisis in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg font-medium">
          <div><p className="text-2xl font-bold">7.6M</p><p className="text-gray-600">Tonnes wasted in AU</p></div>
          <div><p className="text-2xl font-bold">$36.6B</p><p className="text-gray-600">Economic impact</p></div>
          <div><p className="text-2xl font-bold">550K</p><p className="text-gray-600">Eco-conscious users</p></div>
          <div><p className="text-2xl font-bold">70%</p><p className="text-gray-600">Australians concerned</p></div>
        </div>
      </div>
    </div>
  );

  const ProducePage = () => {
    const produceList = [
      { id: 1, name: "Free-Range Eggs", price: "$9.00/box", farm: "Happy Hens Farm", location: "Warragul, VIC", available: "Available Jan 20, 2024", qty: "35 box", image: "src/assets/eggs.png" },
      { id: 2, name: "Fresh Basil", price: "$4.50/bunch", farm: "Herb Haven", location: "Geelong, VIC", available: "Available Jan 19, 2024", qty: "40 bunch", tag: "Organic", image: "src/assets/basil.png" },
      { id: 3, name: "Ruby Red Strawberries", price: "$15.00/box", farm: "Berry Bliss Farm", location: "Mornington Peninsula, VIC", available: "Available Jan 18, 2024", qty: "25 box", image: "src/assets/strawberry.png" },
    ];

    return (
      <div className="p-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            Fresh from Victorian Farms
          </span>
          <h2 className="text-4xl font-extrabold mt-4">Weekly Local Produce</h2>
          <p className="text-lg text-gray-600 mt-3">
            Discover fresh, seasonal produce directly from local Victorian farms. Updated weekly with the latest harvests and availability.
          </p>
          <div className="flex justify-center gap-8 mt-6 text-gray-600 text-sm">
            <span>🥦 Farm Fresh Quality</span>
            <span>📅 Weekly Updates</span>
            <span>📍 Victoria Only</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {produceList.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
              <div className="relative">
                <img src={item.image} alt={item.name} className="rounded-lg h-48 w-full object-cover" />
                {item.tag && <span className="absolute top-2 left-2 bg-green-100 text-green-700 px-2 py-1 text-xs rounded">{item.tag}</span>}
                <span className="absolute top-2 right-2 bg-white text-gray-700 px-2 py-1 text-xs rounded shadow">{item.qty}</span>
              </div>
              <div className="flex-1 mt-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-green-600 font-medium">{item.price}</p>
                <p className="text-sm text-gray-500">{item.farm}, {item.location}</p>
                <p className="text-sm text-gray-400 mt-1">{item.available}</p>
              </div>
              <button onClick={() => addToPantry(item)} className="mt-4 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700">
                Add to Pantry
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const PantryPage = () => (
    <div className="p-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Pantry</h2>
      <div className="space-y-3">
        {pantryItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.quantity}</p>
              <p className="text-xs text-gray-400">Added {item.addedDate}</p>
            </div>
            <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
              {item.daysLeft} days left
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-green-50 rounded-xl p-4">
        <div className="flex items-center">
          <CheckCircle className="text-green-500 mr-2" size={20} />
          <div>
            <h4 className="font-medium text-green-800">Great job!</h4>
            <p className="text-green-600 text-sm">You've reduced food waste by 23% this month</p>
          </div>
        </div>
      </div>
    </div>
  );

  const RecipesPage = () => (
    <div className="p-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Recipe Suggestions</h2>
      <div className="bg-orange-50 rounded-xl p-4 mb-4">
        <h3 className="font-medium text-orange-800 mb-2">Use Soon Recipes</h3>
        <p className="text-orange-600 text-sm">Based on items expiring in 1–3 days</p>
      </div>
      <div className="space-y-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-xl p-4 shadow-sm border flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-800">{recipe.name}</h3>
              <p className="text-sm text-gray-500 flex items-center mt-1">
                <Clock size={14} className="mr-1" /> {recipe.time}
              </p>
              <p className="text-xs text-gray-500 mt-2">Uses from your pantry:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {recipe.usesItems.map((item) => (
                  <span key={item} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">{item}</span>
                ))}
              </div>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600">
              Cook Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div className="p-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="font-medium mb-3">Your Impact</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div><p className="text-2xl font-bold text-green-600">156</p><p className="text-sm text-gray-500">Items tracked</p></div>
          <div><p className="text-2xl font-bold text-blue-600">$127</p><p className="text-sm text-gray-500">Money saved</p></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="font-medium mb-3">Preferences</h3>
        <p className="text-sm text-gray-500">Expiry notifications: ON</p>
        <p className="text-sm text-gray-500">New produce alerts: OFF</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-medium mb-3">Dietary Preferences</h3>
        <div className="flex flex-wrap gap-2">
          {["Vegetarian", "Organic", "Gluten-Free", "Local"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  // ----------------- Navigation -----------------
  const Navigation = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        {[
          { id: "home", icon: Home, label: "Home" },
          { id: "produce", icon: Leaf, label: "Local" },
          { id: "pantry", icon: ShoppingBag, label: "Pantry" },
          { id: "recipes", icon: Clock, label: "Recipes" },
          { id: "profile", icon: User, label: "Profile" },
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setCurrentPage(id)}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${currentPage === id ? "text-green-600 bg-green-50" : "text-gray-500"
              }`}
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home": return <HomePage />;
      case "produce": return <ProducePage />;
      case "pantry": return <PantryPage />;
      case "recipes": return <RecipesPage />;
      case "profile": return <ProfilePage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {renderCurrentPage()}
      <Navigation />
    </div>
  );
};

export default FreshTrackPrototype;
