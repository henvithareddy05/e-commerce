fetch("https://fakestoreapi.com/products")
.then(response =>response.json())
.then(data =>{
    data.forEach(item => {
        let card=document.createElement('div')
        card.setAttribute("class","card")
        card.setAttribute("align","left")
        let itemtitle=document.createElement('div')
        itemtitle.setAttribute("class","itemtitle")
        itemtitle.innerText=item.title
        let itemimage=document.createElement('img')
        itemimage.setAttribute("src",item.image)
        itemimage.setAttribute("alt","")
        itemimage.setAttribute("width","250px")
        itemimage.setAttribute("height","150px")
        let itemprice=document.createElement('div')
        itemprice.innerText="price:"+item.price
        itemprice.setAttribute("align","center")
        let itembtn=document.createElement('button')
        itembtn.setAttribute("type","button")
        itembtn.setAttribute("class","itembtn")
        itembtn.innerText="Add To Cart"
        itembtn.innerHTML = "&#x1F6D2; Add To Cart"
        let buy=document.createElement('button')
        buy.setAttribute("type","button")
        buy.setAttribute("class","buy")
        buy.innerText="Buy Now"
        buy.innerHTML = "&#11166; Buy Now"
        card.append(itemtitle,itemimage,itemprice,itembtn,buy)
        document.querySelector('.Products').appendChild(card);
    })
}).catch(err => {
    console.log("Error in fetch data")
})