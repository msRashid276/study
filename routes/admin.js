var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name: "IPHONE 14",
      category: "mobile",
      description: "Ceramic Shield frontGlass back and aluminium design",
      price: 150000,
      image: "https://cdn1.smartprix.com/rx-ibsJ2hNrF-w1200-h1200/bsJ2hNrF.jpg"
    },
    {
      name: "SAMSUNG GALAXY s22 ULTRA",
      category: "mobile",
      description: "The phone sports a 6.8-inch AMOLED display with 120Hz refresh rate and support for HDR 10+.",
      price: 125000,
      image: "https://media.wired.com/photos/6202b99c2c286ef2d70b5b0a/16:9/w_2177,h_1225,c_limit/Gear-Samsung-Galaxy-S22-Ultra.jpg"
    },
    {
      name: "ONE PLUS 10 PRO",
      category: "mobile",
      description: "Nature tone display, Eye comfort, Image sharpener,Video color enhancer, Screen color mode, Color personalization, Color vision enhancement",
      price: 65000,
      image: "https://www.reliancedigital.in/medias/OnePlus-10-Pro-Smartphone-492849810-i-2-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MjQ5MnxpbWFnZS9qcGVnfGltYWdlcy9oMzAvaDc0Lzk4ODIwOTkwMjM5MDIuanBnfDkxNjZiN2QzZDc2YTA2YmNjYjU3ZmZmMDAyYmU5MjFmNDRiN2Y0MDQ5Yzk5OTYyODNmM2QwOGI4YmU5ZjgxYmU"
    },
    {
      name: "VIVO X70 PRO",
      category: "mobile",
      description: "Photography. Redifined. ",
      price: 25000,
      image: "https://www.notebookcheck.net/uploads/tx_nbc2/vivoX70Pro.jpg"
    },
  ]
  res.render('admin/view-products',{admin:true,products});
});

router.get('/add-product',(req,res)=>{
    res.render('admin/add-product')
})

router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);
})

module.exports = router;
