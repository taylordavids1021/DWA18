/**
 * This component provides navigation buttons for different sections of the app.
 * Users can easily switch between the Home, Favorites, Preview, and History pages.
 * It helps users quickly access different functionalities without navigating through complex menus.
 */
import PropTypes from 'prop-types';

/** 
 * Define the Navbar component
 */
const Navbar = ({ onNavigate }) => {
  /**
   *  Function to handle navigation to different pages
   */
  const handleNavigation = (page) => {
    /** 
     * Call the 'onNavigate' function passed as a prop with the selected page
     */
    onNavigate(page);
  };

  /** 
   * Render the Navbar component
   */
  return (
    <div className="navbar-container">
      {/* Button to navigate to the 'home' page */}
      <button onClick={() => handleNavigation('home')}>Home</button>
      {/* Button to navigate to the 'favorite' page */}
      <button onClick={() => handleNavigation('favorite')}>Favorites</button>
      {/* Button to navigate to the 'preview' page */}
      <button onClick={() => handleNavigation('preview')}>Preview</button>
      {/* Button to navigate to the 'history' page */}
      <button onClick={() => handleNavigation('history')}>History</button>
    </div>
  );
};

/** 
 * Wenever the Navbar component is rendered, it must be provided with a valid function for the onNavigate prop
 * 
 * Navbar.propTypes: This line indicates that we're defining PropTypes for the Navbar component.
 * onNavigate: This is the name of the prop we're defining PropTypes for.
 * PropTypes.func: This specifies that the onNavigate prop must be a function.
 * .isRequired: This indicates that the onNavigate prop is mandatory and cannot be omitted.
 * 
 * this code ensures that the Navbar component receives a valid function for handling navigation interactions. 
 * This helps maintain data integrity and prevents runtime errors due to missing or invalid props.
*/
Navbar.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

/** 
 * Export the Navbar component as the default export
 */
export default Navbar;