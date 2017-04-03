define(["credits","products"], function(creditsFunction,productsFunction) {

  console.log("Function : purchaseProduct");

  return {
    purchaseProduct: function() {

      var credit = creditsFunction.getCredits();
      if(credit > 0){
        productsFunction.reserveProduct();
        return true;
      }
      return false;
    }
  }
});
