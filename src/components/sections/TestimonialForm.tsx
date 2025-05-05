import React, { useState } from "react";
import { Send, Star, X } from "lucide-react";
import { useForm } from '@formspree/react';

interface TestimonialFormProps {
    onClose: () => void;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({ onClose }) => {
    const [state, handleSubmit] = useForm("xnnddpak");
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);

    if (state.succeeded) {
        return (
            <div className="max-w-2xl mx-auto bg-green-50 p-8 rounded-lg shadow-lg text-center animate-fadeIn">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Merci pour votre témoignage !
                </h3>
                <p className="text-green-700 mb-6">
                    Votre témoignage a été soumis avec succès.
                    Il sera affiché après modération.
                </p>
                <button
                    onClick={onClose}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                    Fermer
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto animate-slideIn">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl relative">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={24} />
                </button>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Laissez votre témoignage
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="transform transition-all duration-300 hover:scale-102">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nom *
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            placeholder="Votre nom"
                        />
                    </div>

                    <div className="transform transition-all duration-300 hover:scale-102">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Entreprise
                        </label>
                        <input
                            type="text"
                            name="company"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            placeholder="Votre entreprise"
                        />
                    </div>

                    <div className="transform transition-all duration-300 hover:scale-102">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Poste
                        </label>
                        <input
                            type="text"
                            name="role"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            placeholder="Votre poste"
                        />
                    </div>

                    <div className="transform transition-all duration-300 hover:scale-102">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Projet
                        </label>
                        <input
                            type="text"
                            name="project"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            placeholder="Nom du projet"
                        />
                    </div>
                </div>

                <div className="mb-6 transform transition-all duration-300 hover:scale-102">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Votre témoignage *
                    </label>
                    <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Décrivez votre expérience..."
                    />
                </div>

                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Note *
                    </label>
                    <div className="flex gap-2 items-center justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                className="transform transition-all duration-200 hover:scale-110"
                            >
                                <Star
                                    size={28}
                                    className={`transition-colors duration-200 ${
                                        star <= (hoverRating || rating)
                                            ? 'text-orange-400 fill-orange-400'
                                            : 'text-gray-300'
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                    <input type="hidden" name="rating" value={rating} />
                </div>

                <button
                    type="submit"
                    disabled={state.submitting}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 ${
                        state.submitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    <Send className="mr-2" size={20} />
                    {state.submitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
            </form>
        </div>
    );
};

export default TestimonialForm;
