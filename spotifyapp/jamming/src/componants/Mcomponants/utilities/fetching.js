
const fetching = async function(token,search){
    let task1 = await fetch("https://api.spotify.com/v1/search?q="+search+"&type=album", {
        method: 'GET',
        headers: {
            'authorization': "Bearer "+token,
        } 
    })
    let task2 = await task1.json();
    return task2;
    
}

export default fetching ;