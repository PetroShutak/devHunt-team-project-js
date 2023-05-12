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
