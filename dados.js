// ═══════════════════════════════════════════════════════════════
// ICBID T2 — DADOS OPERACIONAIS
// Atualizar toda segunda-feira antes das 9h
// Não alterar os nomes das variáveis — só os valores
// ═══════════════════════════════════════════════════════════════

var ICBID = {

  // ── CAMPANHA ─────────────────────────────────────────────────
  semana_atual: 0,            // Semana da campanha (0 = pré-início, 1 a 18)
  data_atualizacao: "",       // "2026-06-26" (data da última atualização)

  // ── FUNIL P1 — CAPTAÇÃO ──────────────────────────────────────
  leads_total: 0,             // Total de cards criados no P1 CRM
  leads_qualificados: 0,      // Leads em "Qualificando" ou estágio superior
  leads_engajados: 0,         // Leads em "Engajado"
  propostas_enviadas: 0,      // Leads em "Proposta"
  matriculas: 0,              // Matrículas confirmadas (meta: 50)

  // ── WEBINÁRIOS (P2) ───────────────────────────────────────────
  inscritos_webinar: 0,       // Inscritos em Webinários
  presentes_webinar: 0,       // Presentes nos Webinários (show rate)
  convertidos_webinar: 0,     // Converteram de Webinário para pós (meta: 15%)

  // ── CURSOS LIVRES (P2) ────────────────────────────────────────
  inscritos_cl: 0,            // Inscritos em Cursos Livres
  presentes_cl: 0,            // Presentes nos Cursos Livres (show rate)
  convertidos_cl: 0,          // Converteram de CL para pós (meta: 25%)

  // ── FINANCEIRO ───────────────────────────────────────────────
  investimento_total: 0,      // R$ investidos em tráfego (acumulado)
  cpl: 0,                     // Custo por lead atual (R$) - 0 se ainda não rodou
  custo_por_matricula: 0,     // R$ por matrícula fechada
  receita_acumulada: 0,       // R$ de matrículas confirmadas (acumulado)

  // ── COMUNIDADE WHATSAPP ───────────────────────────────────────
  membros_comunidade: 0,      // Total de membros no grupo

  // ── RETENÇÃO — ALUNOS P3 ─────────────────────────────────────
  alunos_em_curso: 0,         // Cards em "Em Curso" no P3
  alunos_em_risco: 0,         // Alunos com Health Score < 4/10
  health_score_medio: 0,      // Média HS da turma (0 a 10)

  // ── STATUS DAS FERRAMENTAS ────────────────────────────────────
  // Valores aceitos: "ativo" | "pendente" | "problema"
  crm_status: "pendente",         // CRM Data Crazy
  gateway_status: "pendente",     // Gateway Asaas
  ead_status: "pendente",         // Plataforma EAD (MVP Hiago)
  automacao_status: "pendente",   // Ferramenta de automação Igor
  usina_status: "ativo"           // USINA Edu

};
