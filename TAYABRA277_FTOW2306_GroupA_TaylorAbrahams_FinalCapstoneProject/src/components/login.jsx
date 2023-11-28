import { supabase } from './SupabaseClient';
/**a login page is a fundamental component of online security and user management. 
 * It helps protect sensitive information, provides a personalized user experience, 
 * and ensures that users are granted appropriate access to resources within a system. 
 * */
// Define the Login component
const Login = () => {
  // Function to handle login using GitHub
  const handleLogin = async () => {
    try {
      // this is where I attempted to sign in using Supabase authentication with GitHub provider
      await supabase.auth.signIn({
        provider: 'github',
      });
    } catch (error) {
      // Handle errors if any occur during the login process
      console.error('Error logging in:', error.message);
    }
  };

  // Render the Login component
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
};

// Export the Login component as the default export
export default Login;
