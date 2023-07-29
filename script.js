  function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
      setTimeout(() =>{
        elemento.innerHTML += letra;
      }, 100 * i)
    })
  }


const titulo = document.querySelector('.digitando');


ativaLetra(titulo);

function ativacaoMenu(){
  const ativaMenu = document.querySelector('.fa-bars');
  const navMenu = document.querySelector('header .navegacao-primaria')


  ativaMenu.addEventListener('click', ()=>{
      ativaMenu.classList.toggle('fa-x')
      navMenu.classList.toggle('ativado')
  })
}

ativacaoMenu()

// Seletor dos botões
const buttonGeral = document.querySelectorAll('.project_navegacao li');

// Lista de projetos
const listaALL = document.querySelectorAll('.projects_armazenamento ul li');

// Função para filtrar e exibir os projetos
function showLista(buttom = "all") {
  listaALL.forEach((item) => {
    item.classList.remove('ativo');
  });

  if (buttom == 'design') {
    listaALL.forEach((item, index) => {
      if (index < 4) {
        item.classList.add('ativo');
      }
    });
  }

  if (buttom == 'web') {
    listaALL.forEach((item, index) => {
      if (index >= 4) {
        item.classList.add('ativo');
      }
    });
  }

  if (buttom == 'all') {
    listaALL.forEach((item) => {
      item.classList.add('ativo');
    });
  }
}

// Event listener para os botões
buttonGeral.forEach((item) => {
  item.addEventListener('click', (e) => {
    const currentButton = e.target;

    if (currentButton.classList.contains('all')) {
      showLista();
    } else if (currentButton.classList.contains('design')) {
      showLista('design');
    } else if (currentButton.classList.contains('web')) {
      showLista('web');
    }
  });
});

// Mostrar todos os projetos inicialmente
showLista();


/*
const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.project_navegacao li');
const buttonALL = document.querySelector('.project_models .all');

function removeClick(index) {
  buttonGeral.forEach((item)=>{
    item.classList.remove('ativo');
  });
  buttonGeral[index].classList.add('ativo');
} 

buttonGeral.forEach((event, index)=>{
  event.addEventListener('click', ()=>{
    removeClick(index);
  })
})


function showLista(lista, button ="all"){
  lista.forEach((item)=>{
    item.classList.remove('ativo');
  })
  if (button == "design") {
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
    lista[2].classList.add('ativo');
    lista[3].classList.add('ativo');

  }
  if (button == "web") {
    lista[4].classList.add('ativo');
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
  }

  if (button == "all") {
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
    lista[2].classList.add('ativo');
    lista[3].classList.add('ativo');
    lista[4].classList.add('ativo');
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
  }

}


buttonGeral.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    let correntButton = e.target;
    if(correntButton.classList.contains('all')){
      showLista(listaALL);
    }
    if(correntButton.classList.contains('design')){
      showLista(listaALL, "design");
    }
    if(correntButton.classList.contains('web')){
      showLista(listaALL, "web");
    }
    if(correntButton.classList.contains('all')){
      showLista(listaALL, "all");
    }
  })
}) */