const content=document.querySelector('.container');
    content.style.height="100vh";
    content.style.width="100vw";
    content.style.display="inline-flex";
    content.style.flexDirection="row";
    content.style.flexWrap="wrap";
    content.style.justifyContent="space-evenly";
    let color="white";
    console.log(color);
    let btn=content.appendChild(document.createElement('input'));
    btn.type="submit";
    btn.value="Reset";
    btn.style.fontSize="40px;"
    btn.style.width="10vw";
    btn.style.position="absolute";
    //use loop to create 256 div's:
    let pixel=Number(prompt("Choose a pixel count between 5,000 and 10,000."));
    
    console.log(pixel);
    if(pixel='NaN')
    {pixel=5000;}
    else if(pixel>10000)
    {pixel=10000;}
    else if(pixel<5000)
    {pixel=5000;}
    let cell=[pixel];
        for(i=0;i<(pixel);i++){
            cell[i]=content.appendChild(document.createElement('div'));
            //cell[i].innerHTML=i;
            cell[i].style.textAlign="center";
            cell[i].style.height="2vw";
            cell[i].style.width="2vw";
            cell[i].style.background="rgb(0,0,0)";
            cell[i].style.color="white";
            if(i==pixel-1){
                color=prompt("What color would you like to sketch with?")
            }
            cell[i].addEventListener('mouseover', function(e){
                e.target.style.backgroundColor=color;
            });
            cell[i].addEventListener('click',function(e){
                color=prompt("What color would you like to use next?")
                });
        }
    btn.addEventListener('click',function(e){
        for(i=0;i<cell.length;i++){
            cell[i].style.backgroundColor="rgb(0,0,0)";
        };
    });