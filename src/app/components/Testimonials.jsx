"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const Testimonials_IMG = "/testimonial.jpg";

function toTestimonialsArray(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.data)) return data.data;
    if (data && Array.isArray(data.testimonials)) return data.testimonials;
    return [];
}


export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        async function load() {
            const response = await fetch("http://localhost:4000/api/v1/testimonials");
            const data = await response.json();

            const list = toTestimonialsArray(data);
            setTestimonials(list);
            setIndex(0);
        }

        load();
    }, []);

if (testimonials.length === 0) {
    return (
        <section className="relative py-10 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image
                    src={Testimonials_IMG}
                    alt="Testimonial background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <article className="relative z-10 mx-10 text-white text-center">
                <h2 className="text-4xl py-4">A word from other Believers</h2>
                <p className="mt-6">No current testimonials are available</p>
            </article>
        </section>
    );
}

const current = testimonials[index];

function prev() {
    if (index === 0) {
        setIndex(testimonials.length - 1);
    } else {
        setIndex(index - 1);
    }
}

function next() {
    if (index === testimonials.length - 1) {
        setIndex(0);
    } else {
        setIndex(index + 1);
    }
}

    return (
        <section className="relative py-10 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image
                    src={Testimonials_IMG}
                    alt="Testimonial background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>
            
            <article className="relative z-10 mx-10 text-center text-white">
                <h2 className="text-4xl py-4">A word from other Believers</h2>
                <div className="mt-6">
                    <div className="my-2">
                        <p className="text-xl italic">"{current.text}"</p>
                        <p className="mt-2 font-semibold">{current.name}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-4">
                        <button
                            type="button"
                            className="rounded-full border border-white px-2 py-2 text-white"
                            onClick={prev}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            type="button"
                            className="rounded-full border border-white px-2 py-2 text-white"
                            onClick={next}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </article>
        </section>
    );
}