import jwt_decode from "jwt-decode";

console.log("%cUpStream", "color:#f9461c;font-family:system-ui;font-size:30px;font-weight:bold");
console.log("%cWARNING: The console is a dark and dangerous land. Only paste trusted code to avoid Self-XSS attacks.", "color:#c60c30;font-family:system-ui;");
console.log("%cYou clearly know what you're doing, so why not make your own game at https://upstream.samuelsharp.com/dev?", "color:#009b3a;font-family:system-ui;");

const token = new URLSearchParams(window.location.search).get('token') || 'nouser';

try {
  const user = jwt_decode(token);
} catch {
  const user = {
    name: 'Joe Test',
    email: 'test.joe@example.com',
    pfp: 'https://via.placeholder.com/300.png',
    id: 'abcdefg'
  }
}

window.UpStream = {
  currentUser: {
    name: user.displayName,
    email: user.email,
    pfp: user.picture,
    id: user.user_id
  }
}