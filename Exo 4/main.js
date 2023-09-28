let a = 3 

while (a < 9){
    console.log(a)
a++
    if (a === 8) {
        break
    }

    if (a===7) {
        continue;
    }
    console.log('j\'ai cassé la boucle au bout de ' + a + ' tours')
}
