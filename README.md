# Language Compass

Crie uma landing page de uma página só (single page, com âncoras internas por seção), em português, para uma mentoria individual de idiomas chamada MAPA · Método de Aprendizado do Poliglota Autodidata. O objetivo da página é converter tráfego pago em conversas de WhatsApp para um diagnóstico gratuito. Não é uma loja, não tem checkout, não tem preço fixo exibido.

Identidade visual

Modo escuro fixo (não alternável): fundo navy #1B2A3D em toda a página.

Texto principal em creme #F1EAD9.

Cor de destaque primária: terracota #C1613C (usar em CTAs, ícones, sublinhados, números de seção).

Cor de destaque secundária: sage #6B7A5E (usar em badges, divisores, elementos de apoio).

Cores terciárias disponíveis para variações pontuais: plum-grey #8C5B6E e ocre dourado #A8823C — usar com moderação, nunca como cor dominante.

Tipografia: Inria Serif (Google Fonts) para títulos e headlines; Open Sans (Google Fonts) para corpo de texto, botões e legendas.

Logo: vou enviar um arquivo SVG separadamente — deixe um placeholder de logo no header (esquerda) e no footer, pronto para eu substituir pelo arquivo real.

Foto: vou enviar uma foto minha separadamente — reserve um espaço de imagem de destaque na seção "Prova viva" (ver abaixo), em formato retrato ou quadrado, com leve tratamento de cor que harmonize com a paleta (nada de foto "crua" sobre fundo navy sem tratamento).

Design mobile-first: a maior parte do tráfego vem de anúncio direto no celular. Botões de CTA grandes, fáceis de tocar, sem depender de hover.

Tom de voz

Franco sem ser cínico, inteligente sem ser pedante. Fala como alguém que já errou e aprendeu, não como guru. Nunca usa linguagem de "fluência rápida", "método revolucionário", "por tempo limitado", gamificação ou qualquer formulação que pareça infoproduto genérico. Honestidade explícita sobre o que a mentoria NÃO é deve soar como diferencial de confiança, não como disclaimer legal escondido.

Antes de começar a construir: evite cara de site genérico de IA

Trabalhe em duas etapas. Primeiro, proponha um plano de design compacto (paleta com os hex nomeados, papéis tipográficos, conceito de layout e um elemento de assinatura visual único) e só depois construa o código seguindo esse plano. Revise o próprio plano contra o teste: "isso poderia ser a resposta genérica pra qualquer landing page de infoproduto, ou é uma escolha feita especificamente pra esse briefing?" — se parecer genérico, refaça essa parte antes de codar.

Instruções específicas:

Elemento de assinatura: escolha um único elemento visual recorrente que remeta ao mundo real do MAPA — não um ícone genérico de biblioteca. Pode ser, por exemplo, uma linha de rota/trajeto sutil que atravessa a página conectando as seções (ecoando "Rota de Idiomas"), ou uma referência visual à Roda do Progresso como motivo gráfico recorrente. Esse elemento deve aparecer com moderação — ele é a única "ousadia" da página; o resto do layout deve ficar disciplinado ao redor dele.

Cuidado com o combo fundo escuro + um único acento vibrante: isso hoje é um dos padrões mais repetidos em sites gerados por IA (fundo quase preto + um acento único em destaque). Para fugir disso, distribua sage, ocre dourado e plum-grey como acentos reais ao longo da página — não deixe o terracota carregando sozinho todo o peso visual do site.

Marcadores numerados (01 / 02 / 03): use apenas onde a numeração representa algo real — a seção da Arquitetura dos 7 Níveis é uma sequência de verdade, então pode (e deve) ser numerada. Não numere "Para quem é isso" (são dois perfis, não uma sequência) nem "O que isso não é" (é uma lista de princípios, não uma ordem).

Ícones: evite o visual padrão de biblioteca de ícones genéricos (grade de ícones outline idênticos tipo Lucide/Feather sem relação com o conteúdo). Prefira elementos mais específicos ou até tipografia/glifos no lugar de ícone quando fizer sentido — especialmente na seção "O que isso não é", onde um simples checkmark verde genérico contradiz o tom da marca.

Escala tipográfica: defina uma escala intencional para Inria Serif (reservada para headlines e títulos de seção, com peso e tamanho que criem hierarquia clara) e Open Sans (corpo de texto). Não use a escala default de framework (ex: saltos automáticos tipo text-4xl/text-2xl/text-base sem intenção) — o contraste de tamanho entre headline e corpo deve parecer uma decisão editorial, não um valor padrão.

Movimento/animação: escolha um momento orquestrado (por exemplo, a entrada do Hero) em vez de aplicar fade-in-ao-scroll repetido em todo bloco da página — animação repetitiva em cada seção é um dos maiores indicadores de "isso foi gerado por IA sem direção". Menos é mais aqui.

