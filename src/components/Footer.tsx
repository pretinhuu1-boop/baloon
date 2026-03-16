export function Footer() {
  return (
    <footer className="border-t border-ballion-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <span className="font-heading text-2xl tracking-wider">
              <span className="text-white">BALL</span>
              <span className="text-ballion-gold">ION</span>
            </span>
            <p className="text-sm text-ballion-muted mt-3 leading-relaxed">
              Plataforma Global de Entretenimento Competitivo Digital.
            </p>
            <p className="text-xs text-ballion-muted/60 mt-2">
              Não é aposta. É performance real validada por tecnologia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Plataforma
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#como-funciona" className="text-sm text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#metricas" className="text-sm text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded">
                  O Desafio
                </a>
              </li>
              <li>
                <a href="#premios" className="text-sm text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded">
                  Premiação
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Comunidade
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#diferencial" className="text-sm text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded">
                  Por Que BALLION
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#participar" className="text-sm text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded">
                  Participar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-ballion-border gap-4">
          <p className="text-xs text-ballion-muted">
            &copy; 2026 BALLION. Todos os direitos reservados.
          </p>
          <p className="text-xs text-ballion-muted/60">
            BALLION.com — Plataforma Global de Entretenimento Competitivo Digital
          </p>

          <div className="flex gap-4">
            <a href="#" className="p-2 text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="p-2 text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="p-2 text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded" aria-label="TikTok">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
