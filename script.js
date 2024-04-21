const form = document.getElementById('form-agenda');
const imgDelete = './images/delete.png';
const nomes = [];
const phone = [];

let linhas = ''; 

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  adicionarLinha();
  atualizarTabela();
});

function adicionarLinha(){
  const inputNomesContato = document.getElementById('nomes-contato'); 
  const inputPhoneContato = document.getElementById('phone-contato'); 
  
  if (nomes.includes(inputNomesContato.value)){
    alert (`O contato: ${inputNomesContato.value} já foi inserido`);
  } else if (phone.includes(parseFloat(inputPhoneContato.value))){
    alert (`O número de telefone: ${inputPhoneContato.value} já foi inserido`);
  } else {
    nomes.push(inputNomesContato.value);
    phone.push(parseFloat(inputPhoneContato.value));
  
    let linha = '<tr>';
    linha += `<td>${inputNomesContato.value}</td>`;
    linha += `<td>${inputPhoneContato.value}</td>`;
    linha += `<td><img src="${imgDelete}" alt="Deletar" onclick="deletarContato(this)"></td>`;
    linha += '</tr>';
  
    linhas += linha; 
  }
  inputNomesContato.value = '';
  inputPhoneContato.value = '';
}

function atualizarTabela(){
   const corpoTabela = document.querySelector('tbody');
   corpoTabela.innerHTML = linhas;
}

function deletarContato(element, imgDelete){
  element.parentNode.parentNode.remove();
}

