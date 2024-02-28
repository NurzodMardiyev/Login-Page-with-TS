type obj = {
  username: string,
  password: string
}

type callbackType =   (e:number)=> void;
const form = document.getElementById('form') as HTMLFormElement;
const userDemo:obj = {username: "Nurzod", password: "nurzod7777"}

// Set username and password to DB
localStorage.setItem('user', JSON.stringify(userDemo))

// Get username and password from DB
const userDB: obj  = JSON.parse(localStorage.getItem('user') || "{}");

// Global username and password Input
const username = document.getElementById('userName') as HTMLInputElement;
const password = document.getElementById('passwordInput') as HTMLInputElement;

// event's from
form?.addEventListener('submit', async (e)=> {
  e.preventDefault();

  let userObj:obj = {
    username : username.value,
    password: password.value
  }

  // try {
  //   const res = await fetch("https://todo-for-n92.cyclic.app/user/login", {
  //     method: "POST",
  //     // mode: "no-cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: username.value,
  //       password: password.value,
  //     }),
  //   });
  //   if (!res.ok) {
      
  //     throw new Error("Error something Api");
  //   }
  //   const data = await res.json();
  //   console.log(data);
  //   localStorage.setItem("token", data.token);
  // } catch (error) {
  //   console.error("Error", error);
  // }

  if(userDB.username === userObj.username && userDB.password === userObj.password) {
    username.classList.add('is-valid');
      setTimeout(()=> {
        location.href = 'https://kun.uz/en'
    },200)
    } else {
        username.classList.add('is-invalid');
    }

})

// Show or Hide password
const passwordInput = document.getElementById("passwordInput") as HTMLInputElement;
const icon = document.querySelector<HTMLSpanElement>(".showPasswordIcon");

icon?.addEventListener('click', function togglePassword() {
  if (!icon) return ;
  passwordInput.type === "password"?(passwordInput.type = "text", (icon.textContent = "🚫")): (passwordInput.type ="password", (icon.textContent = "👁️"));

})

password.addEventListener('input',()=> {
  if(!password.value) {
    icon?.classList.add('d-none');
  }else {
    icon?.classList.remove('d-none');
  }
    // icon?.classList.add(`${password.value?'d-inline-block':'d-none'}`)
})
console.log(typeof password.value)
