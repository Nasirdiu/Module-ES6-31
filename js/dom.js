document.getElementById('ex').addEventListener('click',function(){

    document.body.style.backgroundColor='gray'
})
document.getElementById('add-border').addEventListener('click',function(){
    document.getElementById('parent').style.border='3px solid red'
})
//background color
function background(){
    const friends=document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor='lightblue';
    }
}
//add friend
document.getElementById('add-friend').addEventListener('click',function(){

    const parent=document.getElementById('parent');
    const friendDiv=document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML=`
    <h4 class="friend-name">Friend-New</h4>
            <p>Lorem, ipsum.</p>
    `
   parent.appendChild(friendDiv);
})