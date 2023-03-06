const campoEmail = document.getElementById("email");
const campoCep = document.getElementById("cep");
const campoUF = document.getElementById("uf");
const campoLocalidade = document.getElementById("localidade");
const campoTelefone = document.getElementById("telefone");
const addBtn = document.getElementById("btn-add");
const conteudoTab = document.getElementById("conteudo-tabela");

addBtn.addEventListener("click",() => {
    //coletar dos imputs o que foi digitado
    let usuario = {
        email: campoEmail.value,
        cep: campoCep.value,
        uf:campoUF.value,
        localidade: campoLocalidade.value
        telefone: campoTelefone.value,
    };
    //conectar com a tabela
    conteudoTab.innerHTML +=`
    <tr>
        <td>${usuario.email}</td>
        <td>${usuario.cep}</td>
        <td>${usuario.uf}</td>
        <td>${usuario.localidade}</td>
        <td>${usuario.telefone}</td>
    </tr>`;
})
