// const container = document.querySelector(".container"),
//     pwShowHide = document.querySelectorAll(".showHidePw"),
//     pwFields = document.querySelectorAll(".password"),
//     signUp = document.querySelector(".signup-link"),
//     login = document.querySelector(".login-link");
// submit = document.querySelector("#l1");

// function validate() {
//     var username = document.getElementById("#name");
//     var password = document.getElementById("#pwd");
//     if (username == null || password == "") {
//         alert("Name can't be blank");
//         return false;
//     } else if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         return false;
//     }
// }

//       function validate() {
//       var username = document.getElementById("#name");
//       var password = document.getElementById("#pwd");
//       if(username === "" || password===""){
//           document.getElementById("l1").disabled=true;
//       }    
//       if(username.value.trim() == " " || password.value.trim() == " ") {
//               alert("No blank values allowed");
//               return false;
//           }
//           else{
//                true;
//           }
//     }
//     .addEventListener",()=>{
//         validate();
// })

// //   js code to show/hide password and change icon
// pwShowHide.forEach(eyeIcon => {
//     eyeIcon.addEventListener("click", () => {
//         pwFields.forEach(pwField => {
//             if (pwField.type === "password") {
//                 pwField.type = "text";

//                 pwShowHide.forEach(icon => {
//                     icon.classList.replace("uil-eye-slash", "uil-eye");
//                 })
//             } else {
//                 pwField.type = "password";

//                 pwShowHide.forEach(icon => {
//                     icon.classList.replace("uil-eye", "uil-eye-slash");
//                 })
//             }
//         })
//     })
// })

// // js code to appear signup and login form
// signUp.addEventListener("click", () => {
//     container.classList.add("active");
// });
// login.addEventListener("click", () => {
//     container.classList.remove("active");
// });

// submit.addEventListener("click", () => {
//     console.log("main login button clicked");
// });

const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
