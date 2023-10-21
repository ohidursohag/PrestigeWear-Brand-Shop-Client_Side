import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandsNameCards = ({ brand }) => {
   const {_id, brandName, brandImage } = brand || {};
   // console.log(brand);
   return (
      <Link to={`/brands/${_id}`}>
            <div className='w-[300px] shadow-lg rounded-lg dark:bg-white'>
               <figure className='bg-black dark:bg-gray-600 h-[300px] flex justify-center items-center rounded-t-lg'>
                  <img className='w-[250px] ' src={brandImage} alt="" />
               </figure>
               <h1 className='text-center text-3xl font-bold py-5'>{brandName.toUpperCase()}</h1>
            </div>
      </Link>
   );
};
BrandsNameCards.propTypes = {
   brand: PropTypes.object.isRequired,
}

export default BrandsNameCards;