import { List, X } from '@phosphor-icons/react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Sobre', '#sobre'], ['Projetos', '#projetos'], ['IA', '#ia'],
    ['Stack', '#stack'], ['Jornada', '#jornada'], ['Contato', '#contato'],
  ];
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backdropFilter: 'blur(14px)', background: 'rgba(8,8,12,.6)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="#top" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '.1em' }}>CAIO GOMES<span style={{ color: 'var(--accent)' }}>.</span></a>
        <nav style={{ display: 'flex', gap: 26 }} className="nav-desktop">
          {links.map(([l, h]) => (
            <a key={h} href={h} style={{ fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>{l}</a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: '#fff', display: 'none' }} className="nav-btn">
          {open ? <X size={24} /> : <List size={24} />}
        </button>
        <a href="#contato" className="btn btn-solid" style={{ padding: '10px 20px', fontSize: 12 }}>Vamos criar?</a>
      </div>
      <style>{`@media(max-width:820px){.nav-desktop{display:none!important}.nav-btn{display:block!important}}`}</style>
      {open && (
        <div style={{ padding: '12px 32px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} style={{ textTransform: 'uppercase', letterSpacing: '.15em' }}>{l}</a>)}
        </div>
      )}
    </header>
  );
}
