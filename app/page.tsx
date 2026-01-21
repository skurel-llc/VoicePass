"use client";
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#111816] dark:text-white overflow-x-hidden">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 sm:h-20 transition-all duration-300">
        <div className="h-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 sm:size-9 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-2xl">graphic_eq</span>
            </div>
            <h1 className="font-display text-xl font-bold tracking-tight text-[#111816] dark:text-white">VoicePass</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="#features" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#features" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Developers
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:flex px-4 py-2 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-[#111816] dark:hover:text-white transition-colors">
              Login
            </Link>
            <Link href="/signup" className="group relative flex items-center justify-center overflow-hidden rounded-lg px-5 py-2.5 bg-primary text-[#111816] shadow-sm hover:shadow-glow transition-all duration-300">
              <span className="relative z-10 text-sm font-bold tracking-wide">Sign Up</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative flex flex-col pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-24 max-w-[1280px] mx-auto">
          {/* Abstract decorative bg elements */}
          <div className="absolute -z-10 top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute -z-10 bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 dark:bg-blue-900/20 rounded-full blur-[80px] pointer-events-none -translate-x-1/4 translate-y-1/4"></div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="flex flex-col gap-6 lg:gap-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface dark:bg-surface-dark border border-gray-100 dark:border-gray-800 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">v2.0 Dashboard Live</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#111816] dark:text-white">
                Secure Voice OTP for the <span className="text-primary">Modern Web</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Reliable, encrypted voice verification calls for your application. Manage logs and billing with our next-gen dashboard.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/signup" className="h-12 px-8 rounded-lg bg-primary text-[#111816] font-bold text-base hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center">
                  Get Started
                </Link>
                <button className="h-12 px-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#111816] dark:text-white font-bold text-base hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 flex items-center gap-2">
                  <span>View Documentation</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>

              <div className="flex items-center gap-4 pt-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5d5PoxIqNTN2Oe3PQ04vAfcWR_0RfiszQ3-_iyD7_jSEovhbYgV8HW98XQhqG1mdxqRuhpJGNsaBv_-YEIP1j6OSepSpZsjDA_4y7ykRlkysZFSGsz0sNfNFU-Fn0mTqAfHwAXykJBJzhgQgN-sRImLhS2PHSh8ILoC6oghdglZ7ACHVN7QdL8_CRTffam_z6Y6M-WKRrj5SztHutctHaoc19BICCAMxHNCzaROzgToceYfoCMZojvZvNA4DRRaCAeY7VKKthHuav')`, backgroundSize: 'cover' }}></div>
                  <div className="size-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-300" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA15JaJWsiMhAsojXH38QecbardUVD0-4AX57rFdQHi--JriE5PMm5ucOKFU8m2_ZCtwd9tgR34vnHBfVYioNw5Cm-FJC-jUM-yQi3mrz81OLwhkDmWzyRoQOT3YvoaLswuKpRg15i8rcMo1NxLqp0tv2iKD98e5CCcflr4uKEMZ-mDik71yv49gNzi541i5S28J8uzoLS2yVamYVfN8h4ZsyzfhuzR9MaYlOCt0xg-amkA7PNih9JpUKc7BF3HZKRmWZ-P_To9MMIk')`, backgroundSize: 'cover' }}></div>
                  <div className="size-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-400" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGNwR7ZH646uKJvDkHICW7Tp5xF_cwfQiukI8AMWfnnc0bK1fKzFa0EBlSLLOmmaiPcQKQnX8n19TIhvY_dnvptQTjRqCyM2MIt7036rsfEShEeAeGU6nkWeTEFQUhJJO3Ydq0jwMbXa_rD1o1yFklDBO35D_vOW2FJ9-kuhqKuH6u_FJECO74FBziZI1erIYUBTEoiMjMKKz-JRErvYIiyo2xW3N9bm0qNgzfcJfyK4FnWcrChooNZN1JZh4Ce_HTDoPNjT7Hj_8S')`, backgroundSize: 'cover' }}></div>
                </div>
                <p>Trusted by 10,000+ developers</p>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-surface dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-soft group">
              {/* Abstract Visualization */}
              <div className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-10" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5jurWx7b-6M68uOH0Cv67Gpmfv1MVRBabnVaKspYkIjASpL7vAQ35pbrZmzD9kBWspGE1JFcAN9HqqazBzP80n5T1cVvUHsg_BNrNKAYMluTWkt_Q37OgfG9wMQhJHwPylnJmgprgwNEPEw71npbb_as8R5Fcfk1J5XkccKCeaZvMqFWXdwrzLi_mIrEm7Itp8RFuHc-FKV9sGdTuc5lJGcnQpR_BNHVH2P_8HdYEo-MpRFw58gzyvxjs6drd6_yZm1p5hgFZdrjj')` }}></div>
              
              {/* Floating UI Card Mockup */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-700 dark:text-green-400">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">Outgoing Call</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">ID: #8823-99A</div>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-bold rounded uppercase">Success</div>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-3/4"></div>
                </div>
                <div className="flex justify-between mt-2 text-xs font-medium text-gray-400 dark:text-gray-500">
                  <span>Connecting...</span>
                  <span>00:12</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="border-y border-gray-100 dark:border-gray-800 bg-[#f9fbfa] dark:bg-gray-900 py-10">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Powering verification for security teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="h-8 flex items-center"><span className="text-xl font-bold font-display text-gray-800 dark:text-gray-300">AcmeCorp</span></div>
              <div className="h-8 flex items-center"><span className="text-xl font-bold font-display text-gray-800 dark:text-gray-300 italic">GlobalBank</span></div>
              <div className="h-8 flex items-center"><span className="text-xl font-bold font-display text-gray-800 dark:text-gray-300 tracking-tighter">NEBULA</span></div>
              <div className="h-8 flex items-center"><span className="text-xl font-bold font-display text-gray-800 dark:text-gray-300">Starlight</span></div>
              <div className="h-8 flex items-center"><span className="text-xl font-bold font-display text-gray-800 dark:text-gray-300 font-serif">Vertex</span></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background-light dark:bg-background-dark" id="features">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#111816] dark:text-white mb-4 tracking-tight">Why developers switch to VoicePass</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Enterprise-grade voice verification features designed for modern applications, without the enterprise complexity.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-soft hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-2xl">analytics</span>
                </div>
                <h3 className="text-xl font-bold text-[#111816] dark:text-white mb-3">Real-time Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Monitor delivery rates, latency, and costs instantly via our websocket-powered dashboard. No more waiting for daily reports.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-soft hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-2xl">encrypted</span>
                </div>
                <h3 className="text-xl font-bold text-[#111816] dark:text-white mb-3">Encrypted Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  End-to-end encryption for every voice packet. We are SOC2 compliant and ensure your user data never leaves the secure tunnel.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-soft hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-2xl">savings</span>
                </div>
                <h3 className="text-xl font-bold text-[#111816] dark:text-white mb-3">Cost-Effective Pricing</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Pay only for successful verifications. Our tiered pricing model scales with you, from startup to enterprise volume.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo / CTA Section */}
        <section className="py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto bg-[#111816] dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#4ab593 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-10">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Ready to secure your app?</h2>
                <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto md:mx-0">Start using VoicePass today with ₦100 in free credits for new accounts. No credit card required.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="/signup" className="h-12 px-8 rounded-lg bg-primary text-[#111816] font-bold text-base hover:bg-white transition-colors duration-300 flex items-center justify-center">
                    Sign Up Now
                  </Link>
                  <button className="h-12 px-8 rounded-lg bg-transparent border border-gray-700 text-white font-bold text-base hover:border-gray-500 hover:text-gray-200 transition-colors duration-300">
                    Talk to Sales
                  </button>
                </div>
              </div>

              {/* Code Snippet Visual */}
              <div className="w-full max-w-md bg-[#1d1f20] dark:bg-gray-950 rounded-xl border border-gray-800 p-6 shadow-2xl font-mono text-xs sm:text-sm">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400">
                  <p><span className="text-purple-400">const</span> client = <span className="text-blue-400">new</span> <span className="text-yellow-300">VoicePass</span>(API_KEY);</p>
                  <p className="mt-2"><span className="text-purple-400">await</span> client.<span className="text-blue-400">verify</span>(&#123;</p>
                  <p className="pl-4 text-green-300">phoneNumber: <span className="text-orange-300">&apos;+15550123&apos;</span>,</p>
                  <p className="pl-4 text-green-300">code: <span className="text-orange-300">&apos;4829&apos;</span>,</p>
                  <p className="pl-4 text-green-300">language: <span className="text-orange-300">&apos;en-US&apos;</span></p>
                  <p>&#125;);</p>
                  <p className="mt-2 text-gray-500">// OTP call initiated securely</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-surface dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">graphic_eq</span>
                  <span className="font-bold text-xl text-[#111816] dark:text-white">VoicePass</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
                  Building the standard for voice verification on the modern web. Secure, reliable, and developer-friendly.
                </p>
                <div className="flex gap-4">
                  <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                  </a>
                  <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path></svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#111816] dark:text-white mb-4">Product</h4>
                <ul className="space-y-3">
                  <li><a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#features">Features</a></li>
                  <li><a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">Documentation</a></li>
                  <li><a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">Pricing</a></li>
                  <li><a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">Changelog</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#111816] dark:text-white mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">About</a></li>
                  <li><a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">Blog</a></li>
                  <li><a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">Careers</a></li>
                  <li><a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#111816] dark:text-white mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li><a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">Privacy</a></li>
                  <li><a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">Terms</a></li>
                  <li><a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">DPA</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-400 dark:text-gray-500">© 2024 VoicePass Inc. All rights reserved.</p>
              <div className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">All Systems Operational</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}