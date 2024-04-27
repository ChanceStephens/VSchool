import React, {useState} from 'react' //STEP 1
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'; //STEP 2
import { AppProvider } from './AppContext'; // Importing the AppProvider from AppContext
import './App.css'
import Home from './Components/Home'//STEP 8
import ArizonaCardinals from './Components/ArizonaCardinals'
import AtlantaFalcons from './Components/AtlantaFalcons'//STEP 10
import BaltimoreRavens from './Components/BaltimoreRavens'
import BuffaloBills from './Components/BuffaloBills'
import CarolinaPanthers from './Components/CarolinaPanthers'
import ChicagoBears from './Components/ChicagoBears'
import CincinnatiBengals from './Components/CincinnatiBengals'
import ClevelandBrowns from './Components/ClevelandBrowns'
import DallasCowboys from './Components/DallasCowboys'
import DenverBroncos from './Components/DenverBroncos'
import DetroitLions from './Components/DetroitLions'
import GreenBayPackers from './Components/GreenBayPackers'
import HoustonTexans from './Components/HoustonTexans'
import IndianapolisColts from './Components/IndianapolisColts'
import JacksonvilleJaguars from './Components/JacksonvilleJaguars'
import KansasCityChiefs from './Components/KansasCityChiefs'
import LasVegasRaiders from './Components/LasVegasRaiders'
import LosAngelesChargers from './Components/LosAngelesChargers'
import LosAngelesRams from './Components/LosAngelesRams'
import MiamiDolphins from './Components/MiamiDolphins'
import MinnesotaVikings from './Components/MinnesotaVikings'
import NewEnglandPatriots from './Components/NewEnglandPatriots'
import NewOrleansSaints from './Components/NewOrleansSaints'
import NewYorkGiants from './Components/NewYorkGiants'
import NewYorkJets from './Components/NewYorkJets'
import PhiladelphiaEagles from './Components/PhiladelphiaEagles'
import PittsburghSteelers from './Components/PittsburghSteelers'
import SanFrancisco49ers from './Components/SanFrancisco49ers'
import SeattleSeahawks from './Components/SeattleSeahawks'
import TampaBayBuccaneers from './Components/TampaBayBuccaneers'
import TennesseeTitans from './Components/TennesseeTitans'
import WashingtonCommanders from './Components/WashingtonCommanders'
import TeamDetail from './Components/TeamDetail';

