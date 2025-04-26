'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Clock, CreditCard, Code, Globe, Briefcase } from 'lucide-react'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: 'Clock' | 'CreditCard' | 'Code' | 'Globe' | 'Briefcase'
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'Clock',
            question: 'What is your typical project timeline?',
            answer: 'Project timelines vary based on scope and complexity. Small projects typically take 2-4 weeks, medium-sized projects 1-3 months, and larger projects 3+ months. I provide detailed timelines during the initial consultation and keep you updated with regular progress reports throughout development.',
        },
        {
            id: 'item-2',
            icon: 'CreditCard',
            question: 'How do your payment terms work?',
            answer: 'I typically work with a 50% upfront deposit and the remaining 50% upon project completion for smaller projects. For larger projects, I offer milestone-based payments (e.g., 30% upfront, 30% at midpoint, 40% upon completion). I accept bank transfers, PayPal, and major credit cards. All payment terms are clearly outlined in our contract.',
        },
        {
            id: 'item-3',
            icon: 'Code',
            question: 'What technologies and programming languages do you specialize in?',
            answer: 'I specialize in full-stack web development with React, Next.js, TypeScript, and Node.js. I also have experience with Python, Django, and various database technologies (SQL, MongoDB, Firebase). For mobile development, I work with React Native. I stay current with industry trends and can adapt to your project\'s specific tech requirements.',
        },
        {
            id: 'item-4',
            icon: 'Globe',
            question: 'Do you offer ongoing maintenance and support?',
            answer: 'Yes, I offer various maintenance and support packages after project completion. These range from basic bug fixes to comprehensive support including feature updates, security patches, and performance optimizations. We can discuss your specific needs and set up a maintenance agreement that works for your project and budget.',
        },
        {
            id: 'item-5',
            icon: 'Briefcase',
            question: 'How do you handle project ownership and intellectual property?',
            answer: 'Upon final payment, you receive full ownership of all deliverables and intellectual property rights to the code created specifically for your project. I respect your confidentiality and am happy to sign NDAs. For open-source components, I ensure proper licensing compliance and documentation.',
        },
    ]

    // Function to render the correct icon based on the icon name
    const renderIcon = (iconName: FAQItem['icon']) => {
        switch (iconName) {
            case 'Clock':
                return <Clock className="m-auto size-4" />;
            case 'CreditCard':
                return <CreditCard className="m-auto size-4" />;
            case 'Code':
                return <Code className="m-auto size-4" />;
            case 'Globe':
                return <Globe className="m-auto size-4" />;
            case 'Briefcase':
                return <Briefcase className="m-auto size-4" />;
            default:
                return null;
        }
    };

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can&apos;t find what you&apos;re looking for? Contact our{' '}
                                <Link
                                    href="#"
                                    className="text-primary font-medium hover:underline">
                                    customer support team
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                {renderIcon(item.icon)}
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
