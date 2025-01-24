import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function Profile() {
  const { isAuthenticated, loading, user, login, logout } = useKindeAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div>
        <p>You are not authenticated. Please log in.</p>
        <button onClick={login}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
