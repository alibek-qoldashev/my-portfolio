import { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio: ${formData.name} dan xabar`);
    const body = encodeURIComponent(
      `${formData.message}\n\nEmail: ${formData.email}`,
    );
    window.location.href = `mailto:sizning-emailingiz@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#07090e] flex flex-col justify-center px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Dark Ambient Liquid Glows (Fon neon yog'dulari) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-900/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-950/25 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <span
            data-aos="fade-down"
            className="inline-block px-4 py-1.5 mb-3 text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            Bog'lanish
          </span>
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-slate-400 text-base md:text-lg max-w-lg mx-auto font-light"
          >
            Savolingiz yoki taklifingiz bo'lsa, quyidagi forma orqali yozing.
          </p>
        </div>

        {/* Liquid Glass Form Container */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative p-8 md:p-10 rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Shisha usti yaltirashi (Glass Gloss) */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            {/* Ism kiritish maydoni */}
            <div>
              <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <User size={14} className="text-cyan-400" /> Ismingiz
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/70 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 text-sm md:text-base"
                placeholder="Ismingizni kiriting"
              />
            </div>

            {/* Email kiritish maydoni */}
            <div>
              <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Mail size={14} className="text-cyan-400" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/70 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 text-sm md:text-base"
                placeholder="email@example.com"
              />
            </div>

            {/* Xabar kiritish maydoni */}
            <div>
              <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <MessageSquare size={14} className="text-cyan-400" /> Xabar
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-slate-800/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/70 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 resize-none text-sm md:text-base"
                placeholder="Xabaringizni shu yerga yozing..."
              />
            </div>

            {/* Submit tugmasi */}
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.35)] border border-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Yuborish</span>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
