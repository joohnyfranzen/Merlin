module.exports = {
    excel1 : {
        nome: 'Excel Básico',
        professor: 'Jonathan Franzen Fagundes',
        descricao: 'Curso de Excel iniciante',
        conquista: 'Editor de Planilhas',
        titulo: 'Excel', 
        tier: '1', 
        image: 'excel.png'
    },
    excel2 : {
        nome: 'Excel Intermediario', 
        professor: 'Jonathan Franzen Fagundes', 
        descricao: 'Curso de Excel Intermediario', 
        conquista: 'Editor de Planilhas Profisisonal', 
        titulo: 'Excel', 
        tier: '2', 
        image: 'excel.png'
    },
    excel3 : {
        nome: 'Excel Avançado', 
        professor: 'Jonathan Franzen Fagundes', 
        descricao: 'Curso de Excel Avançado', 
        conquista: 'Mestre em Ediçao de Planilhas', 
        titulo: 'Excel', 
        tier: 'MAX', 
        image: 'excel.png'
    },

    excel1Aula1 : { 
        nome: '1', 
        titulo: 'Introduçao ao Microsoft excel', 
        conteudo: `Aprender a usar o Microsoft excel é importante para muitas pessoas, pois é um dos programas de processamento de texto mais utilizados no mundo. Aqui estão alguns passos básicos para introduzir o Microsoft excel:<br/><br/>Abra o programa: você pode fazer isso clicando no ícone do Microsoft excel no desktop ou pesquisando por ele na barra de pesquisa do seu computador.<br/><br/>Conheça a interface: ao abrir o excel, você verá a tela inicial com diversas opções. Na parte superior da tela, você encontrará o menu principal, onde você pode acessar as ferramentas do programa. À esquerda da tela, você encontrará o painel de navegação, onde você pode acessar seus documentos recentes e modelos.<br/><br/>Crie um novo documento: clique em "Novo" na tela inicial ou vá para "Arquivo" no menu principal e clique em "Novo". Isso abrirá uma nova janela do excel com uma página em branco.<br/><br/>Digite o texto: comece a digitar o seu texto na página em branco. O excel oferece várias opções de formatação, como negrito, itálico, sublinhado e muito mais.<br/><br/>Salve o documento: vá para "Arquivo" no menu principal e clique em "Salvar como". Escolha um local para salvar o documento e dê um nome a ele. Lembre-se de salvar o documento regularmente enquanto trabalha nele.<br/><br/>Esses são alguns passos básicos para começar a trabalhar com o Microsoft excel. Existem muitas outras ferramentas e recursos disponíveis no programa, e é importante continuar aprendendo sobre elas para tornar-se mais eficiente na utilização do excel.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10
    },
    excel1Aula2 : { 
        nome: '2', 
        titulo: 'Entrada de dados', 
        conteudo: `A entrada de dados em uma planilha do Excel é feita na célula selecionada. Você pode selecionar uma célula clicando nela ou usando as setas do teclado.<br/><br/>Para inserir dados em uma célula, basta clicar na célula e começar a digitar. Você também pode colar dados de outras fontes, como outras planilhas ou textos, usando os comandos "Colar" ou "Colar especial".<br/><br/>A formatação de dados em uma planilha do Excel permite que você personalize a aparência dos dados, tornando-os mais fáceis de ler e entender. Algumas dicas para formatar dados em uma planilha do Excel incluem:<br/><br/>Usar cores para destacar dados importantes: você pode colorir células, linhas ou colunas inteiras para chamar atenção para dados específicos.<br/><br/>Usar bordas para separar dados: bordas podem ser adicionadas às células, linhas ou colunas para separar diferentes grupos de dados.<br/><br/>Aplicar estilos de formatação pré-definidos: o Excel inclui vários estilos de formatação pré-definidos, como títulos, subtítulos e cabeçalhos, que podem ser aplicados a células selecionadas.<br/><br/>Usar fórmulas e funções: o Excel possui uma variedade de fórmulas e funções que podem ser usadas para calcular e analisar dados.<br/><br/>Usar filtros e classificações: filtros e classificações podem ser usados para mostrar apenas os dados que você deseja ver, escondendo os demais.<br/><br/>Lembre-se de que a formatação de dados é uma ferramenta importante para ajudar a tornar os dados da sua planilha mais fáceis de entender e analisar. Com essas dicas, você poderá formatar seus dados de maneira eficaz.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10
    },
    excel1Aula3 : { 
        nome: '3', 
        titulo: 'Fórmulas básicas', 
        conteudo: `Algumas das fórmulas básicas do Excel incluem:<br/><br/>SOMA: adiciona valores de células específicas ou de um intervalo de células. Exemplo: =SOMA(A1:A5)<br/><br/>MÉDIA: calcula a média dos valores de células específicas ou de um intervalo de células. Exemplo: =MÉDIA(A1:A5)<br/><br/>CONT: conta o número de células não vazias em um intervalo de células. Exemplo: =CONT(A1:A5)<br/><br/>MAX: retorna o valor máximo de células específicas ou de um intervalo de células. Exemplo: =MAX(A1:A5)<br/><br/>MIN: retorna o valor mínimo de células específicas ou de um intervalo de células. Exemplo: =MIN(A1:A5)<br/><br/>CONCATENAR: junta texto de várias células. Exemplo: =CONCATENAR(A1, " ", B1)<br/><br/>SE: testa uma condição e retorna um valor específico se a condição for verdadeira ou outro valor se for falsa. Exemplo: =SE(A1>5, "Maior que 5", "Menor ou igual a 5")<br/><br/>PROCV: procura um valor em uma tabela e retorna o valor correspondente de outra célula na mesma linha. Exemplo: =PROCV(A1, A2:B6, 2, FALSO)<br/><br/>AGORA: retorna a data e hora atuais. Exemplo: =AGORA()<br/><br/>HOJE: retorna a data atual. Exemplo: =HOJE()`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },
    excel1Aula4 : { 
        nome: '4', 
        titulo: 'Atividade', 
        conteudo: `Para ilustrar como essas funções podem ser utilizadas, aqui está uma atividade de exemplo:<br/><br/>Crie um novo arquivo do Excel e coloque alguns números aleatórios nas células A1 até A5.<br/><br/>Na célula A6, digite "=SOMA(A1:A5)" (sem as aspas) e pressione enter. A célula A6 deverá exibir a soma dos valores nas células A1 a A5.<br/><br/>Na célula A7, digite "=MÉDIA(A1:A5)" (sem as aspas) e pressione enter. A célula A7 deverá exibir a média dos valores nas células A1 a A5.<br/><br/>Na célula A8, digite "=CONTAR(A1:A5)" (sem as aspas) e pressione enter. A célula A8 deverá exibir o número de células não vazias nas células A1 a A5.<br/><br/>Na célula A9, digite "=SE(A1>50, "Maior que 50", "Menor ou igual a 50")" (sem as aspas) e pressione enter. Se o valor na célula A1 for maior do que 50, a célula A9 exibirá "Maior que 50", caso contrário, ela exibirá "Menor ou igual a 50".<br/><br/>Experimente utilizando outras funções, como MAX, MIN, CONTA.SE, SOMASE, MAIOR, MENOR, etc. e veja como elas podem ser usadas para realizar diferentes tipos de cálculos e análises.<br/><br/>Lembre-se de que essas são apenas algumas das muitas funções disponíveis no Excel, e que é importante se familiarizar com a sintaxe das funções e com os diferentes tipos de parâmetros que podem ser utilizados para personalizar os cálculos e análises.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },
    excel1Aula5 : { 
        nome: '5', 
        titulo: 'Gráficos e tabelas', 
        conteudo: `No Excel, existem vários tipos diferentes de gráficos e tabelas que podem ser criados e personalizados para melhor visualizar e apresentar seus dados. Alguns dos tipos mais comuns incluem:<br/><br/>Gráfico de barras: Um gráfico de barras é usado para comparar valores entre categorias diferentes. Ele pode ser criado selecionando os dados que deseja incluir no gráfico e, em seguida, clicando na guia "Insira" e escolhendo "Gráfico de barras".<br/><br/>Gráfico de linhas: Um gráfico de linhas é usado para mostrar como um valor muda ao longo do tempo. Ele pode ser criado selecionando os dados que deseja incluir no gráfico e, em seguida, clicando na guia "Insira" e escolhendo "Gráfico de linhas".<br/><br/>Gráfico de pizza: Um gráfico de pizza é usado para mostrar a proporção de cada parte em relação ao todo. Ele pode ser criado selecionando os dados que deseja incluir no gráfico e, em seguida, clicando na guia "Insira" e escolhendo "Gráfico de pizza".<br/><br/>Gráfico de bolhas: Um gráfico de bolhas é usado para mostrar como vários valores estão relacionados entre si. Ele pode ser criado selecionando os dados que deseja incluir no gráfico e, em seguida, clicando na guia "Insira" e escolhendo "Gráfico de bolhas".<br/><br/>Tabela dinâmica: Uma tabela dinâmica é usada para analisar dados complexos e mostrar resultados em uma tabela resumida. Ele pode ser criado selecionando os dados que deseja incluir na tabela e, em seguida, clicando na guia "Dados" e escolhendo "Tabela dinâmica".<br/><br/>Uma vez criados, os gráficos e tabelas podem ser personalizados alterando cores, fontes, eixos, legendas e outros elementos, para que eles possam ser mais claros e fáceis de entender.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },
    excel1Aula6 : { 
        nome: '6', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Abra o Excel e crie uma nova planilha.<br/><br/>Insira alguns dados de exemplo, como vendas mensais de um produto em diferentes regiões ou resultados de uma pesquisa.<br/><br/>Selecione os dados que deseja incluir no gráfico ou tabela.<br/><br/>Na guia "Insira", escolha o tipo de gráfico ou tabela que deseja criar (barra, linha, pizza, bolhas ou tabela dinâmica).<br/><br/>Personalize o gráfico ou tabela, alterando cores, fontes, eixos, legendas e outros elementos para torná-lo mais claro e fácil de entender.<br/><br/>Salve a planilha e compartilhe com outras pessoas para mostrar como os seus dados podem ser visualizados de maneira clara e eficaz.<br/><br/>Dicas:<br/><br/>Selecionar o tipo de gráfico ou tabela adequado para o tipo de dados que você está trabalhando pode fazer uma grande diferença na sua capacidade de comunicar informações.<br/><br/>Experimente com diferentes opções de personalização para encontrar o estilo que melhor se adapta ao seu público-alvo e objetivos.<br/><br/>Utilize a ferramenta de legenda e rótulos para tornar os gráficos e tabelas fáceis de entender, sem precisar de explicações adicionais.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },
    excel1Aula7 : { 
        nome: '7', 
        titulo: 'Gerenciamento de dados', 
        conteudo: `O gerenciamento de dados é uma parte importante do trabalho com planilhas, pois permite organizar, limpar e analisar informações de maneira eficiente. Algumas das principais ferramentas usadas para gerenciar dados incluem:<br/><br/>Classificação: A classificação é usada para organizar dados em ordem crescente ou decrescente. No Excel, você pode classificar dados selecionando-os e clicando na guia "Dados" e escolhendo "Classificar A-Z" ou "Classificar Z-A".<br/><br/>Filtragem: A filtragem é usada para selecionar apenas os dados que atendem a determinadas condições. No Excel, você pode filtrar dados selecionando-os e clicando na guia "Dados" e escolhendo "Filtro". Em seguida, você pode escolher as condições de filtragem desejadas.<br/><br/>Validação de dados: A validação de dados é usada para garantir que os dados inseridos na planilha sejam válidos e precisos. No Excel, você pode usar a validação de dados selecionando uma célula ou intervalo de células e clicando na guia "Dados" e escolhendo "Validação de dados". Em seguida, você pode escolher as regras de validação desejadas.<br/><br/>Além disso, existem outras ferramentas como busca e substituição, remoção de duplicatas, e combinação de dados que também são usadas para gerenciar dados em planilhas. Utilizar essas ferramentas corretamente pode ajudar a evitar erros e garantir que seus dados sejam precisos e confiáveis.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },
    excel1Aula8 : { 
        nome: '8', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Abra uma planilha do Excel com dados aleatórios.<br/><br/>Utilize a ferramenta de classificação para organizar os dados em ordem crescente ou decrescente. Experimente classificar por diferentes colunas e observe como os dados são organizados.<br/><br/>Utilize a ferramenta de filtragem para selecionar apenas os dados que atendem a determinadas condições. Por exemplo, você pode filtrar por uma data específica, por um valor mínimo ou máximo, ou por uma palavra-chave. Experimente filtrar por diferentes colunas e observe como os dados são selecionados.<br/><br/>Utilize a ferramenta de validação de dados para garantir que os dados inseridos na planilha sejam válidos e precisos. Por exemplo, você pode criar regras para garantir que uma célula contenha apenas números, ou que uma data esteja dentro de um intervalo específico. Experimente criar diferentes regras de validação e observe como elas afetam a inserção de dados na planilha.<br/><br/>Experimente usar outras ferramentas como busca e substituição, remoção de duplicatas, e combinação de dados. Analise como essas ferramentas podem ser úteis para gerenciar seus dados.<br/><br/>Analise como as ferramentas de gerenciamento de dados usadas podem ajudar a evitar erros e garantir que seus dados sejam precisos e confiáveis.<br/><br/>Se possível, tente aplicar essas ferramentas em um conjunto de dados real para ver como elas podem ser úteis na prática.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },
    excel1Aula9 : { 
        nome: '9', 
        titulo: 'Atividade ', 
        conteudo: `Exercício 1: Classificação<br/><br/>Abra o Excel e crie uma nova planilha.<br/><br/>Insira alguns dados de exemplo, como nomes de pessoas e suas idades.<br/><br/>Selecione todos os dados e vá para a guia "Dados".<br/><br/>Clique em "Classificar A-Z" para classificar os dados em ordem alfabética pelo nome.<br/><br/>Verifique se os dados foram classificados corretamente.<br/><br/>Experimente classificar os dados por idade, clicando em "Classificar Z-A".<br/><br/>Verifique se os dados foram classificados corretamente.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },
    excel1Aula10 : { 
        nome: '10', 
        titulo: 'Atividade', 
        conteudo: `Exercício 2: Filtragem<br/><br/>Abra o Excel e crie uma nova planilha.<br/><br/>Insira alguns dados de exemplo, como nomes de pessoas, idades e salários.<br/><br/>Selecione todos os dados e vá para a guia "Dados".<br/><br/>Clique em "Filtro" para habilitar a filtragem.<br/><br/>Escolha uma coluna, digamos "Idade" e selecione um valor, digamos "25".<br/><br/>Verifique se apenas as linhas com idade 25 foram selecionadas.<br/><br/>Experimente filtrar os dados por salário, selecionando um intervalo de valores.<br/><br/>Verifique se os dados foram filtrados corretamente.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },
    excel1Aula11 : { 
        nome: '11', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Crie uma planilha de vendas de uma loja, com as colunas: Produto, Quantidade Vendida, Preço Unitário e Total (Preço Unitário x Quantidade Vendida).<br/><br/>Preencha a planilha com alguns dados fictícios, utilizando a função =ALEATÓRIO() para gerar números aleatórios.<br/><br/>Utilize a função SOMA para calcular o total de vendas para cada produto, na coluna Total. Exemplo: =SOMA(C2:C5)<br/><br/>Utilize a função MÉDIA para calcular o preço médio de cada produto, na coluna Preço Unitário. Exemplo: =MÉDIA(D2:D5)<br/><br/>Utilize a função SOMA para calcular o total de vendas geral da loja, na célula E1. Exemplo: =SOMA(E2:E5)<br/><br/>Utilize a função MÉDIA para calcular o preço médio de todos os produtos vendidos na loja, na célula F1. Exemplo: =MÉDIA(D2:D5)<br/><br/>Analise os resultados e tente identificar padrões ou tendências nas suas vendas, como quais produtos são mais vendidos ou quais têm preços mais elevados.<br/><br/>Utilize esses dados para tomar decisões importantes para a sua loja, como aumentar o estoque de produtos populares ou diminuir os preços de produtos menos vendidos.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },
    excel1Aula12 : { 
        nome: '12', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Abra uma nova planilha do Excel e insira os seguintes valores nas células A1 a A5: 10, 20, 30, 40, 50.<br/><br/>Na célula A6, utilize a fórmula =CONT(A1:A5) para contar o número de células não vazias no intervalo A1 a A5. O resultado deve ser 5.<br/><br/>Insira valores adicionais nas células A1 a A5, incluindo algumas células vazias. Utilize novamente a fórmula =CONT(A1:A5) na célula A6 para contar novamente o número de células não vazias.<br/><br/>Na célula A7, utilize a fórmula =MAX(A1:A5) para encontrar o valor máximo no intervalo A1 a A5. O resultado deve ser 50.<br/><br/>Altere alguns dos valores nas células A1 a A5 e utilize novamente a fórmula =MAX(A1:A5) na célula A7 para verificar se o resultado muda de acordo com as alterações.<br/><br/>Adicione outras fórmulas, como a fórmula =SOMA(A1:A5) na célula A8 para calcular a soma dos valores no intervalo A1 a A5 e a fórmula =MÉDIA(A1:A5) na célula A9 para calcular a média dos valores no intervalo A1 a A5.<br/><br/>Experimente utilizar essas fórmulas com outros intervalos de células e diferentes valores para entender como elas funcionam.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },
    excel1Aula13 : { 
        nome: '13', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Crie uma tabela com as colunas "Nome", "Preço" e "Quantidade". Preencha-a com alguns dados fictícios.<br/><br/>Usando a fórmula =SOMA(B2:B5), calcule a soma dos preços dos produtos na coluna "Preço". Insira o resultado na célula B6.<br/><br/>Usando a fórmula =MÉDIA(B2:B5), calcule a média dos preços dos produtos na coluna "Preço". Insira o resultado na célula B7.<br/><br/>Usando a fórmula =CONT(A2:A5), calcule o número de nomes de produtos na coluna "Nome". Insira o resultado na célula A6.<br/><br/>Usando a fórmula =MAX(B2:B5), encontre o preço máximo dos produtos na coluna "Preço". Insira o resultado na célula B8.<br/><br/>Usando a fórmula =MIN(B2:B5), encontre o preço mínimo dos produtos na coluna "Preço". Insira o resultado na célula B9.<br/><br/>Usando a fórmula =CONCATENAR(A2, " - ", B2), junte o nome do produto com o preço. Insira o resultado na célula C2 e aplique a fórmula em toda a coluna "C"<br/><br/>Analise o resultado da tabela e tire suas conclusões.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },
    excel1Aula14 : { 
        nome: '14', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Crie uma tabela com as colunas "Nome", "Idade" e "Faixa Etária". Preencha alguns exemplos de dados.<br/><br/>Utilize a fórmula SE para preencher a coluna "Faixa Etária" com "Criança" se a idade for menor que 12, "Adolescente" se a idade for maior ou igual a 12 e menor que 18, e "Adulto" se a idade for maior ou igual a 18. Exemplo: =SE(B2<12, "Criança", SE(B2<18, "Adolescente", "Adulto"))<br/><br/>Crie outra tabela com as colunas "Código" e "Preço". Preencha alguns exemplos de dados.<br/><br/>Utilize a fórmula PROCV para procurar o preço correspondente a um código específico na tabela "Preço" e retorná-lo na tabela "Nome, Idade e Faixa Etária". Exemplo: =PROCV(A2, C1:D6, 2, FALSO)<br/><br/>Teste sua fórmula com diferentes códigos para garantir que está funcionando corretamente.<br/><br/>Obs: Essas são formula básicas do excel, mas existe muitas outras formulas que podem ser utilizadas para realizar outros tipos de operações e análises em suas planilhas.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },
    excel1Aula15 : { 
        nome: '15', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Crie uma planilha no Excel com as colunas "Data" e "Hora".<br/><br/>Na célula "A1", digite "Data" e na célula "B1", digite "Hora".<br/><br/>Na célula "A2", digite a fórmula "=HOJE()" e na célula "B2", digite a fórmula "=AGORA()".<br/><br/>Pressione enter e veja que as células "A2" e "B2" preencheram automaticamente com a data e hora atuais.<br/><br/>Agora, preencha as células "A3" e "B3" com fórmulas "=HOJE()" e "=AGORA()" novamente. Pressione enter e veja que as células foram atualizadas com a data e hora atuais novamente.<br/><br/>Repita o passo 5 em outras células para ver como a função AGORA e HOJE sempre atualizam automaticamente para a data e hora atuais.<br/><br/>Experimente utilizar as fórmulas de data e hora para criar planilhas de registro de tempo, calendários, entre outros.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 10 
    },

    excel2Aula1 : { 
        nome: '1', 
        titulo: 'Funções avançadas ', 
        conteudo: `Funções avançadas no Excel incluem as funções matemáticas e estatísticas, como as seguintes:<br/><br/>SOMA.SE: Esta função permite somar valores de uma determinada coluna que atendem a certas condições. Ela é utilizada da seguinte forma: SOMA.SE(intervalo, condição). Por exemplo, a fórmula =SOMA.SE(A1:A10, "Maçã") somaria todos os valores na coluna A que contenham a palavra "Maçã".<br/><br/>CONT.SE: Esta função conta o número de células que atendem a certas condições. Ela é utilizada da seguinte forma: CONT.SE(intervalo, condição). Por exemplo, a fórmula =CONT.SE(A1:A10, "Maçã") contaria o número de células na coluna A que contenham a palavra "Maçã".<br/><br/>MÉDIA: Esta função calcula a média aritmética de um conjunto de números. Ela é utilizada da seguinte forma: MÉDIA(intervalo). Por exemplo, a fórmula =MÉDIA(A1:A10) calcularia a média dos valores na coluna A.<br/><br/>DESVIO PADRÃO: Esta função calcula o desvio padrão de um conjunto de números. Ela é utilizada da seguinte forma: DESVIO.P(intervalo). Por exemplo, a fórmula =DESVIO.P(A1:A10) calcularia o desvio padrão dos valores na coluna A.<br/><br/>Além dessas, existem outras funções avançadas, como funções de busca, como a função PROCV, e funções de data e hora, como a função HOJE. Utilizar essas funções corretamente pode ajudar a automatizar tarefas e tornar a análise de dados mais rápida e precisa.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 11 
    },
    excel2Aula2 : { 
        nome: '2', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Crie uma tabela com as colunas "Produto", "Preço" e "Quantidade". Preencha as colunas com dados fictícios.<br/><br/>Utilize a função SOMA.SE para somar os preços dos produtos que têm a palavra "Maçã" no nome. A fórmula seria =SOMA.SE(B2:B10, "Maçã").<br/><br/>Utilize a função CONT.SE para contar quantos produtos têm a palavra "Maçã" no nome. A fórmula seria =CONT.SE(A2:A10, "Maçã").<br/><br/>Utilize a função MÉDIA para calcular a média de preço dos produtos. A fórmula seria =MÉDIA(B2:B10).<br/><br/>Utilize a função DESVIO PADRÃO para calcular o desvio padrão dos preços dos produtos. A fórmula seria =DESVIO.P(B2:B10).<br/><br/>Utilize a função SOMA para somar a quantidade total de todos os produtos. A fórmula seria =SOMA(C2:C10).<br/><br/>Essas são apenas algumas das funções avançadas que podem ser utilizadas no Excel, mas elas já são úteis para realizar cálculos e análises de dados mais complexos. Continuando a estudar outras funções e técnicas, você pode aprimorar ainda mais suas habilidades no Excel e tornar seu trabalho mais eficiente.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 11 
    },
    excel2Aula3 : { 
        nome: '3', 
        titulo: 'Personalizar Gráficos e Tabelas', 
        conteudo: `Para criar e personalizar gráficos e tabelas dinâmicas no Excel, você pode seguir estes passos:<br/><br/>Abra o Excel e selecione os dados que deseja usar para criar o gráfico ou tabela dinâmica.<br/><br/>Clique em "Inserir" na barra de ferramentas e selecione o tipo de gráfico ou tabela que deseja criar, como um gráfico de barras, um gráfico de linhas ou uma tabela dinâmica.<br/><br/>Personalize o gráfico ou tabela selecionando opções como cores, fontes, legendas e rótulos.<br/><br/>Adicione filtros e outros recursos para ajudar a analisar e interpretar os dados, como campos de dados, campos de classificação e campos de totais.<br/><br/>Use as ferramentas de análise de dados, como os campos de dados e campos de totais, para criar vistas dinâmicas dos seus dados e explorar diferentes perspectivas.<br/><br/>Salve ou compartilhe o gráfico ou tabela dinâmica para que outras pessoas possam usá-lo.<br/><br/>Este são os passos gerais para criar e personalizar gráficos e tabelas dinâmicas no Excel. No entanto, existem muitas opções e recursos adicionais disponíveis, então é recomendável ler a documentação do Excel ou assistir a tutoriais on-line para aprender mais sobre as ferramentas específicas disponíveis.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 11 
    },
    excel2Aula4 : { 
        nome: '4', 
        titulo: 'Importar e Exportar Dados', 
        conteudo: `Importar e exportar dados no Excel é uma tarefa simples que pode ser feita usando as ferramentas de importação e exportação de dados fornecidas pelo próprio Excel. Aqui estão alguns passos específicos para importar e exportar dados no Excel:<br/><br/>Importar dados de um arquivo CSV:<br/><br/>Abra o Excel e clique em "Arquivo" e depois em "Abrir".<br/><br/>Selecione o arquivo CSV que deseja importar e clique em "Abrir".<br/><br/>Escolha a opção "Dividir em colunas" no assistente de importação de dados e clique em "Concluir".<br/><br/>Os dados serão importados para o Excel e exibidos em uma nova planilha.<br/><br/>Importar dados de um banco de dados:<br/><br/>Abra o Excel e clique em "Dados" e depois em "De Outras Fontes".<br/><br/>Selecione "De banco de dados" e clique em "Avançar".<br/><br/>Escolha o tipo de banco de dados que você está usando e forneça as informações de conexão necessárias.<br/><br/>Selecione a tabela ou consulta que deseja importar e clique em "Concluir".<br/><br/>Os dados serão importados para o Excel e exibidos em uma nova planilha.<br/><br/>Exportar dados para um arquivo CSV:<br/><br/>Selecione a planilha que deseja exportar e clique em "Arquivo" e depois em "Salvar Como".<br/><br/>Escolha "CSV" como o tipo de arquivo e forneça um nome para o arquivo.<br/><br/>Clique em "Salvar" para exportar os dados para o arquivo CSV.<br/><br/>Lembre-se de que esses são apenas exemplos gerais de como importar e exportar dados no Excel. Há muitas outras opções e configurações disponíveis dependendo do tipo de fonte de dados e do formato de dados. A documentação do Excel e tutoriais on-line podem fornecer informações adicionais sobre como trabalhar com diferentes tipos de dados.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 11 
    },
    excel2Aula5 : { 
        nome: '5', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Baixe um arquivo CSV de exemplo de sua escolha (por exemplo, dados de vendas de uma loja) e abra-o no Excel.<br/><br/>Siga os passos acima para importar os dados do arquivo CSV para o Excel, usando a opção "Dividir em colunas" no assistente de importação de dados.<br/><br/>Utilize as ferramentas de análise de dados do Excel, como gráficos e tabelas dinâmicas, para explorar os dados e responder a perguntas como: Qual foi o mês com maior número de vendas? Qual foi o produto mais vendido? Qual foi o estado com maior número de vendas?<br/><br/>Conecte-se a um banco de dados de sua escolha (por exemplo, MySQL ou SQL Server) e importe uma tabela de dados para o Excel, seguindo os passos acima.<br/><br/>Utilize as ferramentas de análise de dados do Excel para explorar os dados importados do banco de dados e responder a perguntas como: Qual foi o mês com maior número de vendas? Qual foi o produto mais vendido? Qual foi o estado com maior número de vendas?<br/><br/>Exporte a planilha com os dados importados do banco de dados para um arquivo CSV, seguindo os passos acima.<br/><br/>Abra o arquivo CSV exportado e verifique se os dados foram exportados corretamente.<br/><br/>Utilize a documentação do Excel e tutoriais on-line para aprender mais sobre as opções e configurações disponíveis para importar e exportar dados no Excel.<br/><br/>Obs: é importante lembrar que essa atividade é apenas um exemplo e pode ser adaptada de acordo com a necessidade de cada pessoa.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 11 
    },
    excel2Aula6 : { 
        nome: '6', 
        titulo: 'Macros e programação VBA', 
        conteudo: `Macros e programação VBA permitem automatizar tarefas repetitivas no Excel, como copiar e colar dados, formatar células, criar gráficos e muito mais. Usando a linguagem de programação VBA (Visual Basic for Applications), você pode criar macros personalizadas e scripts para automatizar tarefas mais complexas no Excel.<br/><br/>Para criar uma macro, você pode gravar suas ações no Excel usando a ferramenta de gravação de macro. Isso permite que você capture as etapas exatas que deseja automatizar e as salve como uma macro que pode ser executada com apenas um clique.<br/><br/>Para programar usando VBA, você deve abrir o editor de VBA clicando em "Desenvolvedor" na guia "Início" do Excel. Isso abrirá a janela do editor de VBA, onde você pode escrever, editar e depurar seu código. Existem vários comandos e funções disponíveis na linguagem VBA que podem ser usados para automatizar tarefas no Excel, como selecionar células, manipular dados e criar caixas de diálogo personalizadas.<br/><br/>Ao aprender a programar usando VBA, você pode criar soluções automatizadas para problemas específicos do seu trabalho e tornar suas tarefas diárias no Excel mais eficientes e menos tediosas. No entanto, é importante ter alguma experiência com programação antes de começar a trabalhar com VBA e sempre testar as macros antes de usá-las em dados importantes.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 11 
    },
    excel2Aula7 : { 
        nome: '7', 
        titulo: 'Gerenciamento de Dados', 
        conteudo: `Gerenciamento de dados no Excel é a capacidade de manipular e organizar grandes conjuntos de dados de maneira eficiente e precisa. Aqui estão alguns recursos e técnicas comuns usadas no gerenciamento de dados no Excel:<br/><br/>Remoção de duplicatas: O Excel possui uma ferramenta nativa chamada "Remover Duplicatas" que permite remover facilmente linhas duplicadas de uma planilha.<br/><br/>Combinação de dados de diferentes fontes: O Excel possui uma ferramenta chamada "Consolidar" que permite combinar dados de diferentes fontes em uma única planilha.<br/><br/>Filtros avançados: O Excel possui recursos de filtragem avançados, como filtros personalizados e filtros avançados, que permitem filtrar dados com base em vários critérios.<br/><br/>Classificação: O Excel possui uma ferramenta chamada "Classificar" que permite classificar dados em ordem crescente ou decrescente com base em uma ou mais colunas.<br/><br/>Validação de dados: O Excel possui uma ferramenta de validação de dados que permite definir regras para dados de entrada para garantir que os dados sejam válidos e precisos.<br/><br/>Pivot Table: É uma ferramenta muito poderosa que permite agrupar, analisar e resumir grandes quantidades de dados.<br/><br/>Formulas: O Excel possui uma variedade de fórmulas e funções que podem ser usadas para manipular e analisar dados.<br/><br/>Esses são apenas alguns exemplos de como o Excel pode ser usado para gerenciar dados. A documentação do Excel e tutoriais on-line podem fornecer informações adicionais sobre como trabalhar com diferentes tipos de dados.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 11 
    },
    excel2Aula8 : { 
        nome: '8', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Crie uma planilha no Excel com pelo menos 10 linhas de dados de exemplo.<br/><br/>Utilize a ferramenta "Remover Duplicatas" para remover qualquer linha duplicada na planilha.<br/><br/>Utilize a ferramenta "Consolidar" para combinar esses dados com outra planilha de exemplo que você criou.<br/><br/>Utilize as ferramentas de filtragem avançada para filtrar os dados com base em diferentes critérios.<br/><br/>Utilize a ferramenta "Classificar" para classificar os dados em ordem crescente ou decrescente com base em uma ou mais colunas.<br/><br/>Utilize a ferramenta de validação de dados para definir regras para dados de entrada.<br/><br/>Crie uma tabela dinâmica para resumir e analisar os dados.<br/><br/>Utilize uma ou mais fórmulas ou funções para manipular e analisar os dados.<br/><br/>Lembre-se de sempre salvar sua planilha e fazer backups regulares, para evitar perder seus dados. E se você tiver dúvidas ou encontrar dificuldades, procure recursos adicionais on-line ou pergunte a alguém com mais experiência.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 11 
    },
    excel2Aula9 : { 
        nome: '9', 
        titulo: 'Excel', 
        conteudo: `O Excel é uma ferramenta muito flexível e pode ser integrado com várias outras ferramentas e aplicativos. Alguns exemplos de como o Excel pode ser conectado e integrado incluem:<br/><br/>Power BI: O Power BI é uma ferramenta de análise e visualização de dados que pode ser conectada ao Excel para criar relatórios e dashboards interativos. Isso permite que os usuários analisem e visualize dados do Excel de uma forma mais visual e fácil de entender.<br/><br/>SQL Server: O Excel pode ser conectado ao SQL Server, um banco de dados relacional, usando o Power Query. Isso permite que os usuários importem e trabalhem com dados do SQL Server diretamente no Excel.<br/><br/>Power Query: O Power Query é uma ferramenta de análise de dados incluída no Excel que permite importar, limpar e transformar dados de várias fontes diferentes. Isso inclui conectividade com bancos de dados, arquivos e fontes de dados da web.<br/><br/>API: O Excel também pode ser conectado a APIs (Application Programming Interface) para obter dados de outros aplicativos e sistemas. Isso permite que os usuários importem dados de outras fontes e os usem no Excel.<br/><br/>Esses são apenas alguns exemplos de como o Excel pode ser conectado e integrado com outras ferramentas. A documentação do Excel e tutoriais on-line podem fornecer informações adicionais sobre como conectar o Excel a outros aplicativos e sistemas.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 11 
    },
    excel2Aula10 : { 
        nome: '1', 
        titulo: 'Análise de Dados', 
        conteudo: `Análise de dados é o processo de coletar, organizar, interpretar e tirar conclusões a partir de dados. No Excel, existem vários recursos que podem ser usados para analisar dados, incluindo:<br/><br/>Estatísticas descritivas: O Excel possui uma variedade de funções estatísticas, como média, mediana, desvio padrão e coeficiente de variação, que podem ser usadas para resumir e descrever dados.<br/><br/>Análise de tendência: O Excel possui ferramentas como gráficos de tendência e funções como a função tendência linear, que podem ser usadas para identificar tendências e prever valores futuros.<br/><br/>Regressão linear: O Excel possui a função regressão linear, que pode ser usada para modelar relações entre variáveis e prever valores futuros.<br/><br/>Análise de correlação: O Excel possui a função correlação, que pode ser usada para medir a relação entre dois conjuntos de dados.<br/><br/>Pivot Table: O Excel possui uma ferramenta chamada Pivot Table, que permite agrupar, analisar e resumir grandes quantidades de dados.<br/><br/>Gráficos e tabelas dinâmicas: O Excel possui uma variedade de tipos de gráficos e tabelas dinâmicas que podem ser usados para visualizar e analisar dados de maneira intuitiva.<br/><br/>É importante lembrar que a análise de dados é um processo iterativo, onde é necessário coletar, organizar, limpar e interpretar os dados antes de tirar conclusões. A documentação do Excel e tutoriais on-line podem fornecer informações adicionais sobre como trabalhar com diferentes tipos de dados e análise de dados.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 11 
    },


    excel3Aula1 : { 
        nome: '1', 
        titulo: 'Funções Avançadas', 
        conteudo: `As funções avançadas do Excel incluem:<br/><br/>INDEX: permite procurar valores em uma tabela ou intervalo<br/><br/>MATCH: encontra o índice de um valor específico em uma tabela ou intervalo<br/><br/>VLOOKUP: procura por um valor específico em uma tabela e retorna um valor correspondente de uma coluna específica<br/><br/>HLOOKUP: funciona da mesma forma que o VLOOKUP, mas procura em uma linha em vez de uma coluna<br/><br/>OFFSET: retorna uma referência a uma célula ou intervalo de células, com base em um determinado deslocamento a partir de uma célula de referência<br/><br/>INDIRECT: retorna uma referência a uma célula ou intervalo de células, com base em uma string de texto que contém o endereço da célula<br/><br/>CHOOSE: escolhe um valor de uma lista de valores baseado em um índice específico<br/><br/>IF: testa uma condição e retorna um valor se a condição for verdadeira ou outro valor se a condição for falsa<br/><br/>AND: testa várias condições e retorna verdadeiro se todas as condições forem verdadeiras, caso contrário retorna falso<br/><br/>OR: testa várias condições e retorna verdadeiro se qualquer uma das condições for verdadeira, caso contrário retorna falso.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 12 
    },
    excel3Aula2 : { 
        nome: '2', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Crie uma tabela no Excel com as colunas "Código", "Produto" e "Preço". Preencha-a com alguns dados de exemplo.<br/><br/>Utilize a função INDEX para procurar o valor da coluna "Produto" onde o valor da coluna "Código" é igual a "P001".<br/><br/>Utilize a função MATCH para encontrar o índice da linha onde o valor da coluna "Produto" é igual a "Caneta Azul".<br/><br/>Utilize a função VLOOKUP para procurar o preço do produto "Caneta Azul" na tabela. Certifique-se de que a referência de procura é a coluna "Produto" e que a coluna de retorno é a coluna "Preço".<br/><br/>Dicas:<br/><br/>Para utilizar as funções INDEX e MATCH, você precisará definir o intervalo de células da tabela e o valor de procura.<br/><br/>Para utilizar a função VLOOKUP, você precisará definir o valor de procura, o intervalo de células da tabela, a coluna de referência e a coluna de retorno.<br/><br/>Certifique-se de que a tabela esteja ordenada de acordo com a coluna de referência, ou o VLOOKUP pode não funcionar corretamente.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 12 
    },
    excel3Aula3 : { 
        nome: '3', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Crie uma planilha no Excel com os seguintes dados:<br/><br/>Nome	Idade	Cidade<br/><br/>Ana	25	São Paulo<br/><br/>Bruno	30	Rio de Janeiro<br/><br/>Carlos	35	Belo Horizonte<br/><br/>Daniela	40	Salvador<br/><br/>Eduardo	45	Recife<br/><br/>Utilize a função HLOOKUP para procurar a cidade de Bruno. O resultado deve ser "Rio de Janeiro".<br/><br/>Utilize a função OFFSET para retornar a referência da célula que contém a idade de Carlos. O resultado deve ser "C3".<br/><br/>Utilize a função INDIRECT para retornar o valor da célula que contém a idade de Eduardo, a partir de uma string de texto que contém o endereço da célula. Utilize a string "D5" como endereço da célula e o resultado deve ser "45".<br/><br/>Nota: Certifique-se de que as células da tabela estejam formatadas corretamente como tabela e as colunas tenham cabeçalhos.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 12 
    },
    excel3Aula4 : { 
        nome: '4', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Crie uma tabela com informações sobre funcionários, incluindo nome, cargo, salário e departamento.<br/><br/>Utilize a função INDEX para procurar o nome de um funcionário específico baseado em seu número de identificação.<br/><br/>Utilize a função MATCH para encontrar o índice do departamento de um funcionário específico.<br/><br/>Utilize a função VLOOKUP para encontrar o salário de um funcionário específico baseado em seu nome.<br/><br/>Utilize a função HLOOKUP para encontrar o cargo de um funcionário específico baseado em seu número de identificação.<br/><br/>Utilize a função OFFSET para encontrar a célula que contém o salário de um funcionário específico, baseado em sua posição na tabela.<br/><br/>Utilize a função INDIRECT para encontrar o salário de um funcionário específico baseado em uma string de texto que contém o endereço da célula.<br/><br/>Utilize a função CHOOSE para escolher o nome de um funcionário específico baseado em seu índice na tabela.<br/><br/>Utilize a função IF para testar se o salário de um funcionário específico é maior do que um determinado valor e, se for verdade, retornar "Alto Salário" e, se for falso, retornar "Salário Médio".<br/><br/>Utilize a função AND para testar se o cargo de um funcionário específico é "Gerente" E seu salário é maior do que um determinado valor e, se ambas as condições forem verdadeiras, retornar "Gerente de Alto Salário" e, se uma das condições for falsa, retornar "Não é Gerente de Alto Salário".<br/><br/>Utilize a função OR para testar se o departamento de um funcionário específico é "Vendas" OU "Marketing" e, se qualquer uma das condições for verdadeira, retornar "Departamento de Vendas ou Marketing" e, se ambas as condições forem falsas, retornar "Departamento Não Vendas ou Marketing".`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 12 
    },
    excel3Aula5 : { 
        nome: '5', 
        titulo: 'Funçoes Avançadas', 
        conteudo: `NOT: inverte o valor de uma condição (verdadeiro para falso e vice-versa)<br/><br/>COUNTIF: conta o número de células em um intervalo que atendem a uma determinada condição<br/><br/>SUMIF: soma o valor de células em um intervalo que atendem a uma determinada condição<br/><br/>AVERAGEIF: calcula a média de valores de células em um intervalo que atendem a uma determinada condição<br/><br/>MAXIFS: retorna o maior valor em um intervalo que atende a várias condições<br/><br/>MINIFS: retorna o menor valor em um intervalo que atende a várias condições<br/><br/>COUNTIFS: conta o número de células em um intervalo que atendem a várias condições<br/><br/>SUMIFS: soma o valor de células em um intervalo que atendem a várias condições<br/><br/>AVERAGEIFS: calcula a média de valores de células em um intervalo que atendem a várias condições<br/><br/>SUMPRODUCT: multiplica as matrizes correspondentes de intervalos ou matrizes e soma os resultados<br/><br/>IFERROR: retorna um valor específico se uma fórmula contém um erro, caso contrário, retorna o resultado da fórmula<br/><br/>IFS: testa várias condições e retorna o primeiro valor verdadeiro<br/><br/>SWITCH: avalia uma expressão e retorna um valor correspondente a partir de uma lista de valores<br/><br/>TEXTJOIN: junta texto de várias células usando um separador especificado<br/><br/>CONCAT: junta texto de várias células<br/><br/>CONCATENATE: junta texto de várias células<br/><br/>TEXT: formata um número como texto`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 12 
    },
    excel3Aula6 : { 
        nome: '6', 
        titulo: 'Atividade ', 
        conteudo: `Atividade:<br/><br/>Crie uma tabela com as colunas "Produto", "Preço" e "Categoria". Preencha a tabela com alguns dados fictícios.<br/><br/>Utilize a função INDEX para encontrar o preço do produto "Arroz" na tabela.<br/><br/>Utilize a função MATCH para encontrar o índice da categoria "Alimentos" na tabela.<br/><br/>Utilize a função VLOOKUP para encontrar o preço do produto "Feijão" baseado na sua categoria "Alimentos".<br/><br/>Utilize a função HLOOKUP para encontrar a categoria do produto "Açúcar" baseado no seu preço.<br/><br/>Utilize a função OFFSET para encontrar o preço do produto que está duas células abaixo e três células à direita da célula atual.<br/><br/>Utilize a função INDIRECT para encontrar o preço do produto cuja célula de referência é "A4".<br/><br/>Utilize a função CHOOSE para escolher a categoria do produto de acordo com o seu índice (1 = Alimentos, 2 = Limpeza, 3 = Eletrônicos)<br/><br/>Utilize a função IF para verificar se o preço do produto é maior que 10, e se for, exibir "Caro", caso contrário exibir "Barato".<br/><br/>Utilize a função AND para verificar se o preço do produto é maior que 5 E se a categoria é "Alimentos". Se ambas as condições forem verdadeiras, exibir "Promoção", caso contrário exibir "Preço normal".<br/><br/>Utilize a função OR para verificar se o preço do produto é menor que 5 OU se a categoria é "Eletrônicos". Se qualquer uma das condições for verdadeira, exibir "Desconto", caso contrário exibir "Preço normal".<br/><br/>Utilize a função NOT para inverter o resultado da função IF (se o preço do produto é maior que 10, exibir "Barato", caso contrário exibir "Caro").<br/><br/>Utilize a função COUNTIF para contar quantos produtos na tabela têm preço maior que 15.<br/><br/>Utilize a função SUMIF para somar os preços dos produtos na tabela que têm categoria "Limpeza".`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 12 
    },
    excel3Aula7 : { 
        nome: '7', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Abra o Microsoft Excel ou o programa de planilha que você estiver usando.<br/><br/>Crie uma planilha com os seguintes dados:<br/><br/>Nome	Cidade	Venda<br/><br/>João	São Paulo	500<br/><br/>Maria	Rio de Janeiro	300<br/><br/>José	São Paulo	800<br/><br/>Ana	Rio de Janeiro	700<br/><br/>Pedro	São Paulo	600<br/><br/>Na célula D2, digite a fórmula "=AVERAGEIF(B2:B5, "São Paulo", C2:C5)". Isso calculará a média das vendas de João, José e Pedro, pois eles são de São Paulo.<br/><br/><br/><br/>Na célula D3, digite a fórmula "=MAXIFS(C2:C5, B2:B5, "Rio de Janeiro")". Isso retornará o maior valor de vendas dos clientes que residem no Rio de Janeiro, que é 700.<br/><brNa célula D4, digite a fórmula "=MINIFS(C2:C5, B2:B5, "São Paulo")". Isso retornará o menor valor de vendas dos clientes que residem em São Paulo, que é 500.<br/><br/>Verifique os resultados das células D2, D3 e D4. Eles devem mostrar a média das vendas de clientes de São Paulo, o maior valor de vendas de clientes do Rio de Janeiro e o menor valor de vendas de clientes de São Paulo, respectivamente.<br/><br/>Nota: As fórmulas são para exemplo, pode variar de acordo com o programa utilizado.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 12 
    },
    excel3Aula8 : { 
        nome: '8', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Abra uma planilha no Excel ou Google Sheets.<br/><br/>Insira alguns dados de exemplo, como uma tabela de vendas que contenha informações como data, categoria de produto, nome do produto, preço e quantidade vendida.<br/><br/>Utilize a função COUNTIFS para contar o número de itens vendidos em uma determinada categoria de produto. Por exemplo, =COUNTIFS(B2:B10,"Eletrônicos"). Isso contaria o número de itens vendidos na categoria "Eletrônicos".<br/><br/>Utilize a função SUMIFS para somar o valor total de vendas em uma determinada categoria de produto. Por exemplo, =SUMIFS(D2:D10,B2:B10,"Eletrônicos"). Isso somaria o valor total de vendas na categoria "Eletrônicos".<br/><br/>Utilize a função AVERAGEIFS para calcular a média de preço de itens vendidos em uma determinada categoria de produto. Por exemplo, =AVERAGEIFS(D2:D10,B2:B10,"Eletrônicos"). Isso calcularia a média de preço dos itens vendidos na categoria "Eletrônicos".<br/><br/>Experimente usar múltiplas condições, como =COUNTIFS(B2:B10,"Eletrônicos",C2:C10,"Celular"). Isso contaria o número de celulares vendidos na categoria "Eletrônicos".<br/><br/>Jogue com as funções e use como quiser.<br/><br/>Essas funções são muito úteis para analisar dados e tirar insights valiosos a partir deles, como identificar tendências de vendas, segmentar clientes, etc.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 12 
    },
    excel3Aula9 : { 
        nome: '9', 
        titulo: 'Atividade ', 
        conteudo: `Atividade:<br/><br/>Abra uma planilha no Excel ou Google Sheets.<br/><br/>Insira alguns dados de exemplo, como uma tabela de vendas que contenha informações como data, categoria de produto, nome do produto, preço e quantidade vendida.<br/><br/>Utilize a função SUMPRODUCT para multiplicar os preços de um produto com a quantidade vendida e somar o resultado. Por exemplo, =SUMPRODUCT(D2:D10,E2:E10). Isso multiplicaria cada preço pelo respectivo número vendido e somaria o resultado.<br/><br/>Utilize a função IFERROR para retornar um valor específico se uma fórmula contém um erro. Por exemplo, =IFERROR(AVERAGE(D2:D10),"N/A"). Isso retornaria "N/A" se a fórmula da média contivesse um erro.<br/><br/>Utilize a função IFS para testar várias condições e retornar o primeiro valor verdadeiro. Por exemplo, =IFS(D2>100,"Alto",D2>50,"Médio",D2<50,"Baixo"). Isso testaria se o preço é maior que 100, maior que 50, ou menor que 50 e retornaria "Alto", "Médio" ou "Baixo" conforme a condição.<br/><br/>Essas funções são muito úteis para realizar cálculos avançados e lidar com erros na planilha, como SUMPRODUCT para multiplicar matrizes e somar os resultados, IFERROR para tratar erros e IFS para testar várias condições e retornar o primeiro valor verdadeiro.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 12 
    },
    excel3Aula10 : { 
        nome: '10', 
        titulo: 'Atividade', 
        conteudo: `Atividade:<br/><br/>Abra uma planilha no Excel ou Google Sheets.<br/><br/>Insira alguns dados de exemplo, como uma tabela de contato com nomes, endereços e números de telefone.<br/><br/>Utilize a função CONCAT ou CONCATENATE para juntar o texto de várias células. Por exemplo, =CONCAT(A2," ",B2,", ",C2,", Tel: ",D2) ou =CONCATENATE(A2," ",B2,", ",C2,", Tel: ",D2). Isso juntaria o nome na célula A2, o endereço na célula B2, a cidade na célula C2 e o número de telefone na célula D2.<br/><br/>Utilize a função TEXT para formatar um número como texto. Por exemplo, =TEXT(E2,"$#,##0.00"). Isso formataria o número na célula E2 como um valor monetário com duas casas decimais.<br/><br/>Essas funções são úteis para trabalhar com textos e formatar números, como CONCAT e CONCATENATE para juntar o texto de várias células e TEXT para formatar um número como texto.`, 
        video: 'https://www.youtube.com/embed/ilwewVTh1R4', 
        cursoId: 12 
    },

}