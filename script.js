const userName = document.querySelector('#name');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const btn = document.querySelector('#btn')
 
btn.onclick = () => {
    randomUserGenerator();
}
const randomUserGenerator = () => {
    fetch('https://randomuser.me/api')
    .then( (response) => {
       return response.json();
    })
    .then( (data) => {
        console.log(data);
        showRandomUser(data);
    });
}

function showRandomUser(randomUser){
    // random user name
     const randomUserData = randomUser.results[0]
     const randomUserName = `${randomUserData.name.title} ${randomUserData.name.first} ${randomUserData.name.last}`
     userName.innerHTML = randomUserName;
    // random user age
    const randomUserAge = `${randomUserData.dob.age}`
    age.innerHTML = randomUserAge;
    // random user email
    const randomUserEmail = `${randomUserData.email}`
    email.innerHTML = randomUserEmail;
    // random user phone
    const randomUserPhone = `${randomUserData.phone}`
    phone.innerHTML = randomUserPhone
}