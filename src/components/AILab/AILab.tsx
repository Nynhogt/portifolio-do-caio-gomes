import { useState } from 'react';
import { PaperPlaneRight, Brain, Database, Robot } from '@phosphor-icons/react';

const KNOWLEDGE = [
  { k: 'como você desenvolve', a: 'Levanto o problema real, prototipo rápido em React + Vite, crio API em Spring Boot ou Django, e automatizo o resto. Depois adiciono IA (RAG/LLM) se gerar valor.' },
  { k: 'stack', a: 'React, Angular, Spring Boot (Java), Django (Python), LangChain4j, PostgreSQL e Docker.' },
  { k: 'experiência', a: 'Atuo com Suporte Técnico na Lector Tecnologia e curso Ciência da Computação, migrando para Full Stack + IA aplicada.' },
];

export default function AILab() {
  const [q, setQ] = useState('');
  const [msgs, setMsgs] = useState<{ me: boolean; text: string }[]>([
    { me: false, text: 'Olá! Sou o AI Lab demo. Pergunte algo sobre meu trabalho (ex: "qual sua stack?"). Backend Spring + LangChain4j entra aqui na versão final.' },
  ]);

  const send = () => {
    if (!q.trim()) return;
    const query = q.toLowerCase();
    const hit = KNOWLEDGE.find(h => query.includes(h.k.split(' ')[0]));
    const answer = hit ? hit.a : 'Boa pergunta! Na arquitetura final isso vai para Spring Boot → LangChain4j → LLM com RAG na minha base de conhecimento. Por enquanto sou um mock local.';
    setMsgs(m => [...m, { me: true, text: q }, { me: false, text: answer }]);
    setQ('');
  };

  return (
    <section id="ia">
      <div className="wrap">
        <p className="kicker reveal">IA aplicada</p>
        <h2 className="h-display reveal" style={{ fontSize: 'clamp(32px,5vw,64px)', margin: '18px 0' }}>AI LAB</h2>
        <p className="reveal" style={{ color: 'var(--muted)', maxWidth: 640 }}>Demonstração interativa. Arquitetura: React → Spring Boot → LangChain4j → LLM + Embeddings + RAG.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 18, marginTop: 28 }} className="ai-grid">
          <div className="card reveal" style={{ padding: 24, minHeight: 380, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, maxHeight: 320, overflowY: 'auto' }}>
              {msgs.map((m, i) => (
                <div key={i} style={{ alignSelf: m.me ? 'flex-end' : 'flex-start', background: m.me ? 'var(--accent)' : 'rgba(255,255,255,.06)', color: m.me ? '#000' : '#fff', padding: '12px 16px', borderRadius: 16, maxWidth: '85%', fontSize: 14, lineHeight: 1.5 }}>{m.text}</div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <input value={q} onChange={e => setQ(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Como você desenvolve projetos?" style={{ flex: 1, background: '#0a0a0f', border: '1px solid var(--line)', borderRadius: 999, padding: '14px 20px', color: '#fff', outline: 'none' }} />
              <button onClick={send} className="btn btn-solid" style={{ padding: '14px 22px' }}><PaperPlaneRight size={18} /></button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: <Brain size={20} />, t: 'LangChain4j', d: 'Orquestração de LLMs em Java' },
              { icon: <Database size={20} />, t: 'RAG', d: 'Embeddings + Knowledge Base' },
              { icon: <Robot size={20} />, t: 'Agentes', d: 'Automações e triagem' },
            ].map(c => (
              <div key={c.t} className="card reveal" style={{ padding: 20, display: 'flex', gap: 14, alignItems: 'center' }}>
                <div style={{ color: 'var(--accent)' }}>{c.icon}</div>
                <div><strong>{c.t}</strong><div style={{ color: 'var(--muted)', fontSize: 13 }}>{c.d}</div></div>
              </div>
            ))}
            <div className="card reveal" style={{ padding: 20, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', lineHeight: 1.8 }}>
              React<br />&nbsp;&nbsp;│ HTTP<br />&nbsp;&nbsp;▼<br />Spring Boot<br />&nbsp;&nbsp;▼<br />LangChain4j → LLM / RAG
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:960px){.ai-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
