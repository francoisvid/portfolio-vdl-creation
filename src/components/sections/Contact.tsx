import React, {useEffect} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xgvkkorp");

  useEffect(() => {
    if (state.succeeded) {
      // Reset form after 3 seconds
      setTimeout(() => {
        const form = document.querySelector('form');
        if (form) form.reset();
      }, 1000);
    }
  }, [state.succeeded]);

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'vidalfrancois11@gmail.com',
      href: 'mailto:vidalfrancois11@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Téléphone',
      content: '+33 7 XX XX XX XX',
      href: 'tel:+33744441398'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Adresse',
      content: 'Montpellier, France',
      href: '#'
    }
  ];

  return (
      <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              title="Me Contacter"
              subtitle="Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter et obtenir un devis gratuit."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                Informations de contact
              </h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                    <a
                        key={index}
                        href={method.href}
                        className="flex group"
                    >
                      <div className="mr-4 bg-white dark:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center text-orange-900 dark:text-blue-400 group-hover:bg-orange-900 group-hover:text-white dark:group-hover:bg-blue-400 dark:group-hover:text-gray-900 transition-colors">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white">
                          {method.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {method.content}
                        </p>
                      </div>
                    </a>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  Suivez-moi
                </h3>
                <div className="flex space-x-4">
                  <a
                      href="https://github.com/francoisvid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-900 dark:text-blue-400 hover:bg-orange-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                      href="https://www.linkedin.com/in/fran%C3%A7oisvid/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-900 dark:text-blue-400 hover:bg-orange-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                      href="https://www.instagram.com/vdl.creation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-900 dark:text-blue-400 hover:bg-orange-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 md:p-8 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                  Envoyez-moi un message
                </h3>

                {state.succeeded && (
                    <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-4 rounded-lg mb-6 animate-fadeIn">
                      Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-400 focus:border-blue-900 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
                          placeholder="Nom et prénom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-400 focus:border-blue-900 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
                          placeholder="email@example.com"
                      />
                      <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-400 focus:border-blue-900 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="Site web">Site web</option>
                      <option value="Application mobile">Application mobile</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-400 focus:border-blue-900 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors resize-none"
                        placeholder="Décrivez votre projet..."
                    ></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <Button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full sm:w-auto"
                  >
                    {state.submitting ? (
                        <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                    ) : (
                        <span className="flex items-center">
                      Envoyer le message <Send size={16} className="ml-2" />
                    </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
