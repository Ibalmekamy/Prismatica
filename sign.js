
const apiKey = '1aa734dd-5f27-406d-b240-6736940a67eb';
const basketName = 'Prism';
const apiUrl = `https://getpantry.cloud/apiv1/pantry/${apiKey}/basket/${basketName}`
//https://getpantry.cloud/apiv1/pantry/1aa734dd-5f27-406d-b240-6736940a67eb/basket/Prism

/* Thats how data is stored in a Storage API-
{"kamy146":"234545fer..","ritikap22":"Ritika936Patel.","secret_av09":"samriddhiSacchan@",
"kamy14":"12345678_","pankajchauhan":"8789ksjdk_.","pantychor":"tereliyr gift@"}
*/






let login = document.getElementById("login");
let username = document.getElementById("username");
let pass = document.getElementById("password");
let btn = document.getElementById("submit");
let errorMessage = document.getElementById("error-message");
btn.addEventListener("click",(evt)=>
{
	evt.preventDefault();
	if(pass.value ==="" || username.value ===""){
		 errorMessage.style.display = "block"; // Show error message
            }
    else {
         errorMessage.style.display = "none";
         if(!pass.value.match(/[^a-zA-Z0-9]/)|| pass.value.length<8){
            errorMessage.textContent="*Enter a Valid Password";//originalText to reset
           	errorMessage.style.display = "block";// /[A-Z]/ for checking capital letters
           }
         else if(username.value.match(/[A-Z]/))
         {
         	errorMessage.textContent="*Enter a Valid Username";
           	errorMessage.style.display = "block";
         }
         else
         {
         	errorMessage.style.display = "none"
         	console.log(username.value+" -"+pass.value);
         	let data = username.value+" -"+pass.value;
         	;

async function storeUserCredentials(username, password) {
    try {
        // Fetch existing data
        let response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let existingData = {};
        if (response.ok) {
            existingData = await response.json();
        } else {
            console.error('Failed to retrieve existing data:', response.statusText);
        }

        // Update data
        existingData[username] = password; // Append new data

        // Store updated data
        response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(existingData)
        });

        if (response.ok) {
            errorMessage.textContent="Signed Up Successfully";
            errorMessage.style.display = "block";
            console.log('User credentials stored successfully');
            setTimeout(()=>{
            window.location.href=`lobby.html`;}
            ,4000)
        } else {
            console.error('Failed to store user credentials:', response.statusText);
        }
    } catch (error) {
        console.error('Error storing user credentials:', error);
    }
}


storeUserCredentials(username.value, pass.value);
    

         	btn.disabled=true;
         }
	}
});



login.addEventListener("click",async(evt)=>
{
    setTimeout(()=>{
     window.location.href=`login.html`;
 },2000);})



