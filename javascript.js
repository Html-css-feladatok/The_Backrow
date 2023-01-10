let filterarray = [];

let galleryarray = [
{
    id:1,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)",
    ar: "669.999Ft"
},
{
    id:2,
    name: "ASUS ROG Strix G15DK-R5600X1470 Gamer PC",
    src: "./Asztal/sztali2.1.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)",
    ar: "500.000Ft"
},
{
    id:3,
    name: "ASUS ROG Strix G15DK-R5600X1470 Gamer PC",
    src: "./Asztal/sztali2.1.webp",
    desc: "(Ryzen5/8GB/512 GB SSD/RTX3060 12GB/NoOS)",
    ar: "486.739Ft"
},
{
    id:4,
    name: "ASUS ROG Strix G10DK-R5600X109W Gamer PC",
    src: "./Asztal/asztali3.webp",
    desc: "(Ryzen5/8GB/512 GB SSD/RTX3060 12GB/Win11H)",
    ar: "260.769Ft"
},
{
    id:5,
    name: "HUAWEI MateStation S MS 53011VYA Szürke Asztali PC",
    src: "./Asztal/asztali4.webp",
    desc: "( /Ryzen5/8GB/256 GB SSD/Win10H)",
    ar: "190.780Ft"
},
{
    id:6,
    name: "FUJITSU Esprimo P5011 P511EPC51RIN Asztali PC",
    src: "./Asztal/asztali5.webp",
    desc: "(Core i5/16GB/512 GB SSD/Win10P)",
    ar: "400.000Ft"
},
{
    id:7,
    name: "REDRAGON Inquisitor 2 gamer egér, 800 - 7 200 dpi, 6 programozható gomb",
    src: "./eger/eger2.webp",
    desc: "",
    ar: "24.990Ft"
},
{
    id:8,
    name: "REDRAGON Storm RGB gamer egér, 100 - 12 400 dpi, 7 programozható gomb, fehér",
    src: "./eger/eger1.webp",
    desc: "",
    ar: "4.999Ft"
},
{
    id:9,
    name: "TRUST GXT 117 Strike vezeték nélküli gaming egér",
    src: "./eger/eger3.webp",
    desc: "",
    ar: "5.009Ft"
},
{
    id:10,
    name: "TRUST 22417 GXT 115 Macci Wireless Gaming Mouse",
    src: "./eger/eger4.webp",
    desc: "",
    ar: "10.069Ft"
},
{
    id:11,
    name: "GWINGS GW9200M 7200dpi-s gaming egér, 2 görgős",
    src: "./eger/eger5.webp",
    desc: "",
    ar: "8.580Ft"
},
{
    id:12,
    name: "URAGE Reaper 400 gaming egér",
    src: "./eger/eger6.webp",
    desc: "",
    ar: "17.000Ft"
},
{
    id:13,
    name: "URAGE Soundz 900 DAC Gaming fejhallgató mikrofonnal, fekete",
    src: "./Fejhalgato/fej1.webp",
    desc: "",
    ar: "40.000Ft"
},
{
    id:14,
    name: "MAXELL HyperShock gaming vezeték nélküli fejhallgató mikrofonnal, bluetooth, RGB",
    src: "./Fejhalgato/fej2.webp",
    desc: "",
    ar: "19.799Ft"
},
{
    id:15,
    name: "REDRAGON Pandora 2 gaming fejhallgató mikrofonnal, 3,5mm Jack +USB tápellátás, RGB, fehér",
    src: "./Fejhalgato/fej3.webp",
    desc: "",
    ar: "20.739Ft"
},
{
    id:16,
    name: "SAMSUNG F22T370FWR 22",
    src: "./Monitor/Monitor1.webp",
    desc: "",
    ar: "24.999Ft"
},
{
    id:17,
    name: "MSI OPTIX MAG273",
    src: "./Monitor/monitor5.webp",
    desc: "",
    ar: "80.780Ft"
},
{
    id:18,
    name: "ACER V226HQLBBI",
    src: "./Monitor/monitor2.webp",
    desc: "",
    ar: "33.799Ft"
},
{
    id:19,
    name: "LG 29WP500-B",
    src: "./Monitor/monitor4.webp",
    desc: "",
    ar: "70.769Ft"
},
]

showgallery(galleryarray);

function showgallery(currarray){

    document.getElementById("kartya").innerText = "";

for(var i=0;i<currarray.length;i++){
    document.getElementById("kartya").innerHTML += `
    <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2 mt-2 mb-2 border border-1">
    <div class="card border-0" style="width:200px">
        <img class="card-img-top"  src="${currarray[i].src}"width:"100%">
        <div class="card-body">
        <p class="card-text">${currarray[i].name}</p>
        <p>${currarray[i].desc}</p>
        <p id="arak">${currarray[i].ar}</p>
        </div>
    </div>
    </div>
    
    `
}

}



document.getElementById("kereso").addEventListener("keyup", function(){
    let text = document.getElementById("kereso").value;

    filterarray = galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
        }
    });
    if(this.value ==""){
        showgallery(galleryarray);
    }
    else{
        if(filterarray == ""){
            document.getElementById("nem").style.display = 'block';
            document.getElementById("kartya").innerHTML = "";
        }
        else{
            showgallery(filterarray);
            document.getElementById("nem").style.display = 'none';
        }
    }
})