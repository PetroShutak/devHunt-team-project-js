//import axios from 'axios';
export function getAuthForm() {
  return `
    <form class="auth-form" id="auth-form">
    <div class="mui-textfield mui-textfield--float-label">
        <input type="text" id="name" required>
        <label for="name">Name</label>
      </div>
      <div class="mui-textfield mui-textfield--float-label">
        <input type="email" id="email" required>
        <label for="email">Email</label>
      </div>
      <div class="mui-textfield mui-textfield--float-label">
        <input type="password" id="password" required>
        <label for="password">Password</label>
      </div>
      <button
        type="submit"
        class="mui-btn mui-btn--raised mui-btn--primary"
      >
        Enter
      </button>
    </form>
  `;
}
