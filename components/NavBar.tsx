// "use client";

// import React from 'react'
// import Link from "next/link";
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import '../public/underline.css';

// const AboutUs = () => <div><h1>Page 1</h1></div>;
// const Sustainability = () => <div><h1>Page 2</h1></div>;
// const Menu = () => <div><h1>Page 3</h1></div>;

// const Navbar = () => {
//     return (
//         <div className="navigation-bar transition-swipe-right">
//             <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
//                 <nav className="flex flex-wrap gap-5 justify-between items-center self-stretch w-full text-2xl font-bold text-slate-950 max-md:max-w-full">
//                     <div className="flex gap-2.5 self-stretch my-auto whitespace-nowrap">
//                         <div className="my-auto">
//                             <Link href="/">
//                                 <img src="/webmaster-logo.png" alt="Veggie-Village Logo" className="h-8" />
//                             </Link>
//                         </div>
//                         <div className="my-auto">Veggie Villages</div>
//                     </div>

//                     <div className="flex items-center gap-5 text-black">
//                         <>  
//                             <NavLink
//                                 to="/about-us"
//                                 // className="button"
//                                 // activeClassName="underlined"
//                                 className={({ isActive }) => (isActive ? 'button underlined' : 'button')}
//                             >About Us</NavLink>
//                             <Link className="link-effects" href="/about-us">
//                                 <span>About Us</span>
//                             </Link>
//                             <Link className="link-effects" href="/sustainability">
//                                 <span>Sustainability</span>
//                             </Link>
//                             <Link className="link-effects" href="/menu">
//                                 <span>Menu</span>
//                             </Link>
//                         </>
//                     </div>
//                 </nav>
//             </header>
//             <Routes>
//                 <Route path="/about-us" Component={AboutUs} />
//                 <Route path="/sustainability" Component={Sustainability} />
//                 <Route path="/menu" Component={Menu} />
//             </Routes>
//         </div>
//     )
// }

// export default Navbar









// "use client"; // Ensure the file is client-side

// import React from 'react';
// import Link from 'next/link';
// import '../public/underline.css'; // Assuming you have CSS for underlining

// const Navbar = () => {
//   return (
//     <div className="navigation-bar transition-swipe-right">
//       <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
//         <nav className="flex flex-wrap gap-5 justify-between items-center self-stretch w-full text-2xl font-bold text-slate-950 max-md:max-w-full">
//           <div className="flex gap-2.5 self-stretch my-auto whitespace-nowrap">
//             <div className="my-auto">
//               <Link href="/">
//                 <img src="/webmaster-logo.png" alt="Veggie-Village Logo" className="h-8" />
//               </Link>
//             </div>
//             <div className="my-auto">Veggie Villages</div>
//           </div>

//           <div className="flex items-center gap-5 text-black">
//             {/* Using Next.js Link instead of React Router's NavLink */}
//             <Link
//               href="/about-us"
//               className="button link-effects"
//             >
//               About Us
//             </Link>
//             <Link
//               href="/sustainability"
//               className="button link-effects"
//             >
//               Sustainability
//             </Link>
//             <Link
//               href="/menu"
//               className="button link-effects"
//             >
//               Menu
//             </Link>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Navbar;


// "use client";

// import React from 'react'
// import Link from "next/link";

// import { usePathname } from 'next/navigation'; // Next.js hook to get the current pathname

// const Navbar = () => {
//   const pathname = usePathname(); // Get the current pathname

//   return (
//     <div className="navigation-bar transition-swipe-right">
//       <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
//         <nav className="flex flex-wrap gap-5 justify-between items-center self-stretch w-full text-2xl font-bold text-slate-950 max-md:max-w-full">
//           <div className="flex gap-2.5 self-stretch my-auto whitespace-nowrap">
//             <div className="my-auto">
//               <Link href="/">
//                 <img src="/webmaster-logo.png" alt="Veggie-Village Logo" className="h-8" />
//               </Link>
//             </div>
//             <div className="my-auto">Veggie Villages</div>
//           </div>

//           <div className="flex items-center gap-5 text-black">
//             <Link
//               href="/about-us"
//               className={`button link-effects ${pathname === '/about-us' ? 'underlined' : ''}`}
//             >
//               About Us
//             </Link>
//             <Link
//               href="/sustainability"
//               className={`button link-effects ${pathname === '/sustainability' ? 'underlined' : ''}`}
//             >
//               Sustainability
//             </Link>
//             <Link
//               href="/menu"
//               className={`button link-effects ${pathname === '/menu' ? 'underlined' : ''}`}
//             >
//               Menu
//             </Link>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Navbar;



"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); // Taking the path name and using it to determine the navigation page header that needs to be underlined. 

  return (
    <div className="navigation-bar transition-swipe-right">
      <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex flex-wrap gap-5 justify-between items-center self-stretch w-full text-2xl font-bold text-slate-950 max-md:max-w-full">
          <div className="flex gap-2.5 self-stretch my-auto whitespace-nowrap">
            <div className="my-auto">
              <Link href="/">
                <img src="/webmaster-logo.png" alt="Veggie-Village Logo" className="h-8" />
              </Link>
            </div>
            <a href="/">
                <div 
                    className="my-auto">Veggie Villages
                </div>
            </a>
          </div>

          <div className="flex items-center gap-5 text-black">
            <Link
              href="/about-us"
              className={`button link-effects ${pathname === '/about-us' ? 'underlined' : ''}`}
            >
              About Us
            </Link>
            <Link
              href="/sustainability"
              className={`button link-effects ${pathname === '/sustainability' ? 'underlined' : ''}`}
            >
              Sustainability
            </Link>
            <Link
              href="/menu"
              className={`button link-effects ${pathname === '/menu' ? 'underlined' : ''}`}
            >
              Menu
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
