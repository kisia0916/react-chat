
import './App.css';
import Sinin from './components/Sinin';
import {useAuthState} from "react-firebase-hooks/auth"
import  {auth} from "./firebase.js"
import Line from './components/Line';
function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
      {user? <Line/> :<Sinin/>}
    </div>
  );
}

export default App;
