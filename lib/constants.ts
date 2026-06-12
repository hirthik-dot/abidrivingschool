import React from 'react';
import { Bike, CarFront, Truck, Bus, Gamepad2, FileText, RefreshCw } from "lucide-react";

export const SITE = {
  name: "Abi Driving School",
  tagline: "Drive With Confidence",
  phone: ["+91 98940 37989", "+91 99442 02232"], 
  whatsapp: "919894037989", 
  email: "hello@abidrivingschool.in", 
  address: "Abi Driving School, Sirkali, Tamil Nadu",
  hours: "Mon–Sat: 9:00 AM – 8:00 PM",
  mapsEmbed: "https://maps.google.com/maps?q=Abi+Driving+School+Sirkali+Tamil+Nadu&output=embed",
  mapsLink: "https://maps.app.goo.gl/EAs4irCvXeVzupfE8",
  established: "2010",
  stats: { students: 500, passRate: 95, years: 10, rating: 4.8 }
};

export const COURSES = [
  {
    id: "mcwg",
    icon: React.createElement(Bike),
    name: "MCWG",
    full: "Motorcycle With Gear",
    duration: "2 - 3 Weeks",
    description: "Master gear shifting and clutch control on motorcycles. Includes road safety and RTO preparation.",
    vehicles: ["Gear motorcycles up to any CC", "Includes non-gear eligibility"],
    includes: ["Clutch and gear shifting mastery", "Road safety and traffic rules", "Highway riding techniques", "RTO test preparation"],
    documents: ["Aadhaar card (original + copy)", "Learner's Licence", "Passport-size photos (4 nos.)", "Age proof document"],
    approach: ["One-on-one instructor sessions", "Gradual difficulty progression", "Real road practice before test"]
  },
  {
    id: "mcwog",
    icon: React.createElement(Bike),
    name: "MCWOG",
    full: "Scooter / Non-Gear",
    duration: "2 Weeks",
    description: "Perfect for beginners. Learn to balance and ride scooters safely in traffic.",
    vehicles: ["Scooters and non-gear bikes", "Mopeds and electric scooters"],
    includes: ["Balance and control training", "Traffic signal navigation", "Figure-8 and slalom practice", "Complete RTO test preparation"],
    documents: ["Aadhaar card (original + copy)", "Learner's Licence", "Passport-size photos (4 nos.)"],
    approach: ["Beginner-friendly, step-by-step", "Safe practice grounds", "Ideal for first-time riders"],
    popular: true
  },
  {
    id: "lmv",
    icon: React.createElement(CarFront),
    name: "LMV",
    full: "Car Licence",
    duration: "3 - 4 Weeks",
    description: "Comprehensive car driving lessons covering everything from basic steering to parallel parking.",
    vehicles: ["Cars (hatchback, sedan, SUV)", "Both manual and automatic training"],
    includes: ["Steering, braking, acceleration", "Parallel and reverse parking", "Highway and city driving", "Night driving awareness"],
    documents: ["Aadhaar card (original + copy)", "Learner's Licence (LMV)", "Passport-size photos (4 nos.)", "Medical certificate (if applicable)"],
    approach: ["Dual-control vehicles for safety", "Flexible morning/evening batches", "Mock tests before RTO exam"]
  },
  {
    id: "lmv-transport",
    icon: React.createElement(Truck),
    name: "LMV Transport",
    full: "Light Commercial",
    duration: "3 - 4 Weeks",
    description: "Training for light commercial vehicles, mini-trucks, and goods carriers.",
    vehicles: ["Tata Ace, Bolero Pick-up", "Mini-trucks, small goods carriers", "Light commercial vehicles"],
    includes: ["Load management awareness", "Commercial driving regulations", "RTO transport licence exam prep"],
    documents: ["Existing LMV Driving Licence", "Aadhaar card (original + copy)", "Medical fitness certificate", "Passport-size photos"],
    approach: ["Practical on-road experience", "Route planning and navigation"]
  },
  {
    id: "heavy",
    icon: React.createElement(Bus),
    name: "Heavy Vehicle",
    full: "Heavy Vehicle Transport",
    duration: "4 - 6 Weeks",
    description: "Advanced training for multi-axle vehicles, buses, and heavy trucks.",
    vehicles: ["Lorries and trucks", "Buses and public transport", "Heavy goods and passenger vehicles"],
    includes: ["Multi-axle vehicle handling", "Air brake systems training", "Long-distance and hill driving", "Defensive driving techniques"],
    documents: ["Existing LMV licence (1+ year old)", "Aadhaar card (original + copy)", "Medical fitness certificate", "Passport-size photos (6 nos.)"],
    approach: ["Experienced heavy-vehicle instructors", "Progressive difficulty, real-world routes", "Full RTO test accompaniment"],
    flagship: true
  },
  {
    id: "simulator",
    icon: React.createElement(Gamepad2),
    name: "Simulator",
    full: "Driving Simulator Training",
    duration: "Per Session / Package",
    description: "Experience real-world driving scenarios in our state-of-the-art simulator before hitting the road.",
    vehicles: ["Car simulation", "Two-wheeler simulation"],
    includes: ["City and highway driving simulation", "Adverse weather conditions (rain, fog)", "Night driving scenarios", "Emergency response practice"],
    documents: ["No documents required for simulator sessions"],
    approach: ["Zero-risk environment", "Detailed performance feedback", "Perfect for nervous beginners"],
    isNew: true
  },
  {
    id: "ll",
    icon: React.createElement(FileText),
    name: "Learner's Licence",
    full: "Learner's Licence Help",
    duration: "Assistance",
    description: "We handle the paperwork and process to get your LLR easily.",
    vehicles: [],
    includes: ["Online LL application filing", "RTO slot booking", "Written test preparation", "Document verification and submission"],
    documents: ["Aadhaar card", "Age proof (birth certificate / 10th marksheet)", "Address proof", "Passport-size photos", "Medical certificate (Form 1A)"],
    approach: []
  },
  {
    id: "renewal",
    icon: React.createElement(RefreshCw),
    name: "Renewal",
    full: "Renewal & Add-on",
    duration: "Processing",
    description: "Licence renewals, adding vehicle categories, or address changes.",
    vehicles: [],
    includes: ["Driving licence renewal", "Adding new vehicle categories", "Address change on licence", "Duplicate licence application"],
    documents: ["Existing Driving Licence", "Aadhaar card", "Medical certificate (for renewal)", "Passport-size photos"],
    approach: []
  }
];