export default function App() {//STEP 3

  const [isVisible, setIsVisible] = useState(false); // Step 1

  const toggleVisibility = () => { // Step 2
    setIsVisible(!isVisible);
  };
  return (//STEP 4
      <Router> {/* STEP 5 */}
      {/* <TeamDetail /> */}

          <nav>{/* STEP 11 */}
             <button><Link to="/">Home Page</Link></button>
            <button className="jumpTo" onClick={toggleVisibility}>Jump To:
            {isVisible && (
              <div className="jumpToContainer">
                <Link to="/arizonacardinals">Arizona Cardinals</Link>
                <Link to="/atlantafalcons">Atlanta Falcons</Link>
                <Link to="/baltimoreravens">Baltimore Ravens</Link>
                <Link to="/buffalobills">Buffalo Bills</Link>
                <Link to="/carolinapanthers">Carolina Panthers</Link>
                <Link to="/chicagobears">Chicago Bears</Link>
                <Link to="/cincinnatibengals">Cincinnati Bengals</Link>
                <Link to="/clevelandbrowns">Cleveland Browns</Link>
                <Link to="/dallascowboys">Dallas Cowboys</Link>
                <Link to="/denverbroncos">Denver Broncos</Link>
                <Link to="/detroitlions">Detroit Lions</Link>
                <Link to="/greenbaypackers">Green Bay Packers</Link>
                <Link to="/houstonTexans">Houston Texans</Link>
                <Link to="/indianapoliscolts">Indianapolis Colts</Link>
                <Link to="/jacksonvillejaguars">Jacksonville Jaguars</Link>
                <Link to="/kansascitychiefs">Kansas City Chiefs</Link>
                <Link to="/lasvegasraiders">Las Vegas Raiders</Link>
                <Link to="/losangeleschargers">Los Angeles Chargers</Link>
                <Link to="/losangelesrams">Los Angeles Rams</Link>
                <Link to="/miamidolphins">Miami Dolphins</Link>
                <Link to="/minnesotavikings">Minnesota Vikings</Link>
                <Link to="/newenglandpatriots">New England Patriots</Link>
                <Link to="/neworleanssaints">New Orleans Saints</Link>
                <Link to="/newyorkgiants">New York Giants</Link>
                <Link to="/newyorkjets">New York Jets</Link>
                <Link to="/philadelphiaeagles">Philadelphia Eagles</Link>
                <Link to="/pittsburghsteelers">Pittsburgh Steelers</Link>
                <Link to="/sanfrancisco49ers">San Francisco 49ers</Link>
                <Link to="/seattleseahawks">Seattle Seahawks</Link>
                <Link to="/tampabaybuccaneers">Tampa Bay Buccaneers</Link>
                <Link to="/tennesseetitans">Tennessee Titans</Link>
                <Link to="/washingtoncommanders">Washington Commanders</Link>
              </div>
            )}
            </button>
          </nav>{/* STEP 11 */}

          <Routes>{/* STEP 6 */}
          
            <Route path="/" element={<Home />}/>
            <Route path="/arizonacardinals" element={<ArizonaCardinals teamId="22" />} />          {/* STEP 9 */}
            <Route path="/atlantafalcons" element={<AtlantaFalcons teamId="1" />}/>            {/*STEP 10*/} 
            <Route path="/baltimoreravens" element={<BaltimoreRavens teamId="33" />} />
            <Route path="/buffalobills" element={<BuffaloBills teamId="2" />} />
            <Route path="/carolinapanthers" element={<CarolinaPanthers teamId="29" />} />
            <Route path="/chicagobears" element={<ChicagoBears teamId="3" />} />
            <Route path="/cincinnatibengals" element={<CincinnatiBengals teamId="4" />} />
            <Route path="/clevelandbrowns" element={<ClevelandBrowns teamId="5" />} />
            <Route path="/dallascowboys" element={<DallasCowboys teamId="6" />} />
            <Route path="/denverbroncos" element={<DenverBroncos teamId="7" />} />
            <Route path="/detroitlions" element={<DetroitLions teamId="8" />} />
            <Route path="/greenbaypackers" element={<GreenBayPackers teamId="9" />} />
            <Route path="/houstonTexans" element={<HoustonTexans teamId="34" />} />
            <Route path="/indianapoliscolts" element={<IndianapolisColts teamId="11" />} />
            <Route path="/jacksonvillejaguars" element={<JacksonvilleJaguars teamId="30" />} />
            <Route path="/kansascitychiefs" element={<KansasCityChiefs teamId="12" />} />
            <Route path="/lasvegasraiders" element={<LasVegasRaiders teamId="13" />} />
            <Route path="/losangeleschargers" element={<LosAngelesChargers teamId="24" />} />
            <Route path="/losangelesrams" element={<LosAngelesRams teamId="14" />} />
            <Route path="/miamidolphins" element={<MiamiDolphins teamId="15" />} />
            <Route path="/minnesotavikings" element={<MinnesotaVikings teamId="16" />} />
            <Route path="/newenglandpatriots" element={<NewEnglandPatriots teamId="17" />} />
            <Route path="/neworleanssaints" element={<NewOrleansSaints teamId="18" />} />
            <Route path="/newyorkgiants" element={<NewYorkGiants teamId="19" />} />
            <Route path="/newyorkjets" element={<NewYorkJets teamId="20" />} />
            <Route path="/philadelphiaeagles" element={<PhiladelphiaEagles teamId="21" />} />
            <Route path="/pittsburghsteelers" element={<PittsburghSteelers teamId="23" />} />
            <Route path="/sanfrancisco49ers" element={<SanFrancisco49ers teamId="25" />} />
            <Route path="/seattleseahawks" element={<SeattleSeahawks teamId="26" />} />
            <Route path="/tampabaybuccaneers" element={<TampaBayBuccaneers teamId="27" />} />
            <Route path="/tennesseetitans" element={<TennesseeTitans teamId="10" />} />
            <Route path="/washingtoncommanders" element={<WashingtonCommanders teamId="28" />} />
          </ Routes>{/* STEP 6 */}
      </Router>// STEP 5 
      

  )//STEP 4
}//STEP 3

