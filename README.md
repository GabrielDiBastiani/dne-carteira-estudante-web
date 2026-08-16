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
| `cie` | Número da CIE | `D2LASB` |
| `nasc` | Data de nascimento (`YYYY-MM-DD`) | `1999-01-25` |
| `nome` | Nome do estudante | Gabriel Di Bastiani do Amaral |
| `instituicao` | Instituição de ensino | FIAP |
| `curso` | Curso | Engenharia de Computação |
| `documento` | Documento de identificação | `43108177850` |
| `emissor` | Entidade emissora | UNE |

Exemplo:

```
https://SEU_USER.github.io/SEU_REPO/?cie=D2LASB&nasc=1999-01-25&nome=Gabriel%20Di%20Bastiani%20do%20Amaral&instituicao=FIAP&curso=Engenharia%20de%20Computacao&documento=43108177850&emissor=UNE
```

Campos omitidos usam os valores padrão do aplicativo.

## Testar localmente

Abra `index.html` no navegador ou sirva a pasta:

```bash
npx --yes serve .
```
