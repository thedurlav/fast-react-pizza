import { Link, useNavigate } from 'react-router-dom';

const LinkButton = ({ children, to }) => {
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';
  const navigate = useNavigate();

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button className={className} onClick={() => navigate(-1)}>
      {children}
    </button>
  );
};

export default LinkButton;
