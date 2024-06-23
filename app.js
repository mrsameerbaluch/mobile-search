function change() {
  var company1 = document.getElementById("model1");
  var company2 = document.getElementById("model2");
  var company3 = document.getElementById("model3");
  var companyselector = document.getElementById("companyselector").value;

  if (companyselector === "Apple") {
    company1.innerHTML = mobiles.company.Apple.model.iphone13.name;
    company1.value = "iphone13";
    company2.innerHTML = mobiles.company.Apple.model.iphone14.name;
    company2.value = "iphone14";
    company3.innerHTML = mobiles.company.Apple.model.iphone15.name;
    company3.value = "iphone15";
  } else if (companyselector === "Samsung") {
    company1.innerHTML = mobiles.company.Samsung.model.S22.name;
    company1.value = "S22";
    company2.innerHTML = mobiles.company.Samsung.model.S23.name;
    company2.value = "S23";
    company3.innerHTML = mobiles.company.Samsung.model.S24.name;
    company3.value = "S24";
  } else if (companyselector === "Oppo") {
    company1.innerHTML = mobiles.company.Oppo.model.Reno7.name;
    company1.value = "Reno7";
    company2.innerHTML = mobiles.company.Oppo.model.Reno8.name;
    company2.value = "Reno8";
    company3.innerHTML = mobiles.company.Oppo.model.Reno9.name;
    company3.value = "Reno9";
  }
}

function search() {
  var model = document.getElementById("model").value;

  var name = document.getElementById("name");
  var color = document.getElementById("color");
  var storage = document.getElementById("storage");
  var price = document.getElementById("price");
  var img = document.getElementById("img");

  if (model === "iphone13") {
    updateOutput(mobiles.company.Apple.model.iphone13);
  } else if (model === "iphone14") {
    updateOutput(mobiles.company.Apple.model.iphone14);
  } else if (model === "iphone15") {
    updateOutput(mobiles.company.Apple.model.iphone15);
  } else if (model === "S22") {
    updateOutput(mobiles.company.Samsung.model.S22);
  } else if (model === "S23") {
    updateOutput(mobiles.company.Samsung.model.S23);
  } else if (model === "S24") {
    updateOutput(mobiles.company.Samsung.model.S24);
  } else if (model === "Reno7") {
    updateOutput(mobiles.company.Oppo.model.Reno7);
  } else if (model === "Reno8") {
    updateOutput(mobiles.company.Oppo.model.Reno8);
  } else if (model === "Reno9") {
    updateOutput(mobiles.company.Oppo.model.Reno9);
  }
}

function updateOutput(model) {
  document.getElementById("name").innerHTML = model.name;
  document.getElementById("color").innerHTML = `Color: ${model.color}`;
  document.getElementById("storage").innerHTML = `Storage: ${model.Storage}`;
  document.getElementById("price").innerHTML = `Price: ${model.price}`;
  document.getElementById("img").src = model.img;
}

var mobiles = {
  company: {
    Apple: {
      model: {
        iphone13: {
          name: "Iphone13",
          color: "black",
          Storage: "64gb",
          price: "100000",
          img: "https://w7.pngwing.com/pngs/56/261/png-transparent-iphone-13-thumbnail.png",
        },
        iphone14: {
          name: "Iphone14",
          color: "black",
          Storage: "64gb",
          price: "1100000",
          img: "https://i.pngimg.me/thumb/f/720/c52a8978ec0f46a5b3cf.jpg",
        },
        iphone15: {
          name: "Iphone15",
          color: "black",
          Storage: "64gb",
          price: "1200000",
          img: "https://freebiehive.com/wp-content/uploads/2023/09/Iphone-15-PNG-1.jpg",
        },
      },
    },
    Samsung: {
      model: {
        S22: {
          name: "S22",
          color: "black",
          Storage: "64gb",
          price: "90000",
          img: "https://w7.pngwing.com/pngs/545/324/png-transparent-samsung-s22-ultra.png",
        },
        S23: {
          name: "S23",
          color: "black",
          Storage: "64gb",
          price: "100000",
          img: "https://i.pinimg.com/originals/75/0d/ad/750dad710f76cccd12e6fe0d163b7d65.jpg",
        },
        S24: {
          name: "S24",
          color: "black",
          Storage: "64gb",
          price: "110000",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvCRuEKZOPYHwyLdolK7FqzqF-FApocLIVg&s",
        },
      },
    },
    Oppo: {
      model: {
        Reno7: {
          name: "Reno7",
          color: "black",
          Storage: "64gb",
          price: "80000",
          img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno11-f-5g-en/navigation/reno11-f-440_440-purple.png.thumb.webp",
        },
        Reno8: {
          name: "Reno8",
          color: "black",
          Storage: "64gb",
          price: "90000",
          img: "https://fscl01.fonpit.de/devices/08/2408.png",
        },
        Reno9: {
          name: "Reno9",
          color: "black",
          Storage: "64gb",
          price: "100000",
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD-2a04IIJqd8Hg-rXM4cZLNRNk2XhmeJr8BH6vOL3bk7WrXX14Rh5B88sgvklcFoHoAJkW4BUVc8_F6ZfurVrUeO_IMqxY1tDgcmPhRl6SuShA_aVsSC4kpg01wTK_NR4FyJ0oiA1_uOr_TSRcYJ_efzqZOsePuVKpU0cEFHLYH7Id1NUeGR_ebPIgQ/s800/oppo-reno9-pro-1.png",
        },
      },
    },
  },
};
