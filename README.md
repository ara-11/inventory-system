# 📦 Inventory Management System (React + PHP + MySQL)

This is a simple full-stack web application for managing product inventory. It allows users to **add**, **edit**, **delete**, and **search** products.

- 🔧 **Frontend**: React (Vite)
- 🧠 **Backend**: PHP (REST API)
- 🗃️ **Database**: MySQL

---

## 🔗 Live Demo

- 🌐 **Frontend (GitHub Pages)**: [https://ara-11.github.io/inventory-system](https://ara-11.github.io/inventory-system)
- 🖥️ **Backend API (InfinityFree)**: [https://phpcrudonreact.infinityfreeapp.com/inventory-system](https://phpcrudonreact.infinityfreeapp.com/inventory-system)

---

## ✨ Features

- ✅ Add a product with name, quantity, and price
- ✏️ Edit product details
- ❌ Delete a product
- 🔍 Real-time search filtering
- 💅 Clean and responsive layout

---

## 📂 Project Structure

```

inventory-tailwind/
├── dist/                # Compiled frontend code for production
├── src/
│   ├── App.jsx          # Main application logic
│   └── ProductForm.jsx  # Form component for add/edit
├── index.html
├── index.css            # Styling
├── package.json
└── ...

````

---

## 🖥️ How to Run Locally (Development)

### 🔧 Requirements

- Node.js
- XAMPP or any local server with PHP + MySQL

### 🪜 Steps

1. **Clone the repository**

```bash
git clone https://github.com/ara-11/inventory-system.git
cd inventory-system
````

2. **Install dependencies**

```bash
npm install
```

3. **Run the frontend locally**

```bash
npm run dev
```

4. **Set up your backend locally**

* Place your PHP backend inside:
  `C:/xampp/htdocs/inventory-system/`

* Example files:

  * `read.php`
  * `add.php`
  * `update.php`
  * `delete.php`
  * `db.php`

* In your `App.jsx`, set API base URLs to:

```js
http://localhost/inventory-system/read.php
```

---

## 🧑‍💻 Backend API Structure

All backend PHP scripts are inside the `inventory-system/` folder.

| Endpoint     | Method | Description        |
| ------------ | ------ | ------------------ |
| `read.php`   | GET    | Fetch all products |
| `add.php`    | POST   | Add new product    |
| `update.php` | POST   | Update product     |
| `delete.php` | POST   | Delete product     |
| `db.php`     | -      | DB connection      |

Make sure `db.php` uses your correct credentials:

```php
$host = 'localhost'; // or your InfinityFree host
$user = 'root';      // or your cPanel username
$pass = '';          // or your hosting password
$db   = 'your_db_name';
```

---

## 🌍 Deploying Your Project

### 🚀 Frontend Deployment (GitHub Pages)

1. **Build your project**

```bash
npm run build
```

2. **Install GitHub Pages CLI**

```bash
npm install --save-dev gh-pages
```

3. **Update your `package.json`**

```json
"homepage": "https://yourusername.github.io/your-repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. **Deploy**

```bash
npm run deploy
```

---

### 🚀 Backend Deployment (InfinityFree or 000Webhost)

1. Create an account on [https://infinityfree.net](https://infinityfree.net)
2. Go to `File Manager` → `htdocs`
3. Upload your `inventory-system/` folder with all PHP files
4. Use the provided domain, for example:

```
https://yourname.infinityfreeapp.com/inventory-system/read.php
```

5. Update your frontend API URLs to match the deployed URLs.

---

## 🔐 Environment Switching (Local vs Production)

To easily switch API endpoints:

```js
const BASE_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost/inventory-system'
    : 'https://yourdomain.infinityfreeapp.com/inventory-system';

fetch(`${BASE_URL}/read.php`)
```

---

## 🛠️ Future Improvements

* 🔒 User login/authentication
* 📄 Export to Excel or CSV
* 📊 Graphs and analytics
* 🗃 Pagination and sorting
* 🌐 Multilingual support

---

## 📘 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Ara**
📧 \[[ara.m.duco@gmail.com](mailto:ara.m.duco@gmail.com)]
💼 [GitHub](https://github.com/ara-11)

---

> Thanks for checking this project out! ⭐ Star it on GitHub if you found it helpful.


