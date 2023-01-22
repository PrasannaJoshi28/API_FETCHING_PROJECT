

fetch("https://dummyjson.com/products/1")
.then(resp => resp.json())
.then(results => {
    document.getElementById("productName").innerHTML = results.title;
    document.getElementById("productDescription").innerHTML = results.description;

    let originalPrice = results.price;
    let discper = results.discountPercentage;
    let multiply = originalPrice * discper;    
    let OriginalDisCountPrice = results.price - Math.round(multiply/100);
    document.getElementById("productPrice").innerHTML = OriginalDisCountPrice;
    
    document.getElementById("realPrice").innerHTML = results.price;

    document.getElementById("productCategory").innerHTML = results.category;

    var imgURL =  results.thumbnail;
    var img = document.createElement('img');
    img.src = imgURL;
    document.getElementById("Box1").appendChild(img);

    
    
    var imgURL2 =  results.images[0];
    var img2 = document.createElement('img');
    img2.src = imgURL2;
    document.getElementById("Box2").appendChild(img2);


    let imgURL3 = results.images[3];
    let img3 = document.createElement("img");
    img3.src = imgURL3;
    document.getElementById("Box3").appendChild(img3);


    let imageURL4 = results.images[2];
    let img4 = document.createElement('img');
    img4.src = imageURL4;
    document.getElementById("Box4").appendChild(img4);
}).catch(()=> console.log("error"));