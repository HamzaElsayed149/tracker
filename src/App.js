import { createHashRouter ,RouterProvider} from 'react-router-dom';
import './App.css';
import Crypto from './component/Crypto';
import Currency from './component/Currency'
import Mainlayout from './component/Mainlayout';
function App() {
  const routers = createHashRouter([

    {path:'/',element:<Mainlayout />,children:[
      {path:'/',element:<Crypto />},
      {path:'Crypto',element :<Crypto/> },
      {path:'Currency',element :<Currency/>}
    ]}
  ])
  return (
    <RouterProvider router={routers}> </RouterProvider>

  );
}

export default App;
