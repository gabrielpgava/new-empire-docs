# New Empire Docs

Documentação do servidor Minecraft **New Empire**, mantida com [Docusaurus](https://docusaurus.io/).

**Site:** https://new-empire-docs.vercel.app/

## Inventário documentado

A documentação foi revisada com base na exportação `NewEmpire 1.0.0.mrpack` disponibilizada em **30/10/2026**:

- **Minecraft:** 26.3
- **Fabric Loader:** 0.20.1
- **Mods referenciados:** 64
- **Catálogo:** `docs/explicacao-mods/catalogo.md`
- **Auditoria e checklist:** `docs/administracao/compatibilidade.md`

O inventário representa o **manifesto do arquivo fornecido**, não uma garantia de implantação ou de compatibilidade em tempo de execução.

## Desenvolvimento local

Pré-requisitos: Node.js compatível com a versão do Docusaurus e npm.

```bash
npm ci
npm run start
```

Para gerar o site estático:

```bash
npm run typecheck
npm run build
```

O build é produzido em `build/`. A publicação do site depende da configuração da plataforma de hospedagem.

## Atualização após novo modpack

1. Obter a nova versão oficial do arquivo `.mrpack`.
2. Abrir `modrinth.index.json`, anotar a versão do Minecraft, Fabric e os arquivos presentes em `files[]`.
3. Conferir os IDs/URLs, nomes dos projetos, versões e categorias no catálogo.
4. Revisar comandos e tutoriais diretamente nos projetos dos mods.
5. Comparar flags `env` e dependências com a documentação de cada autor.
6. Atualizar a auditoria técnica e os casos de teste; não marcar configurações do servidor como verificadas sem evidências.
7. Executar `npm run typecheck` e `npm run build` antes da publicação.

## Estrutura

- `docs/basico/`: primeiros passos e comandos.
- `docs/explicacao-mods/`: catálogo e tutoriais de jogabilidade.
- `docs/administracao/`: avaliação técnica, ambientes, compatibilidade e segurança.
- `blog/`: histórico de atualizações anteriores.
- `assets/`: imagens dos guias.

Contribuições podem ser encaminhadas por pull request. Ao alterar uma mecânica, indique a versão do mod testada e a fonte.