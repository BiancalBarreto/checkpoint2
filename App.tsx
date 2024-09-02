import { AuthProvider } from "@/Context/AuthContext";
import Index from "@/Screens/Index";

const App = () => {
  return (
    <AuthProvider>
        <Index  />
    </AuthProvider>
  );
};

export default App;
