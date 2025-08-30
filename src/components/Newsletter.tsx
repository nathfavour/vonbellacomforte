export default function Newsletter() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Stay in the Loop</h2>
          <p className="text-gray-600 mb-8">Sign up for our newsletter to receive exclusive offers and updates on new arrivals.</p>
          <form className="flex w-full max-w-md mx-auto">
            <input className="form-input flex-grow rounded-l-md border-gray-300 focus:border-pink-500 focus:ring-pink-500 text-sm" placeholder="Enter your email" type="email"/>
            <button className="bg-gray-900 text-white font-bold py-3 px-6 rounded-r-md hover:bg-opacity-90 transition-colors" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
