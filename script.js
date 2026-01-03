const pickednumber=document.getElementById("pickanumber");
const result=document.getElementById("result");
const container=document.getElementById("container");
const sheetcontainer=document.getElementById("sheetcontainer");
const sound=new Audio("sound.wav");
const winningsound=new Audio("winningsound.wav");
// Array of gifts
const gifts =[
    "paper",
    "pen",
    "pencil",
    "eraser",
    "notebook",
    "sticker",
    "keychain",
    "bookmark",
    "clocks",
    "tote bag",
    "water bottle",
    "phone case",
    "mouse pad",
    "magnets",
    "t-shirt",
    "cap",
    "mug",
    "umbrella",
    "backpack",
    "flashlight",
    "travel pillow",
    "portable charger",
    "sunglasses",
    "headphones",
    "gift card",
    "chocolate",
    "snacks",   
    "candle",
    "plant",
    "photo frame",
    "key holder",
    "coaster",
    "notepad",
    "calendar",
    "travel mug",
    "luggage tag",
    "phone stand",
    "mouse",
    "USB drive",
    "wireless charger",
    "Bluetooth speaker",
    "desk organizer",
    "wall art",
    "puzzle",
    "board game",
    "action figure",
    "stuffed animal",
    "jigsaw puzzle",    
    "playing cards",    
    "sketchbook",
];
// Create boxes for each gift
gifts.forEach(function(value,i){
    const boxelement=`<div class="box" id=${i + 1}>${i+1}. ${value}</div>`;
    sheetcontainer.insertAdjacentHTML("beforeend",boxelement);
});
// Add click event to the button
pickednumber.addEventListener('click',function(){
    // Reset the result text and remove previous results
    gifts.forEach(function(value,i){
        document.getElementById(i+1).classList.remove("resultbox");
    });
    let secondscount=0;
    // Play the sound and start the interval
   const intervalid= setInterval(function(){
            sound.pause();
            sound.currentTime=0;
            sound.play();
            secondscount++;
            // Randomly highlight a box
            let rand= Math.floor(Math.random()*50)+1;
            for(let i=1;i<=50;i++){
                // Remove the border from all boxes except the randomly selected one
                if(i===rand){
                    document.getElementById(i).classList.add("borderbox");
                }
                else{
                    document.getElementById(i).classList.remove("borderbox");
                }
            }
            // After 4 seconds, stop the interval and show the result
            if(secondscount===4){
                let randomnumber=Math.floor(Math.random()*50) + 1;
                const gift=gifts[randomnumber-1];
                result.textContent=`you have got ${randomnumber},and your gift is ${gift}`;
                document.getElementById(rand).classList.remove("borderbox");
                document.getElementById(randomnumber).classList.add("resultbox");
                // Play the winning sound and stop the interval
                sound.pause();
                winningsound.pause();
                winningsound.currentTime=0;
                winningsound.play();
                clearInterval(intervalid);
            }
    },1000);
    result.textContent="Please wait...";
});