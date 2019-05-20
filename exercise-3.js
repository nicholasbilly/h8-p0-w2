var nama = 'billy'
var peran = 'Ksatria'

if (nama.length > 0 && peran.length > 0 ) {
    console.log('Selamat datang di dunia Proxytia, ' + nama);
} else if (nama.length > 0 && peran.length === 0) {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
} else {
    console.log('Nama harus diisi!');
}

switch (peran){
    case 'Ksatria':
        console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
        break;
    case 'Tabib':
        console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
        break;
    case 'Penyihir':
        console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
        break;
}