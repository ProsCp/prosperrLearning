// import logo from './logo.svg';


import './App.css';
import TopArticleBox from './components/topArticleBox';

// import PatternValidation from './components/CmsDropDown/PatternValidation';
import { AdvisorProfile } from './components/topArticleBox/advisorProfile/AdvisorProfile';
// import Fetch from './components/Api/Fetch';
import SliderBox from './components/SlickSlider/Slider';

function App() {
   
  return (
    <>
   <TopArticleBox/>
   <AdvisorProfile/>
   {/* <PatternValidation/> */}
   {/* <Fetch/> */}
   <SliderBox/>
    </>
  );
}

export default App;
