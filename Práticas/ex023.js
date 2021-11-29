let amigo = {nom:'josé',
peso: 71.5,
sexo: 'M',
engordar(p=0){
    this.peso += p
}}
amigo.engordar(2)
console.log(amigo.peso)