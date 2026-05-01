function setCar(car) {

```
let data = {
    zilla: {
        name: "ZILLA R35",
        speed: 90,
        power: 80,
        nitro: 95,
        img: "https://images.unsplash.com/photo-1502877338535-766e1452684a"
    },
    phoenix: {
        name: "PHOENIX X1",
        speed: 98,
        power: 95,
        nitro: 97,
        img: "https://images.unsplash.com/photo-1493238792000-8113da705763"
    },
    mustang: {
        name: "MUSTANG RTR",
        speed: 85,
        power: 88,
        nitro: 92,
        img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
    }
};

let selected = data[car];

document.getElementById("carName").innerText = selected.name;
document.getElementById("speed").style.width = selected.speed + "%";
document.getElementById("power").style.width = selected.power + "%";
document.getElementById("nitro").style.width = selected.nitro + "%";
document.getElementById("carImg").src = selected.img;
```

}
