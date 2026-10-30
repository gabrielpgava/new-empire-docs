---
sidebar_position: 1
title: Instalação e primeiros passos
description: Como importar o NewEmpire 1.0.0 e entender a versão do servidor.
---

# 🚀 Instalação e primeiros passos

Este guia considera a exportação **NewEmpire 1.0.0.mrpack** recebida em 30/10/2026. Ela declara **Minecraft Java 26.3**, **Fabric Loader 0.20.1** e **64 mods**.

## Instalar o pacote no Minecraft Java

A maneira mais prática é usar um inicializador que aceite arquivos Modrinth `.mrpack`, como o **Modrinth App**:

1. Obtenha a versão oficial do arquivo com a administração do New Empire.
2. Abra o Modrinth App e utilize a função de **importar perfil/modpack de arquivo**.
3. Selecione `NewEmpire 1.0.0.mrpack` e aguarde o download das dependências.
4. Execute o perfil criado e verifique se o jogo inicia em **26.3 com Fabric**.
5. Entre em **Multijogador** e adicione o endereço do New Empire informado pela administração.

> **O arquivo `.mrpack` não inclui os 64 arquivos `.jar` fisicamente.** Ele contém um manifesto com endereços de download e hashes. Isso é esperado no formato Modrinth.

## E quem joga no Bedrock?

O pacote lista **Geyser** e **Floodgate**, ferramentas que permitem oferecer acesso Bedrock. Isso não confirma que o acesso esteja habilitado, nem qual endereço ou porta usar. Solicite as instruções à administração. Não tente importar o `.mrpack` no Bedrock.

## Preciso instalar todos os mods manualmente?

Não. Para um cliente Java, prefira a importação do perfil. O manifesto foi gerado com **59 mods marcados como requeridos nos dois lados**, apesar de vários projetos serem essencialmente de servidor.

Para manutenção manual, use a [análise dos ambientes e das dependências](/docs/administracao/compatibilidade). **Não copie indiscriminadamente todos os arquivos para o servidor**: há componentes exclusivamente de cliente.

## Se não conseguir entrar

- Confirme que está iniciando o **perfil correto** e não uma instalação vanilla de outra versão.
- Verifique se o jogo carregou com **Fabric 0.20.1**, conforme a exportação.
- Se o download de algum mod falhar, reimporte o arquivo ou consulte a página oficial do projeto no [catálogo](/docs/explicacao-mods/catalogo).
- Caso o servidor exija autenticação ou lista de permissão, siga as instruções fornecidas pelos administradores. A presença de EasyAuth e EasyWhitelist no pacote não revela a configuração real.
- Para uma falha persistente, anote a mensagem exibida e envie o registro de erro à equipe, sem compartilhar senhas ou dados de autenticação.

O pacote **não informa IP, domínio, porta, regras do servidor, permissões nem configurações operacionais**. Esses dados não devem ser presumidos a partir da lista de mods.