export const TESTIMONIALS = [
  {
    name: "Rajesh K.",
    rating: 5,
    text: "The instructors are incredibly patient. I was very nervous about driving in the city, but they built my confidence step by step. Passed my test on the first try!",
    source: "Google"
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "As a woman, I was looking for a driving school where I felt safe and respected. Abi Driving School exceeded my expectations. The dual-control cars made me feel secure.",
    source: "Google"
  },
  {
    name: "Muthu V.",
    rating: 4.5,
    text: "The heavy vehicle training here is top-notch. They actually take you on real highway routes, not just empty grounds. Highly recommend for commercial drivers.",
    source: "Google"
  },
  {
    name: "Ananya D.",
    rating: 5,
    text: "The new simulator training is amazing! I practiced driving in the rain and at night before ever touching a real steering wheel. Made the real thing so much easier.",
    source: "Google"
  },
  {
    name: "Karthik R.",
    rating: 5,
    text: "From helping me get my Learner's Licence to the final driving test, the process was completely smooth. No hidden fees, very professional.",
    source: "Google"
  }
];

export const FAQ = [
  {
    question: "Do I need a Learner's Licence before joining?",
    answer: "Not at all! We can help you apply for and obtain your Learner's Licence (LLR) as the very first step. Once you have it, we'll begin the practical driving sessions."
  },
  {
    question: "How many days does training take?",
    answer: "It depends on the course. Two-wheeler courses (MCWG/MCWOG) typically take 2-3 weeks. Car training (LMV) takes 3-4 weeks, while Heavy Vehicle training takes about 4-6 weeks."
  },
  {
    question: "Do you offer training for women?",
    answer: "Yes, absolutely. We pride ourselves on providing a safe, respectful, and supportive environment for women. Our instructors are highly patient and experienced."
  },
  {
    question: "How long does a Driving Licence take?",
    answer: "After obtaining your Learner's Licence, there is a mandatory 30-day waiting period before you can take the final Driving Licence (DL) test. Including training time, the whole process usually takes around 40-45 days."
  },
  {
    question: "What is the minimum age for a Heavy Vehicle licence?",
    answer: "To apply for a Heavy Vehicle Transport licence, you must be at least 20 years old and have held a valid LMV (car) licence for at least one year."
  },
  {
    question: "Can I walk in without an appointment?",
    answer: "Yes, you are welcome to visit our office anytime during working hours (Mon-Sat, 9AM-8PM). However, we recommend calling ahead if you want to speak with a specific instructor."
  }
];
