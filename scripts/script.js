// ----Kitchenware-handelers-coulmns-

const KIcardOne = () => {
  let price = getprice("KICardoneprice");
  let presenttotal = getprice("totalprice");
  let total = presenttotal + price;
  Addtotalamount(total);

  AddproductsName("K. Accessories");
};

const KIcardtwo = () => {
  let price = getprice("KICardtwoprice");
  let presenttotal = getprice("totalprice");
  let total = presenttotal + price;
  Addtotalamount(total);
  AddproductsName("K. Accessories");
};

const KIcardthree = () => {
  let price = getprice("KICardthreeprice");
  let presenttotal = getprice("totalprice");
  let total = presenttotal + price;
  Addtotalamount(total);

  AddproductsName("Home cooker");
};

// ----Sportswear-handelers-coulmns-

const SWcardone = () => {
  let price = getprice("SWCardoneprice");
  let presenttotal = getprice("totalprice");
  let total = presenttotal + price;
  Addtotalamount(total);

  AddproductsName("Sports Back Cap");
};

const SWcardtwo = () => {
  let price = getprice("SWCardtwoprice");
  let presenttotal = getprice("totalprice");
  let total = presenttotal + price;
  Addtotalamount(total);

  AddproductsName("Full Jersey Set");
};

const SWcardthree = () => {
  let price = getprice("SWCardthreeprice");
  let presenttotal = getprice("totalprice");
  let total = presenttotal + price;
  Addtotalamount(total);

  AddproductsName("Sports cates");
};

// -Furniture-handelers-coulmns-

const FRcardone = () => {
  let price = getprice("FRCardoneprice");
  let presenttotal = getprice("totalprice");
  let total = presenttotal + price;
  Addtotalamount(total);

  AddproductsName("Single Relax Chair");
};
const FRcardtwo = () => {
  let price = getprice("FRCardtwoprice");
  let presenttotal = getprice("totalprice");
  let total = presenttotal + price;
  Addtotalamount(total);

  AddproductsName("Children play");
};
const FRcardthree = () => {
  let price = getprice("FRCardtwoprice");
  let presenttotal = getprice("totalprice");
  let total = presenttotal + price;
  Addtotalamount(total);

  AddproductsName("Flexible Sofa");
};

const applyCoupn = () => {
  let total = getprice("totalprice");
  let couponcode = getinputvalue("cuponcodeinputField");

  if (couponcode == "SELL200") {
    let discounttotal = getDiscounttotal(total, 20);
    let discount = getDiscount(total, 20);
    AddDicount(discount);
    AddtotalwithDicount(discounttotal);
  } else {
    return;
  }
};

const GoHome = () => {
  history.back();

  document.getElementById("productitemsAdd").innerHTML = "";
  AddproductsName("sample name");
  Addtotalamount(0);
  AddDicount(0);
  AddtotalwithDicount(0);
  getinputvalue('cuponcodeinputField').value = '';
};
