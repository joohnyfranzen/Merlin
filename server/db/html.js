module.exports = {
    html1 : {
        nome: 'HTML Iniciante', 
        professor: 'Jonathan Franzen Fagundes', 
        descricao: 'Curso de HTML iniciante', 
        conquista: 'HTML', 
        titulo: 'HTML', 
        tier: '1', 
        image: 'html.png'
    },
    html2 : {
        nome: 'HTML Intermediario', 
        professor: 'Jonathan Franzen Fagundes', 
        descricao: 'Curso de HTML Intermediario', 
        conquista: 'HTML', 
        titulo: 'HTML', 
        tier: '2', 
        image: 'html.png'
    },
    html3 : {
        nome: 'HTML Avançado', 
        professor: 'Jonathan Franzen Fagundes', 
        descricao: 'Curso de HTML Intermediario', 
        conquista: 'HTML', 
        titulo: 'HTML', 
        tier: '2', 
        image: 'html.png'
    },


    html1Aula1 : { 
        nome: '1', 
        titulo: 'Introduçao ao HTML', 
        conteudo: `As tags são usadas para informar ao navegador a estrutura do site. Ou seja: quando se escreve um código em HTML, as tags serão interpretadas pelo navegador, produzindo assim a estrutura e o conteúdo visual da página.<br/><br/>A principal característica das tags é estarem sempre dentro dos sinais de chevron (sinal de “maior que” e “menor que”), ou seja: <xmp>< ></xmp>.<br/><br/>As tags HTML são divididas em dois tipos: as que precisam de fechamento e as que não precisam de fechamento. As tags que precisam de fechamento possuem a sintaxe <xmp><tag> </tag></xmp>, já as que não precisam de fechamento possuem como estrutura <xmp><tag/></xmp>.<br/><br/>Além disso, uma mesma tag pode receber um ou mais atributos, que possuirá um valor que modifica sua estrutura ou funcionalidade.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 29
    },
    html1Aula2 : { 
        nome: '2', 
        titulo: 'Atributos', 
        conteudo: `Os atributos são usados para personalizar as tags, modificando sua estrutura ou funcionalidade. Igualmente, os atributos são utilizados para atribuir uma classe ou id a um elemento.<br/><br/>A maioria das tags tem seus próprios atributos. Contudo, existem alguns atributos genéricos que podem ser utilizados na maioria das tags HTML, vamos estudá-los:<br/><br/>    class=”…“ – Atribui uma classe ao elemento (uma classe pode ser utilizada para um ou mais elementos);<br/><br/>    id=”…“ – Atribui um id ao elemento (um id deve ser único, ou seja atribuído a um único elemento);<br/>    style=”…” – Permite incluir elementos CSS (estilos) dentro da tag;<br/>    lang=”…” – Define o idioma principal do elemento;<br/>    title=”…” – Define o título do elemento;<br/>    alt=”…” – Define um texto alternativo e, por isso, é muito utilizado em imagens, auxilia nas práticas de SEO;<br/>    hidden – Oculta o elemento;<br/>    align=”…” – Permite definir o padrão de alinhamento desse elemento, como por exemplo: right, center, left e justify;<br/>    width=”…” – Define uma largura para o elemento;<br/>    height=”…” – Define uma altura para o elemento.<br/><br/>Essas são os principais atributos, porém existem diversos outros que devem ser estudados e podem ser utilizados no seu código`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 29
    },
    html1Aula3 : { 
        nome: '3', 
        titulo: 'Estrutura básica', 
        conteudo: `Um documento HTML recebe algumas tags que formam a sua estrutura básica. No HTML5, o documento padrão recebe a seguinte estrutura:<br/><br/><xmp><!DOCTYPE html></xmp><br/><xmp><html></xmp><head></xmp><br/><xmp><title>Título da página</title></xmp><br/><xmp><meta charset="utf-8"/></xmp><br/><xmp></head></xmp><br/><xmp><body></xmp><br/><xmp></body></xmp><br/><xmp></html></xmp><br/> Em primeiro lugar, vamos agora entender para que serve cada uma dessas tags:<br/><br/><xmp><!DOCTYPE html></xmp> – A tag !DOCTYPE informa ao navegador a versão do HTML que está sendo utilizada no documento. Por exemplo: no HTML5, basta incluir !DOCTYPE html, e assim o navegador já saberá que se trata de um documento na versão HTML5;<br/><xmp><html></html></xmp> – Esta tag é o elemento básico da estrutura do HTML. Assim sendo, ela conterá todos os elementos do seu documento. Todo documento HTML deve iniciar e finalizar com essa tag;<br/><xmp><head></head></xmp> – Essa tag delimita o cabeçalho do documento. Não possui nenhum valor visível, porém é capaz de transmitir ao navegador diversas informações muito úteis e essenciais a uma boa apresentação do seu documento HTML;<br/><xmp><title></title></xmp> – Essa tag define o título da sua página, o nome que aparecerá na sua aba, janela ou guia. Por esta razão, a tag >title> é de grande importância para o SEO;<br/><xmp><meta/></xmp> – Essa tag permite inserir metadados ao seu documento, no caso acima, a informação charset=”UTF-8″, que garante a compatibilidade do código com os caracteres de padrão latino americano;<br/><xmp><body></body></xmp> – Finalmente, a tag que representa o corpo do documento. Em síntese, é nessa tag que todos os elementos visíveis do seu site devem ser inseridos.<br/><br/>Agora que já conhecemos as tags HTML que formam a estrutura básica de uma página, podemos então estudar as diversas tags que contemplarão o documento.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 29 
    },
    html1Aula4 : { 
        nome: '4', 
        titulo: 'Comentários', 
        conteudo: `Dentro de um documento, muitas vezes precisamos fazer comentários, para facilitar no desenvolvimento. Com isso, o código fica mais organizado e podemos deixar anotações importantes para possíveis mudanças, ou apenas para orientar o código. Dessa forma, na tag de comentários (que é aberta com <xmp><!– e fechada com –></xmp> ), todos elementos incluídos dentro dela serão apenas comentários, ou seja, não serão visíveis no navegador. <br/>ex: <xmp><!-- Meu comentário em HTML --><p>Olá Mundo</p> <!-- aqui é o meu paragrafo--></xmp><br/><br/>Como resultado final no navegador, teremos:<br/>Olá Mundo<br/><br/>Repare que todo conteúdo das tags de comentário não aparecerá, sendo restrito apenas a quem estiver lendo o seu código HTML. Pratique utilizar os comentários em seu código, isso é uma boa prática e muito recomendada dentro do mundo do desenvolvimento.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 29
    },
    html1Aula5 : { 
        nome: '5', 
        titulo: 'Tags HTML estruturais', 
        conteudo: `As tags abaixo são utilizadas nos documentos em HTML5, e têm função estrutural no seu código. Portanto, essas tags têm grande importância na questão semântica da sua página, saber utilizá-las pode adequar o seu código para uma melhor visualização por parte do navegador e do usuário, além de proporcionar uma otimização para os processos de SEO.<br/><br/><xmp><header></header></xmp>– Essas tags definem um cabeçalho. Portanto, todo conteúdo que estiver dentro dela faz parte de um cabeçalho, podendo ser utilizado dentro de outras sessões. Não confundir com as tags xmp><head></xmp>;<br/><br/><xmp><main></main></xmp> – Essas tags representam o conteúdo principal do seu corpo, ou seja, o conteúdo relacionado diretamente com o tópico central da página ou com a funcionalidade central da aplicação;<br/><br/><xmp><footer></footer></xmp> – Essas tags definem um rodapé para a página, geralmente utilizadas no final da página;<br/><br/><xmp><section></section></xmp> – Essas tags definem uma sessão para sua página;<br/><xmp><article></article></xmp> – Essas tags definem um artigo da sua página. Nesse sentido, são utilizadas para separar o conteúdo da sua página. Muito utilizado principalmente por blogs ou páginas de conteúdo;<br/><br/><xmp><aside></aside></xmp> – Essas tags representam uma seção de uma página cujo conteúdo é tangencialmente relacionado ao conteúdo do seu entorno, que poderia ser considerado separado do conteúdo;<br/><br/><xmp><nav></nav></xmp> – Essa tag define um conteúdo de navegação. Portanto, é muito utilizado em conjunto com listas e na criação de menus;<br/><br/><xmp><div></div></xmp> – Define uma divisão da página. Desta forma, funciona como um container para conteúdo de fluxo. Uma vez que não possui um valor semântico, é muito utilizado para organizar melhor o conteúdo. Anteriormente ao HTML5, era utilizado no lugar das categorias acima.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 29 
    },
    html1Aula6 : { 
        nome: '6', 
        titulo: 'Tags HTML de conteúdo', 
        conteudo: `Agora que você já conhece as principais tags estruturais, pode organizar o seu conteúdo de forma adequada. Assim sendo, vamos listar as principais tags para incluir conteúdo à página, como títulos, parágrafos, imagens, links, etc.<br/><br/>Tags HTML de título<br/><br/>As tags de título possuem valor semântico, variando entre seis níveis hierárquicos. Para fins de otimização SEO é importante entender como funcionam, e fazer uma utilização adequada. Para definir títulos, utilizamos as tags:<br/><br/><xmp><h1></h1></xmp> - Título de maior valor hierárquico<br/><xmp><h2></h2></xmp><br/><xmp><h3></h3></xmp><br/><xmp><h4></h4></xmp><br/><xmp><h5></h5></xmp><br/><xmp><h6></h6></xmp> - Título de menor valor hierárquico<br/><br/>Conforme dito anteriormente, a distribuição de título interferem no otimização do SEO de uma página.  Com isso, uma página contendo apenas h1 não seria bem vista pelos mecanismos de busca. Portanto, é importante dividir os títulos deixando o h1 apenas para o título principal, h2 ou h3 para títulos das seções e h4 a h6 para subtítulos ou títulos que possuam baixo valor hierárquico em relação aos demais.<br/><br/>Tags HTML de texto<br/>As tags de texto definem textos, estilos de fonte, parágrafos, spans, quebras de linhas, etc. Vamos conhecê-las:<br/><br/><xmp><p></p></xmp> – Principal tag de texto, compõe um parágrafo;<br/><xmp><span></span></xmp> – Apesar de ter uma funcionalidade e características parecidas com os parágrafos, costumam ser utilizadas apenas para pequenas informações, como legendas de um formulário, legendas de uma imagem, etc. Também pode ser utilizada para formar um container;<br/><xmp><pre></pre></xmp> – Tag utilizada para representar texto pré-formatado. Muito utilizada para inserir códigos;<br/><xmp><b></b></xmp> – Transforma o conteúdo em negrito;<br/><xmp><i></i></xmp> – Transforma o conteúdo em itálico;<br/><xmp><br/></xmp> – Essa tag não necessita de fechamento, ela executa a função de quebra de linha.<br/><xmp><hr/></xmp> – Essa tag não necessita de fechamento, ela forma uma linha horizontal.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 29 
    },
    html1Aula7 : { 
        nome: '7', 
        titulo: 'Tag de link HTML', 
        conteudo: `A tag de link HTML é responsável que faz a ligação entre um documento e outro, sendo ele da mesma página ou de uma página de outro domínio. Esse elemento garantiu que o HTML se destacasse, e moldou a internet da forma que ela é hoje! Portanto, é o principal fundamento que forma a web.</br></br>Para realizar um link, podemos chamar as tags <a></a> com o atributo href. Por exemplo, caso você queira criar um link no seu texto que redirecione à página inicial do google:</br><xmp><p>Para acessar o Google,<a href="https://www.google.com">clique aqui.</a></p></xmp></br>Como resultado, teremos:</br>Para acessar o Google, clique aqui.</br></br>Tags HTML de multimídia</br></br>As tags de multimídia servem para incluir imagens, vídeos, áudios, iframes e outros tipos de conteúdo multimídia.<xmp><img><xmp></br></br>Essa tag não necessita de fechamento, serve para incluir uma imagem ao seu texto. A partir dessa tag, utilizamos o atributo src=”” onde deve ser digitado o local em que a imagem se encontra. Também é muito utilizado em conjunto com o atributo alt para definir o texto alternativo da imagem.</br>Por exemplo:</br></xmp><img src="imagens/imagem1.jpg" alt="imagem 1 da minha página"></xmp></br><xmp><video> e <audio></xmp></br></br>Essa tag serve para indicar a inserção de um vídeo. Com isso, devemos colocar alguns atributos dentro da tag para poder ativar o controle, a principal dela é o controls. Posteriormente, incluímos a tag <source> com os atributos src e type, onde receberão o local em que está o vídeo e o tipo do vídeo. É recomendado utilizar mais de um tipo de source do mesmo vídeo, para garantir maior possibilidade de compatibilidade com o navegador. Finalmente, podemos incluir uma mensagem que será renderizada apenas se o navegador do usuário não suportar a tag video.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 29 
    },
    html1Aula8 : { 
        nome: '8', 
        titulo: 'Tags de video', 
        conteudo: `Sobre as Tags de video, vejamos os exemplos a seguir:</br></br><xmp><video controls></xmp></br><xmp><source src="video.mp4" type="video/mp4"></xmp></br><xmp><source src="video.ogg" type="video/ogg"></xmp></br></br>  Seu navegador não possui suporte para Vídeos.<xmp></video> A tag <audio></xmp> funciona da mesma forma que a tag <xmp><video>, portanto, utilizamos a tag <source></xmp> dentro dela. Vejamos o exemplo a seguir:</br></br><xmp><audio controls></xmp></br> <xmp><source src="musica.ogg" type="audio/ogg"></xmp></br><xmp><source src="musica.mp3" type="audio/mpeg"></xmp></br>  Seu navegador não possui suporte para áudio.<xmp></audio></xmp></br></br><xmp><iframe></xmp></br></br>Os iframes são muito utilizados na atualidade, servem para incluir recursos de uma outra página nesta página. Vale a pena conferir o exemplo da W3C Schools, pagina de tutorias pertencente ao grupo W3C, a organização atualmente responsável pelos padrões da web.</br></br>Portanto, para inserir um iframe, basta utilizar a tag com o atributo src. Além disso, é possível incluir um texto dentro do elemento, caso o navegador do usuário não possua suporte para tal. Vejamos então o exemplo abaixo:</br></br><xmp><iframe src="https://www.homehost.com.br"></xmp></br><xmp><p>Seu navegador não possui suporte para iFrames.</p></xmp></br><xmp></iframe></xmp>`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 29 
    },
    html1Aula9 : { 
        nome: '9', 
        titulo: 'Tags HTML de listas', 
        conteudo: `Para poder criar uma lista, podemos utilizar uma lista ordenada, a partir das tags <xmp><ol></ol></xmp>, ou uma lista não ordenada, a partir das tags<xmp><ul></ul></xmp>. Posteriormente, incluímos dentro da lista os elementos da mesma, dentro das tags <xmp><li></li></xmp>.<br/><br/>Vejamos os exemplos a seguir:<br/><br/><xmp><p>Minha lista ordenada:</p></xmp><br/><xmp><ol></xmp><br/><xmp><li>item 1</li></xmp><br/><xmp><li>item 2</li></xmp><br/><xmp><li>item 3</li></xmp> <br/><xmp></ol></xmp><br/><xmp><p>Minha lista não ordenada:</p></xmp> <br/> <xmp><ul></xmp> <br/> <xmp><li>item 1</li></xmp> <br/><xmp><li>item 2</li></xmp><br/>  <xmp><li>item 3</li></xmp> <br/> <xmp></ul></xmp> <br/><br/>Tags HTML de formulário<br/><br/>As tags de formulário são muito utilizadas para obter informações do usuário, realizar cadastros, receber opiniões, entre outros. São importantíssimas para qualquer ramo do mercado.<br/><br/>Para iniciar um formulário, incluimos as tags <xmp><form> e </form></xmp>. Posteriormente, devemos incluir o conteúdo do formulário. Digamos que, por exemplo, você queira incluir três campos, sendo dois para coletar informações e um para receber uma mensagem. Desta forma, para criar os campos de preenchimento, deverá utilizar a tag <xmp><input></xmp>, enquanto para o campo referente à mensagem, deverá utilizar a tag <xmp><textarea></xmp>.<br/><br/>A tag <xmp><input></xmp><br/>A tag <xmp><input></xmp> possui o atributo type, que varia entre diversos tipos (vamos explicar os principais deles abaixo). Também há o atributo placeholder, que é um texto que ficará disponível enquanto nada for digitado nesse campo. Também é importante definir um atributo name para cada input. <br/><br/><xmp><input type=”text”></xmp> – Define um campo que receberá qualquer caractere;<br/><br/><xmp><input type=”email”></xmp> – Define um campo que receberá caracteres e verificará se o mesmo consiste em um e-mail válido;<br/><br/>  <xmp><input type=”submit” value=”ENVIAR”></xmp> – Define um botão que servirá para o envio do formulário. Dentro dele, podemos atribuir o value, que será o texto dentro do botão de envio.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 29
    },
    html1Aula10 : { 
        nome: '10', 
        titulo: 'Inputs', 
        conteudo: `As tags <xmp><textarea></textarea></xmp> <br/><br/>Assim como a tag <xmp><input></xmp>, essa tag define um campo para o formulário. Porém, diferentemente, ela tem como principal característica ser uma área de preenchimento de texto, ou seja, permite que o usuário escreva um texto ou uma mensagem no seu interior. Também traz opções para que o usuário redimensione seu tamanho (resize). Dessa forma, podemos incluir uma area de texto utilizando as tags <xmp><textarea> e </textarea></xmp>.<br/><br/>Tags de estilos e scripts<br/><br/>Para podermos concluir esse tutorial, não poderíamos deixar de citar as tags <xmp><style> e <script></xmp>.<br/><br/>A tag <xmp><style> e </style></xmp> deve ser incluída no <xmp><head></xmp> do seu código HTML. Dentro dessa tag, é possível incluir todo o seu código CSS, ou seja, seu código de estilos.<br/><br/>Já a tag <xmp><script> e </script></xmp> tem como objetivo incluir códigos de scripts ao seu HTML, podendo ser incluída em qualquer parte. Contudo, recomenda-se fortemente que seja inserida após o <xmp><footer></xmp>. Dessa forma, podemos incluir nela um código javascript.<br/><br/>Crie sua página em HTML<br/><br/>Finalmente chegamos ao fim desse artigo. Porém deixamos aqui um ótimo exemplo para você poder estudar e treinar as diversas tags HTML. Crie um arquivo de texto e salve com a extensão .html e comece a treinar agora mesmo!<br/><br/>Na proxima aula segue nosso código de exemplo contendo uma estrutura de uma página em HTML.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 29 
    },

  
    html2Aula1 : { 
        nome: '1', 
        titulo: 'HTML', 
        conteudo: `O que é HTML?<br/><br/>HTML é uma linguagem de marcação utilizada para criar páginas web. Ele permite estruturar o conteúdo de uma página, adicionando títulos, parágrafos, imagens, links e outros elementos.<br/><br/>Estrutura básica de uma página HTML<br/><br/>Uma página HTML é composta por uma série de etiquetas (tags), que são delimitadas por sinais de menor e maior<xmp> ( < > )</xmp>.<br/><br/>A estrutura básica de uma página HTML inclui a tag <html>, que indica o início e o fim da página. Dentro dessa tag, há outras duas tags principais: <xmp> <head> e <body> </xmp>.<br/><br/>A tag <xmp><head></xmp> contém informações sobre a página, como o título (que aparece na aba do navegador) e meta tags, enquanto a tag <body> contém o conteúdo da página.<br/><br/>Exemplo de estrutura básica de uma página HTML:<br/><br/>Copy code<br/><br/><xmp><html></xmp><br/><br/><xmp><head></xmp><br/><br/><xmp><title>Meu primeiro site</title></xmp><br/><br/><xmp></head></xmp><br/><br/><xmp><body></xmp><br/><br/><xmp><h1>Bem-vindo ao meu site</h1></xmp><br/><br/><xmp><p>Este é o meu primeiro site em HTML.</p></xmp><br/><br/><xmp></body></xmp><br/><br/><xmp></html></xmp><br/><br/>Usando etiquetas<br/><br/>HTML possui uma série de etiquetas pré-definidas para estruturar o conteúdo de uma página, como <xmp><h1></xmp> para cabeçalhos, <xmp><p></xmp> para parágrafos, <xmp> <img> </xmp>para imagens, <xmp> <a> </xmp> para links, etc.<br/><br/>Cada etiqueta é aberta com uma tag de início (exemplo:<xmp> <h1>) e fechada com uma tag de fim (exemplo: </h1></xmp>). O conteúdo fica entre essas duas tags.<br/><br/>Exemplo de uso de etiquetas:<br/><br/>Copy code<br/><br/><xmp><h1>Meu título</h1></xmp><br/><br/><xmp><p>Este é um parágrafo.</p></xmp><br/><br/><xmp><img src="minha-imagem.jpg" alt="Minha imagem"></xmp><br/><br/><xmp><a href="http://www.meusite.com">Clique aqui para visitar meu site</a></xmp><br/><br/>Espero que essa aula de introdução ao HTML te ajude a entender como funciona a linguagem e como criar uma página web básica. Se você tiver alguma dúvida, sinta-se à vontade para perguntar.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 30
    },
    html2Aula2 : { 
        nome: '2', 
        titulo: 'Formatar o texto', 
        conteudo: `HTML possui várias etiquetas que permitem formatar o texto, tais como:<br/><br/><xmp><b> ou <strong> para deixar o texto em negrito</xmp><br/><br/><xmp><i> ou <em> para deixar o texto em itálico</xmp><br/><br/><xmp><u> para sublinhar o texto</xmp><br/><br/><xmp><s> ou <strike> para riscar o texto</xmp><br/><br/><xmp><sub> para escrever o texto como subescrito</xmp><br/><br/><xmp><sup> para escrever o texto como sobrescrito</xmp><br/><br/>Exemplo de uso de etiquetas de formatação de texto:<br/><br/>Copy code<br/><br/><xmp><p>Este é um <b>texto em negrito</b>, um <i>texto em itálico</i>, um <u>texto sublinhado</u>, um <s>texto riscado</s>, um <sub>texto subescrito</sub> e um <sup>texto sobrescrito</sup>.</p></xmp><br/><br/>Cabeçalhos<xmp>HTML possui seis níveis de cabeçalhos, desde <h1> até <h6>, sendo que <h1> é o cabeçalho de maior importância.</xmp><br/><br/><xmp>É recomendado usar os cabeçalhos de forma hierárquica, ou seja, usar <h1> para o título principal, <h2> para sub-títulos, <h3> para sub-sub-títulos, e assim por diante.</xmp><br/><br/>Exemplo de uso de cabeçalhos:<br/><br/>Copy code<br/><br/><xmp><h1>Meu título principal</h1></xmp><br/><br/><xmp><h2>Meu primeiro subtítulo</h2></xmp><br/><br/><xmp><h3>Meu segundo subtítulo</h3></xmp><br/><br/><xmp><h4>Meu terceiro subtítulo</h4></xmp><br/><br/>Parágrafos<br/><br/><xmp>Para criar um parágrafo, você pode usar a tag <p>.</xmp><br/><br/><xmp>Se você precisar de um espaçamento extra entre parágrafos, você pode usar a tag <br> para criar uma quebra de linha.</xmp><br/><br/>Exemplo de uso de parágrafos:<br/><br/>Copy code<br/><br/><xmp><p>Este é o meu primeiro parágrafo.</p></xmp><br/><br/><xmp><p>Este é o meu segundo parágrafo.</p></xmp><br/><br/><xmp><p>Este é o meu terceiro parágrafo.<br> com uma quebra de linha.</p></xmp><br/><br/>Links<br/><br/><xmp>Para adicionar links em uma página HTML, você pode usar a tag <a> com o atributo href para especificar a URL do link.</xmp><br/><br/>`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 30
    },
    html2Aula3 : { 
        nome: '3', 
        titulo: 'Tabelas', 
        conteudo: `Tabelas<br/><br/><xmp>As tabelas são usadas para exibir dados em uma estrutura de linhas e colunas. O elemento principal de uma tabela é a tag <table>, e dentro dela são adicionadas as linhas <tr> e as células <td>.</xmp><br/><br/>Exemplo de tabela:<br/><br/><br/><br/>Copy code<br/><br/><xmp><table></xmp><br/><br/><xmp><tr></xmp><br/><br/><xmp><td>Cabeçalho 1</td></xmp><br/><br/><xmp><td>Cabeçalho 2</td></xmp><br/><br/><xmp></tr></xmp><br/><br/><xmp><tr></xmp><br/><br/><xmp><td>Linha 1, coluna 1</td></xmp><br/><br/><xmp><td>Linha 1, coluna 2</td></xmp><br/><br/><xmp></tr></xmp><br/><br/><xmp><tr></xmp><br/><br/><xmp><td>Linha 2, coluna 1</td></xmp><br/><br/><xmp><td>Linha 2, coluna 2</td></xmp><br/><br/><xmp></tr></xmp><br/><br/><xmp></table></xmp><br/><br/>Divisões (divs)<br/><br/>As divisões (ou divs) são elementos vazios que são usados para dividir a página em áreas distintas. Elas são comumente usadas para criar estruturas de layout, e podem ser estilizadas com CSS.<br/><br/>Exemplo de divisão:<br/><br/><br/><br/>Copy code<br/><br/><xmp><div id="minhaDiv"></xmp><br/><br/>  Conteúdo da minha div<br/><br/><xmp></div></xmp><br/><br/>Usando tabelas e divisões juntas<br/><br/>É possível combinar tabelas e divisões para criar layouts mais avançados. As tabelas são usadas para organizar o conteúdo em linhas e colunas, enquanto as divisões são usadas para agrupar e estilizar essas áreas.<br/><br/>Exemplo de layout com tabela e divisões:<br/><br/><br/><br/>Copy code<br/><br/><xmp><table></xmp><br/><br/><xmp>  <tr></xmp><br/><br/><xmp>    <td></xmp><br/><br/><xmp>      <div id="divEsquerda">Conteúdo da esquerda</div></xmp><br/><br/><xmp>    </td></xmp><br/><br/><xmp>    <td></xmp><br/><br/><xmp>      <div id="divDireita">Conteúdo da direita</div></xmp><br/><br/><xmp>    </td></xmp><br/><br/><xmp>  </tr></xmp><br/><br/><xmp></table></xmp><br/><br/>CSS<br/><br/>O CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a aparência dos elementos HTML. Pode-se usar CSS para mudar cor, tamanho, posição, entre outros aspectos visuais, dos elementos da página.<br/><br/>Exemplo de como mudar a cor de fundo da minha div<br/><br/>Copy code<br/><br/><xmp><style></xmp><br/><br/>  #minhaDiv {<br/><br/>    background-color: blue;<br/><br/>  }<br/><br/><xmp></style></xmp><br/><br/>Lembre-se de que o HTML é responsável por estruturar o conteúdo e o CSS é responsável por estilizá-lo. `, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 30 
    },
    html2Aula4 : { 
        nome: '4', 
        titulo: 'Imagens', 
        conteudo: `<xmp>Para inserir uma imagem em uma página HTML, você pode usar a tag <img> e especificar o caminho da imagem usando o atributo src.</xmp><br/><br/>É importante também especificar o tamanho da imagem usando os atributos width e height, para que a página possa ser renderizada corretamente antes que a imagem seja carregada.<br/><br/><xmp>Exemplo de uso de tag <img> para inserir uma imagem:</xmp><br/><br/>Copy code<br/><br/><xmp><img src="caminho/da/imagem.jpg" width="200" height="150"></xmp><br/><br/><xmp>Atributos da tag <img></xmp><br/><br/><xmp>Além dos atributos src, width e height, a tag <img> possui outros atributos úteis, tais como:</xmp><br/><br/>alt: descrição da imagem (usado para acessibilidade e SEO)<br/><br/>title: título da imagem (usado para acessibilidade e SEO)<br/><br/>style: propriedades CSS para estilizar a imagem<br/><br/><xmp>Exemplo de uso de outros atributos da tag <img>:</xmp><br/><br/>Copy code<br/><br/><xmp><img src="caminho/da/imagem.jpg" width="200" height="150" alt="Descrição da imagem" title="Título da imagem" style="border: 1px solid black;"></xmp><br/><br/>Linkando imagens<br/><br/><xmp>Além de simplesmente exibir imagens, é comum querer tornar uma imagem clicável e direcionar o usuário para outra página ou URL. Para isso, você pode colocar a tag <img> dentro de uma tag <a> com o atributo href especificando a URL de destino.</xmp><br/><br/>Exemplo de uso de imagens como links:<br/><br/>Copy code<br/><br/><xmp><a href="https://www.google.com/"></xmp><br/><br/><xmp>  <img src="caminho/da/imagem.jpg" width="200" height="150" alt="Descrição da imagem"></xmp><br/><br/><xmp></a></xmp><br/><br/>Lista de imagens<br/><br/><xmp>Para exibir uma lista de imagens, você pode usar a tag <ul> ou <ol> e colocar cada imagem dentro de uma tag <li>.</xmp><br/><br/><xmp>Também é possível usar a tag <figure> e <figcaption> para adicionar legendas nas imagens.</xmp><br/><br/>Exemplo de uso de lista de imagens:<br/><br/>Copy code<br/><br/><xmp><ul></xmp><br/><br/><xmp>  <li><img src="caminho/da/imagem1.jpg" width="200" height="150" alt="Descrição da imagem 1"></li></xmp><br/><br/><xmp>  <li><img src="caminho/da/imagem2.jpg" width="200" height="150" alt="Descrição da imagem 2"></li></xmp><br/><br/><xmp>  <li><img src="caminho/da/imagem3.jpg" width="200" height="150" alt="Descrição da imagem 3"></li></xmp><br/><br/><xmp></ul></xmp>`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 30
    },
    html2Aula5 : { 
        nome: '5', 
        titulo: 'Formulários pt2', 
        conteudo: `<xmp>Os formulários são uma parte importante de muitas páginas da web, pois permitem que os usuários enviem informações para o servidor. Os formulários são criados com a tag <form> e podem conter diversos tipos de campos, tais como caixas de texto, botões, caixas de seleção, etc.</xmp><br/><br/>Campos de formulário<br/><br/>Os campos de formulário são criados com tags específicas, tais como:<br/><br/><xmp><input> : cria um campo de entrada de texto, caixa de seleção, botão, etc.</xmp><br/><br/><xmp><textarea> : cria uma área de texto com múltiplas linhas</xmp><br/><br/><xmp><select> : cria uma lista suspensa</xmp><br/><br/><xmp><option> : define uma opção dentro de um <select></xmp><br/><br/><xmp><label> : define um rótulo para um campo de formulário</xmp><br/><br/><xmp><fieldset> : agrupa campos de formulário relacionados</xmp><br/><br/><xmp><legend> : adiciona uma legenda para um <fieldset></xmp><br/><br/>Atributos comuns<br/><br/>Os campos de formulário possuem atributos comuns, tais como:<br/><br/>name: define o nome do campo, usado pelo servidor para identificar o valor enviado pelo formulário.<br/><br/>value: define o valor inicial do campo.<br/><br/>required: especifica se o campo é obrigatório.<br/><br/>disabled: desativa o campo.<br/><br/>readonly: impede que o usuário altere o valor do campo.<br/><br/>Enviando formulários`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 30 
    },
    html2Aula6 : { 
        nome: '6', 
        titulo: 'Formulários pt2', 
        conteudo: `Para enviar os dados do formulário para o servidor, é necessário especificar a ação (URL do destino) e o método (GET ou POST) do formulário.<br/><br/><xmp>O botão de envio é criado com o <input> type="submit".</xmp><br/><br/>Exemplo de um formulário simples:<br/><br/>Copy code<br/><br/><xmp><form action="/enviar" method="post"></xmp><br/><br/><xmp>  <label>Nome:</label></xmp><br/><br/><xmp>  <input type="text" name="nome" required></xmp><br/><br/><xmp>  <label>E-mail:</label></xmp><br/><br/><xmp>  <input type="email" name="email" required></xmp><br/><br/><xmp>  <input type="submit" value="Enviar"></xmp><br/><br/><xmp></form></xmp><br/><br/>Validação de formulários<br/><br/>É comum validar os dados de um formulário antes de enviá-lo para o servidor, para garantir que os dados estão corretos e completos. A validação pode ser feita tanto no lado do cliente (usando JavaScript) quanto no lado do servidor.<br/><br/>HTML5 fornece atributos de validação automática, como "required" e "pattern", que podem ser usados para garantir que os campos obrigatórios são preenchidos e que o formato dos dados está correto.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 30 
    },
    html2Aula7 : { 
        nome: '7', 
        titulo: 'CSS', 
        conteudo: `<xmp>Para adicionar CSS a uma página HTML, você pode incluir um arquivo externo usando a tag <link> no cabeçalho da página, ou incluir o código CSS diretamente na página usando a tag <style>.</xmp><br/><br/>Exemplo de adicionando um arquivo externo de CSS:<br/><br/>Copy code<br/><br/><xmp><head></xmp><br/><br/><xmp>  <link rel="stylesheet" type="text/css" href="estilo.css"></xmp><br/><br/><xmp></head></xmp>Exemplo de adicionando CSS diretamente na página:<br/><br/>Copy code<br/><br/><xmp><head></xmp><br/><br/><xmp>  <style></xmp><br/><br/>    /* código CSS aqui */<br/><br/><xmp>  </style></xmp><br/><br/><xmp></head></xmp><br/><br/>Adicionando JavaScript<br/><br/><xmp>Para adicionar JavaScript a uma página HTML, você pode incluir um arquivo externo usando a tag <script> no cabeçalho ou no corpo da página, ou incluir o código JavaScript diretamente na página dentro da tag <script>.</xmp><br/><br/>Exemplo de adicionando um arquivo externo de JavaScript:<br/><br/>Copy code<br/><br/><xmp><head></xmp><br/><br/><xmp>  <script src="script.js"></script></xmp><br/><br/><xmp></head></xmp><br/><br/>Exemplo de adicionando JavaScript diretamente na página:<br/><br/>Copy code<br/><br/><xmp><script></xmp><br/><br/>  // código JavaScript aqui<br/><br/><xmp></script></xmp><br/><br/>Referência de elementos com JavaScript<br/><br/>Para se referir a um elemento HTML com JavaScript, você pode usar a função document.getElementById(id) para selecionar o elemento com o atributo "id" especificado. Uma vez selecionado, você pode alterar suas propriedades ou adicionar eventos a ele.<br/><br/>Exemplo de como mudar o texto de um elemento com o id "meuElemento":<br/><br/>Copy code<br/><br/><xmp><script></xmp><br/><br/>  var meuElemento = document.getElementById("meuElemento");<br/><br/>  meuElemento.innerHTML = "Novo texto";<br/><br/><xmp></script></xmp><br/><br/>Lembre-se de que o JavaScript é uma linguagem de programação que permite adicionar interatividade e dinamismo às suas páginas HTML. Ao combinar o HTML, CSS e JavaScript, você pode criar sites e aplicativos web incríveis e ricos em recursos.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 30 
    },
    html2Aula8 : { 
        nome: '8', 
        titulo: 'CSS Grid pt1', 
        conteudo: `CSS Grid<br/><br/>O Grid Layout é uma técnica de layout avançada que permite criar grade de colunas e linhas para organizar elementos HTML. Isso permite criar layouts complexos de forma fácil e rápida.<br/><br/>Exemplo de como criar um grid de 3 colunas e 2 linhas:<br/><br/><br/><br/>Copy code<br/><br/><xmp><div class="grid-container"></xmp><br/><br/><xmp>  <div class="grid-item">item 1</div></xmp><br/><br/><xmp>  <div class="grid-item">item 2</div></xmp><br/><br/><xmp>  <div class="grid-item">item 3</div></xmp><br/><br/><xmp>  <div class="grid-item">item 4</div></xmp><br/><br/><xmp>  <div class="grid-item">item 5</div></xmp><br/><br/><xmp>  <div class="grid-item">item 6</div></xmp><br/><br/><xmp></div></xmp><br/><br/>Copy code<br/><br/>.grid-container {<br/><br/>  display: grid;<br/><br/>  grid-template-columns: repeat(3, 1fr);<br/><br/>  grid-template-rows: repeat(2, 100px);<br/><br/>}<br/><br/>CSS Flexbox<br/><br/>O Flexbox Layout é outra técnica de layout avançada que permite criar layouts flexíveis e responsivos. Ele permite alinhar e distribuir elementos de forma fácil e consistente, independentemente do tamanho da tela ou dispositivo.<br/><br/>Exemplo de como alinhar elementos horizontalmente no centro:<br/><br/>Copy code<br/><br/><xmp><div class="flex-container"></xmp><br/><br/><xmp>  <div class="flex-item">item 1</div></xmp><br/><br/><xmp>  <div class="flex-item">item 2</div></xmp><br/><br/><xmp>  <div class="flex-item">item 3</div></xmp><br/><br/><xmp></div></xmp><br/><br/>Copy code<br/><br/>.flex-container {<br/><br/>  display: flex;<br/><br/>  justify-content: center;<br/><br/>}<br/><br/>`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 30 
    },
    html2Aula9 : { 
        nome: '9', 
        titulo: 'CSS Grid pt2', 
        conteudo: `Combinando Grid e Flexbox<br/><br/>É possível combinar Grid e Flexbox para criar layouts ainda mais poderosos. Por exemplo, você pode usar o Grid para organizar elementos em uma grade e, em seguida, usar o Flexbox para alinhar elementos dentro de cada célula da grade.<br/><br/>Exemplo de como criar um grid de 3 colunas e 2 linhas, com elementos alinhados horizontalmente no centro:<br/><br/>Copy code<br/><br/><xmp><div class="grid-flex-container"></xmp><br/><br/><xmp>  <div class="grid-flex-item">item 1</div></xmp><br/><br/><xmp>  <div class="grid-flex-item">item 2</div></xmp><br/><br/><xmp>  <div class="grid-flex-item">item 3</div></xmp><br/><br/><xmp>  <div class="grid-flex-item">item 4</div></xmp><br/><br/><xmp>  <div class="grid-flex-item">item 5</div></xmp><br/><br/><xmp>  <div class="grid-flex-item">item 6</div></xmp><br/><br/><xmp></div></xmp><br/><br/>Copy code<br/><br/>.grid-flex-container {<br/><br/>  display: grid;<br/><br/>  grid-template-columns: repeat(3, 1fr);<br/><br/>  grid-template-rows: repeat(2, 100px);<br/><br/>}`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 30
    },
    html2Aula10 : { 
        nome: '10', 
        titulo: 'Ícones', 
        conteudo: `Ícones:<br/><br/>Ícones são gráficos pequenos e simbólicos que podem ser usados para melhorar a aparência e a usabilidade de um site. Eles podem ser adicionados ao HTML como tags de imagem ou fontes de ícones.<br/><br/>Exemplo de como adicionar um ícone de lixeira usando a tag de imagem:<br/><br/>Copy code<br/><br/><xmp><img src="trash-icon.svg" alt="Lixeira"></xmp><br/><br/>Exemplo de como adicionar um ícone de lixeira usando uma fonte de ícones:<br/><br/>Copy code<br/><br/><xmp><i class="fas fa-trash"></i></xmp><br/><br/>Copy code<br/><br/>@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');<br/><br/>Fontes:<br/><br/>As fontes são os estilos de letra utilizados em um site. A fonte utilizada pode influenciar na aparência e legibilidade de um texto.<br/><br/>Existem duas formas de adicionar fontes a um site:<br/><br/>Usando fontes do sistema: as fontes do sistema já estão instaladas no computador do usuário e podem ser usadas sem precisar fazer o download delas.<br/><br/>Usando fontes externas: as fontes externas precisam ser baixadas e incluídas no site.<br/><br/>Exemplo de como adicionar a fonte "Open Sans" usando uma fonte externa:<br/><br/>Copy code<br/><br/><xmp><link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></xmp><br/><br/>Copy code<br/><br/>body {<br/><br/>  font-family: 'Open Sans', sans-serif;<br/><br/>}<br/><br/>Combinando Ícones e Fontes<br/><br/>Ícones e fontes podem ser combinados para criar designs mais interessantes e atraentes. Por exemplo, é possível usar uma fonte de ícones para adicionar ícones ao seu site e usar fontes personalizadas para dar um toque especial ao design.<br/><br/>Exemplo de como adicionar um ícone de lixeira e usar a fonte "Open Sans":<br/><br/>Copy code<br/><br/><xmp><i class="fas fa-trash"></i> <span style="font-family: 'Open Sans', sans-serif;">Excluir</span></xmp><br/><br/>Copy code<br/><br/>@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');<br/><br/>E assim pode-se melhorar a aparência e usabilidade de um site.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 30 
    },
    html2Aula11 : { 
        nome: '11', 
        titulo: 'Ícones', 
        conteudo: `O que é uma página responsiva?<br/><br/>Uma página responsiva é um site que se adapta automaticamente ao tamanho da tela do dispositivo em que é exibido. Isso significa que a página se reorganiza e redimensiona de acordo com a largura da tela, garantindo uma boa experiência de usuário em dispositivos móveis, tablets e desktops.<br/><br/>Como criar uma página responsiva?<br/><br/>Há várias técnicas e ferramentas que podem ser usadas para criar uma página responsiva. Algumas das principais técnicas incluem:<br/><br/>Utilizando o recurso de "viewport" no HTML: o viewport é uma meta tag que pode ser adicionada ao cabeçalho do HTML para controlar como o site é exibido em dispositivos móveis.<br/><br/>Utilizando media queries no CSS: as media queries permitem que o CSS seja modificado de acordo com as propriedades da tela, como largura e altura.<br/><br/>Utilizando frameworks de layout responsivo: existem vários frameworks de layout responsivo, como Bootstrap, Foundation e Bulma, que fornecem uma estrutura e componentes prontos para criar sites responsivos.<br/><br/>Exemplo de como criar uma página responsiva:<br/><br/>Copy code<br/><br/><xmp><!DOCTYPE html></xmp><br/><br/><xmp><html></xmp><br/><br/><xmp><head></xmp><br/><br/><xmp>  <meta name="viewport" content="width=device-width, initial-scale=1"></xmp><br/><br/><xmp>  <style></xmp><br/><br/>    /* Adicione media queries para controlar o layout a partir de diferentes larguras de tela */<br/><br/>    @media only screen and (max-width: 600px) {<br/><br/>      /* Estilos para dispositivos móveis */<br/><br/>    }<br/><br/>    @media only screen and (min-width: 600px) {<br/><br/>      /* Estilos para dispositivos maiores */<br/><br/>    }<br/><br/><xmp>  </style></xmp><br/><br/><xmp></head></xmp><br/><br/><xmp><body></xmp><br/><br/><xmp>  <div class="container"></xmp><br/><br/><xmp>    <h1>Meu Site Responsivo</h1></xmp><br/><br/><xmp>    <p>Conteúdo do site</p></xmp><br/><br/><xmp>  </div></xmp><br/><br/><xmp></body></xmp><br/><br/><xmp></html></xmp><br/><br/>E assim pode-se criar uma página responsiva, garantindo uma boa experiência de usuário em dispositivos móveis, tablets e desktops.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 30 
    },

   
    
    html3Aula1 : { 
        nome: '1', 
        titulo: 'Criar formas complexas', 
        conteudo: `No Adobe Illustrator, você pode criar formas complexas usando ferramentas de desenho vetorial como:<br/><br/>Ferramenta de forma básica: permite criar formas simples, como retângulos, círculos e triângulos.<br/><br/>Ferramenta de forma personalizada: permite criar formas mais complexas a partir de combinações de formas básicas.<br/><br/>Ferramenta de linha: permite criar linhas precisas e curvas.<br/><br/>Ferramenta de máscara de camada: permite criar formas complexas a partir de múltiplas camadas.<br/><br/>Ferramenta de desenho livre: permite desenhar formas livremente usando o mouse ou a tela sensível ao toque.<br/><br/>Ferramenta de pena: permite criar formas precisas e curvas a partir de pontos de ancoragem.<br/><br/>Ao combinar estas ferramentas, você pode criar formas complexas e personalizadas para suas necessidades de design.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22
    },
    html3Aula2 : { 
        nome: '2', 
        titulo: 'Atividade', 
        conteudo: `Atividade: Criando uma forma complexa no Illustrator<br/><br/>Abra o Adobe Illustrator e crie um novo documento.<br/><br/>Selecione a ferramenta de forma básica e crie um retângulo.<br/><br/>Selecione a ferramenta de forma personalizada e adicione um círculo ao retângulo.<br/><br/>Use a ferramenta de máscara de camada para combinar as duas formas em uma só.<br/><br/>Selecione a ferramenta de linha e desenhe uma curva através da forma combinada.<br/><br/>Use a ferramenta de pena para adicionar pontos de ancoragem à curva e moldá-la conforme desejado.<br/><br/>Adicione mais formas básicas e personalizadas à sua forma complexa para complementá-la.<br/><br/>Salve sua forma complexa como um arquivo .ai ou exporte-a como uma imagem para uso em outros projetos.<br/><br/>Com estas ferramentas, você pode criar formas complexas e personalizadas no Adobe Illustrator para atender às suas necessidades de design.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22
    },
    html3Aula3 : { 
        nome: '3', 
        titulo: 'Camadas e máscaras', 
        conteudo: `Camadas e máscaras de camada são ferramentas importantes no Illustrator que permitem organizar e gerenciar elementos em seu projeto de maneira eficiente. Aqui estão algumas coisas que você pode aprender a fazer com camadas e máscaras de camada:<br/><br/>Criar camadas: As camadas permitem separar diferentes elementos do seu projeto em camadas separadas, tornando mais fácil gerenciar e editar esses elementos.<br/><br/>Organizar camadas: Arraste e solte camadas para reorganizá-las na ordem que desejar.<br/><br/>Bloquear camadas: Bloqueie uma camada para evitar acidentalmente editá-la.<br/><br/>Ocultar camadas: Oculte camadas para concentrar-se em outras camadas ou para otimizar o desempenho.<br/><br/>Usar máscaras de camada: As máscaras de camada permitem esconder partes de uma camada, revelando apenas o que está dentro da máscara.<br/><br/>Editar máscaras de camada: Altere a forma da máscara de camada para mostrar diferentes partes da camada.<br/><br/>Animações com camadas e máscaras de camada: Crie animações simples alterando a visibilidade das camadas e máscaras de camada ao longo do tempo.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22 
    },
    html3Aula4 : { 
        nome: '4', 
        titulo: 'Atividade', 
        conteudo: `Atividade: Criando uma animação simples com camadas e máscaras de camada no Illustrator<br/><br/>Passo 1: Crie um novo documento no Illustrator e desenhe alguns elementos básicos, como um retângulo, um círculo e uma linha.<br/><br/>Passo 2: Crie uma nova camada para cada um dos elementos que você desenhou.<br/><br/>Passo 3: Arraste e solte as camadas na ordem que você deseja que apareçam na animação.<br/><br/>Passo 4: Crie uma máscara de camada para a camada do retângulo, desenhando uma forma que cubra apenas uma parte do retângulo.<br/><br/>Passo 5: Altere a forma da máscara de camada para mostrar diferentes partes do retângulo ao longo do tempo.<br/><br/>Passo 6: Repita o processo para a camada do círculo, criando uma máscara de camada que cubra apenas uma parte do círculo.<br/><br/>Passo 7: Altere a forma da máscara de camada para mostrar diferentes partes do círculo ao longo do tempo.<br/><br/>Passo 8: Repita o processo para a camada da linha, criando uma máscara de camada que cubra apenas uma parte da linha.<br/><br/>Passo 9: Altere a forma da máscara de camada para mostrar diferentes partes da linha ao longo do tempo.<br/><br/>Passo 10: Teste a animação, ajustando as camadas e máscaras de camada se necessário, até que fique satisfeito com o resultado.<br/><br/>Dica: Lembre-se de salvar o seu projeto frequentemente, para evitar perder o trabalho.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22
    },
    html3Aula5 : { 
        nome: '5', 
        titulo: 'Texto', 
        conteudo: `No Illustrator, você pode trabalhar com texto de várias maneiras para obter o resultado desejado. Aqui estão algumas dicas para trabalhar com texto:<br/><br/>Formatando texto: Altere o tamanho, a fonte, a cor e outras propriedades de texto para obter o estilo desejado.<br/><br/>Estilizando texto: Adicione efeitos como sombra, contorno, brilho, etc. para dar mais profundidade e interesse ao texto.<br/><br/>Alinhando texto: Alinhe o texto à esquerda, à direita, ao centro ou justificado para controlar como o texto se encaixa em seu projeto.<br/><br/>Criando estilos de parágrafo: Crie estilos de parágrafo para aplicar rapidamente o formato de texto a vários parágrafos de uma só vez.<br/><br/>Trabalhando com texto em camadas: Adicione texto a uma camada separada para organizar e gerenciar facilmente o texto em seu projeto.<br/><br/>Convertendo texto em formas: Converta o texto em formas para editar o texto como se fosse uma forma vetorial.<br/><br/>Trabalhando com texto em camadas: Adicione texto a uma camada separada para organizar e gerenciar facilmente o texto em seu projeto.<br/><br/>Criando texto em curva: Crie texto em curva para seguir uma forma ou caminho específico em seu projeto.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22 
    },
    html3Aula6 : { 
        nome: '6', 
        titulo: 'Atividade', 
        conteudo: `Crie uma atividade prática:<br/><br/>Abra o Illustrator e crie um novo documento.<br/><br/>Adicione um texto ao documento e experimente alterar o tamanho, a fonte, a cor e outras propriedades de texto.<br/><br/>Adicione efeitos como sombra, contorno, brilho, etc. ao texto.<br/><br/>Alinhe o texto à esquerda, à direita, ao centro ou justificado.<br/><br/>Crie um estilo de parágrafo e aplique-o a vários parágrafos de texto.<br/><br/>Adicione o texto a uma camada separada e experimente ocultar e bloquear a camada.<br/><br/>Converta o texto em formas e experimente editar o texto como se fosse uma forma vetorial.<br/><br/>Crie texto em curva seguindo uma forma ou caminho específico no documento.<br/><br/>Salve o documento e experimente abri-lo novamente para ver como as alterações foram mantidas.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22 
    },
    html3Aula7 : { 
        nome: '7', 
        titulo: 'Imagens', 
        conteudo: `No Illustrator, você pode trabalhar com imagens de várias maneiras para obter o resultado desejado. Aqui estão algumas dicas para trabalhar com imagens:<br/><br/>Importando imagens: Importe imagens de arquivos externos, como JPEG, PNG, SVG, etc. para usar em seu projeto.<br/><br/>Ajustando imagens: Ajuste o tamanho, a rotação e a opacidade das imagens para se adequarem a seu projeto.<br/><br/>Editando imagens: Edite as imagens usando ferramentas de desenho, corte e preenchimento para modificar a aparência das imagens.<br/><br/>Criando máscaras de imagem: Crie máscaras de imagem para esconder partes da imagem e revelar apenas o que está dentro da máscara.<br/><br/>Trabalhando com imagens vetoriais: Trace imagens raster para criar imagens vetoriais que podem ser redimensionadas sem perda de qualidade.<br/><br/>Importando imagens como camadas: Importe imagens como camadas para organizar e gerenciar facilmente as imagens em seu projeto.<br/><br/>Combinando imagens: Combine duas ou mais imagens em uma única imagem usando as ferramentas de mesclagem de camadas.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22 
    },
    html3Aula8 : { 
        nome: '8', 
        titulo: 'Atividade', 
        conteudo: `Atividade: Criando uma imagem de capa de livro<br/><br/>Escolha uma imagem para usar como base para a capa do livro.<br/><br/>Importe a imagem para o Illustrator.<br/><br/>Ajuste o tamanho da imagem para se adequar ao tamanho da capa do livro.<br/><br/>Edite a imagem usando as ferramentas de desenho, corte e preenchimento para modificar a aparência da imagem de acordo com suas necessidades.<br/><br/>Adicione texto à capa do livro usando a ferramenta de texto do Illustrator.<br/><br/>Combine a imagem editada com o texto adicionado para criar a capa completa do livro.<br/><br/>Salve a capa do livro como um arquivo PNG ou outro formato de imagem para uso futuro.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22 
    },
    html3Aula9 : { 
        nome: '9', 
        titulo: 'Efeitos e filtros', 
        conteudo: `No Illustrator, você pode aplicar efeitos e filtros a objetos para criar efeitos visuais interessantes. Aqui estão algumas dicas para trabalhar com efeitos e filtros:<br/><br/>Efeitos de camada: Aplique efeitos de camada, como sombra, brilho e correção de cores, para adicionar profundidade e interesse aos elementos em sua camada.<br/><br/>Efeitos de forma: Aplique efeitos de forma, como revestimento, contorno e transformação, para modificar a aparência de objetos vetoriais.<br/><br/>Filtros de imagem: Aplique filtros de imagem, como desfoque, nitidez e distorção, para modificar a aparência de imagens raster.<br/><br/>Filtros de forma: Aplique filtros de forma, como ondulação e deformação, para modificar a aparência de objetos vetoriais.<br/><br/>Efeitos 3D: Aplique efeitos 3D, como luz e sombra, para adicionar profundidade e dimensão aos elementos em seu projeto.<br/><br/>Combinando efeitos: Combine vários efeitos para criar efeitos visuais personalizados e únicos.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22
    },
    html3Aula10 : { 
        nome: '10', 
        titulo: 'Atividade', 
        conteudo: `Atividade: Aplique efeitos e filtros a um objeto simples no Illustrator.<br/><br/>Abra o Illustrator e crie um novo documento.<br/><br/>Desenhe um objeto simples, como uma forma geométrica ou um desenho simples.<br/><br/>Selecione o objeto e vá para "Efeitos" no menu principal.<br/><br/>Escolha um efeito de camada, como sombra ou brilho, e ajuste as configurações para atingir o efeito desejado.<br/><br/>Escolha um efeito de forma, como revestimento ou contorno, e ajuste as configurações para atingir o efeito desejado.<br/><br/>Escolha um filtro de imagem, como desfoque ou nitidez, e ajuste as configurações para atingir o efeito desejado.<br/><br/>Escolha um filtro de forma, como ondulação ou deformação, e ajuste as configurações para atingir o efeito desejado.<br/><br/>Experimente combinar vários efeitos e filtros para criar um efeito visual único e personalizado.<br/><br/>Salve o seu projeto e admire o resultado final!`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22 
    },

    html3Aula11 : { 
        nome: '11', 
        titulo: 'Gráficos vetoriais', 
        conteudo: `No Illustrator, você pode criar e editar gráficos vetoriais, como gráficos de barras, pizza e linha. Aqui estão algumas dicas para trabalhar com gráficos vetoriais:<br/><br/>Criando gráficos: Usando a ferramenta de gráfico, crie gráficos a partir de dados numéricos, como tabelas e planilhas.<br/><br/>Editando gráficos: Edite gráficos existentes, modificando as cores, as legendas e os eixos para personalizar o gráfico.<br/><br/>Adicionando animações: Adicione animações, como transições, às barras ou seções de pizza para criar gráficos mais dinâmicos.<br/><br/>Alterando tipos de gráfico: Altere o tipo de gráfico, como de barras para pizza ou de pizza para linha, para exibir os dados de maneiras diferentes.<br/><br/>Exportando gráficos: Exporte gráficos para outros formatos, como PDF, PNG e SVG, para compartilhá-los com outras pessoas.<br/><br/>Combinando gráficos: Combine gráficos diferentes em um único gráfico para comparar dados ou exibir informações de maneiras diferentes.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22 
    },
    html3Aula12 : { 
        nome: '12', 
        titulo: 'Atividade', 
        conteudo: `Atividade`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22 
    },
    html3Aula13 : { 
        nome: '13', 
        titulo: 'Impressão', 
        conteudo: `Preparação para impressão:<br/><br/>Escolha o tamanho do papel: Escolha o tamanho de papel adequado para o seu projeto.<br/><br/>Configure as margens: Defina as margens do seu projeto, incluindo margens internas, externas e de corte.<br/><br/>Resolução de imagem: Certifique-se de que todas as imagens tenham a resolução correta para impressão. A resolução recomendada é de 300 ppp.<br/><br/>Configuração de cores: Escolha o modo de cor correto, como CMYK ou RGB, para o seu projeto.<br/><br/>Verifique a impressão: Imprima uma amostra do seu projeto para verificar se está tudo correto antes de imprimir a versão final.<br/><br/>Envie para impressão: Envie o seu projeto para impressão quando estiver satisfeito com o resultado.<br/><br/>Lembre-se de sempre verificar as especificações do seu provedor de impressão antes de enviar o seu projeto para impressão.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 22 
    },
}