// ============================================================================
//  ENVIO DO FORMULÁRIO  —  preparado para o Supabase
// ============================================================================
//  Enquanto o Supabase NÃO estiver configurado, esta função não salva nada
//  (o pedido segue pelo WhatsApp). Quando você criar o projeto no Supabase e
//  preencher o arquivo .env (veja README), os pedidos passam a ser salvos
//  automaticamente na tabela "leads" — sem precisar mudar mais nada no código.
//
//  Não usa nenhuma biblioteca extra: conversa direto com a API REST do Supabase.
// ============================================================================

const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY
const TABELA = 'leads'

export const supabaseConfigurado = Boolean(SUPABASE_URL && SUPABASE_KEY)

export async function salvarLead(dados) {
  if (!supabaseConfigurado) return { salvo: false, motivo: 'supabase-nao-configurado' }

  const corpo = {
    nome: dados.nome,
    whatsapp: dados.whatsapp,
    email: dados.email || null,
    servico: dados.servico,
    data_desejada: dados.data || null,
    cidade: dados.cidade || null,
    mensagem: dados.mensagem || null,
  }

  const resposta = await fetch(`${SUPABASE_URL}/rest/v1/${TABELA}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(corpo),
  })

  if (!resposta.ok) throw new Error(`Supabase respondeu com erro ${resposta.status}`)
  return { salvo: true }
}
