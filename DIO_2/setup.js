/*chamar metodos botoes: assistir e informacoes*/

function inform(){
    window.open("https://www.youtube.com/channel/UCa90xqK2odw1KV5wHU9WRhg");
}

function assistir(){
    window.open("https://www.youtube.com/watch?v=cRpbuYnHWQY");
}
//Jquery - referenciar $ - ferramenta para manipulacao de elementos em tela

$('.owl-carousel').owlCarousel({

    loop:true, //efeito de looping nas imgs, navegar de forma "infinita", se falso - "finito"
    margin:10, //distanciamento entre as imgs
    nav:false, //true = <> setas 
    responsive:{ //responsividade = adaptacao ao tamanho da tela do dispositivo de saida de dados
        0:{     //tela proxima de 0 = apenas 1 elemento (img)
            items:2
        },
        600:{   //qdo a tela tem >= 600px, coloque 3 elementos (imgs) na tela
            items:4
        },
        1000:{   //qdo a tela tem >= 1000px, coloque 5 elementos (imgs) na tela
            items:6
        }
    }
})