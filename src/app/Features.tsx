export default function Features() {
  return (
    <section id="features" className="w-full max-w-5xl py-16 px-4 mx-auto grid gap-12 md:grid-cols-3">
      <div className="text-center">
        <div className="mb-4 text-4xl">🛋️</div>
        <h2 className="text-2xl font-semibold mb-2">Premium Materials</h2>
        <p>Only the finest fabrics, woods, and metals for lasting comfort and beauty.</p>
      </div>
      <div className="text-center">
        <div className="mb-4 text-4xl">🚚</div>
        <h2 className="text-2xl font-semibold mb-2">Fast Delivery</h2>
        <p>Get your dream furniture delivered quickly and safely to your doorstep.</p>
      </div>
      <div className="text-center">
        <div className="mb-4 text-4xl">💳</div>
        <h2 className="text-2xl font-semibold mb-2">Secure Payments</h2>
        <p>Shop with confidence using our encrypted, trusted payment options.</p>
      </div>
    </section>
  );
}