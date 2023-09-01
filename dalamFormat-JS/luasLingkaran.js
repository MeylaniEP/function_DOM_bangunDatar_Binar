function luasLingkaran(r) {
    const phi = 3.14;
    rumusLingkaran = phi * (r * r);
    return rumusLingkaran;
}

    let r = 14;
    let luas_lingkaran = luasLingkaran(r);
    console.log("Luas: " + luas_lingkaran);