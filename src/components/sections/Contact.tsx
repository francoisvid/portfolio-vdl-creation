import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

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
    <section id="contact" className="py-20 bg-orange-50 dark:bg-gray-800 transition-colors duration-300">
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
                {/* Social media links would go here */}
                <div className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-900 dark:text-blue-400 hover:bg-orange-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-900 dark:text-blue-400 hover:bg-orange-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-orange-900 dark:text-blue-400 hover:bg-orange-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 md:p-8 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                Envoyez-moi un message
              </h3>

              {submitSuccess && (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-4 rounded-lg mb-6 animate-fadeIn">
                  Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.
                </div>
              )}

              {submitError && (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg mb-6">
                  {submitError}
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
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-400 focus:border-blue-900 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
                      placeholder="John Doe"
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-400 focus:border-blue-900 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
                      placeholder="john@example.com"
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
                    value={formData.subject}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-400 focus:border-blue-900 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
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
