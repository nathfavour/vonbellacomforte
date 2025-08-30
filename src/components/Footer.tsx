export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold mb-4">VonBella</h3>
            <p className="text-sm text-gray-600">© 2024 VonBella Fashion Palace. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a className="hover:underline" href="#">About Us</a></li>
              <li><a className="hover:underline" href="#">Contact Us</a></li>
              <li><a className="hover:underline" href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a className="hover:underline" href="#">FAQ</a></li>
              <li><a className="hover:underline" href="#">Shipping & Returns</a></li>
              <li><a className="hover:underline" href="#">Privacy Policy</a></li>
              <li><a className="hover:underline" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-gray-600">
              <a href="#" aria-label="Twitter" className="hover:text-gray-900 transition-colors">T</a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-900 transition-colors">I</a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-900 transition-colors">F</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
