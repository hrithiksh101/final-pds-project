const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const email = document.getElementById('userName') ;
const password = document.getElementById('password') ;
const loginButton = document.getElementById('loginButton') ;
const userNameSignIn = document.getElementById('userNameSignIn') ;
const emailSignUp  = document.getElementById('emailSignUp') ;
const passwordSignUp = document.getElementById('passwordSignUp') ;
const signUpButton = document.getElementById('signUpButton') ;



sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

loginButton.addEventListener( 'click' , (e) =>{
     
  e.preventDefault() ;

  console.log(" an attempt is made to login ") ;

  let loginEmail = email.value ;
  let loginPassword = password.value ;

  // after getting the values

  console.log(loginEmail , loginPassword) ;

  firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).then( data => {

    console.log('congratulations user was successfully able to login to the application' , data ) ;
    // changeLocation() ;

    window.location.href = './index2.html';


} ).catch(function(error) {
    // Handle Errors here.

    console.log("sorry the user was unable to log in to the application") ;
    alert('Wrong credentials entered')  ; 
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });


} )

signUpButton.addEventListener( 'click' , ( e ) => {
  e.preventDefault() ;

  // after adding the default functionality
  

  console.log('Inside the signupButton ') ;

  let loginEmail = emailSignUp.value ;
  let loginPassword = passwordSignUp.value ;
  

  console.log(loginEmail , loginPassword) ;

   

  firebase.auth().createUserWithEmailAndPassword(loginEmail, loginPassword).then(data => { 

      console.log('user created' , data ) 
      // changeLocation() ;

      window.location.href = './index2.html';

  } ).catch(function(error) {

          console.log('unable to create the user') ;

          alert('Wrong credentials entered')  ; 

      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });  

} )

