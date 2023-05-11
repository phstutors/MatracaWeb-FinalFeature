function  funcao_pdf(){
    var pegar_dados =  document.getElementById('summernote').value;

    var janela = window.open('', '', 'width=800, height=600');
    janela.document.write('<html><head>');
    janela.document.write('<title>PDF MatracaWeb</title></head>');
    janela.document.write('<body>');
    janela.document.write(pegar_dados);
    janela.document.write('</body> </html>');
    janela.document.close();
    janela.print();
}
function darkMode(){

    document.getElementById('mudar').style.background= "black";
    document.getElementById('mudar').style.color= "white";
    document.getElementById('mudar2').style.background= "black";
    document.getElementById('mudar2').style.color= "white";

}
function lightMode(){

    document.getElementById('mudar').style.background= "#dee0df";
    document.getElementById('mudar').style.color= "black";
    document.getElementById('mudar2').style.background= "#dee0df";
    document.getElementById('mudar2').style.color= "black";

}

  
