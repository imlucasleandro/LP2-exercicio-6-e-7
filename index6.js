function verifica(objeto, classe) {
    if (objeto instanceof classe) {
      console.log("O objeto é uma instância da classe.")
    } else {
      console.log("O objeto não é uma instância da classe.")
    }
  }

  class fulano {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  const pessoa1 = new fulano("Lucas")
  const objetoQualquer = {}
  
  verifica(pessoa1, fulano)
  verifica(objetoQualquer, fulano)
  