async function add_user(){
  let user=await fetch('https://randomuser.me/api/')
  let json=await user.json()


let newUser = {
  gender: json.results[0].gender,
  nameh: json.results[0].name.last,
  pic: json.results[0].picture.large,
  mail: json.results[0].email,
  phone: json.results[0].phone,
  uname: json.results[0].login.username,
  pass: json.results[0].login.password,
  City: json.results[0].location.city,
  street: json.results[0].location.street,
}
let users = document.querySelector('.users')
users.insertAdjacentHTML('beforeend', `
<div class="user-card">
  <img src="${newUser.pic}" alt="" class="img_users">
  <div class="user-info">
  <p class="card-info">Name: ${newUser.nameh}</p>
  <p class="card-info">Gender: ${newUser.gender}</p>
  <p class="card-info">Mail: ${newUser.mail}</p>
  <p class="card-info">Phone: ${newUser.phone}</p>
  <p class="acc-info">Accaunt Info</p>
  <p class="card-info">Accaunt Name: ${newUser.uname}</p>
  <p class="card-info">Accaunt Passowrd: ${newUser.pass}</p>
  <p class="acc-info">Location</p>
  <p class="card-info">Street: ${newUser.street}</p>
  <p class="card-info">City: ${newUser.City}</p>
  </div>
</div>
`)
}