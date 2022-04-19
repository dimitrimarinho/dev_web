window.addEventListener("load", start, false);

function start()
    {
        var button = document.getElementById("submit");
        button.addEventListener("click", printVolume, false);
    }
function printVolume()
    {
        var inputField = document.getElementById("inputField");
        var radius = parseFloat(inputField.value);
        var result = document.getElementById("resultado")
        result.innerHTML = "O volume da esfera é " + sphereVolume(radius);
    }
function sphereVolume(radius)
    {
        volume = ( 4.0 / 3.0 ) * Math.PI * Math.pow(radius, 3);
        return volume;
    }

