const korisnici = [
    {id: 1, ime: 'Ana', prezime: 'Kartek', godina: 25, admin: false},
    {id: 2, ime: 'Marko', prezime: 'Belanić', godina: 31, admin: true},
    {id: 3, ime: 'Tina', prezime: 'Ravlić', godina: 22, admin: true},
    {id: 4, ime: 'Leon', prezime: 'Grgec', godina: 28, admin: true},
    {id: 5, ime: 'Petra', prezime: 'Novosel', godina: 26, admin: false},

];

for (let i = 0; i < korisnici.length; i++) {
    console.log(korisnici[i].ime);
}


console.log('*******************');

korisnici.forEach(korisnik => console.log(korisnik.ime));


console.log('*******************');

korisnici.forEach(o=>console.log('${o.ime} ${o.prezime}'))

korisnici.forEach(o => {
    let poruka = 'Poštovan';
    if (!o.ime.endsWith('a')) {
        poruka += ' i gospodine';
    } else {
        poruka += ' a gospodo';
    }

    console.log(`${poruka} ${o.ime} ${o.prezime}`);

});

const samoImena = korisnici.map(o => o.ime);
console.log(samoImena);

console.log('*******************');


const maliNiz = korisnici.map(({ id, ime, prezime }) => ({
    sifra: id,
    imeOsobe: ime + ' ' + prezime
}));

console.log(maliNiz);

console.log('*******************');

const pronaden = korisnici.find(o => o.id === 3)
console.log(pronaden);

console.log(korisnici.find(o => o.id === 3)?.ime);

console.log('*******************');


console.log(korisnici.findIndex(o => o.ime == 'Leon'));

console.log('*******************');

console.log(korisnici.filter(o => o.godina > 20));

console.log('*******************');

console.log(korisnici.reduce((suma, o) => suma + o.godina, 0));


console.log('*******************');


const imaAdmin = korisnici.some(o => o.admin);
console.log(imaAdmin ? 'Ima admin' : 'Nema admin');

console.log('*******************');

const sviPunoljetni = korisnici.every(o => o.godina >= 18);
console.log(sviPunoljetni ? 'Svi su punoljetni' : 'Nisu svi punoljetni');


