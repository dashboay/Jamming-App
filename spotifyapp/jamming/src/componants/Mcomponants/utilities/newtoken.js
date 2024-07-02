
const token = async function(){
const url = 'https://accounts.spotify.com/api/token';
const clientId = '';//enter your spotify client id
const clientSecret = ''; //enter your spotify client secret

const data = {
  grant_type: 'client_credentials',
  client_id: clientId,
  client_secret: clientSecret
};

const params = new URLSearchParams(data);

let task1 = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: params
})
let task2 = await task1.json();
return task2.access_token;
}

export default token ;