export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Main content */}
      <div className="flex min-h-screen">
        {/* Left side - Geneva Real Estate Image */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {/* Background Image with Geneva Skyline */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 to-indigo-700/95 z-10"></div>
          <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700">
            {/* Geneva Skyline SVG */}
            <div className="absolute inset-0 flex items-end justify-center">
              <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800" fill="none">
                <defs>
                  <linearGradient id="lakeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0.5)" />
                  </linearGradient>
                </defs>
                
                {/* Geneva Lake */}
                <path d="M0 600 Q300 580 600 600 T1200 600 L1200 800 L0 800 Z" fill="url(#lakeGradient)" />
                
                {/* Buildings */}
                <rect x="100" y="400" width="80" height="200" fill="white" opacity="0.3" />
                <rect x="200" y="350" width="60" height="250" fill="white" opacity="0.4" />
                <rect x="280" y="420" width="70" height="180" fill="white" opacity="0.3" />
                <rect x="370" y="380" width="90" height="220" fill="white" opacity="0.4" />
                <rect x="480" y="400" width="75" height="200" fill="white" opacity="0.3" />
                <rect x="570" y="360" width="85" height="240" fill="white" opacity="0.4" />
                <rect x="670" y="410" width="65" height="190" fill="white" opacity="0.3" />
                <rect x="750" y="390" width="80" height="210" fill="white" opacity="0.4" />
                <rect x="850" y="370" width="70" height="230" fill="white" opacity="0.3" />
                <rect x="930" y="400" width="85" height="200" fill="white" opacity="0.4" />
                <rect x="1030" y="380" width="75" height="220" fill="white" opacity="0.3" />
                
                {/* Jet d'Eau */}
                <circle cx="600" cy="580" r="8" fill="white" opacity="0.8" />
                <path d="M600 580 Q590 550 580 520 Q570 490 560 460" stroke="white" strokeWidth="3" fill="none" opacity="0.6" />
                
                {/* Mountains in background */}
                <path d="M0 300 Q200 250 400 280 Q600 200 800 250 Q1000 180 1200 220 L1200 400 L0 400 Z" fill="white" opacity="0.1" />
              </svg>
            </div>
            
            {/* Content overlay */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-12">
              {/* Helvetika Logo */}
              <div className="w-24 h-24 mx-auto mb-8 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                Bienvenue chez<br />
                <span className="text-blue-200">Helvetika</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-md leading-relaxed">
                Votre partenaire de confiance pour l&apos;immobilier à Genève
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-6 max-w-md">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <p className="text-sm text-blue-100">Location</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <p className="text-sm text-blue-100">Reprise</p>
                </div>
              </div>
              
              {/* Security badge */}
              <div className="mt-8 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <div className="flex items-center text-sm text-white">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Espace Administrateur Sécurisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Auth Pages */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
          {children}
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
