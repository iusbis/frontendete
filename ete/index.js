
function display() {

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (this.status === 200) {
            try {
                const resObj = JSON.parse(this.responseText);
                console.log(resObj);
                const myNode = document.getElementById("div1");
                myNode.innerHTML = '';
                for (var i = 0; i < resObj.length; i++) {
                    var divC = document.createElement("div");
                    var para = document.createElement("p");
                    var node = document.createTextNode("Confirmed:" + resObj[i].Confirmed);
                    para.appendChild(node);
                    divC.appendChild(para);

                    var para = document.createElement("p");
                    var node = document.createTextNode("Active:" + resObj[i].Active);
                    para.appendChild(node);
                    divC.appendChild(para);

                    var para = document.createElement("p");
                    var node = document.createTextNode("Deaths:" + resObj[i].Deaths);
                    para.appendChild(node);
                    divC.appendChild(para);

                    var element = document.getElementById("div1");
                    element.appendChild(divC);

                }

            } catch (e) {
                console.log('error')
            }
        } else {
            console.warn('did not recive 200 ok from response!')
        }
    }


    var a = "https://api.covid19api.com/country/";
    var b = document.getElementById("country").value;
    var p = document.getElementById("sdate").value;
    var q = document.getElementById("edate").value;
    var l = "T00:00:00Z"
    var c = a + b + "?&from=" + p + l + "&to=" + q + l;
    if (b == "" || p == "" || q == "") {
        alert("No field can be left empty");
        return false;
    }
    const url = new URL(c);
    xhr.open('get', url);
    xhr.send();
}