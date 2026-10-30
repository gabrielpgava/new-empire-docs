---
sidebar_position: 1
title: Auditoria do modpack e compatibilidade
description: Inventário técnico do NewEmpire 1.0.0, flags de ambiente, riscos e checklist de validação.
---

# 🔧 Auditoria técnica e compatibilidade

Esta página descreve **somente o pacote recebido**, `NewEmpire 1.0.0.mrpack`, inspecionado em **30/10/2026**. Não foram fornecidos arquivos de configuração, logs, estado do servidor, IP, portas ou uma instalação funcional. Portanto, as observações abaixo **não constituem teste de execução**.

## Manifesto analisado

| Campo | Valor |
| --- | --- |
| Formato | Modrinth `.mrpack`, versão de formato 1 |
| Nome/versão do pack | `NewEmpire` / `1.0.0` |
| Minecraft | `26.3` |
| Fabric Loader | `0.20.1` |
| Arquivos listados | `64` |
| Arquivos efetivamente embutidos | Apenas `modrinth.index.json` |
| Hashes no índice | SHA-1 e SHA-512 para os 64 mods |

O arquivo **não embute os JARs**: um importador compatível precisa baixá-los dos endereços presentes no índice. Use o [catálogo de versões](/docs/explicacao-mods/catalogo) como registro da seleção.

## Flags de ambiente do arquivo

O campo `env` dos 64 itens declara:

| Ambiente declarado | Quantidade | Projetos |
| --- | ---: | --- |
| Cliente e servidor requeridos | **59** | Demais entradas |
| Somente cliente | **3** | Areas, Sodium, Improved Sign Editing |
| Somente servidor | **2** | BlueMap, EasyAuth |

**Atenção:** são sinalizadores do exportador, e não a classificação definitiva dos autores. Quicksort, Polydex, Camera Obscura, Image2Map, Sit!, Server Backpacks! e outros podem oferecer recursos por instalação no servidor sem exigir seus JARs nos clientes. Inversamente, Sodium é otimização de renderização do cliente.

**Recomendação:** mantenha **perfis separados de cliente e servidor** e confira as dependências e os ambientes de cada mod na página do projeto antes de copiar os arquivos.

## Pontos para testar primeiro

1. **Versões indicadas como 26.2:** os arquivos `ACE_mc26.2-5.0.1.jar` e `1.3.1-TPA_mod-26.2.jar` aparecem num pacote Minecraft 26.3. O nome não prova incompatibilidade, mas exige teste de inicialização e de comandos.
2. **Build de desenvolvimento:** `ViaVersion-5.12.3-SNAPSHOT.jar` é identificado como SNAPSHOT. Verifique procedência, necessidade e comportamento antes de trocar por uma versão estável.
3. **Autenticação e crossplay:** Geyser, Floodgate, EasyAuth, EasyWhitelist e Skin Restorer devem ser testados em conjunto. **Não altere `online-mode` apenas para contornar problemas de login.** Planeje autenticação, autorização, nomes, UUIDs e sessão de cada tipo de jogador.
4. **Versões Java e Bedrock:** a presença de Geyser/Floodgate/ViaVersion/ViaFabric não garante acesso a versões arbitrárias ou ao Bedrock sem configuração de proxy/portas.
5. **Funcionalidades sobrepostas:** Sit! e Vanilla Refresh podem implementar ações de sentar; JEI e Polydex tratam receitas; Quicksort e Inventory Sorting atuam em inventários por mecanismos diferentes.
6. **Regras de sobrevivência:** What Durability? altera o desgaste dos itens; VeinMiner e Tree Harvester aceleram a obtenção de materiais. Teste combinações, limites e permissões.

## Segurança e privacidade

- **EasyAuth:** revise requisitos de autenticação, senhas, expiração de sessões e permissões em todos os modos de acesso.
- **Floodgate/Geyser:** revise o fluxo de identificação dos jogadores Bedrock e proteja credenciais/chaves de integração. Não exponha endpoints administrativos.
- **BlueMap:** verifique **quem consegue acessar o mapa web** e se a publicação de construções/coordenadas é apropriada. Revise autenticação e política de acesso do servidor HTTP.
- **Skin Restorer** e **Image2Map:** reveja políticas para URLs externas e permissões de recursos que consultam ou baixam conteúdo.
- **Permissões:** não ofereça a jogadores comuns comandos de administração, perfilamento de desempenho, limpeza de cache ou geração em massa sem limites definidos.

## Diagnóstico e desempenho

- **spark:** obtenha perfis e métricas em ambiente controlado ao investigar lentidão, picos de CPU, memória ou ticks.
- **Lithium** e **FerriteCore:** fornecem otimizações; teste sua compatibilidade junto aos demais mods.
- **Sodium:** atua na renderização do cliente, não substitui o diagnóstico de TPS do servidor.
- **BlueMap, Camera Obscura e Image2Map:** monitore processamento, consumo de disco e uso concorrente durante renderizações e geração de mídias.

## Checklist de homologação

- [ ] Fazer backup dos mundos, configurações e dados de jogadores antes de atualizar.
- [ ] Importar o pacote em um **ambiente de testes**, preservando as versões do manifesto.
- [ ] Instalar somente mods adequados ao **servidor dedicado** e validar dependências.
- [ ] Iniciar e inspecionar logs para erros de mod, mixin, biblioteca ou versão incompatível.
- [ ] Testar entrada Java com o perfil do pacote; testar cliente Java vanilla apenas se houver suporte pretendido.
- [ ] Testar login e identidade Bedrock/Floodgate com contas de teste.
- [ ] Verificar TPA e Audaki Cart Engine (arquivos nomeados `26.2`).
- [ ] Testar operações de Quicksort, mochilas, VeinMiner, Tree Harvester e Image2Map.
- [ ] Conferir permissões de comandos e recursos de autenticação.
- [ ] Revisar desempenho com spark e o acesso público ao BlueMap.
- [ ] Comparar o inventário efetivamente carregado com os 64 itens registrados.

**Limite desta auditoria:** não foi feita instalação, inicialização nem homologação real de servidor ou cliente. A compatibilidade precisa ser confirmada com um teste de execução.