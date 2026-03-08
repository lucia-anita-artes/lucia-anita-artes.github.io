# Plano de Próximos Passos — Lúcia Anita Artes

*Fevereiro/2026*

---

## O problema real

A Lúcia está num ciclo de **artista hobby**: pinta quando inspira, posta quando lembra, vende por boca a boca. Pra virar negócio de verdade, ela precisa mudar pra um ciclo de **artista-criadora**: pinta com intenção → grava → posta com estratégia → engaja → vende.

A boa notícia: ela já tem talento de sobra. O que falta é **sistema**.

---

## Próximos passos — por ordem de prioridade

### 1. AGORA: Ela precisa pintar a Ponte Hercílio Luz

Tudo começa aqui. Sem quadro novo, não tem conteúdo, não tem coleção, não tem nada. Isso é o gargalo.

**O que ela precisa decidir antes de começar:**
- Fazer **2 estudos rápidos** (pode ser em papel/tela pequena, 20x30):
  - Um com técnica de **manchas** (fundo gestual, cores se misturando, ponte mais definida contra fundo solto)
  - Um com **espátula** (cores vibrantes, textura pesada)
- Postar os dois no Instagram pedindo opinião → isso já gera engajamento

**Resultado:** ela descobre o estilo da coleção E ganha um post de conteúdo.

---

### 2. AGORA: Montar o setup de gravação

Antes dela começar a pintar, o setup tem que estar pronto. É simples:

- **Equipamento:** celular + tripé (R$30-50 no Mercado Livre)
- **Posição:** tripé atrás e acima do ombro, pegando a tela e as mãos
- **O que gravar:**
  - **Time-lapse** do processo inteiro (ligar e esquecer — o celular faz sozinho com a câmera nativa)
  - **3-4 fotos** em estágios: tela branca → esboço → meio → pronta
  - **Foto final** com luz natural, quadro na parede (NÃO no cavalete)
- **Dica crucial:** ela não precisa aparecer falando. Só o processo já funciona. O reel de 1.500 views dela prova isso.

---

### 3. ESTA SEMANA: Terminar a limpeza do Instagram

O arquivo `instagram-pendencias.md` tem tudo detalhado. São 30 min no celular:
- Arquivar reel motivacional
- Fixar 3 posts
- Colar legendas novas (série RAÇAS + retrato do casal)
- Remover telefone das legendas
- Criar 4 Story Highlights

---

### 4. PRÓXIMAS 2-4 SEMANAS: Cada pintura = 3 posts mínimos

Quando a Ponte Hercílio Luz ficar pronta, ela extrai:

| Post | Formato | Potencial |
|---|---|---|
| Reel time-lapse (15-30s, música boa) | Reels | Viralizar |
| Carrossel: obra na parede + detalhes + textura | Carrossel | Vender |
| Story com enquete: "Próxima: Lagoa ou Mercado?" | Stories | Engajar |

E repete com o próximo quadro (o que ganhou a enquete).

**Ordem sugerida para a Coleção Floripa:**
1. Ponte Hercílio Luz
2. Lagoa da Conceição
3. Mercado Público
4. Praia icônica (Joaquina ou Campeche)
5. Casas coloniais do Ribeirão da Ilha

**Frequência mínima:** 3 posts por semana no feed + stories diários simples (bastidor, ateliê, paleta, café).

---

### 5. PARALELO: Assistente de IA no WhatsApp

Um bot que conversa com a Lúcia pelo WhatsApp e ajuda ela a manter o ritmo.

**O que o bot faria:**
- **Lembra de postar:** "Lúcia, faz 3 dias que tu não posta um story. Tira uma foto do ateliê!"
- **Lembra de gravar:** "Vai começar a pintar? Lembra de ligar o time-lapse!"
- **Sugere legendas e hashtags:** ela manda a foto da obra pronta → bot responde com legenda pronta pra copiar
- **Acompanha o progresso:** "Tu já tem 2 de 5 quadros da Coleção Floripa!"
- **Responde dúvidas de negócio:** precificação, estratégia, o que pintar

**Como construir:**
- API do Claude + integração WhatsApp (via Twilio ou Evolution API)
- Dar o contexto completo pro bot (usar o CLAUDE.md como base de conhecimento)
- Configurar lembretes em horários fixos (ex: terça e quinta às 10h)
- Fluxo principal: Lúcia manda foto → bot responde com legenda + hashtags prontas

---

### 6. MÉDIO PRAZO: Automação do Instagram com MCP

