# Guia de Contribuição — Ballion

Obrigado pelo interesse em contribuir com o projeto Ballion! Este guia explica como participar do desenvolvimento.

## Como Contribuir

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/seu-usuario/baloon.git
cd baloon
```

### 2. Criação de Branch

Crie uma branch a partir de `main` para sua contribuição:

```bash
git checkout -b feature/nome-da-feature
```

**Convenções de nome de branch:**
- `feature/` — Nova funcionalidade
- `fix/` — Correção de bug
- `docs/` — Atualização de documentação
- `refactor/` — Refatoração de código

### 3. Desenvolvimento

- Siga os padrões de código do projeto
- Escreva testes para novas funcionalidades
- Mantenha commits pequenos e focados

### 4. Commit

Use mensagens de commit claras e descritivas:

```
tipo: descrição curta do que foi feito

Descrição mais detalhada se necessário.
```

**Tipos de commit:**
- `feat:` — Nova funcionalidade
- `fix:` — Correção de bug
- `docs:` — Documentação
- `style:` — Formatação (sem mudança de lógica)
- `refactor:` — Refatoração
- `test:` — Testes
- `chore:` — Tarefas de manutenção

### 5. Pull Request

```bash
git push origin feature/nome-da-feature
```

Abra um Pull Request no GitHub com:
- Título claro descrevendo a mudança
- Descrição do que foi feito e por quê
- Referência a issues relacionadas (se houver)

---

## Padrões de Código

<!-- TODO: definir padrões específicos conforme stack -->

- Mantenha o código limpo e legível
- Siga as convenções já existentes no projeto
- Use nomes descritivos para variáveis e funções
- Comente apenas quando a lógica não for óbvia

## Processo de Revisão

1. Todo PR passa por revisão de código
2. Ao menos uma aprovação é necessária para merge
3. Testes devem passar antes do merge
4. Conflitos devem ser resolvidos pelo autor do PR

## Reportando Bugs

Ao reportar um bug, inclua:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. comportamento atual
- Versão do app/ambiente
- Screenshots ou logs (se aplicável)

## Sugerindo Melhorias

Para sugerir novas funcionalidades:

1. Verifique se já não existe uma issue similar
2. Descreva a funcionalidade desejada
3. Explique o caso de uso e o valor para o usuário
4. Se possível, proponha uma abordagem de implementação

---

Dúvidas? Entre em contato com a equipe Ballion.
