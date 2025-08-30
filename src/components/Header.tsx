export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 py-4">
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
            <h1 className="text-xl font-bold tracking-tighter">VonBella</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-gray-900 transition-colors" href="#">New Arrivals</a>
            <a className="text-sm font-medium hover:text-gray-900 transition-colors" href="#">Wears</a>
            <a className="text-sm font-medium hover:text-gray-900 transition-colors" href="#">Shoes</a>
            <a className="text-sm font-medium hover:text-gray-900 transition-colors" href="#">Bags</a>
            <a className="text-sm font-medium hover:text-gray-900 transition-colors" href="#">Accessories</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
