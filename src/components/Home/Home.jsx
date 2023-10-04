import { useContext } from "react";
import AuthProvider, { AuthContext } from "../../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';

const Home = () => {
    const authInfo = useContext(AuthContext)
    return (
        <div>
            
            <h2 className="text-2xl">This is our home: {authInfo.name}</h2>
        </div>
    );
};

export default Home;

AuthProvider.propTypes = {
    children: PropTypes.node
}
