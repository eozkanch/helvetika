'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import EmailIcon from '@/components/auth/EmailIcon';
import LoadingSpinner from '@/components/auth/LoadingSpinner';
import CloseIcon from '@/components/auth/CloseIcon';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGoHome = () => {
    console.log('handleGoHome clicked, navigating to /main');
    router.push('/main');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Password reset request for:', email);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md relative">
          {/* X button to go back to home */}
          <div className="absolute -top-16 left-0 z-20">
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleGoHome();
              }}
              className="inline-flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 group border border-white/20"
            >
              <CloseIcon className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
            </button>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Email envoyé !</h1>
            <p className="text-gray-600 mb-6">
              Si cette adresse e-mail est associée à un compte administrateur, vous recevrez un lien de réinitialisation dans quelques minutes.
            </p>
            
            <div className="space-y-4">
              <Link 
                href="/auth/login"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl inline-block"
              >
                Retour à la connexion
              </Link>
              
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail('');
                }}
                className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 transition-colors"
              >
                Essayer une autre adresse
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md relative">
        {/* X button to go back to home */}
        <div className="absolute -top-16 left-0 z-20">
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleGoHome();
            }}
            className="inline-flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 group border border-white/20"
          >
            <CloseIcon className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
          </button>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Mot de passe oublié</h1>
            <p className="text-gray-600">
              Entrez votre adresse e-mail pour recevoir un lien de réinitialisation
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse e-mail administrateur
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  placeholder="admin@helvetika.ch"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <EmailIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <LoadingSpinner />
                  Envoi en cours...
                </div>
              ) : (
                'Envoyer le lien de réinitialisation'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link 
              href="/auth/login"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              ← Retour à la connexion
            </Link>
          </div>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-amber-50/50 rounded-xl border border-amber-200/50">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div className="text-sm text-amber-800">
                <p className="font-medium mb-1">Important</p>
                <p>Le lien de réinitialisation sera valide pendant 15 minutes et ne peut être utilisé qu&apos;une seule fois pour des raisons de sécurité.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

