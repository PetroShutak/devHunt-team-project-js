//import axios from 'axios';
// export function getAuthForm() {
//   return `
//     <form class="auth-form" id="auth-form">
//     <div class="mui-textfield mui-textfield--float-label">
//         <input type="text" id="name" required>
//         <label for="name">Name</label>
//       </div>
//       <div class="mui-textfield mui-textfield--float-label">
//         <input type="email" id="email" required>
//         <label for="email">Email</label>
//       </div>
//       <div class="mui-textfield mui-textfield--float-label">
//         <input type="password" id="password" required>
//         <label for="password">Password</label>
//       </div>
//       <button
//         type="submit"
//         class="mui-btn mui-btn--raised mui-btn--primary"
//       >
//         Enter
//       </button>
//     </form>
//   `;
// }

export function getAuthForm() {
  return `<div id="content_container">
<div id="form_container">
    <div id="form_header_container">
        <h2 id="form_header"> Login + Firebase Database </h2>
    </div>

    <div id="form_content_container">
        <div id="form_content_inner_container">
            <input type="text" id="full_name" placeholder="Full name">
            <input type="email" id="email" placeholder="Email">
            <input type="password" id="password" placeholder="New Password">

            <input type="text" id="favourite_song" placeholder="The Best Song Ever">
            <input type="text" id="milk_before_cereal" placeholder="Milk Before Cereal? ( Yes | No )">

            <div id="button_container">
                <button onclick="login()">Login</button>
                <button onclick="register()">Register</button>
            </div>

        </div>
    </div>
</div>
</div>`;
}
