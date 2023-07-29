module.exports = {
  home: (req, res) => {

    const arrColores = ['red','blue','green','yellow','black','lightblue','pink','#f3f3a1']
    const arrTamaños = ['10rem','40rem','20rem','30rem']
    const indexRandomColors = Math.round(Math.random() * arrColores.length)
    const indexRandomTamaños = Math.round(Math.random() * arrTamaños.length)
    res.render('home',{
      tituloVista: 'PAGINA PRINCIPAL',
      colorFondo: arrColores[indexRandomColors],
      tamañoTarjeta: arrTamaños[indexRandomTamaños]
    })
  }
}