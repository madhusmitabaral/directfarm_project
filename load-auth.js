class DirectFarmStore {
  constructor() {
    this.STORAGE_KEYS = {
      USERS: 'directfarm_users',
      CURRENT_USER: 'directfarm_current_user',
      PRODUCTS: 'directfarm_products',
      ORDERS: 'directfarm_orders',
      CART: 'directfarm_cart',
      MESSAGES: 'directfarm_messages',
    };

    this.initStore();
  }

  initStore() {
    
    if (!localStorage.getItem(this.STORAGE_KEYS.USERS)) {
      const defaultUsers = [
        {
          name: 'D.K. Tripathi',
          farmName: 'Green Valley Organics',
          email: 'farmer@directfarm.com',
          password: 'farmer123',
          phone: '9876543210',
          address: 'UIT, Golapbag, Bardhhaman, WB',
          userType: 'farmer',
          bio: 'Practicing chemical-free regenerative farming for 15+ years. 100% fair trade direct to consumers.',
          profileImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
          createdAt: new Date().toISOString()
        },
        {
          name: 'Priya Sharma',
          farmName: '',
          email: 'consumer@directfarm.com',
          password: 'consumer123',
          phone: '9123456780',
          address: 'Flat 4B, Green View Enclave, Kolkata, WB',
          userType: 'consumer',
          bio: 'Passionate about supporting local farmers and eating healthy chemical-free food.',
          profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
          createdAt: new Date().toISOString()
        }
      ];
      localStorage.setItem(this.STORAGE_KEYS.USERS, JSON.stringify(defaultUsers));
    }

    if (!localStorage.getItem(this.STORAGE_KEYS.PRODUCTS)) {
      const seedProducts = [
  {
    "id": 1001,
    "name": "Fresh Organic Lettuce",
    "category": "vegetables",
    "price": 100,
    "amount": 50,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Crisp, organic lettuce freshly harvested from our soil. Zero chemicals.",
    "image": "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "date": "2026-11-04T10:45:49.347Z"
  },
  {
    "id": 1002,
    "name": "Organic Vine Tomatoes",
    "category": "vegetables",
    "price": 50,
    "amount": 80,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Juicy, sun-ripened tomatoes grown naturally without pesticides.",
    "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "date": "2026-11-04T10:45:49.347Z"
  },
  {
    "id": 1003,
    "name": "Fresh Sweet Strawberries",
    "category": "fruits",
    "price": 150,
    "amount": 35,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Sweet, fragrant strawberries picked at peak ripeness this morning.",
    "image": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "date": "2026-11-04T10:45:49.347Z"
  },
  {
    "id": 1004,
    "name": "Organic Crunchy Carrots",
    "category": "vegetables",
    "price": 40,
    "amount": 60,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Crunchy, sweet carrots rich in vitamins, fresh from rich organic soil.",
    "image": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "date": "2026-11-04T10:45:49.347Z"
  },
  {
    "id": 1,
    "name": "Tomatoes",
    "category": "vegetables",
    "price": 40,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Tomatoes harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9-OuOtsl4iecwrOQ4c00iOqngoUdBz1dzQ&s",
    "date": "2026-11-04T10:45:49.346Z"
  },
  {
    "id": 2,
    "name": "Lettuce(cabage)",
    "category": "vegetables",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Lettuce(cabage) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzIH5VqsiJflnV4xJrPBtQiZIcd1dtvHdYA&s",
    "date": "2026-11-04T09:45:49.347Z"
  },
  {
    "id": 3,
    "name": "Fenugreek Leaves (Methi)",
    "category": "vegetables",
    "price": 180,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Fenugreek Leaves (Methi) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://beejwala.com/cdn/shop/products/fenugreek-4_compressed.jpg?v=1653821518",
    "date": "2026-11-04T08:45:49.347Z"
  },
  {
    "id": 4,
    "name": "Carrots(gajar)",
    "category": "vegetables",
    "price": 120,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Carrots(gajar) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://gourmetgarden.in/cdn/shop/products/Carrot_1280x.jpg?v=1736515665",
    "date": "2026-11-04T07:45:49.347Z"
  },
  {
    "id": 5,
    "name": "Potato",
    "category": "vegetables",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Potato harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaXIQooiS7C2syrl1H9RuQ3kcZT7mbs5yKA&s",
    "date": "2026-11-04T06:45:49.347Z"
  },
  {
    "id": 6,
    "name": "onion",
    "category": "vegetables",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh onion harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW7-aAJENmiznbqnQftzp5vCP4GYEiOOFUg&s",
    "date": "2026-11-04T05:45:49.347Z"
  },
  {
    "id": 7,
    "name": "lady finger(bhindi)",
    "category": "vegetables",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh lady finger(bhindi) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://ilovenursery.com/wp-content/uploads/2024/12/Bhindi-Okra-F1-Sujata-Vegetable-Seeds.jpg",
    "date": "2026-11-04T04:45:49.347Z"
  },
  {
    "id": 8,
    "name": "Bottle Gourd (Lauki)",
    "category": "vegetables",
    "price": 20,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Bottle Gourd (Lauki) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://mybageecha.com/cdn/shop/products/Bottle_Gourd.jpg?v=1571438537",
    "date": "2026-11-04T03:45:49.347Z"
  },
  {
    "id": 9,
    "name": "Green Chillies",
    "category": "vegetables",
    "price": 40,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Green Chillies harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDucAlTs_A_rDBTi7A17mLtDnSnUUjt_BUhQ&s",
    "date": "2026-11-04T02:45:49.347Z"
  },
  {
    "id": 10,
    "name": "Brinjal (Eggplant/Baingan)",
    "category": "vegetables",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Brinjal (Eggplant/Baingan) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvNNnLkuTF4DAnx4c_FD7Glkx8q4-BFq7fQ&s",
    "date": "2026-11-04T01:45:49.347Z"
  },
  {
    "id": 11,
    "name": "Cauliflower",
    "category": "vegetables",
    "price": 180,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Cauliflower harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://m.media-amazon.com/images/I/91EdPVzD99L._AC_UF1000,1000_QL80_.jpg",
    "date": "2026-11-04T00:45:49.347Z"
  },
  {
    "id": 12,
    "name": "Spinach (Palak)",
    "category": "vegetables",
    "price": 120,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Spinach (Palak) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://www.greendna.in/cdn/shop/products/palak0_1200x1200.jpg?v=1715600951",
    "date": "2026-11-03T23:45:49.347Z"
  },
  {
    "id": 13,
    "name": "Bitter Gourd (Karela)",
    "category": "vegetables",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Bitter Gourd (Karela) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPgPwiHJkL24QMU1f4R7_uc2MmNGuRxavPQ&s",
    "date": "2026-11-03T22:45:49.347Z"
  },
  {
    "id": 14,
    "name": "Ridge Gourd (Turai)",
    "category": "vegetables",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Ridge Gourd (Turai) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQAqh4aJ1b_czEi0vajp4G7bQuomj9MaITQ&s",
    "date": "2026-11-03T21:45:49.347Z"
  },
  {
    "id": 15,
    "name": "Pumpkin (Kaddu)",
    "category": "vegetables",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Pumpkin (Kaddu) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-s1GWpHAq7u9STEgy76RYA6ohwJEZHTlE3w&s",
    "date": "2026-11-03T20:45:49.347Z"
  },
  {
    "id": 16,
    "name": "Drumsticks (Moringa/Sahjan)",
    "category": "vegetables",
    "price": 20,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Drumsticks (Moringa/Sahjan) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx62JPRwngd1fD9gNSvd34UxOLCh-OUKFl2A&s",
    "date": "2026-11-03T19:45:49.347Z"
  },
  {
    "id": 17,
    "name": "Sweet Potato (Shakarkand)",
    "category": "vegetables",
    "price": 40,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Sweet Potato (Shakarkand) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdX7wf8GcwCJ4rnBu07wMueAPvutJYHf1HQ&s",
    "date": "2026-11-03T18:45:49.347Z"
  },
  {
    "id": 18,
    "name": "Radish (Mooli)",
    "category": "vegetables",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Radish (Mooli) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoR50GsAYX_gLV8iSizviibEPq9LaVJFIC5w&s",
    "date": "2026-11-03T17:45:49.347Z"
  },
  {
    "id": 19,
    "name": "Peas (Matar)",
    "category": "vegetables",
    "price": 180,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Peas (Matar) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8Uls-ksQgfKoe8bgcyvr0wlY4qZaFbfXUw&s",
    "date": "2026-11-03T16:45:49.347Z"
  },
  {
    "id": 20,
    "name": "Coriander Leaves (Dhaniya)",
    "category": "vegetables",
    "price": 120,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Coriander Leaves (Dhaniya) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://m.media-amazon.com/images/I/61x9Zv3gI7L._AC_UF1000,1000_QL80_.jpg",
    "date": "2026-11-03T15:45:49.347Z"
  },
  {
    "id": 21,
    "name": "Mango (Alphonso, Kesar, Dasheri)",
    "category": "fruits",
    "price": 80,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Mango (Alphonso, Kesar, Dasheri) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0Wfpzw8BkVS0tkIF8mVR-MatKmkaFlREGA&s",
    "date": "2026-11-03T14:45:49.347Z"
  },
  {
    "id": 22,
    "name": "Banana (Robusta, Nendran)",
    "category": "fruits",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Banana (Robusta, Nendran) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4lduQ9XIOasprHq64dcwjPy-7ehuWafy5Q&s",
    "date": "2026-11-03T13:45:49.347Z"
  },
  {
    "id": 23,
    "name": "Papaya",
    "category": "fruits",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Papaya harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanQe8axqSghqEzpKfaURIXqnhRUt994CuRA&s",
    "date": "2026-11-03T12:45:49.347Z"
  },
  {
    "id": 24,
    "name": "Guava (Allahabad variety)",
    "category": "fruits",
    "price": 60,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Guava (Allahabad variety) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6kX4F-vdgml6hbF71bzzHAeu2KVy1Gm1yw&s",
    "date": "2026-11-03T11:45:49.347Z"
  },
  {
    "id": 25,
    "name": "Pomegranate",
    "category": "fruits",
    "price": 200,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Pomegranate harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://m.media-amazon.com/images/I/611a1wD9ZGL._AC_UF894,1000_QL80_.jpg",
    "date": "2026-11-03T10:45:49.347Z"
  },
  {
    "id": 26,
    "name": "Watermelon",
    "category": "fruits",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "farm9",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Watermelon harvested directly from farm9. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIqdFfHWrJURhEu0PJb8iMIFXXhF3WLNwIA&s",
    "date": "2026-11-03T09:45:49.347Z"
  },
  {
    "id": 27,
    "name": "Sweet Lime (Mosambi)",
    "category": "fruits",
    "price": 150,
    "amount": 100,
    "unit": "kg",
    "farm": "farm9",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Sweet Lime (Mosambi) harvested directly from farm9. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAovCRz7_PqN6dD6YPgMjQVF_JMcZ-wJmpw&s",
    "date": "2026-11-03T08:45:49.347Z"
  },
  {
    "id": 28,
    "name": "Orange (Nagpur variety)",
    "category": "fruits",
    "price": 120,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Orange (Nagpur variety) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbH7Uvw1O7ixFL66NfZ8g9B9YC-R7esc6Cvg&s",
    "date": "2026-11-03T07:45:49.347Z"
  },
  {
    "id": 29,
    "name": "Jackfruit",
    "category": "fruits",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "farm9",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Jackfruit harvested directly from farm9. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTic_KjZkPGYAjy016CpWH1__chILmTX5gBhQ&s",
    "date": "2026-11-03T06:45:49.347Z"
  },
  {
    "id": 30,
    "name": "Apple (Kashmiri, Himachali)",
    "category": "fruits",
    "price": 230,
    "amount": 100,
    "unit": "kg",
    "farm": "farm9",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Apple (Kashmiri, Himachali) harvested directly from farm9. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ868djAR5mIlAFnnjF---4paarCg48aQTr-g&s",
    "date": "2026-11-03T05:45:49.347Z"
  },
  {
    "id": 31,
    "name": "Pineapple",
    "category": "fruits",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Pineapple harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGYVZ94skj0e1Gxs67fooNUmlq86RlMMjew&s",
    "date": "2026-11-03T04:45:49.347Z"
  },
  {
    "id": 32,
    "name": "Chikoo (Sapota)",
    "category": "fruits",
    "price": 20,
    "amount": 100,
    "unit": "kg",
    "farm": "farm9",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Chikoo (Sapota) harvested directly from farm9. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxxEhCcwy8stTJHfhHh8tvQ4rW3F1JHlekw&s",
    "date": "2026-11-03T03:45:49.347Z"
  },
  {
    "id": 33,
    "name": "Custard Apple (Sitaphal)",
    "category": "fruits",
    "price": 140,
    "amount": 100,
    "unit": "kg",
    "farm": "farm9",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Custard Apple (Sitaphal) harvested directly from farm9. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PJe7V2I-zaEA8Epa4CDIJ7lyMbPOAkNEdg&s",
    "date": "2026-11-03T02:45:49.347Z"
  },
  {
    "id": 34,
    "name": "Lychee(litchi)",
    "category": "fruits",
    "price": 130,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Lychee(litchi) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOLH8CZdZkb9MrHyIRdDl6QaF5K3WAfdfJw&s",
    "date": "2026-11-03T01:45:49.347Z"
  },
  {
    "id": 35,
    "name": "Grapes (Thompson Seedless, Anab-e-Shahi)",
    "category": "fruits",
    "price": 180,
    "amount": 100,
    "unit": "kg",
    "farm": "farm9",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Grapes (Thompson Seedless, Anab-e-Shahi) harvested directly from farm9. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLarVRINtbFC9KlbVH9pXHS3cN3JnLPYkRw&s",
    "date": "2026-11-03T00:45:49.347Z"
  },
  {
    "id": 36,
    "name": "Coconut",
    "category": "fruits",
    "price": 40,
    "amount": 100,
    "unit": "kg",
    "farm": "farm9",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Coconut harvested directly from farm9. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFagSixHc1JRlt_JrdnM0figuE2fxE8PyRo_4a8zFgIh_hgUPwiTbHIFJq2hZI4PXVqZ0&usqp=CAU",
    "date": "2026-11-02T23:45:49.347Z"
  },
  {
    "id": 37,
    "name": "Indian Gooseberry (Amla)",
    "category": "fruits",
    "price": 30,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Indian Gooseberry (Amla) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjORHIl4ZUfUqOvRSdGpEvJa18unuLv2G2Q&s",
    "date": "2026-11-02T22:45:49.347Z"
  },
  {
    "id": 38,
    "name": "Pear (Nashpati)",
    "category": "fruits",
    "price": 430,
    "amount": 100,
    "unit": "kg",
    "farm": "farm9",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Pear (Nashpati) harvested directly from farm9. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTihlVz-tLq8CEEs-JgMEvlcy0VGk08dS7hOw&s",
    "date": "2026-11-02T21:45:49.347Z"
  },
  {
    "id": 39,
    "name": "Plum (Alu Bukhara)",
    "category": "fruits",
    "price": 130,
    "amount": 100,
    "unit": "kg",
    "farm": "farm9",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Plum (Alu Bukhara) harvested directly from farm9. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://www.bigbasket.com/media/uploads/p/l/30001054_7-fresho-plum-indian.jpg",
    "date": "2026-11-02T20:45:49.347Z"
  },
  {
    "id": 40,
    "name": "Ber (Indian Jujube)",
    "category": "fruits",
    "price": 120,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Ber (Indian Jujube) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvmy6_aFsoFIWPeIPZC97CEAo44V5a6Dl2A&s",
    "date": "2026-11-02T19:45:49.347Z"
  },
  {
    "id": 41,
    "name": "Wheat",
    "category": "grains",
    "price": 60,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Wheat harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://tiimg.tistatic.com/fp/1/006/386/food-grade-whole-wheat-grains-084.jpg",
    "date": "2026-11-02T18:45:49.347Z"
  },
  {
    "id": 42,
    "name": "Rice (Paddy)",
    "category": "grains",
    "price": 60,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Rice (Paddy) harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://www.shutterstock.com/image-photo/bunch-paddy-rice-field-before-600nw-2219469869.jpg",
    "date": "2026-11-02T17:45:49.347Z"
  },
  {
    "id": 43,
    "name": "Barley",
    "category": "grains",
    "price": 180,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Barley harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRBTIP9YPOMM0ryd2cU_zrxi8ALuKN0U3Sjnm_1udCc961RMzrsDrjtB9k8vJpATHDhH_QNxakmOgY05BeFSmiXiQ",
    "date": "2026-11-02T16:45:49.347Z"
  },
  {
    "id": 44,
    "name": "Millet (Bajra)",
    "category": "grains",
    "price": 120,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Millet (Bajra) harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIhfZbn6WBkBMHRTrFUWF5zP1DT97WyXCiw&s",
    "date": "2026-11-02T15:45:49.347Z"
  },
  {
    "id": 45,
    "name": "Sorghum (Jowar)",
    "category": "grains",
    "price": 130,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Sorghum (Jowar) harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRSaZFeSdMuND6eKKVugL5qDJ4BsXPF3slQ&s",
    "date": "2026-11-02T14:45:49.347Z"
  },
  {
    "id": 46,
    "name": "Maize (Corn)",
    "category": "grains",
    "price": 130,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Maize (Corn) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8mJaexq94edtBCwP3x2lLNwgsAG41uOXwA&s",
    "date": "2026-11-02T13:45:49.347Z"
  },
  {
    "id": 47,
    "name": "Ragi (Finger Millet)",
    "category": "grains",
    "price": 130,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Ragi (Finger Millet) harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUmHDQleFv1sjD2OdOG_8hyIGvi5hWUrVJw&s",
    "date": "2026-11-02T12:45:49.347Z"
  },
  {
    "id": 48,
    "name": "Foxtail Millet",
    "category": "grains",
    "price": 120,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Foxtail Millet harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://naturechoice.in/eeghoacm/2022/07/Foxtail_millet-1.jpg",
    "date": "2026-11-02T11:45:49.347Z"
  },
  {
    "id": 49,
    "name": "Pearl Millet",
    "category": "grains",
    "price": 140,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Pearl Millet harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJeuAFFB4cb03byA1oBpuAYOD9iTm-yButw&s",
    "date": "2026-11-02T10:45:49.347Z"
  },
  {
    "id": 50,
    "name": "Oats",
    "category": "grains",
    "price": 330,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Oats harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://media.post.rvohealth.io/wp-content/uploads/2020/03/oats-oatmeal-732x549-thumbnail.jpg",
    "date": "2026-11-02T09:45:49.347Z"
  },
  {
    "id": 51,
    "name": "Quinoa",
    "category": "grains",
    "price": 480,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Quinoa harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIOwSmbtXpH8xQ3AXckoty051f7sW3oRhWg&s",
    "date": "2026-11-02T08:45:49.347Z"
  },
  {
    "id": 52,
    "name": "Chickpeas (Gram)",
    "category": "grains",
    "price": 120,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Chickpeas (Gram) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JBbGG7BhH6NL_FVudS4dTMQ0ioUMKEkVvA&s",
    "date": "2026-11-02T07:45:49.347Z"
  },
  {
    "id": 53,
    "name": "Lentils(Masoor)",
    "category": "grains",
    "price": 120,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Lentils(Masoor) harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrp5swwCh2E41xcaRfX9JhuE4Z8IMfZZpIvw&s",
    "date": "2026-11-02T06:45:49.347Z"
  },
  {
    "id": 54,
    "name": "Kidney Beans(Rajma)",
    "category": "grains",
    "price": 430,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Kidney Beans(Rajma) harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://biobasics.org/cdn/shop/files/order-organic-rajima-chitra-online-at-bio-basics.png?v=1736601880",
    "date": "2026-11-02T05:45:49.347Z"
  },
  {
    "id": 55,
    "name": "Pigeon Beans(Toor Dal)",
    "category": "grains",
    "price": 130,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Pigeon Beans(Toor Dal) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTVvdN1rGmHB_Mvgvfgm5HsnUQKqIb1do5A&s",
    "date": "2026-11-02T04:45:49.347Z"
  },
  {
    "id": 56,
    "name": "Black Gram(Urad Dal)",
    "category": "grains",
    "price": 120,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Black Gram(Urad Dal) harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvaymYXLOdxIW7HV7J4ZyMdQNIB0bwjbvUw&s",
    "date": "2026-11-02T03:45:49.347Z"
  },
  {
    "id": 57,
    "name": "Chia",
    "category": "grains",
    "price": 3999,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Chia harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ImdprbHdRJnqFN5TXTUaWhUdyk9KmZMEfw&s",
    "date": "2026-11-02T02:45:49.347Z"
  },
  {
    "id": 58,
    "name": "Hoorsde Gram(Kulthi)",
    "category": "grains",
    "price": 140,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Hoorsde Gram(Kulthi) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROefSuch6v2EeYb__f34FC_5H6i3-KZkQz_w&s",
    "date": "2026-11-02T01:45:49.347Z"
  },
  {
    "id": 59,
    "name": "Soybean",
    "category": "grains",
    "price": 130,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Soybean harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://5.imimg.com/data5/SI/VC/MY-21496561/soybean-seeds-500x500.jpg",
    "date": "2026-11-02T00:45:49.347Z"
  },
  {
    "id": 60,
    "name": "Blucwheat(Kuttu)",
    "category": "grains",
    "price": 180,
    "amount": 100,
    "unit": "kg",
    "farm": "farm8",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Blucwheat(Kuttu) harvested directly from farm8. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMW6QLJJizmMQNEy8WJRzY0BfGhcMANz4b_A&s",
    "date": "2026-11-01T23:45:49.347Z"
  },
  {
    "id": 61,
    "name": "Milk",
    "category": "liquid",
    "price": 80,
    "amount": 100,
    "unit": "litre",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Milk harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.QWKJmi9ZKNwduLLDqwoy6QHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T22:45:49.347Z"
  },
  {
    "id": 62,
    "name": "Cheese",
    "category": "dairy",
    "price": 200,
    "amount": 100,
    "unit": "pack",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "6161 Curds Way, Moldyville",
    "description": "Fresh Cheese harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.CAINRPFv1EUiOHO1jiAHtwHaEo?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T21:45:49.347Z"
  },
  {
    "id": 63,
    "name": "Yogurt",
    "category": "dairy",
    "price": 150,
    "amount": 100,
    "unit": "kg",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "6262 Probiotic Pl, Fermentville",
    "description": "Fresh Yogurt harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://pngimg.com/uploads/yogurt/yogurt_PNG15189.png",
    "date": "2026-11-01T20:45:49.347Z"
  },
  {
    "id": 64,
    "name": "Butter",
    "category": "dairy",
    "price": 300,
    "amount": 100,
    "unit": "pack",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Butter harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://wallpaperaccess.com/full/1634267.jpg",
    "date": "2026-11-01T19:45:49.347Z"
  },
  {
    "id": 65,
    "name": "Cream",
    "category": "dairy",
    "price": 200,
    "amount": 100,
    "unit": "kg",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "6464 Whipped Peak, Richville",
    "description": "Fresh Cream harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.undK2Sd5_LX79h6fM3Mz_wHaHa?w=181&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T18:45:49.347Z"
  },
  {
    "id": 66,
    "name": "Sour Cream",
    "category": "dairy",
    "price": 249,
    "amount": 100,
    "unit": "kg",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "6565 Tart Terrace, Zestyville",
    "description": "Fresh Sour Cream harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.qxU2RQSvQaRNjppCigiOcAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T17:45:49.347Z"
  },
  {
    "id": 67,
    "name": "Cottage Cheese",
    "category": "dairy",
    "price": 329,
    "amount": 100,
    "unit": "pack",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Cottage Cheese harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.ZVDXUHwRE3I4874_lkjOgQHaE7?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T16:45:49.347Z"
  },
  {
    "id": 68,
    "name": "Kefir",
    "category": "dairy",
    "price": 399,
    "amount": 100,
    "unit": "kg",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "6767 Ferment Rd, Healthgutville",
    "description": "Fresh Kefir harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.T-DjFr0xEgczxRXOpcSPtQHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T15:45:49.347Z"
  },
  {
    "id": 69,
    "name": "Ghee",
    "category": "dairy",
    "price": 599,
    "amount": 100,
    "unit": "kg",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "6868 Golden Oil Rd, Buttertown",
    "description": "Fresh Ghee harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.v8WpOA_44eXStcaEfLmqBAHaE8?w=302&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T14:45:49.347Z"
  },
  {
    "id": 70,
    "name": "Goat Cheese",
    "category": "dairy",
    "price": 699,
    "amount": 100,
    "unit": "pack",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Goat Cheese harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.pfu26I0fU-gD_LjczK2c1gHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T13:45:49.347Z"
  },
  {
    "id": 71,
    "name": "Whey Protein",
    "category": "dairy",
    "price": 1999,
    "amount": 100,
    "unit": "kg",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "7070 Protein Pkwy, Gainsville",
    "description": "Fresh Whey Protein harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.WIqSmH5hBckOZ4Anaja04AHaE8?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T12:45:49.347Z"
  },
  {
    "id": 72,
    "name": "Ice Cream",
    "category": "dairy",
    "price": 499,
    "amount": 100,
    "unit": "kg",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "7171 Scoop St, Sweetville",
    "description": "Fresh Ice Cream harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.lFEzsOjEyZLb9hK-N-CKeQHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T11:45:49.347Z"
  },
  {
    "id": 73,
    "name": "Ricotta",
    "category": "dairy",
    "price": 399,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Ricotta harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.L-m_eG0kmvczMrc_7XEQHAHaE8?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T10:45:49.347Z"
  },
  {
    "id": 74,
    "name": "Mascarpone",
    "category": "dairy",
    "price": 449,
    "amount": 100,
    "unit": "kg",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "7373 Tiramisu Trail, Dessertville",
    "description": "Fresh Mascarpone harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.JOGCyvOq5wf9l1VU_AimtgHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T09:45:49.347Z"
  },
  {
    "id": 75,
    "name": "Feta",
    "category": "dairy",
    "price": 429,
    "amount": 100,
    "unit": "kg",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "7474 Briny Blvd, Greeceville",
    "description": "Fresh Feta harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.u8uHe02EYuliao8aQgI0wAHaE8?w=303&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T08:45:49.347Z"
  },
  {
    "id": 76,
    "name": "Parmesan",
    "category": "dairy",
    "price": 699,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Parmesan harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.DE9iEa1r07q-ucRHOF3-LgHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T07:45:49.347Z"
  },
  {
    "id": 77,
    "name": "Mozzarella",
    "category": "dairy",
    "price": 449,
    "amount": 100,
    "unit": "kg",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "7676 Pizza Piazza, Meltville",
    "description": "Fresh Mozzarella harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.nCAjBQF9Fs_Pvk7JWwgUEQHaE8?rs=1&pid=ImgDetMain",
    "date": "2026-11-01T06:45:49.347Z"
  },
  {
    "id": 78,
    "name": "Brie",
    "category": "dairy",
    "price": 599,
    "amount": 100,
    "unit": "kg",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "7777 Soft Wheel Way, Franceville",
    "description": "Fresh Brie harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.FPB0jtMlpW4wEPqr7nDRkwHaE8?w=293&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T05:45:49.347Z"
  },
  {
    "id": 79,
    "name": "Blue Cheese",
    "category": "dairy",
    "price": 799,
    "amount": 100,
    "unit": "pack",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Blue Cheese harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.Qmi9orOFI0I7uS5T0OmXjgHaFn?w=228&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T04:45:49.347Z"
  },
  {
    "id": 80,
    "name": "Gouda",
    "category": "dairy",
    "price": 549,
    "amount": 100,
    "unit": "kg",
    "farm": "AMIL dairy",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "7979 Waxy Wheel Rd, Hollandville",
    "description": "Fresh Gouda harvested directly from AMIL dairy. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://th.bing.com/th/id/OIP.5Vy-Wc0PRQkvR8TiCEr91wHaFR?w=255&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "date": "2026-11-01T03:45:49.347Z"
  },
  {
    "id": 81,
    "name": "Mustard Oil",
    "category": "liquid",
    "price": 160,
    "amount": 100,
    "unit": "litre",
    "farm": "Directfarm oil pvt. ltd.",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Mustard Oil harvested directly from Directfarm oil pvt. ltd.. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjP6XUjh6n2bc-m95HvRXzLhX5Kll8Im2GHg&s",
    "date": "2026-11-01T02:45:49.347Z"
  },
  {
    "id": 82,
    "name": "Ricebran Oil",
    "category": "liquid",
    "price": 160,
    "amount": 100,
    "unit": "litre",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Ricebran Oil harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdERFbrM5WF2wkzzLcT_bh17LvWFZhE0mAYg&s",
    "date": "2026-11-01T01:45:49.347Z"
  },
  {
    "id": 83,
    "name": "Soybean Oil",
    "category": "liquid",
    "price": 189,
    "amount": 100,
    "unit": "litre",
    "farm": "Directfarm oil pvt. ltd.",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Soybean Oil harvested directly from Directfarm oil pvt. ltd.. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJC1ZJgcHmeIzKGl9hZDgbia780kbsER8VDQ&s",
    "date": "2026-11-01T00:45:49.347Z"
  },
  {
    "id": 84,
    "name": "Palm Oil",
    "category": "liquid",
    "price": 1102,
    "amount": 100,
    "unit": "litre",
    "farm": "Directfarm oil pvt. ltd.",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Palm Oil harvested directly from Directfarm oil pvt. ltd.. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lUaACQH66RCtKQfVcrITDds_-7N3SLnJ3Q&s",
    "date": "2026-10-31T23:45:49.347Z"
  },
  {
    "id": 85,
    "name": "Coconut Oil",
    "category": "liquid",
    "price": 330,
    "amount": 100,
    "unit": "litre",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Coconut Oil harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74LVU1AJJ-zdL7O-jNRcWMG2F0LgfoCbGHw&s",
    "date": "2026-10-31T22:45:49.347Z"
  },
  {
    "id": 86,
    "name": "Avacado Oil",
    "category": "liquid",
    "price": 230,
    "amount": 100,
    "unit": "litre",
    "farm": "Directfarm oil pvt. ltd.",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Avacado Oil harvested directly from Directfarm oil pvt. ltd.. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunpgyeciEnOVei5hGyTxTSyU-ju3RjpUqlQ&s",
    "date": "2026-10-31T21:45:49.347Z"
  },
  {
    "id": 87,
    "name": "Corn Oil",
    "category": "liquid",
    "price": 630,
    "amount": 100,
    "unit": "litre",
    "farm": "Directfarm oil pvt. ltd.",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Corn Oil harvested directly from Directfarm oil pvt. ltd.. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://elthecook.co.in/cdn/shop/articles/cornoil2.png?v=1549526220",
    "date": "2026-10-31T20:45:49.347Z"
  },
  {
    "id": 88,
    "name": "Pistachio Oil",
    "category": "liquid",
    "price": 320,
    "amount": 100,
    "unit": "litre",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Pistachio Oil harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://5.imimg.com/data5/SELLER/Default/2020/11/FP/XF/KA/6267617/1-500x500-v1.jpg",
    "date": "2026-10-31T19:45:49.347Z"
  },
  {
    "id": 89,
    "name": "Almond Oil",
    "category": "liquid",
    "price": 740,
    "amount": 100,
    "unit": "litre",
    "farm": "Directfarm oil pvt. ltd.",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Almond Oil harvested directly from Directfarm oil pvt. ltd.. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://media.post.rvohealth.io/wp-content/uploads/2020/08/almond-oil-and-almonds-thumb-1-732x549.jpg",
    "date": "2026-10-31T18:45:49.347Z"
  },
  {
    "id": 90,
    "name": "Sunflower Oil",
    "category": "liquid",
    "price": 230,
    "amount": 100,
    "unit": "litre",
    "farm": "Directfarm oil pvt. ltd.",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Sunflower Oil harvested directly from Directfarm oil pvt. ltd.. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhLVK5zaP0KugPF2cOZfFqOm2xVZsiYpLwA&s",
    "date": "2026-10-31T17:45:49.347Z"
  },
  {
    "id": 91,
    "name": "Turmeric (Haldi)",
    "category": "spices",
    "price": 830,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Turmeric (Haldi) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://elthecook.co.in/cdn/shop/products/haldi-powder.jpg?v=1602868426",
    "date": "2026-10-31T16:45:49.347Z"
  },
  {
    "id": 92,
    "name": "Cumin (Jeera)",
    "category": "spices",
    "price": 930,
    "amount": 100,
    "unit": "kg",
    "farm": "Sujay spice factory",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Cumin (Jeera) harvested directly from Sujay spice factory. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcwa4olGe_kHrdO3bG3HsEX0aEd02PeES4w&s",
    "date": "2026-10-31T15:45:49.347Z"
  },
  {
    "id": 93,
    "name": "Coriander (Dhaniya)",
    "category": "spices",
    "price": 530,
    "amount": 100,
    "unit": "kg",
    "farm": "Sujay spice factory",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Coriander (Dhaniya) harvested directly from Sujay spice factory. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hk1Q6jV2cBlGKD0I6HO8eUBalIW0jyuY0A&s",
    "date": "2026-10-31T14:45:49.347Z"
  },
  {
    "id": 94,
    "name": "Black Pepper (Kali Mirch)",
    "category": "spices",
    "price": 830,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Black Pepper (Kali Mirch) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHx2zHqx9f8o6Wh0nCe55QPclxiAL3gC5Ntw&s",
    "date": "2026-10-31T13:45:49.347Z"
  },
  {
    "id": 95,
    "name": "Mustard Seeds (Rai/Sarson)",
    "category": "spices",
    "price": 230,
    "amount": 100,
    "unit": "kg",
    "farm": "Sujay spice factory",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Mustard Seeds (Rai/Sarson) harvested directly from Sujay spice factory. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCt1g81lcMDAwzjkRFEIcDEmZMdnlCsU2l2Q&s",
    "date": "2026-10-31T12:45:49.347Z"
  },
  {
    "id": 96,
    "name": "Fenugreek (Methi)",
    "category": "spices",
    "price": 630,
    "amount": 100,
    "unit": "kg",
    "farm": "Sujay spice factory",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Fenugreek (Methi) harvested directly from Sujay spice factory. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTqK4CDlqcxIEG_xLrzxO6JEjQIX5OJeXrg&s",
    "date": "2026-10-31T11:45:49.347Z"
  },
  {
    "id": 97,
    "name": "Fennel Seeds (Saunf)",
    "category": "spices",
    "price": 430,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Fennel Seeds (Saunf) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpiUVPVJa7a4aXx9DcPDZd4nVj8Bvrhvk1Q&s",
    "date": "2026-10-31T10:45:49.347Z"
  },
  {
    "id": 98,
    "name": "Cardamom (Elaichi)",
    "category": "spices",
    "price": 630,
    "amount": 100,
    "unit": "kg",
    "farm": "Sujay spice factory",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Cardamom (Elaichi) harvested directly from Sujay spice factory. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://www.kashmiribazaar.in/image/cache/catalog/pictures/products/mazdaar/green-cardamom-500x500-550x445.jpg",
    "date": "2026-10-31T09:45:49.347Z"
  },
  {
    "id": 99,
    "name": "Cloves (Laung)",
    "category": "spices",
    "price": 430,
    "amount": 100,
    "unit": "kg",
    "farm": "Sujay spice factory",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Cloves (Laung) harvested directly from Sujay spice factory. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLUVhlAhXjUTWmNA5n7-6TrT0wazBj1Gvcg&s",
    "date": "2026-10-31T08:45:49.347Z"
  },
  {
    "id": 100,
    "name": "Nutmeg & Mace (Jaiphal & Javitri)",
    "category": "spices",
    "price": 623,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Nutmeg & Mace (Jaiphal & Javitri) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://5.imimg.com/data5/SELLER/Default/2023/1/CJ/XU/LE/5642594/nutmeg-mace-jaiphal-javitri-jfif.jpg",
    "date": "2026-10-31T07:45:49.347Z"
  },
  {
    "id": 101,
    "name": "Asafoetida (Hing)",
    "category": "spices",
    "price": 399,
    "amount": 100,
    "unit": "kg",
    "farm": "Sujay spice factory",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Asafoetida (Hing) harvested directly from Sujay spice factory. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhLVK5zaP0KugPF2cOZfFqOm2xVZsiYpLwA&s",
    "date": "2026-10-31T06:45:49.347Z"
  },
  {
    "id": 102,
    "name": "Bay Leaf (Tej Patta)",
    "category": "spices",
    "price": 130,
    "amount": 100,
    "unit": "kg",
    "farm": "Sujay spice factory",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Bay Leaf (Tej Patta) harvested directly from Sujay spice factory. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWuK84fXTe_uFZTWFaTfKKHmlkLTHIKHf7g&s",
    "date": "2026-10-31T05:45:49.347Z"
  },
  {
    "id": 103,
    "name": "Chili (Mirchi)",
    "category": "spices",
    "price": 1230,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Chili (Mirchi) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMAs1QXjNiXsl31c81jUkjv5zd5z5e8qiPJg&s",
    "date": "2026-10-31T04:45:49.347Z"
  },
  {
    "id": 104,
    "name": "Star Anise (Chakra Phool)",
    "category": "spices",
    "price": 230,
    "amount": 100,
    "unit": "kg",
    "farm": "Sujay spice factory",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Star Anise (Chakra Phool) harvested directly from Sujay spice factory. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://m.media-amazon.com/images/I/61w9-4K+1YS._AC_UF1000,1000_QL80_.jpg",
    "date": "2026-10-31T03:45:49.347Z"
  },
  {
    "id": 105,
    "name": "Ginger (Adrak/Sonth – Dried Ginger)",
    "category": "spices",
    "price": 2320,
    "amount": 100,
    "unit": "kg",
    "farm": "Sujay spice factory",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Ginger (Adrak/Sonth – Dried Ginger) harvested directly from Sujay spice factory. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDP2_0h_dufn2KONxhZc70BvnjwtZIA49SIQ&s",
    "date": "2026-10-31T02:45:49.347Z"
  },
  {
    "id": 106,
    "name": "Tamarind (Imli)",
    "category": "spices",
    "price": 2130,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Tamarind (Imli) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://www.jamoona.com/cdn/shop/files/450g-Frische-suesser-Imli--Suesser-Tamarind--9018424_grande.png?v=1738017113",
    "date": "2026-10-31T01:45:49.347Z"
  },
  {
    "id": 107,
    "name": "Carom Seeds (Ajwain)",
    "category": "spices",
    "price": 2320,
    "amount": 100,
    "unit": "kg",
    "farm": "Sujay spice factory",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Carom Seeds (Ajwain) harvested directly from Sujay spice factory. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://m.media-amazon.com/images/I/51Sm64oJ1JL.jpg",
    "date": "2026-10-31T00:45:49.347Z"
  },
  {
    "id": 108,
    "name": "Saffron (Kesar)",
    "category": "spices",
    "price": 235339,
    "amount": 100,
    "unit": "kg",
    "farm": "Sujay spice factory",
    "farmerId": "partner@directfarm.com",
    "farmerName": "Local Farmer Partner",
    "farmerPhone": "+91 91234 56789",
    "address": "Kolkata Rural Agro Zone, WB",
    "description": "Fresh Saffron (Kesar) harvested directly from Sujay spice factory. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdFrxjHKRTtHHflcijftzOegXfS5fITTLzg&s",
    "date": "2026-10-30T23:45:49.347Z"
  },
  {
    "id": 109,
    "name": "Garcinia (Kokum)",
    "category": "spices",
    "price": 330,
    "amount": 100,
    "unit": "kg",
    "farm": "Green Valley Organics",
    "farmerId": "farmer@directfarm.com",
    "farmerName": "D.K. Tripathi",
    "farmerPhone": "+91 98765 43210",
    "address": "UIT, Golapbag, Bardhhaman, WB",
    "description": "Fresh Garcinia (Kokum) harvested directly from Green Valley Organics. 100% natural, farm-fresh quality with zero middleman markup.",
    "image": "https://m.media-amazon.com/images/I/71C2xWPRiML._AC_UF1000,1000_QL80_.jpg",
    "date": "2026-10-30T22:45:49.347Z"
  }
];
      localStorage.setItem(this.STORAGE_KEYS.PRODUCTS, JSON.stringify(seedProducts));
    }

    if (!localStorage.getItem(this.STORAGE_KEYS.ORDERS)) {
      const seedOrders = [
        {
          id: 'DF-8401',
          consumerEmail: 'consumer@directfarm.com',
          consumerName: 'Priya Sharma',
          consumerPhone: '9123456780',
          deliveryAddress: 'Flat 4B, Green View Enclave, Kolkata, WB',
          items: [
            { id: 1002, name: 'Organic Vine Tomatoes', price: 50, quantity: 4, unit: 'kg', farm: 'Green Valley Organics', farmerId: 'farmer@directfarm.com' },
            { id: 1003, name: 'Fresh Sweet Strawberries', price: 150, quantity: 2, unit: 'kg', farm: 'Green Valley Organics', farmerId: 'farmer@directfarm.com' }
          ],
          totalAmount: 500,
          status: 'Delivered',
          paymentMethod: 'Cash on Delivery (Direct to Farmer)',
          middlemanFeeSaved: 175,
          date: new Date(Date.now() - 86400000 * 3).toISOString(),
          notes: 'Deliver fresh morning harvest please.'
        },
        {
          id: 'DF-8402',
          consumerEmail: 'consumer@directfarm.com',
          consumerName: 'Priya Sharma',
          consumerPhone: '9123456780',
          deliveryAddress: 'Flat 4B, Green View Enclave, Kolkata, WB',
          items: [
            { id: 41, name: 'Wheat', price: 60, quantity: 10, unit: 'kg', farm: 'Green Valley Organics', farmerId: 'farmer@directfarm.com' },
            { id: 81, name: 'Mustard Oil', price: 160, quantity: 2, unit: 'litre', farm: 'Green Valley Organics', farmerId: 'farmer@directfarm.com' }
          ],
          totalAmount: 920,
          status: 'Confirmed',
          paymentMethod: 'UPI Direct to Farmer',
          middlemanFeeSaved: 320,
          date: new Date(Date.now() - 86400000).toISOString(),
          notes: 'Please call on arrival.'
        },
        {
          id: 'DF-8403',
          consumerEmail: 'rahul.verma@example.com',
          consumerName: 'Rahul Verma',
          consumerPhone: '9830123456',
          deliveryAddress: '15 Salt Lake Sector 1, Kolkata, WB',
          items: [
            { id: 1001, name: 'Fresh Organic Lettuce', price: 100, quantity: 2, unit: 'kg', farm: 'Green Valley Organics', farmerId: 'farmer@directfarm.com' },
            { id: 1004, name: 'Organic Crunchy Carrots', price: 40, quantity: 4, unit: 'kg', farm: 'Green Valley Organics', farmerId: 'farmer@directfarm.com' }
          ],
          totalAmount: 360,
          status: 'Pending',
          paymentMethod: 'Cash on Delivery (Direct to Farmer)',
          middlemanFeeSaved: 126,
          date: new Date().toISOString(),
          notes: 'Looking for crisp fresh vegetables.'
        }
      ];
      localStorage.setItem(this.STORAGE_KEYS.ORDERS, JSON.stringify(seedOrders));
    }

    if (!localStorage.getItem(this.STORAGE_KEYS.MESSAGES)) {
      const seedMessages = [
        {
          id: 'MSG-1',
          fromName: 'Priya Sharma',
          fromEmail: 'consumer@directfarm.com',
          fromPhone: '9123456780',
          farmerId: 'farmer@directfarm.com',
          farmName: 'Green Valley Organics',
          subject: 'Bulk organic purchase for family event',
          message: 'Hello D.K. Tripathi ji, we need 30kg of fresh organic tomatoes and 20kg carrots next Saturday. Do you have enough harvest ready?',
          date: new Date(Date.now() - 86400000 * 2).toISOString(),
          reply: 'Yes Priya ji, we will harvest fresh Friday evening so they reach you in prime condition.'
        },
        {
          id: 'MSG-2',
          fromName: 'Amitava Mukherjee',
          fromEmail: 'amitavam@gmail.com',
          fromPhone: '9831998877',
          farmerId: 'farmer@directfarm.com',
          farmName: 'Green Valley Organics',
          subject: 'Farm visit & direct subscription',
          message: 'Respected Farmer, can we visit your farm in Burdwan this Sunday with children to see the chemical-free farming methods?',
          date: new Date().toISOString(),
          reply: ''
        }
      ];
      localStorage.setItem(this.STORAGE_KEYS.MESSAGES, JSON.stringify(seedMessages));
    }

    if (!localStorage.getItem(this.STORAGE_KEYS.CART)) {
      localStorage.setItem(this.STORAGE_KEYS.CART, JSON.stringify([]));
    }
  }

  getUsers() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEYS.USERS)) || [];
    } catch (e) {
      return [];
    }
  }

  register(userData) {
    const users = this.getUsers();
    const email = userData.email.trim().toLowerCase();

    if (users.some(u => u.email.toLowerCase() === email)) {
      throw new Error('This email address is already registered. Please log in.');
    }

    const newUser = {
      name: userData.name.trim(),
      farmName: userData.farmName ? userData.farmName.trim() : (userData.userType === 'farmer' ? userData.name.trim() + ' Farm' : ''),
      email: email,
      password: userData.password,
      phone: userData.phone.trim(),
      address: userData.address.trim(),
      userType: userData.userType || 'consumer',
      bio: userData.bio || (userData.userType === 'farmer' ? 'Dedicated to honest, direct-from-farm produce.' : 'Fresh produce lover.'),
      profileImage: userData.profileImage || (userData.userType === 'farmer' 
        ? 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'),
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem(this.STORAGE_KEYS.USERS, JSON.stringify(users));

    this.setCurrentUser(newUser);
    return newUser;
  }

  login(email, password) {
    const users = this.getUsers();
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    const user = users.find(u => u.email.toLowerCase() === cleanEmail && u.password === cleanPass);
    if (!user) {
      return false;
    }

    this.setCurrentUser(user);
    return user;
  }

  getCurrentUser() {
    try {
      const u = localStorage.getItem(this.STORAGE_KEYS.CURRENT_USER);
      return u ? JSON.parse(u) : null;
    } catch (e) {
      return null;
    }
  }

  setCurrentUser(user) {
    if (!user) {
      localStorage.removeItem(this.STORAGE_KEYS.CURRENT_USER);
      return;
    }
    const { password, ...safeUser } = user;
    localStorage.setItem(this.STORAGE_KEYS.CURRENT_USER, JSON.stringify(safeUser));
  }

  updateCurrentUser(fields) {
    const current = this.getCurrentUser();
    if (!current) return null;

    const updated = { ...current, ...fields };
    this.setCurrentUser(updated);

    const users = this.getUsers().map(u => {
      if (u.email.toLowerCase() === updated.email.toLowerCase()) {
        return { ...u, ...fields };
      }
      return u;
    });
    localStorage.setItem(this.STORAGE_KEYS.USERS, JSON.stringify(users));
    return updated;
  }

  logout() {
    localStorage.removeItem(this.STORAGE_KEYS.CURRENT_USER);
    return true;
  }

  getProducts() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEYS.PRODUCTS)) || [];
    } catch (e) {
      return [];
    }
  }

  getProductById(id) {
    const products = this.getProducts();
    return products.find(p => String(p.id) === String(id)) || null;
  }

  getFarmerProducts(farmerEmail) {
    const products = this.getProducts();
    const currentUser = this.getCurrentUser();
    const targetEmail = (farmerEmail || (currentUser ? currentUser.email : 'farmer@directfarm.com')).toLowerCase();

    return products.filter(p => {
      if (!p.farmerId) return true;
      if (p.farmerId.toLowerCase() === targetEmail) return true;
      if (targetEmail === 'farmer@directfarm.com' && p.farm && p.farm.toLowerCase().includes('green valley')) return true;
      return false;
    });
  }

  addProduct(productData) {
    const products = this.getProducts();
    const currentUser = this.getCurrentUser();

    const newProduct = {
      id: Date.now(),
      name: productData.name.trim(),
      category: (productData.category || 'vegetables').toLowerCase(),
      price: Number(productData.price) || 0,
      amount: Number(productData.amount) || 50,
      unit: productData.unit || (productData.category === 'liquid' ? 'litre' : 'kg'),
      farm: productData.farm || (currentUser ? currentUser.farmName : 'My Farm'),
      farmerId: (currentUser ? currentUser.email : 'farmer@directfarm.com').toLowerCase(),
      farmerName: currentUser ? currentUser.name : 'Local Farmer',
      farmerPhone: currentUser ? currentUser.phone : '+91 98765 43210',
      address: productData.address || (currentUser ? currentUser.address : 'Farm Location'),
      description: productData.description || 'Farm-fresh quality produce directly to you with zero middleman charges.',
      image: productData.image || 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: new Date().toISOString()
    };

    products.unshift(newProduct);
    localStorage.setItem(this.STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    return newProduct;
  }

  updateProduct(id, updatedFields) {
    const products = this.getProducts();
    const index = products.findIndex(p => String(p.id) === String(id));
    if (index === -1) return null;

    products[index] = {
      ...products[index],
      ...updatedFields,
      price: updatedFields.price !== undefined ? Number(updatedFields.price) : products[index].price,
      amount: updatedFields.amount !== undefined ? Number(updatedFields.amount) : products[index].amount
    };

    localStorage.setItem(this.STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    return products[index];
  }

  deleteProduct(id) {
    let products = this.getProducts();
    const initialLen = products.length;
    products = products.filter(p => String(p.id) !== String(id));
    localStorage.setItem(this.STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    return products.length < initialLen;
  }

  getOrders() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEYS.ORDERS)) || [];
    } catch (e) {
      return [];
    }
  }

  getFarmerOrders(farmerEmail) {
    const orders = this.getOrders();
    const currentUser = this.getCurrentUser();
    const targetEmail = (farmerEmail || (currentUser ? currentUser.email : 'farmer@directfarm.com')).toLowerCase();

    return orders.filter(order => {
      if (!order.items || order.items.length === 0) return true;
      return order.items.some(item => {
        if (!item.farmerId) return true;
        if (item.farmerId.toLowerCase() === targetEmail) return true;
        if (targetEmail === 'farmer@directfarm.com' && item.farm && item.farm.toLowerCase().includes('green valley')) return true;
        return false;
      });
    });
  }

  getConsumerOrders(consumerEmail) {
    const orders = this.getOrders();
    const currentUser = this.getCurrentUser();
    const targetEmail = (consumerEmail || (currentUser ? currentUser.email : '')).toLowerCase();
    return orders.filter(o => o.consumerEmail && o.consumerEmail.toLowerCase() === targetEmail);
  }

  createOrder(orderData) {
    const orders = this.getOrders();
    const currentUser = this.getCurrentUser();

    const orderId = 'DF-' + Math.floor(1000 + Math.random() * 9000);
    const middlemanSavings = Math.round((orderData.totalAmount || 0) * 0.35);

    const newOrder = {
      id: orderId,
      consumerEmail: currentUser ? currentUser.email : (orderData.consumerEmail || 'guest@directfarm.com'),
      consumerName: orderData.consumerName || (currentUser ? currentUser.name : 'Consumer'),
      consumerPhone: orderData.consumerPhone || (currentUser ? currentUser.phone : 'Not provided'),
      deliveryAddress: orderData.deliveryAddress || (currentUser ? currentUser.address : 'Default Delivery Address'),
      items: orderData.items || [],
      totalAmount: Number(orderData.totalAmount) || 0,
      middlemanFeeSaved: middlemanSavings,
      status: 'Pending',
      paymentMethod: orderData.paymentMethod || 'Cash on Delivery (Direct to Farmer)',
      notes: orderData.notes || '',
      date: new Date().toISOString()
    };

    orders.unshift(newOrder);
    localStorage.setItem(this.STORAGE_KEYS.ORDERS, JSON.stringify(orders));

    const products = this.getProducts();
    (orderData.items || []).forEach(cartItem => {
      const p = products.find(prod => String(prod.id) === String(cartItem.id));
      if (p) {
        p.amount = Math.max(0, (p.amount || 0) - (cartItem.quantity || 1));
      }
    });
    localStorage.setItem(this.STORAGE_KEYS.PRODUCTS, JSON.stringify(products));

    this.clearCart();
    return newOrder;
  }

  updateOrderStatus(orderId, newStatus) {
    const orders = this.getOrders();
    const order = orders.find(o => String(o.id) === String(orderId));
    if (!order) return null;

    order.status = newStatus;
    localStorage.setItem(this.STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    return order;
  }

  getCart() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEYS.CART)) || [];
    } catch (e) {
      return [];
    }
  }

  addToCart(productId, quantity = 1) {
    const product = this.getProductById(productId);
    if (!product) return false;

    const cart = this.getCart();
    const existingIndex = cart.findIndex(item => String(item.product.id) === String(productId));

    if (existingIndex > -1) {
      cart[existingIndex].quantity += Number(quantity);
    } else {
      cart.push({
        product: product,
        quantity: Number(quantity)
      });
    }

    localStorage.setItem(this.STORAGE_KEYS.CART, JSON.stringify(cart));
    return cart;
  }

  updateCartQuantity(productId, quantity) {
    let cart = this.getCart();
    const qty = Number(quantity);

    if (qty <= 0) {
      return this.removeFromCart(productId);
    }

    const item = cart.find(i => String(i.product.id) === String(productId));
    if (item) {
      item.quantity = qty;
      localStorage.setItem(this.STORAGE_KEYS.CART, JSON.stringify(cart));
    }
    return cart;
  }

  removeFromCart(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => String(item.product.id) !== String(productId));
    localStorage.setItem(this.STORAGE_KEYS.CART, JSON.stringify(cart));
    return cart;
  }

  clearCart() {
    localStorage.setItem(this.STORAGE_KEYS.CART, JSON.stringify([]));
    return [];
  }

  getCartCount() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  }

  getCartTotal() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + (item.product.price * (item.quantity || 1)), 0);
  }

  getMessages(farmerEmail) {
    try {
      const messages = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.MESSAGES)) || [];
      const currentUser = this.getCurrentUser();
      const targetEmail = (farmerEmail || (currentUser ? currentUser.email : 'farmer@directfarm.com')).toLowerCase();
      return messages.filter(m => !m.farmerId || m.farmerId.toLowerCase() === targetEmail || targetEmail === 'farmer@directfarm.com');
    } catch (e) {
      return [];
    }
  }

  sendMessage(messageData) {
    const messages = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.MESSAGES)) || [];
    const currentUser = this.getCurrentUser();

    const newMsg = {
      id: 'MSG-' + Date.now(),
      fromName: messageData.fromName || (currentUser ? currentUser.name : 'Consumer'),
      fromEmail: messageData.fromEmail || (currentUser ? currentUser.email : 'guest@directfarm.com'),
      fromPhone: messageData.fromPhone || (currentUser ? currentUser.phone : ''),
      farmerId: (messageData.farmerId || 'farmer@directfarm.com').toLowerCase(),
      farmName: messageData.farmName || 'Direct Farm',
      subject: messageData.subject || 'Produce Inquiry',
      message: messageData.message || '',
      date: new Date().toISOString(),
      reply: ''
    };

    messages.unshift(newMsg);
    localStorage.setItem(this.STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
    return newMsg;
  }

  replyMessage(messageId, replyText) {
    const messages = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.MESSAGES)) || [];
    const msg = messages.find(m => String(m.id) === String(messageId));
    if (!msg) return null;

    msg.reply = replyText;
    localStorage.setItem(this.STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
    return msg;
  }
}

window.DirectFarmStore = DirectFarmStore;
window.AuthService = DirectFarmStore;
window.authService = new DirectFarmStore();
window.DirectFarm = window.authService;
