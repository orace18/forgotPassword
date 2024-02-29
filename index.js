let password = prompt('Entrez votre mot de passe');
let cpassword = prompt("Confirmez le mot de passe");

verifyData(password,cpassword);
sendData();

let baseUrl = 'http:192.168.100.12:5000/'
let updateUrl = baseUrl + 'user/reset-password';

function checkLength(str){
    if(str.length <= 6 ){
        return alert(str + 'Trop court');
    }
}

function checkSame(str1,str2){
    if(str1 == str2){
        return alert("C'est cool");
    }else{
        return alert("Les mot de passe ne sont pas les même");
    }
}

function verifyData(password, cpassword){
    checkLength(password);
    checkLength(cpassword);
    checkSame(password, cpassword);
}

function sendData(){
    const data = {
      user_id: '',
      do: 'apply'
    };
    
    fetch(updateUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ''
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Données envoyées avec succès:', data);
    })
    .catch(error => {
      console.error('Erreur lors de l\'envoi des données:', error);
    });
}
