# Vírus Zika: uma abordagem geral para profissionais de saúde

Curso on-line da Fiocruz sobre o vírus Zika, em HTML, CSS e JavaScript. Quatro módulos, cada um uma página independente.

## Abrir

```bash
python -m http.server 8000
```

Acesse <http://localhost:8000/modulos/modulo01/> (troque `modulo01` por `modulo02`…`modulo04`).

Servir por HTTP em vez de abrir o arquivo direto evita bloqueio do navegador a scripts e mídia locais.

## Estrutura

```
modulos/moduloNN/
  index.html          o módulo
  creditos.html       créditos
  se_unasus_pack.*    empacotamento para o ambiente UNA-SUS
```

## Publicar

Copie a pasta do módulo para o servidor ou ambiente do curso. Não há build.

## Homologação

Não há ambiente de homologação.
