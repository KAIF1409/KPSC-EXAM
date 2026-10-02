import { redirect } from 'next/navigation';

/** The dashboard is the app's entry point. */
export default function HomePage() {
  redirect('/dashboard');
}
