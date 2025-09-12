import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! Halaman tidak ditemukan.</p>
        <Link to="/" className="btn-hero inline-flex">Kembali ke Beranda</Link>
      </div>
    </div>
  );
};

export default NotFound;
