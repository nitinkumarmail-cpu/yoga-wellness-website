import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="display">This path has wandered.</h1>
        <p className="lede">The page may have moved or may not exist yet.</p>
        <Link href="/" className="btn btn-primary">
          Return home
        </Link>
      </div>
    </section>
  );
}
