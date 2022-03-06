import { AppRouting } from "./App.routing";
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import { store } from "../Store";
import 'react-toastify/dist/ReactToastify.css';


function App(){
    return(
        <>
        <Provider store={store}>
            <AppRouting />
        </Provider>
        <ToastContainer />
        </>
    )
}

export default App;