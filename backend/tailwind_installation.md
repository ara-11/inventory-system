🧩 Step 1: Install Tailwind in Your React App
In your React project root (the folder with package.json), run this:

bash
Copy
Edit
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
It will generate 2 files:

tailwind.config.js

postcss.config.js

🧩 Step 2: Configure Tailwind
Edit tailwind.config.js like this:

js
Copy
Edit
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
🧩 Step 3: Add Tailwind to your CSS
Open src/index.css
Replace everything inside with this:

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
Save the file.

✅ Done! Tailwind is now ready.
You can now use Tailwind classes like:

jsx
Copy
Edit
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Add Product
</button>
