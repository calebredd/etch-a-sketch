const content=document.querySelector('.container');
    content.style.height="100vh";
    content.style.width="100vw";
    content.style.display="inline-flex";
    content.style.flexDirection="row";
    content.style.flexWrap="wrap";
    content.style.justifyContent="space-evenly";
    let color="white";
    console.log(color);
    //use loop to create 256 div's:
    let cell=[256];
        for(i=0;i<(100*100);i++){
            cell[i]=content.appendChild(document.createElement('div'));
            //cell[i].innerHTML=i;
            cell[i].style.textAlign="center";
            cell[i].style.height="1vh";
            cell[i].style.width="1vw";
            cell[i].style.background="rgb(0,0,0)";
            cell[i].style.color="white";
            if(i==255){
                color=prompt("What color would you like to sketch with?")
            }
            cell[i].addEventListener('mouseover', function(e){
                e.target.style.backgroundColor=color;
            });
            cell[i].addEventListener('click',function(e){
                color=prompt("What color would you like to use next?")
                });
        }    
