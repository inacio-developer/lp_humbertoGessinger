# Landing Page - Humberto Gessinger

Este projeto é uma landing page dedicada ao cantor e compositor Humberto Gessinger, contendo todas as informações primordiais de sua carreira. O site inclui:

- Um resumo de sua trajetória musical.
- A agenda de shows para o ano de 2024.
- A discografia completa.
- Informações das plataformas onde é possível apreciar sua obra.

## Cálculo da distância até o próximo show

Na aba de **Agenda**, desenvolvi um algoritmo que calcula dinamicamente a data de um show a partir de uma data base específica e a data atual. Esse cálculo gera uma **data aleatória**, mas consistente para todos os usuários que acessarem o site em um determinado dia. A lógica garante que, por exemplo, se a página for acessada em 08/10, o próximo show apareça no dia 11/10, e todos os usuários visualizarão a mesma contagem de dias até o show.

Essa abordagem evita que a data de um show esteja presa ao dia atual, permitindo que o usuário visualize a contagem exata de dias, meses e anos até o próximo evento.

## Tecnologias Utilizadas

- **Parcel**: Utilizado para o desenvolvimento e build do projeto.
- **Sass**: Utilizado para estilização.
- **JavaScript**: Utilizado para a lógica de cálculo dinâmico das datas de shows e funcionalidades gerais do site.
- **HTML e CSS**: Estrutura e estilo do site.

## Como rodar o projeto

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/humberto-gessinger-landing-page.git

2. Instale as dependências:

   ```bash
   npm install

3. Para rodar o projeto em modo de desenvolvimento, use o comando:

   ```bash
   npm run dev

4. Para gerar os arquivos de produção, utilize o comando:

   ```bash
   npm run build

## Direitos Autorais

As imagens e o conteúdo relacionados ao artista Humberto Gessinger são de propriedade de seus respectivos detentores de direitos autorais. Esta landing page foi desenvolvida exclusivamente para fins de estudo e aprendizado. Não tenho direitos sobre as imagens ou o material do artista.

---

Projeto desenvolvido por Rafael Inácio.
