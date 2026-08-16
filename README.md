# Validador CIE (GitHub Pages)

Réplica estática da página de validação de CIE, pronta para publicar no GitHub Pages.

## Publicar

1. Crie um repositório no GitHub e envie esta pasta.
2. Em **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/ (root)`
3. Salve e aguarde alguns minutos.

A URL fica:

`https://SEU_USER.github.io/SEU_REPO/`

## Dados pela query string

| Parâmetro | Descrição | Padrão |
| --- | --- | --- |
| `cie` | Número da CIE | `DD2O0R` |
| `nasc` | Data de nascimento (`YYYY-MM-DD`) | `1999-11-13` |
| `nome` | Nome do estudante | Larissa Loranna Alencar de Sousa |
| `instituicao` | Instituição de ensino | Universidade Paulista |
| `curso` | Curso | Pedagogia |
| `documento` | Documento de identificação | `000000395456034` |
| `emissor` | Entidade emissora | UNE |
| `foto` | URL da foto | imagem padrão |

Exemplo:

```
https://SEU_USER.github.io/SEU_REPO/?cie=DD2O0R&nasc=1999-11-13&nome=Larissa%20Loranna%20Alencar%20de%20Sousa&instituicao=Universidade%20Paulista&curso=Pedagogia&documento=000000395456034&emissor=UNE
```

Campos omitidos usam os valores padrão da página original.

## Testar localmente

Abra `index.html` no navegador ou sirva a pasta:

```bash
npx --yes serve .
```
