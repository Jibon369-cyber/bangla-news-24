
const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row">
        
        {/* Copyright */}
        <div className="text-sm text-slate-500">
          © 2026{" "}
          <span className="font-semibold text-slate-900">
            BanglaBulletin
          </span>
          . All rights reserved.
        </div>

        {/* Source */}
        <div className="text-sm text-slate-500">
          Source:{" "}
          <span className="font-medium text-slate-700">
            BBC Bangla
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

