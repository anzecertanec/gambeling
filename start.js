function openResultPage() {
    var denar = parseFloat(document.getElementById("money").value);
    var zacetna_stava = parseFloat(document.getElementById("input3").value);
    var Zasluzek = parseFloat(document.getElementById("input2").value);
    var limit = parseFloat(document.getElementById("input4").value);

    if (denar > 0 && zacetna_stava > 0 && limit) {
        var trueResult;

        if (denar > limit) {
            trueResult = Math.pow(1 - Math.pow(0.52, Math.floor(Math.log2(limit / zacetna_stava+1))), Math.ceil(Zasluzek / zacetna_stava));
        } else {
            trueResult = Math.pow(1 - Math.pow(0.52, Math.floor(Math.log2(denar / zacetna_stava+1))), Math.ceil(Zasluzek / zacetna_stava));
        }

        // Calculate the success probability as a percentage
        var probability = (trueResult * 100).toFixed(10);
        var urlParams = "?probability=" + probability +
                        "&denar=" + denar +
                        "&zacetna_stava=" + zacetna_stava +
                        "&zasluzek=" + Zasluzek +
                        "&limit=" + limit;

        // Redirect based on the probability value
        if (probability > 50) {
            window.location.href = "uspeh.html?probability=" + probability; // Pass probability as a URL parameter
        } else {
            window.location.href = "poraz.html?probability=" + urlParams; // Pass probability as a URL parameter
        }
    } else {
        alert("Please enter valid numbers!"); // Alert if input is invalid
    }
}
