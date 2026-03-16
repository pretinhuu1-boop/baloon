# Especificação do Produto — KickTrak Pro

## Visão do Produto

O **KickTrak Pro** é um aplicativo móvel que transforma o treino de chutes em uma experiência orientada por dados e gamificação. O app permite que jogadores de todos os níveis acompanhem sua precisão, configurem sessões de treino personalizadas e evoluam através de um sistema de recompensas.

### Público-Alvo

- Jogadores amadores que querem melhorar sua precisão
- Jovens atletas em formação
- Jogadores de futebol de rua e comunidade
- Treinadores que buscam ferramentas de acompanhamento

### Proposta de Valor

Transformar qualquer campo — de terra, grama ou quadra — em um centro de treino inteligente, usando apenas o celular.

---

## Funcionalidades

### Treinos de Precisão (Drills)

O módulo principal do app permite configurar e executar treinos focados em precisão de chute.

**Tipos de Drill:**
- **Accuracy Kicks** — Treino focado em acertar alvos com precisão máxima
- Outros tipos a serem adicionados conforme evolução do produto

**Configuração de Sessão:**
- Número de chutes por sessão (ex: 15 chutes)
- Distância do alvo (ex: 20m)
- Tipo de drill selecionado

**Fluxo:**
1. Selecionar tipo de drill
2. Configurar parâmetros (chutes, distância)
3. Pressionar "Start" para iniciar a sessão
4. Executar os chutes
5. Visualizar resultado final

### Rastreamento de Sessões

Cada sessão de treino é rastreada em tempo real:

- **Sessão numerada** — Identificação da sessão (ex: Session 1/1)
- **Contagem regressiva** — Chutes restantes exibidos em destaque (ex: "15 KICKS REMAINING")
- **Métricas em tempo real** — Atualização instantânea de precisão e pontuação durante a sessão

### Métricas e Pontuação

O sistema de métricas fornece feedback imediato e histórico:

- **Precisão Média (AVG ACCURACY)** — Percentual de acertos (ex: 92%)
- **Pontuação (SCORE)** — Acertos por total de chutes (ex: 11/15)
- **Distância do Alvo (TARGET)** — Distância configurada para o treino (ex: 20m)
- **Histórico** — Evolução de desempenho ao longo do tempo

### Gravação e Mídia

- **Gravação de áudio/vídeo** — Recurso de gravação durante sessões (indicador "REC: 00:01")
- **Galeria** — Acesso a sessões gravadas para revisão posterior
- **Análise visual** — Possibilidade de rever execução dos chutes

### Gamificação

Sistema de recompensas para manter engajamento e motivação:

- **Troféus Ballion** — Conquistas especiais com design premium (troféu dourado com marca Ballion)
- **Ballion Coins** — Moedas de recompensa ganhas por:
  - Completar sessões de treino
  - Atingir marcos de precisão
  - Manter sequências de treino (streaks)
- **Níveis e Progressão** — Sistema de evolução baseado em desempenho acumulado

---

## Design e Interface

### Identidade Visual

- **Modo:** Dark mode como padrão
- **Paleta principal:**
  - Fundo escuro (preto/cinza escuro)
  - Dourado para elementos de destaque e botões principais
  - Verde escuro para acentos e elementos secundários
- **Estilo:** Premium, profissional, moderno

### Elementos da Interface

- **Botão Start** — Botão circular dourado centralizado, elemento principal da tela de treino
- **Painel de métricas** — Exibição clara de chutes restantes, precisão e pontuação
- **Barra superior** — Nome do drill e número da sessão
- **Visualização do campo** — Preview de câmera com overlay de informações (distância do alvo)
- **Controles secundários** — Ícones para microfone/gravação, configurações e galeria

### Tipografia

- Fonte sem serifa, moderna
- Números em destaque para métricas principais
- Uso de caixa alta para labels e categorias (ex: "KICKS REMAINING", "AVG ACCURACY")
