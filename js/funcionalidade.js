

$('#summernote').summernote({
    
    placeholder: 'Digite seu texto aqui...',
    lang: 'pt-BR', // default: 'en-US' 
    toolbar: [
        ['basic', ['style', 'fontname', 'fontsize']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['color', ['forecolor', 'backcolor']],
        ['block', ['ul', 'ol', 'paragraph']],
        ['media', ['link', 'picture', 'video', 'table', 'hr']],
        ['heigth', ['heigth', 'codeview', 'fullscreen', 'undo', 'redo']]
    ]
});

$('#btn-limpar').click(function(){
    if($('#summernote').summernote('isEmpty')){
        alert('[ATENÇÃO!] O editor está vazio!');
}else {
    $('#summernote').summernote('reset');
}
});

$('#btn-salvar').click(function(){
    var editor = document.querySelector('#summernote').value; 
    var texto = editor.replace(/<[^>]+>/g, '');
    var file = new Blob([texto],{
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;'
    })
    anchor = document.createElement('a');

    anchor.download = "hello.doc";
    anchor.href = (window.webkitURL || window.URL).createObjectURL(file);
    anchor.dataset.downloadurl = ['application/vnd.openxmlformats-officedocument.wordprocessingml.document;', anchor.download, anchor.href].join(':');
    anchor.click();
});

 



