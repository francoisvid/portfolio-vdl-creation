import React, {useState} from "react";
import {Star, Quote, ChevronLeft, ChevronRight, MessageSquare} from "lucide-react";
import SectionTitle from "../ui/SectionTitle.tsx";
import testimonialData from '../../data/testimonials.json';
import TestimonialForm from './TestimonialForm';

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showForm, setShowForm] = useState(false);

    const testimonials = testimonialData.testimonials;
    const currentTestimonial = testimonials[currentIndex];

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section id="testimonials" className="py-20 bg-orange-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <SectionTitle
                        title="Ce que disent mes clients"
                        subtitle="Des partenariats basés sur la confiance et des résultats concrets"
                    />
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Testimonial principale */}
                    <div className="relative">
                        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                            <Quote className="absolute top-6 left-6 text-orange-200" size={40}/>

                            <div className="relative z-10">
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={20}
                                            className="text-orange-400 fill-current"
                                        />
                                    ))}
                                </div>

                                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                                    "{currentTestimonial.text}"
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                                        <span className="text-orange-700 font-bold">
                                            {currentTestimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {currentTestimonial.name}
                                        </div>
                                        <div className="text-gray-600">
                                            {currentTestimonial.role} - {currentTestimonial.company}
                                        </div>
                                        <div className="text-sm text-orange-600">
                                            Projet: {currentTestimonial.project}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <button
                            onClick={prev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-600 transition-colors"
                            aria-label="Témoignage précédent"
                        >
                            <ChevronLeft size={24}/>
                        </button>

                        <button
                            onClick={next}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-600 transition-colors"
                            aria-label="Témoignage suivant"
                        >
                            <ChevronRight size={24}/>
                        </button>
                    </div>

                    {/* Indicateurs */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentIndex
                                        ? 'bg-orange-600'
                                        : 'bg-orange-200'
                                }`}
                                aria-label={`Voir témoignage ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Formulaire de témoignage */}
                    <div className="mt-12 text-center">
                        {!showForm ? (
                            <button
                                onClick={() => setShowForm(true)}
                                className="group inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
                            >
                                <MessageSquare className="mr-2 group-hover:rotate-12 transition-transform duration-300"
                                               size={20}/>
                                Laisser un témoignage
                            </button>
                        ) : (
                            <div className="relative animate-fadeInScale">
                                <div
                                    className="animate-fadeIn"
                                    onClick={() => setShowForm(false)}
                                />
                                <div className="relative z-50">
                                    <TestimonialForm onClose={() => setShowForm(false)}/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                        <div className="text-gray-600 dark:text-white">Clients satisfaits</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-600 mb-2">20+</div>
                        <div className="text-gray-600 dark:text-white">Projets livrés</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-600 mb-2">24h</div>
                        <div className="text-gray-600 dark:text-white">Temps de réponse moyen</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
