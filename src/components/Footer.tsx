export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center md:justify-items-start">
          {/* Sol Kolon - Şirket Bilgileri ve İletişim */}
          <div className="space-y-4 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Helvetika
              </h3>
              <p className="text-gray-700 text-sm">
                Solutions de location et reprise de bail à Genève.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-700 text-sm">
                Rue Robert-de-Traz 1, 1206 Genève
              </p>
              <p className="text-gray-700 text-sm">
                Tél: +41 77 811 19 04
              </p>
              <p className="text-gray-700 text-sm">
                contact@helvetika.ch
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-gray-500 text-xs">
                © Helvetika
              </p>
            </div>
          </div>

          {/* Orta Kolon - Navigasyon Linkleri */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-black mb-4">
              Navigation
            </h4>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-gray-700 hover:text-gray-900 text-sm transition-colors"
              >
                Reprise de bail
              </a>
              <a 
                href="#" 
                className="block text-gray-700 hover:text-gray-900 text-sm transition-colors"
              >
                Nous contacter
              </a>
              <a 
                href="#" 
                className="block text-gray-700 hover:text-gray-900 text-sm transition-colors"
              >
                Je suis propriétaire
              </a>
            </div>
          </div>

          {/* Sağ Kolon - Yasal Linkler */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-black mb-4">
              Légal
            </h4>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-gray-700 hover:text-gray-900 text-sm transition-colors"
              >
                Mentions légales
              </a>
              <a 
                href="#" 
                className="block text-gray-700 hover:text-gray-900 text-sm transition-colors"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
