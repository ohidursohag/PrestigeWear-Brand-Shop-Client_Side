import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Providers/AuthProvider';
const SignInAndSignoutButtonToggle = () => {
   const { user, logOut } = useContext(AuthContext)
   const location = useLocation()
   console.log(location);
   const handleSignOut = () => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You want to sign out?",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Confirm'
      }).then(async (result) => {
         if (result.isConfirmed) {
            logOut()
               .then(() => {
                  Swal.fire({
                     icon: 'success',
                     title: 'Sucessfully Signed Out',
                  })
               })
               .catch(err => { console.error(err.message) })
         }

      })
      
   }
   console.log(user);
   return (
      <div className='text-center md:text-left'>
         {
            user
               ? <div className=' '>

                  <NavLink className={({ isActive }) => isActive ? 'text-white md:text-[#FF444A] md:border-[3px] md:border-[#FF444A] md:rounded-lg md:px-2 md:py-1' : 'border-[3px] rounded-lg px-2 py-1'} onClick={handleSignOut}
                     to='/' >
                     <span className=' text-xl font-medium ' >Sign Out</span>
                  </NavLink>
               </div>
               : <NavLink  to={location.pathname === '/signin' ? '/signup' : location.pathname === '/signup' ? '/signin' : '/signin'}>
                  <span className={` font-medium text-xl border-[3px]  rounded-lg px-2 py-1 ${location.pathname === '/signin' || location.pathname === '/signup' ? 'text-white border-white md:text-[#FF444A]  md:border-[#FF444A]' : 'border-black'} `} >{location.pathname === '/signin' ? 'Sign Up' : location.pathname === '/signup' ? 'Sign In' : 'Sign In'}</span>
               </NavLink>
         }
      </div>
   );
};

export default SignInAndSignoutButtonToggle;