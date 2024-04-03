function Footer() {
  return (
    <footer className="w-full py-6 bg-[#030712] text-gray-200">
      <div className="flex items-center justify-center gap-1">
        <p className="flex items-center text-sm text-center text-normal">
          &copy; {new Date().getFullYear()} | Designed and developed by Worlanyo
          Kwabla Kporfeame
        </p>
      </div>
    </footer>
  );
}

export default Footer;
