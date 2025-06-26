
---

## 📦 Inventory Management System (React + PHP + MySQL)

A simple full-stack web app to manage inventory, built using:

* **Frontend:** React + Vite
* **Backend:** PHP (REST API)
* **Database:** MySQL

### 🔗 Live Demo

🌐 [Frontend on GitHub Pages](https://github.com/ara-11/inventory-system)
🖥️ [Backend API (hosted on InfinityFree)](https://phpcrudonreact.infinityfreeapp.com/)

---

### ✨ Features

* Add new products
* Edit product info
* Delete products
* Search/filter products
* Stylish responsive layout

---

### 📂 Project Structure

```
/inventory-tailwind
│
├── dist/               → Production-ready frontend (upload to hosting)
├── src/                → React components
│   ├── App.jsx
│   └── ProductForm.jsx
├── public/
├── index.html
├── package.json
└── ...
```

---

### ⚙️ How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

---

### 📤 Deployment Instructions

#### ✅ Frontend (GitHub Pages)

1. Build the app:

   ```bash
   npm run build
   ```
2. Install `gh-pages`:

   ```bash
   npm install --save-dev gh-pages
   ```
3. Add this to `package.json`:

   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Deploy:

   ```bash
   npm run deploy
   ```

#### ✅ Backend (InfinityFree or any PHP hosting)

* Upload your `inventory-system` folder (with `db.php`, `add.php`, `read.php`, etc.) inside `htdocs/`.

---

### 🛠️ TODO / Improvements

* Add user login with sessions
* Pagination for large data
* Export to CSV or Excel

---

### 📚 License

MIT License

---
