---
sidebar_position: 2
title: Armazenamento e inventário
description: Como utilizar Quicksort, Inventory Sorting e Server Backpacks no New Empire.
---

# 📦 Armazenamento, inventário e receitas

O New Empire inclui sistemas diferentes para organizar recursos. **Quicksort** distribui itens entre baús; **Inventory Sorting** reorganiza os itens dentro de inventários; **Server Backpacks!** cria armazenamento portátil. Eles não são o mesmo mod.

## Quicksort: classificador de baús

O mod incluído é o [Quicksort de pcal43](https://modrinth.com/project/R7Xsgpzr), não outro projeto de nome semelhante.

1. Organize os baús de destino e coloque neles pelo menos um item do tipo que deseja guardar.
2. Coloque um **bloco de esmeralda** ou um **bloco de diamante** no centro do depósito.
3. Instale um **baú comum em cima** do bloco escolhido. Ele funciona como classificador.
4. Coloque itens nesse baú para que sejam distribuídos aos baús de destino com itens correspondentes.

| Bloco sob o classificador | Alcance informado pelo autor |
| --- | --- |
| Esmeralda | **5 blocos** |
| Diamante | **10 blocos** |

O autor indica que o classificador precisa ter **linha de visão** aos baús de destino e que o alcance considera uma região cúbica. Se os itens não forem distribuídos, revise a distância, os obstáculos e o conteúdo dos baús. O mod é projetado para operar do lado do servidor.

## Inventory Sorting: ordenar o conteúdo

O mod [Inventory Sorting](https://modrinth.com/project/5ibSyLAz) oferece:

- **Dois cliques em uma posição vazia** para ordenar usando o cliente vanilla.
- `/invsort sort` ou `/invsort sortme`, de acordo com o inventário e as permissões.
- Botão visual e atalhos adicionais quando o componente de cliente está instalado.

Não confunda o ato de ordenar itens com transferi-los automaticamente para baús próximos.

## Server Backpacks!: mochilas

O projeto [Server Backpacks!](https://modrinth.com/project/E7IsBILg) utiliza Polymer e oferece opções como:

| Mochila | Uso documentado pelo autor |
| --- | --- |
| Pequena | 9 espaços |
| Média | 18 espaços |
| Grande | 27 espaços |
| Ender | Acesso ao baú de Ender |
| Global | 54 espaços e possibilidade de vinculação entre mochilas |
| Lava | Descarte automatizado de itens segundo suas regras |

Existem ainda módulos como fabricação, cortador de pedras, vácuo e coleta. As **receitas, módulos disponíveis e permissões** devem ser conferidos na versão em execução usando JEI ou Polydex; não são garantidos apenas pela presença no manifesto.

## Consultar itens, blocos e receitas

- [JEI](https://modrinth.com/project/u6dRKJwZ): interface de consulta de receitas e usos de itens.
- [Polydex](https://modrinth.com/project/m5NB7FJE): informações e receitas em interfaces compatíveis com servidores.
- [Jade](https://modrinth.com/project/nvQzSEkH): informações sobre o bloco ou entidade observada.
- [AppleSkin](https://modrinth.com/project/EsAfCjCV): indicadores de fome e saturação.

Dependendo do modo de conexão, algumas interfaces e atalhos podem não aparecer. O pacote não prova quais componentes de cliente estão instalados por cada jogador.

Consulte o [catálogo com os 64 mods e suas versões](/docs/explicacao-mods/catalogo).