Com o MCP do Chrome, dá pra:
- Postar direto do Claude Code (quando ela manda a foto e a legenda tá pronta)
- Analisar métricas (insights) e ajustar estratégia
- Editar legendas, responder comentários com sugestões
- Gerar relatórios semanais de engajamento

Mas isso é fase 2. Primeiro a fábrica de conteúdo (ela pintando e gravando) precisa estar rodando.

---

## O plano em uma frase

**Lúcia pinta a Ponte Hercílio Luz gravando tudo → extrai 3+ posts → posta a enquete do próximo quadro → repete. O filho automatiza o máximo possível com IA pra ela não precisar pensar em Instagram, só em pintar.**

---

## Projetos técnicos (para o filho)

- [ ] Arquitetar o bot de WhatsApp (escolher stack: Twilio vs Evolution API)
- [ ] Criar calendário de conteúdo das primeiras 4 semanas
- [ ] Detalhar guia de gravação para a Lúcia (ângulos, apps, checklist)
- [ ] Configurar automações de Instagram via MCP
- [ ] Dashboard gamificado (conectado ao bot)
- [ ] Calculadora de preço de obras

---

## Dashboard gamificado — visão e arquitetura

### Por que faz sentido

A Lúcia jogava Candy Crush. A mecânica de "desbloquear níveis" é algo que ela entende e que **motiva**. Ver o progresso visualmente cria sensação de conquista e torna a jornada tangível.

### Como ficaria visualmente

```
🏝️ COLEÇÃO FLORIPA
━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Ponte Hercílio Luz    ⭐⭐⭐  [COMPLETO]
🎨 Lagoa da Conceição   ⭐☆☆  [PINTANDO...]
🔒 Mercado Público
🔒 Praia da Joaquina
🔒 Ribeirão da Ilha

━━━━━━━━━━━━━━━━━━━━━━━━━━━
Progresso: ██████░░░░░░ 2/5 quadros

⛪ ARTE SACRA  [🔒 Desbloqueia após Coleção Floripa]
```

### Sub-etapas de cada "nível" (quadro)

Cada pintura tem 7 passos que se marcam conforme ela avança:

1. Referência escolhida
2. Estudo/esboço feito
3. Pintura iniciada (time-lapse ligado)
4. Pintura finalizada
5. Foto ambientada tirada
6. Reel postado
7. Carrossel postado

### Integração com o bot de WhatsApp

Ela fala com o bot → bot atualiza o estado → dashboard reflete automaticamente.

Exemplos:
- Ela: "Terminei o esboço da Lagoa" → bot marca etapa 2, pergunta se já ligou o time-lapse
- Ela: "Postei o reel" → bot marca etapa 6, celebra, lembra de criar o carrossel
- Ela: "Quanto cobro por uma tela 60x80?" → bot usa a calculadora e responde

### Seções do site/dashboard

| Seção | Privada ou Pública | Conteúdo |
|---|---|---|
| Dashboard / Roadmap | Privada (só Lúcia) | O mapa gamificado com níveis e progresso |
| Quem sou eu | Pública (futuramente) | Bio da artista, foto, estilo |
| Obras | Pública (futuramente) | Galeria das pinturas completas |
| Encomendas | Pública (futuramente) | Como funciona, prazo, CTA WhatsApp |
| Calculadora de preço | Privada (só Lúcia) | Calcula custo + margem baseado em tamanho/horas/material |

### Stack sugerida

- **Dashboard:** Next.js ou HTML estático com JSON (simples, fácil de manter)
- **Bot WhatsApp:** Evolution API (open source, self-hosted) + Claude API
- **Banco de dados:** SQLite ou JSON file pro estado do progresso
- **Deploy:** Vercel (grátis) pro site, VPS barata (~R$25/mês) pro bot
- **Contexto do bot:** o `CLAUDE.md` deste projeto serve como base de conhecimento

### Calculadora de preço — lógica

Inputs:
- Tamanho da tela (ex: 60x80 cm)
- Horas estimadas de trabalho
- Custo do material estimado

Outputs:
- **Preço mínimo** = (horas × valor/hora) + material + margem 20%
- **Preço sugerido** = mínimo × 1.3 a 1.5 (dependendo do estilo/complexidade)
- **Preço "aspiracional"** = para quando a marca crescer

---

## Ordem de build recomendada

1. **Bot WhatsApp — versão mínima** (lembretes fixos + responde perguntas simples)
2. **Dashboard — versão mínima** (só o mapa de progresso, atualizado manualmente primeiro)
3. **Integração bot ↔ dashboard** (bot atualiza o progresso automaticamente)
4. **Calculadora de preço** (formulário simples)
5. **Site público** (só quando tiver Coleção Floripa com 3+ obras prontas)
