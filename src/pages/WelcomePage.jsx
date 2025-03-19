import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/activeCompanies");
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <button
        className='drop-shadow-lg bg-green-accent cursor-pointer hover:bg-green-darker text-white font-bold p-4 rounded text-center mb-20'
        onClick={handleButtonClick}
      >
        Zaloguj
      </button>
    </div>
  );
}

export default WelcomePage;
