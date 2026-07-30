import { useState } from "react";

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
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-24"
    >
      <div className="max-w-2xl mx-auto w-full">
        <p
          data-aos="fade-down"
          className="text-blue-500 dark:text-blue-400 font-mono mb-2"
        >
          Bog'lanish
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Contact Me
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-600 dark:text-gray-400 mb-10"
        >
          Savolingiz yoki taklifingiz bo'lsa, quyidagi forma orqali yozing.
        </p>

        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay="200"
          className="space-y-5"
        >
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
              Ismingiz
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
              placeholder="Ismingiz"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
              Xabar
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition resize-none"
              placeholder="Xabaringizni yozing..."
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition"
          >
            Yuborish
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
