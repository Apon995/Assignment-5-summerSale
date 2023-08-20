const getprice = (Elementid) => {
    let price = document.getElementById(Elementid).innerText;
    price = parseFloat(price);
    return price;
};

const AddproductsName = (Name) => {
    let add = document.getElementById("productitemsAdd");
    let li = document.createElement("li");
    li.innerHTML = `${Name}`;
    add.appendChild(li);
};

const Addtotalamount = (amount) => {
    if (amount > 0) {
        document.getElementById("Purchasebtn").removeAttribute("disabled");
    }
    else{
        document.getElementById("Purchasebtn").setAttribute("disabled",true);
    }
   
    if (amount >= 200) {
        document.getElementById("Applycoupn-btn").removeAttribute("disabled");
    }
    else{
        document.getElementById("Applycoupn-btn").setAttribute("disabled",true);
    }
    
    let element = document.getElementById("totalprice");
    amount = parseFloat(amount).toFixed(2);

    element.innerText = amount;
};

const getDiscounttotal = (amount, HowMuchDisc) => {
    let discounttotal = amount - (amount * HowMuchDisc) / 100;
    discounttotal = parseFloat(discounttotal).toFixed(2);
    return discounttotal;
};

const getDiscount = (amount, HowMuchDisc) => {
    let discount = (amount * HowMuchDisc) / 100;
    discount = parseFloat(discount).toFixed(2);

    return discount;
};

const getinputvalue = (Elementid) => {
    let value = document.getElementById(Elementid).value;
    document.getElementById(Elementid).value = "";
    return value;
};

const AddtotalwithDicount = (total) => {
    let element = document.getElementById("withDicountTotal");
    element.innerText = total;
};
const AddDicount = (discountprice) => {
    let element = document.getElementById("AddDiscount");
    element.innerText = discountprice;
};
