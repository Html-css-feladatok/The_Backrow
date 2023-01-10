let filterarray = [];

let galleryarray = [
{
    id:1,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:2,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:3,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:4,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:5,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:6,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:7,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:8,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:9,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:10,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:11,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:12,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:13,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:14,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:15,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:16,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:17,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:18,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
},
{
    id:19,
    name: "X-X Gamer A3255 Gamer PC",
    src: "./asztal/asztali1.0.webp",
    desc: "( /Ryzen7/16GB/960 GB SSD + 3 TB HDD/RTX3060 12GB/NoOS)"
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
        <p id="arak">669.999Ft</p>
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