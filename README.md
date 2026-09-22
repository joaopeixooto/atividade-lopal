# Desafio 6
## - O que é SSH
O Secure Shell (SSH) é um protocolo rede criptografado que permite conectar e gerenciar computadores e servidores de forma remota e segura.

## - Como funciona?
* **Criptografia:** Protege os dados enviados pela rede para que terceiros não possam ler senhas ou comandos.

* **Cliente e Servidor:** Uma máquina atua como cliente (seu computador) e a outra como o servidor remoto.

* **Autenticação:** Pode ser feita com senha ou com chaves criptográficas de segurança.

## - Quais suas vantagens?

* **Acesso Remoto:** Permite controlar o terminal de uma máquina mesmo fora dela.

* **Transferência de arquivos:** Envia e recebe arquivos de forma segura, usando protocolos como *SCP* e *SFTP* para criptografia.

* **Tunelamento:** Pode criar conexões protegidas para o tráfego de outras aplicações ou redes.

No desenvolvimento de software, o SSH é uma ferramenta essencial para automação, segurança e gerenciamento de infraestrutura, conectando o ambiente de código local aos servidores da aplicação. É frequentemente usado em:

* **Controle de Versão (Git)**
* **Deploy e Integração Contínua (CI/CD)**
* **Gerenciamento e Ambientes de Nuvem**
* **Acesso a Contêineres e Docker**
* **Encaminhamentos de Portas (Port Forwarding)**

## - HTTPS x SSH

|Características| HTTPS | SSH |
|---------------|:-----:|:---:|
|**Autenticação**|Utiliza Usuário e Senha ou **Personal Access Token (PAT)**.| Utiliza um par de **chaves criptográficas** (pública e privada).|
|**Configuração**|**Imediata**. Não exige configurações prévias no seu computador.|**Requer configuração inicial** (gerar a chave e adicioná-la ao servidor).|
|**Praticidade**|Pode exigir reautenticação frequente ou configuração de gerenciadores de credenciais.|**Totalmente transparente** após configurado. Não pede senhas nos comandos.
|**Restrições de Rede**|Raramente é bloqueado por firewalls corporativos (usa a porta padrão `443`).|Pode ser bloqueado em redes empresariais restritas (usa a porta `22`).

### - Para qual situação cada um é indicado?
#### HTTPS
O HyperText Transfer Protocol Secure (HTTPS) é mais usado para acessos rápidos e temporários para não fazer uma configuração. Quando ambientes de redes da empresa bloqueia conexões por SSH. Ou quando você clona repositórios e não pretende fazer atualizações neles.

#### SSH
O Secure Shell (SSH) é mais usado para o uso contínuo na máquina, porque uma vez configurado, você não precisará mais digitar senhas ou tokens ao dar `git push` ou `git pull`. No caso de automações e **CI/CD** em esteiras de automação e servidores de deploy. E também quando muitas contas são usadas no mesmo computador, o SSH facilita a alternância usando arquivos de configuração.

# Desafio 7
## - HTTP e HTTPS
O HTTP é o protocolo básico que permite a troca de mensagens entre o seu navegador e os sites da internet, enquanto o HTTPS é essa mesma versão só que protegida por criptografia.

## - O que é HTTP
* Significa **Protocolo de Transferência de Hipertexto**.

* É a regra usada para carregar páginas de um site na tela do usuário.

* **Problema**: envia dados em texto puro. Se alguem interceptar a rede, essa pessoa consegue ler senhas e mensagens.

## - O que é HTTPS

* Significa **Protocolo de Transferência de Hipertexto Seguro**
* Adiciona uma camada de segurança (chamada SSL ou TSL) sobre o HTTP.
* **Vantagem:** Embaralha os dados trocados entre o cliente e o site. Mesmo que alguém roube os dados no meio do caminho, não consegue ler nada.
* Mostra um ícone de **cadeado** na barra do navegador para indicar que a conexão é confiável.

