import { FaTiktok, FaLinkedin, FaXTwitter, FaInstagram, FaFacebook, FaYoutube, } from 'react-icons/fa6';
import { ChevronRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <footer className="bg-[#bdd6f0] text-black py-5 bottom-0">
            <div className="border-t border-black"></div>
            <div className="max-w-9xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-extrabold text-black uppercase tracking-wide">Quick Links</h4>
                        <ul className="space-y-2 text-lg">
                            <li><Link to="/" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"> <ChevronRight className="w-4 h-4 mr-2 slate-900" /> Home</Link></li>
                            <li><Link to="/discover-who-we-are" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Discover Who We Are</Link></li>
                            <li><Link to="/discover-pathways" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Discover Pathways</Link></li>
                            <li><Link to="/discover-student-life" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Discover Student Life</Link></li>
                            <li><Link to="/discover-talents" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Discover Talents</Link></li>
                            <li><Link to="/join-us" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Join Us</Link></li>
                            <li><Link to="/discover-fees" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Discover Friendly Fees</Link></li>
                            <li><Link to="/our-location" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Discover Our Location</Link></li>
                            <li><Link to="/get-access" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Get Access</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}



                    
                    <div className="space-y-4">
                        <h4 className="text-lg font-extrabold text-black uppercase tracking-wide">Contact Us</h4>
                        <div className="space-y-3 text-lg">
                            <div>
                                <div className="font-semibold text-black">Telephone:</div>
                                <a href='tel:+254205038234' className="slate-900 hover:text-[#de9642]">+254 205-038-234</a>
                            </div>
                            <div>
                                <div className="font-semibold text-black">Email Us:</div>
                                <a href='mailto:admissions@pioneergirlsjuniorschool.co.ke' className="slate-900 break-words hover:text-[#de9642]">admissions@pioneergirlsjuniorschool.co.ke</a>
                               
                            </div>
                            <div>
                                <div className="font-semibold text-black">Address</div>
                                <div className="slate-900 text-sm mt-1">Po Box 33-01015 Ithanga, Muranga</div>
                                <div className="slate-900 text-sm">
                                    <a
                                    href="https://www.google.com/maps/place/Pioneer+Girls+Junior+Academy/@-1.0261411,37.0841816,17z/data=!3m1!4b1!4m6!3m5!1s0x182f4f1f03162239:0x91c97faef3f2aff1!8m2!3d-1.0261465!4d37.0867565!16s%2Fg%2F11y5ntwx5r?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#de9642]"
                                    >
                                    Off Nairobi-Meru Highway, Delmonte Factory road, <br /> Mitumbiri, Ithanga, Murang'a County
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Schools */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-extrabold text-black uppercase tracking-wide">Our Schools</h4>
                        <ul className="space-y-2 text-lg">
                           <li><a href="https://www.pioneergirlsschool.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Pioneer Girls School</a></li>
                            <li><a href="https://www.pioneergroupofschools.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Pioneer Group of schools</a></li>
                            <li><a href="https://www.stpaulthomasacademy.co.ke/"  target="_blank"
                            rel="noopener noreferrer" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />St Paul Thomas Academy</a></li>
                           
                            <li><a href="https://www.pioneerjunioracademy.co.ke/" target="_blank"
                            rel="noopener noreferrer" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Pioneer Junior Academy</a></li>
                            <li><a href="https://www.pioneerschools.ac.ke/" target="_blank"
                            rel="noopener noreferrer" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Pioneer School</a></li>
                            <li><a href="https://piu.ac.ke/"  target="_blank"
                             rel="noopener noreferrer" className="slate-900 hover:text-[#de9642] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 slate-900" />Pioneer International University</a></li>
                        </ul>
                        
                    </div>

                    {/* Our Socials */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-extrabold text-black uppercase tracking-wide">Our Socials</h4>
                        <div className="flex space-x-2">
                            <a href="https://www.tiktok.com/@pioneergirlsschool" target="_blank"
                                 rel="noopener noreferrer" className="w-10 h-10 slate-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaTiktok size={24} />
                            </a>
                            <a href="https://www.facebook.com/people/Pioneer-Girls-School/100067849162594/" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 slate-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.instagram.com/explore/locations/1661580044124468/pioneer-girls-high-school/" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 slate-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://x.com/PGSKenya" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 slate-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaXTwitter size={24} />
                            </a>
                            <a href="https://ke.linkedin.com/company/pioneer-girls-school" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 slate-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://www.youtube.com/watch?v=GLXcmVXluQs" target="_blank"
                                rel="noopener noreferrer" className="w-10 h-10 slate-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <FaYoutube size={24} />
                            </a>
                        </div>
                        <div className="text-sm text-gray-900 mt-4">
                            <div>Regulated by the Ministry of Education Kenya (21P3000036)</div>
                            <div>Licensed by Murang'a County</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Tagline */}
                <div className="mt-12 pt-8">
                    <div className="text-center">
                        <div className="bg-[#de9642] slate-900 px-6 py-3 rounded-lg inline-block text-lg font-semibold mb-4">
                            Vitae Abudantae | Life In Abundance
                        </div>
                        <div className="text-gray-900 text-sm">
                            <Link to="/privacy-policy" className="hover:text-[#de9642] mr-4">Privacy Policy</Link>
                            <Link to="/disclaimer" className="hover:text-[#de9642] mr-4">Disclaimer</Link>
                            <Link to="/sitemap" className="hover:text-[#de9642] mr-4">Sitemap</Link>
                            <span className="container mx-auto text-center"> Copyright 
                                &copy; {new Date().getFullYear()} . All rights reserved
                            </span>
                        </div>
                    </div>
                </div>

                {/* Floating Circle Button */}
                <div className="fixed bottom-14 left-10 z-50 transform -translate-x-1/2 animate-bounce">
                    <Link
                        to="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F"
                        className="w-16 h-16 bg-[#de9642] text-white hover:bg-[#bfd5ee] hover:text-gray-900 transition-colors shadow-lg rounded-full flex items-center justify-center mx-auto text-center text-sm font-extrabold font-serif"
                        title="Enroll Today"
                    >
                        Enroll Today
                    </Link>
                </div>
                {/* Scroll to Top */}
                <div className="fixed bottom-2 right-2 z-50">
                    <button
                        className="bg-[#de9642] backdrop-blur-md w-8 h-8 rounded-full hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center shadow-lg"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        title="Back to Top"
                    >
                        <ArrowUp className="text-white" size={20} />
                    </button>
                </div>
            </div>
        </footer>
    )
}