Copy: proíba explicitamente frases de infoproduto genérico do tipo "desperte o poliglota que existe em você", "transforme sua vida em X meses", "do zero à fluência", "descubra o segredo". Use, sempre que possível, o vocabulário real e específico do método (Rede de Segurança, Ponte Pessoal, diagnóstico) como material de texto — vocabulário específico funciona como assinatura tanto quanto elemento visual.

Ao final, faça uma autocrítica: a página, se fosse gerada pra qualquer outra mentoria genérica com o mesmo prompt trocando só o nome, ficaria igual? Se sim, revise antes de finalizar.

Estrutura da página

1. Hero

Headline que fale diretamente com dois públicos ao mesmo tempo: quem já tentou aprender um idioma e travou (por qualquer motivo) e quem quer começar mas não sabe por onde. Não trate os dois como grupos separados na headline — uma frase que capture ambos ("Se você já tentou e travou, ou nunca soube por onde começar...").

Logo abaixo da headline, uma linha curta de subtexto com os inegociáveis, funcionando como um "selo de confiança" — algo como: "Sem promessa de fluência em X meses. Sem prazo genérico. Sem fórmula mágica. Mentoria individual, feita sob medida." (não usar exatamente essa frase, mas capturar essa ideia de forma mais fluida e natural).

CTA principal: botão para WhatsApp, texto tipo "Chama no WhatsApp pro seu diagnóstico gratuito" (ajuste a redação, mas mantenha "chama no WhatsApp" + "diagnóstico gratuito" como âncoras).

2. Para quem é isso

Duas colunas ou dois blocos lado a lado:

Quem já tentou aprender um idioma antes e desistiu (por qualquer razão — método errado, falta de tempo, desmotivação, curso que não fazia sentido)

Quem nunca começou e não sabe por onde ir

Cada bloco descreve brevemente a dor específica desse perfil. Sem citar "MAPA" ainda nessa seção — é puro espelhamento da dor do lead.

3. O problema real

Seção de narrativa sobre por que a maioria dos métodos falha: cursos self-paced sem estrutura, vocabulário genérico de turista sem conexão com a vida da pessoa, promessa de fluência em prazo fixo, gamificação vazia que motiva por uma semana e depois some. Sem citar MAPA ainda — é a dor nomeada.

4. Prova viva (quem sou eu)

Seção com foto (reservar espaço para a foto que vou enviar) e um texto breve, em primeira pessoa, contando minha jornada — sucessos e fracassos, sem entrar em nível técnico específico de nenhum idioma:

Sou fluente em inglês e espanhol

Atualmente estudo mandarim e francês

Estou "engatinhando" em coreano e catalão

Já tentei aprender um idioma com um curso pago tradicional e desisti — não por falta de talento, mas porque o método não fazia sentido pra minha vida (não precisa nomear o idioma nem entrar em detalhe técnico, só reconhecer que fracasso faz parte da jornada de qualquer poliglota real)

O tom aqui é "eu sou prova de que existe outro jeito, incluindo os tropeços" — não um discurso de sucesso linear.

Sugestão para usar de base: 
Aprendi inglês sozinho na adolescência, movido apenas por curiosidade (eu queria entender as letras das bandas que ouvia e as piadas que as legendas não traduziam). Funcionou, mas levei mais de cinco anos para perceber que aquilo tinha virado fluência. Anos depois, adulto, tentei aprender alemão: comprei um curso, comecei animado e desisti no meio do caminho. Passei muito tempo achando que o problema era eu, até compreender que me faltava um sistema que respeitasse como meu cérebro realmente aprende e que se adaptasse à minha rotina, não o contrário.

Hoje, enquanto estudo mandarim e francês (e engatinho no coreano e no catalão), me dedico a investigar o processo de aprendizado de idiomas. Não como linguista de formação, mas como alguém que testa métodos na prática, estuda a pesquisa acadêmica com seriedade e organiza padrões que observa. O que encontrei não foi uma fórmula mágica, foi um MAPA. Este e-book é parte desse mapa.

Se você já desistiu de um idioma, saiba: eu também. E foi exatamente isso que me trouxe até aqui.

5. Bônus: Arquitetura dos 7 Níveis (captura de e-mail)

Seção de oferta de um material gratuito: um guia que mapeia os 7 níveis de proficiência em qualquer idioma, para o lead entender onde ele está travado na própria jornada. Framing: "não saber em qual nível você está é parte do motivo de você não avançar."

Funcionalmente, esta seção precisa de:

Um campo de e-mail com botão de envio, sem sair da página

Ao submeter, o e-mail deve ser salvo em uma tabela no banco de dados (usar integração Supabase do Lovable) para eu poder usar depois numa newsletter

Ao salvar o e-mail com sucesso, deve ser disparado um e-mail automático (via integração de envio de e-mail, ex: Resend) para o endereço informado, contendo um link para uma página dentro do próprio site onde o PDF estará hospedado (crie uma rota separada, tipo /guia-7-niveis, não indexada, apenas acessível por quem tem o link)