![This is an alt text.](https://img.odcdn.com.br/wp-content/uploads/2023/05/Chrome-HTTPS.jpg)

## - Por que a segurança cliente-servidor é vital?
Quando um usuário navega na web, os dados viajam por diversos roteadores e servidores públicos até chegar ao destino. Sem proteção, ocorrem três grandes riscos:
* **Interceptação de Dados (Eavesdropping)**: Ataques do tipo Man-in-the-Middle (MitM) permitem que criminosos leiam senhas, números de cartão de crédito e dados pessoais transmitidos em texto puro.
* **Alteração de Conteúdo (Tampering)**: Um invasor pode modificar os dados no meio do caminho, injetando códigos maliciosos ou propagandas em um site legítimo antes que ele chegue ao navegador do usuário.
* **Falsificação de Identidade (Spoofing)**: Sem a autenticação mútua (fornecida por certificados), o usuário pode pensar que está enviando dados para o banco dele, quando na verdade está enviando para um servidor clonado.

A segurança na comunicação entre cliente e servidor é fundamental porque protege dados sensíveis contra interceptações e fraudes, garantindo que as informações enviadas por um usuário cheguem intactas e privadas ao destino final. No desenvolvimento web, aplicar esses conceitos é uma obrigação técnica, legal e comercial.

# Desafio 8
## - O que é Docker
O Docker é uma plataforma de software de código aberto usada para criar, testar e implantar aplicações de forma rápida por meio de contêineres.

Um contêiner empacota o código de um programa junto com todas as suas dependências, como bibliotecas, arquivos de configuração e ferramentas do sistema, para que ele rode exatamente da mesma forma em qualquer computador.

## - Como funciona?
O Docker usa a tecnologia do sistema operacional do computador hospedeiro (como o kernel do Linux) para isolar aplicações. Isso é diferente das máquinas virtuais tradicionais, que precisam carregar um sistema operacional inteiro para cada programa. Por causa disso, os contêineres do Docker gastam menos memória, ocupam menos espaço e iniciam em poucos segundos.

### - Principais conceitos

* **Imagem**: É um modelo pronto e somente leitura que contém as instruções para criar um contêiner. Como uma receita de bolo.
* **Contêiner:** É a execução prática da imagem. É o ambiente isolado onde a sua aplicação de fato roda.
* **Docker Hub**: É um serviço de registro na nuvem onde pode se encontrar, baixar e compartilhar imagens prontas criadas por outras pessoas ou empresas.

## - Quais os benefícios?
O principal problema que o Docker resolve é a famosa frase: 

"na minha máquina funciona, mas no servidor não".

Como o programa e tudo o que ele precisa estão dentro do contêiner, o comportamento da aplicação é idêntico na máquina do desenvolvedor, nos servidores de teste e na nuvem em produção.

* **Padronização**: Elimina falhas por falta de bibliotecas ou conflitos de versões no sistema.
* **Economia de recursos**: Vários contêineres rodam no mesmo servidor dividindo os mesmos recursos de forma leve.
* **Agilidade**: Facilita atualizar, escalar e mover aplicações de um servidor para outro.

# Desafio 9
## - O que é Live Server
O live server é um pequeno servidor web local que atualiza automaticamente a página no navergador sempre que você salva alterações no código.

## - Como funciona?
* **Servidor local**: Ele cria um ambiente de teste no seu próprio computador (geralmente usando `localhost`) para rodar arquivos como HTML, CSS e JavaScript.
* **Atualização em tempo real (live reload)**: Você altera o código no editor, salva o arquivo e a página do navegador se atualiza sozinha.

O Live Server resolve esse problema porque ele entrega os seus arquivos usando o protocolo HTTP/HTTPS, enquanto abrir o arquivo diretamente no navegador utiliza o protocolo `file://`.

A tag `<script src="link.js">` funciona em ambos os casos para scripts simples, mas o comportamento muda drasticamente por conta das regras de segurança dos navegadores.

## - Arquivo direto
O motivo principal por ele não funcionar direto é a segurança do seu computador.
* **Política de Mesma Origem (CORS)**: Quando você abre um arquivo com `file://`, o navegador entende que aquele arquivo não tem uma "origem web" confiável. Se o JavaScript externo tentar carregar outros arquivos ou funcionar como um módulo (`import`/`export`), o navegador bloqueia o processo por precaução para evitar que scripts maliciosos naveguem pelas pastas do seu computador.

**Raiz do projeto vs. Raiz do sistema:** Se você colocar um caminho como `/src/script.js`, o servidor HTTP entende que `/` é a pasta onde o seu projeto está aberto. O protocolo `file://` acha que `/` é a raiz do seu HD (como o `C:\` no Windows), fazendo o link quebrar porque ele procura a pasta no lugar errado.

## Hospedar um serviço
Hospedar um serviço significa alugar um espaço em um computador (chamado de servidor) que fica ligado à internet 24 horas por dia, 7 dias por semana. O objetivo é armazenar arquivos, códigos ou bancos de dados para que qualquer pessoa ou sistema no mundo possa acessar esse serviço através da internet.

Quando você usa o seu computador para rodar um código (como o Live Server), ele está "hospedado" localmente. Mas se você desliga o computador, ninguém mais acessa. Hospedar um serviço no mercado significa transferir esse projeto para a infraestrutura de uma empresa especializada, garantindo segurança, estabilidade e disponibilidade constante.

### Exemplos de Serviços de Hospedagem no Mercado
É dividido em categorias, dependendo do tipo de tecnologia e da complexidade do projeto.

#### 1. Hospedagem de Plataforma e Aplicações
* **Vercel**
* **Render**

#### 2. Infraestrutura de Computação em Nuvem
* **Amazon Web Services**
* **Google Cloud Platform**

#### 3. Servidores Virtuais Privados
* **DigitalOcean**
* **Hetzner**

#### 4. Hospedagem Web Tradicional
* **Hostinger**
* **HostGator**

# Desafio 10
## Operadores de comparação

## Diferença do == e ===
* `==` (Igualdade Ampla): Converte os tipos dos dados para um formato em comum antes de realizar a comparação. Exemplo: `5 == "5"` resulta em `true`.
* `===` (Igualdade Estrita): Compara tanto o valor quanto o tipo do dado. Não há conversão. Exemplo: `5 === "5"` resulta em `false`.

## Diferença de != e !==
* `!=` (Desigualdade Ampla): Retorna true se os valores forem diferentes, realizando a conversão de tipos antes de avaliar. Exemplo: `5 != "5"` resulta em `false`.
* `!==` (Desigualdade Estrita): Retorna true se os valores ou os tipos forem diferentes. Exemplo: `5 !== "5"` resulta em `true`.

## Coerção de Tipos
Em JavaScript é um processo manual ou automático em que o valor é convertido para outro tipo de dado (como transformar uma string em número).

Existem duas maneiras de ocorrer esse processo:
* **Implícita**: Feita de forma automática pelo motor do JavaScript durante operações ou comparações. Exemplo: `"5" * 2` converte a string para número automaticamente.

* **Explícita**: Feita intencionalmente pelo programador usando funções como `Number()`, `String()` ou `Boolean()`.

## Como ocorre a comparação > e <

O JavaScript compara strings usando a ordem lexicográfica (como em um dicionário) caractere por caractere, com base nos valores numéricos da tabela Unicode (ou UTF-16).

1. Ele analisa o primeiro caractere de cada string.

2. Se forem diferentes, o que tiver o menor valor Unicode é considerado "menor" (<).

3. Se forem iguais, ele avança para o próximo caractere até encontrar uma diferença ou acabar uma das strings.

* **Nota**: Letras maiúsculas vêm antes das minúsculas na tabela Unicode (portanto, `"Z" < "a"` é verdadeiro). Exemplo:  `"apple" < "banana"` resulta em true porque 'a' vem antes de 'b'.

![This is an alt text.](https://i.postimg.cc/KjNyqCHJ/Captura-de-tela-2026-09-18-165242.png)