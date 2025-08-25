export default function Features() {
  return (
    <section id="features" className="w-full max-w-5xl py-16 px-4 mx-auto grid gap-12 md:grid-cols-3">
      <div className="text-center">
        <div className="mb-4 text-4xl">👗</div>
        <h2 className="text-2xl font-semibold mb-2">Premium Quality</h2>
        <p>Carefully curated clothing and accessories made from the finest materials for lasting style.</p>
      </div>
      <div className="text-center">
        <div className="mb-4 text-4xl">🚚</div>
        <h2 className="text-2xl font-semibold mb-2">Fast Shipping</h2>
        <p>Get your fashion favorites delivered quickly and safely to your doorstep worldwide.</p>
      </div>
      <div className="text-center">
        <div className="mb-4 text-4xl">💎</div>
        <h2 className="text-2xl font-semibold mb-2">Exclusive Designs</h2>
        <p>Discover unique pieces and limited collections that elevate your personal style.</p>
      </div>
    </section>
  );
}