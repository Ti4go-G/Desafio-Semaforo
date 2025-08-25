# Desafio-Semaforo 
Desafio para por em prática lógica e funções em JavaScript juntamente com HTML + CSS
##  Descrição do Desafio

O objetivo era aplicar lógica de programação e manipulação do DOM com JavaScript para criar um semáforo que seguisse regras específicas de funcionamento, além de estilizar a interface com HTML e CSS para uma visualização clara e intuitiva.
## Funcionalidades Implementadas

Conforme as regras do desafio, o semáforo possui as seguintes funcionalidades:

* **Início Automático:** Ao carregar a página, o semáforo inicia automaticamente no estado **VERDE** (aberto).
* **Ciclo de Cores:**
    * O sinal permanece **VERDE** por 10 segundos.
    * Após o verde, o sinal muda para **AMARELO** e permanece assim por 3 segundos.
    * Em seguida, o sinal fica **VERMELHO** (fechado) por 15 segundos.
    * O ciclo reinicia, voltando para o verde.
* **Botão para Pedestres:**
    * Um botão "Atravessar" permite que o pedestre solicite o fechamento do sinal.
    * Se o botão for pressionado enquanto o sinal está **VERDE**, há uma espera de 3 segundos antes do ciclo de fechamento começar (amarelo -> vermelho).
    * Se pressionado durante o ciclo de fechamento (amarelo ou vermelho), o processo continua normalmente.
* **Controle de Solicitação:** Para evitar abusos, os pedestres só podem fazer uma nova solicitação para fechar o sinal após um intervalo de **60 segundos**.
* **Contador de Tempo:** A interface exibe um contador em segundos que informa o tempo restante para a mudança do sinal (exceto para o amarelo).

##  Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da página e dos elementos do semáforo.
* **CSS3:** Estilização do semáforo, das luzes, do botão e layout geral da página.
* **JavaScript:** Lógica de programação para controlar o ciclo de estados do semáforo, a temporização, os eventos de clique e a atualização dinâmica do contador.

##  Como Executar o Projeto

  Basta clonar este repositório e abrir o arquivo `index.html` no seu navegador de preferência.
  
  ```bash
  git clone [https://github.com/Ti4go-G/Desafio-Semaforo.git](https://github.com/Ti4go-G/Desafio-Semaforo.git)
  cd Desafio-Semaforo
  # Agora, abra o arquivo index.html no navegador
  ```

## 💡 Possíveis Melhorias

* [ ] Adicionar animações CSS para transições mais suaves entre as cores.
* [ ] Implementar um sinal de pedestres que sincronize com o semáforo principal.
* [ ] Tornar o design responsivo para diferentes tamanhos de tela.
