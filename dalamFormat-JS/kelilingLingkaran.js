//membuat function keliling lingkaran
function luasLingkaran(r) {
    const phi = 3.14;
    rumusLingkaran = phi * (2 * r);
    return rumusLingkaran;
}

    let r = 50;
    let luas_lingkaran = luasLingkaran(r);
    
    //output keluar di console
    console.log("Luas: " + luas_lingkaran);