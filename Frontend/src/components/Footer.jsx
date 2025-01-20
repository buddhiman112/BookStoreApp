import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <a className="link link-hover hover:underline" href="#about">About Us</a>
                            <a className="link link-hover hover:underline" href="#services">Services</a>
                            <a className="link link-hover hover:underline" href="#pricing">Pricing</a>
                            <a className="link link-hover hover:underline" href="#contact">Contact Us</a>
                            <a className="link link-hover hover:underline" href="#faq">FAQs</a>
                        </nav>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <nav className="flex space-x-4">
                            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="hover:text-blue-500">
                                    <path d="M9.507 15.389l-.386 4.04c.552-.03.792-.245 1.086-.533l2.602-2.462 4.564 3.332c.837.463 1.44.219 1.648-.772l3-13.678c.305-1.26-.463-1.75-1.246-1.467l-17.674 6.76c-1.204.45-1.194 1.102-.219 1.391l4.528 1.412 10.523-6.582c.494-.328.943-.145.574.182z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="hover:text-blue-700">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.5-.688-1.5-1.545 0-.875.548-1.545 1.531-1.545.982 0 1.5.67 1.5 1.545 0 .857-.519 1.545-1.531 1.545zm13.5 10.268h-3v-5.133c0-1.223-.025-2.795-1.696-2.795-1.696 0-1.955 1.327-1.955 2.701v5.227h-3v-9h2.863v1.229h.041c.399-.75 1.375-1.544 2.83-1.544 3.025 0 3.584 1.991 3.584 4.576v4.739z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="hover:text-blue-400">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="hover:text-red-600">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                        </nav>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <address className="not-italic">
                            <p>Email: support@example.com</p>
                            <p>Phone: +1 123 456 7890</p>
                            <p>Location: 123 Street, City, Country</p>
                        </address>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm">
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by Buddhiman </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
