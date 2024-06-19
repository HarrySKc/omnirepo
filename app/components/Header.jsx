'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter()
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-4 flex justify-between items-center">
      <div >
        <Link href="/" className="flex items-center space-x-2">
        <Image
      src="/ecomlogo.png"
      width={100}
      height={100}
      alt="Picture of the author"
        />
        </Link>
      </div>
      <div>
        <Link href="/agenda" className="text-blue-500 mr-4">
          Agenda
        </Link>
        <button
      className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      onClick={() => router.push('/pre-register')}
    >
      PRE_REGISTER
    </button>
  </div>
    </header>
  );
};

export default Header;