Após o envio, mostrar uma mensagem de confirmação inline na própria seção (ex: "Confira seu e-mail — o link chega em instantes"), sem redirecionar o usuário para nenhuma outra página

Tratar erros de envio de forma visível (ex: e-mail inválido, falha no envio) sem quebrar a experiência

6. Como funciona o MAPA

Apresentar os pilares centrais de forma fragmentada — o suficiente para mostrar que existe uma estrutura real por trás, sem entregar o método por completo:

Rede de Segurança (estrutura externa que sustenta o estudo quando a motivação falha)

Ponte Pessoal (conexão emocional e pessoal com o idioma, não vocabulário genérico)

Progresso sentido, não provado por prova ou exame

Não entrar em detalhe técnico de todas as técnicas (tentativa-lacuna-busca, tolerância à ambiguidade etc.) — isso é conteúdo de fase mais avançada do funil, não da landing page.

7. Como é a mentoria

Aqui é importante: não mencionar formato de turma, lançamento, cronograma fixo ou estrutura híbrida em coorte. A mensagem é de mentoria individual e personalizada, moldada a partir do diagnóstico de cada aluno. Descrever de forma geral: acompanhamento próximo, encontros combinados de acordo com a realidade do aluno, conteúdo adaptado ao idioma e ao nível de cada pessoa.

Sobre preço: não exibir nenhum valor. Comunicar que o investimento é definido individualmente, após o diagnóstico, de acordo com idioma, nível de partida e objetivo — porque não é um produto padronizado. Framing sugerido: "Cada jornada é diferente, por isso o valor também é. Isso é definido com você, não antes de te conhecer."

8. O que isso não é

Lista clara e direta dos inegociáveis, apresentada como filtro de confiança (não como disclaimer):

Não prometo fluência

Não trabalho com prazo fixo

Motivação é clima, não combustível — não vendo picos de empolgação artificial

Não é curso gravado genérico

Não é gamificação disfarçada de método

Não é conduzido por IA

Não faço comparação difamatória com concorrente

9. Diagnóstico gratuito

Explicar o que acontece na conversa: uma conversa de cerca de 30 minutos, sem compromisso de compra, para entender onde a pessoa está travada e se faz sentido caminhar junto. Reforçar que é uma conversa real, não uma automação. CTA de WhatsApp repetido aqui.

10. FAQ

Usar formato de perguntas e respostas (pode ser accordion). Use estas 6 perguntas e respostas como base, mantendo a essência mas ajustando a redação para o tom da página:

Quanto custa a mentoria? Não existe um valor fixo porque a mentoria é individual — o investimento é definido depois do diagnóstico, considerando idioma, ponto de partida e objetivo.

Em quanto tempo eu fico fluente? Essa pergunta não tem resposta honesta em prazo fixo — cada pessoa parte de um terreno diferente, com inclinações diferentes. O que existe é acompanhamento constante do seu progresso real, não uma data prometida.

Preciso já saber alguma coisa do idioma pra começar? Não. A mentoria funciona tanto pra quem nunca começou quanto pra quem já tentou antes e travou em algum ponto.

Funciona pra qualquer idioma? O método foi construído a partir de anos de estudo real de múltiplos idiomas e se aplica a qualquer idioma que você queira aprender — a estrutura não depende de eu falar fluentemente aquele idioma específico, e sim de como o cérebro adulto de fato aprende.

É mentoria com inteligência artificial ou conteúdo gravado? Não. É acompanhamento humano, individual, com conversas reais — nada de automação conduzindo seu aprendizado.

Como funciona o diagnóstico gratuito? É uma conversa de cerca de 30 minutos pelo WhatsApp, sem compromisso, pra entender sua situação atual e ver se faz sentido caminharmos juntos.

11. Footer

Logo (placeholder), link de WhatsApp, e-mail de contato genérico, e um CTA final curto reforçando "chama no WhatsApp pro diagnóstico gratuito".

Requisitos técnicos gerais

Site responsivo, com atenção especial ao mobile (a maior parte do tráfego virá de anúncio)

Botões de WhatsApp devem abrir link direto (https://wa.me/SEUNUMERO) — deixar placeholder para eu inserir o número depois

Sem elementos de escassez falsa (contador regressivo, "vagas limitadas" etc.)

Sem pop-up de saída ou interstitial agressivo

A captura de e-mail da seção 5 (bônus) e a rota /guia-7-niveis serão implementadas num segundo momento — deixe o formulário de e-mail visualmente pronto nesta primeira leva, mas a lógica de banco de dados e envio de e-mail entra no prompt de acompanhamento abaixo

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://siga-o-mapa.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/efdd9880-aea2-4236-b077-15b78edd4697).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
