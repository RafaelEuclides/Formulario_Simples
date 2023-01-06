function mask_rg(){
    var n_char = document.getElementById("txtRg").value.length;
    if(n_char == 7){
        document.getElementById("txtRg").value = document.getElementById("txtRg").value + "-";
    }
}

function mask_cpf(){
    var n_char = document.getElementById("txtCpf").value.length;
    if(n_char == 3){
        document.getElementById("txtCpf").value = document.getElementById("txtCpf").value + ".";
    }

    else if(n_char == 7){
        document.getElementById("txtCpf").value = document.getElementById("txtCpf").value + ".";
    }

    else if(n_char == 11){
        document.getElementById("txtCpf").value = document.getElementById("txtCpf").value + "-";
    }
}