import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className='container section-spacing text-center'>
      <h1 className='text-4xl font-display font-bold'>404 — Page not found</h1>
      <p className='mt-4 text-foreground/70'>We couldn't find that page.</p>
      <div className='mt-6'>
        <Link href='/'>Go home</Link>
      </div>
    </div>
  );
}
