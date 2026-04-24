const navItems = [
  { href: '/dashboard.html',     label: 'Dashboard',        color: '#60a5fa', section: 'Principal' },
  { href: '/tareas.html',        label: 'Tareas',           color: '#f59e0b', section: 'Gestión' },
  { href: '/objetivos.html',     label: 'Objetivos',        color: '#10b981', section: 'Gestión' },
  { href: '/donantes.html',      label: 'Grandes Donantes', color: '#a78bfa', section: 'Gestión' },
  { href: '/accesos.html',       label: 'Accesos Directos', color: '#6ee7b7', section: 'Otros' },
  { href: '/configuracion.html', label: 'Configuración',    color: '#94a3b8', section: 'Otros' },
]

export function renderSidebar(paginaActual, signOutFn) {
  const sidebar = document.getElementById('sidebar')
  const sections = ['Principal', 'Gestión', 'Otros']
  sidebar.innerHTML = `
    <div style="padding:20px 16px 16px;border-bottom:0.5px solid rgba(255,255,255,0.08)">
      <div style="font-size:10px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1px">Fundraising</div>
      <div style="font-size:13px;color:#fff;font-weight:500;margin-top:3px">Gestor de Tareas</div>
    </div>
    ${sections.map(sec => `
      <div style="padding:12px 12px 4px;font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:1px">${sec}</div>
      ${navItems.filter(n => n.section === sec).map(item => {
        const active = window.location.pathname.endsWith(item.href.replace('/',''))
        return `<a href="${item.href}" class="nav-item ${active ? 'active' : ''}">
          <div style="width:7px;height:7px;border-radius:50%;background:${item.color};flex-shrink:0"></div>
          ${item.label}
        </a>`
      }).join('')}
    `).join('')}
    <div style="margin-top:auto;padding:12px 8px">
      <a class="nav-item" id="btn-signout" style="cursor:pointer;color:rgba(255,255,255,0.35)">
        <div style="width:7px;height:7px;border-radius:50%;background:#475569;flex-shrink:0"></div>
        Cerrar sesión
      </a>
    </div>
  `
  document.getElementById('btn-signout').addEventListener('click', signOutFn)
}
