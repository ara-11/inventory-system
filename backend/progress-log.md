# 🛠 Dev Progress Log – [Project Name - "Inventroy system with frontend using react"]

_A day-by-day journal of what I did, what I struggled with, and what I learned._

---

## 📅 Day 1 – [June 19,2025 / Task ] [Time started: 5:00 pm]
### ✅ What I Did
- Set up local environment
- Created basic file structure
- created database named "inventory_system_db"
- I pasted code from chatgpt to my files
- tested in insomnia
- working naman sya
- I want to connect it to a frontend
- I will use react, cuz that's what gpt told me 
- while installing node.js I encountered a problem
- I tried running the App.js by double-clicking it from file explorer when I should right clicking it and use the "open with vscode" feature.
- now I'm done installing it
- in cmd, npm start
- I made a file pala on how to install react, you check it na lang
- nag stop pala ko kanina mga 8pm
- now it's 11:53 pm
- I modified the App.js file (of course the code is from chat gpt)
- fetch feature pa lang meron
- run it in browser (http://localhost:3000)
- it's working. It's displaying the data from the table
- I'll add the add product feature
- done running it browser
- the ui is there, but the add button is not working
- I'll fix it
- ❌ The Problem:
React sends a **preflight OPTIONS request** before sending the actual POST.
Your add.php does not handle OPTIONS, so the browser blocks the request.

✅ The Solution: Handle OPTIONS in your PHP
  add.php is updated

- options is handled
- thanks to gpt
- add button is now working, the table is updated when add button is clicked.
- nag didisplay na rin sya front end
- if you want to understand the problem that you encountered checked it here: understanding_problem_encountered.md
- now, let's move on to update feature
- first, I'll update the code to the update.php file
- need to add the headers
- done adding
- need to add this naman: preflight OPTIONS request
- done adding it
- done modifying the update.php file
- next, I need to update the App.js file to support editing(update feature)
- done update
- next, update the ProductForm.js to handle editing
- done update
- it's working
- medyo pagod at inaantok na ko. 
- I'll be back tomorrow.
- it's now 12:42 in the midnight.
- goodnight..







### ❌ Struggles
- [Describe the problem]
  - ❌ Problem:
You're trying to open or run App.js by double-clicking it from File Explorer.
That causes Windows Script Host to attempt to "execute" the .js file directly — but React files are not meant to run like that.

⚠️ You should never double-click .js files in a React project.


  → Cause: [What caused it]
  → Fix: [How you solved it]
    ✅ Solution:
Step-by-step:
Close the error pop-up window.

Right-click App.js

Select “Open with” → Code Editor, like:

Visual Studio Code (✅ best choice)

Notepad++ (✅ okay)

Notepad (if nothing else is available)

### 🧠 Learnings
- [What you learned today]
  - ✅ How you should run React:
Instead of double-clicking files, always run React in the terminal like this:

bash
Copy
Edit
npm start
Then view your app in the browser at:

arduino
Copy
Edit
http://localhost:3000
- [Any tips to remember]


❌ The Problem:
React sends a **preflight OPTIONS request** before sending the actual POST.
Your add.php does not handle OPTIONS, so the browser blocks the request.

✅ The Solution: Handle OPTIONS in your PHP
Update your add.php

🧪 Next Steps
Save the file

Restart Apache (XAMPP) just in case

Try submitting the form again in your React app

You should now see:

Data added to the database

Updated table in React frontend

---

## 📅 Day 2 – [June 20, 2025] [time started: 2:29 pm]
### ✅ What I Did
- late na ko nag simula, 11 na 'ko nagising e
- I'll now continue adding the delete feature sa front end
- done adding the delete functionality, it's all working.
- I'll now add the search functionality.
- done
- I'm not sure if I'm doing this documentation right haha.😆
- I'm doing copy and paste code method 😜😆
- I'll style the inventory system usinng tailwind css
- installing tailwind css now
- you can check the step-by-step installation here: tailwind_installation.md
- 
- 
- 
- 
### ❌ Struggles
- 
### 🧠 Learnings
- 

---

## 📅 Day 3 – [Date]
### ✅ What I Did
- 
### ❌ Struggles
- 
### 🧠 Learnings
- 

---

## 📅 Day X – [Date]
_Repeat as needed..._

