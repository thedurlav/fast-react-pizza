import { Link } from 'react-router-dom';
import SearchOrder from '../feautres/order/SearchOrder';
import Username from '../feautres/user/Username';

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-500 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
