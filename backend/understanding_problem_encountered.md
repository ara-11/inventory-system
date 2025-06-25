---------------------------------------------------------------------------------------------------------------
💥 What happened?
You tried to POST from your React app (localhost:3000) to your PHP backend (localhost/inventory-system/add.php).
But the browser blocked it with this message:

❌ CORS policy: Response to preflight request doesn’t pass...

🧠 What is CORS?
CORS = Cross-Origin Resource Sharing
It’s a browser security feature that blocks requests between two different origins (domains or ports).

React app	PHP API
localhost:3000	localhost (port 80)

Even though it’s the same machine, React runs on a different port → the browser treats it as different origin.

🛑 What is a Preflight Request?
When you send a POST request with JSON (Content-Type: application/json), the browser:

First sends a preflight OPTIONS request to check if it’s allowed.

If the server (your PHP file) doesn’t respond properly to OPTIONS, it blocks the request.

✅ What fixed it?
We added this code:

php
Copy
Edit
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
That tells the browser:

“Yes, I’m aware of this preflight check. It’s safe to continue.”

And with these headers:

php
Copy
Edit
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
You told the browser:

It’s okay to send requests from other origins (*)

It supports both POST and OPTIONS

It accepts Content-Type: application/json

🔁 Summary
Problem	Fix
Browser blocked the POST	Because no valid response to preflight
Preflight was an OPTIONS	PHP didn’t handle it
Solution	Handle OPTIONS in PHP and allow CORS

Now that you’ve fixed this, you’re ready to:

✅ Send POST from React to PHP

✅ Use any frontend to call your backend

🌍 Eventually deploy and make it work across domains


---------------------------------------------------------------------------------------------------------------