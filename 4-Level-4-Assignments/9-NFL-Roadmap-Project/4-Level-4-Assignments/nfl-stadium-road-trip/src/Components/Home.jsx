import React from 'react'
import {Navigate, useNavigate, useParams, Link} from 'react-router-dom'; 

export default function Home() {
    const { teamId } = useParams
    const navigate = useNavigate()
    return(
    <div className="homePage">
      <div className="greeting">
        <h1>Welcome to the Ultimate NFL Road trip</h1>
        <p>Welcome to the Ultimate NFL Football Road Trip! If you're a die-hard football fan with a passion for adventure, you're in the right place. Embark on an epic journey across the United States, visiting every NFL stadium and experiencing the electrifying atmosphere of game day in each city.</p>
        <p>From the iconic Lambeau Field in Green Bay to the state-of-the-art Allegiant Stadium in Las Vegas, this road trip will take you on a whirlwind tour of football culture, rivalries, and unforgettable moments. Whether you're cheering on your favorite team or simply soaking in the excitement of each unique stadium, this trip promises to be the experience of a lifetime.</p>
        <p>Get ready to hit the road, explore new cities, and create memories that will last a lifetime. Let's kick off the Ultimate NFL Football Road Trip and make every game day count!</p>
      </div>
        <div className="stadiumList">
          <div className="stadium">
              <h1>Team</h1>
              <h1>Stadium</h1>
              <h1>Location</h1>
              <h1>Capacity</h1>
              <h1>Year Opened</h1>
          </div>
          <div className="stadium"> 
              <h1><Link to="/arizonacardinals">Arizona Cardinals</Link></h1>
              <h1>State Farm Stadium</h1>
              <h1>Glendale, Arizona</h1>
              <h1>63,400</h1>
              <h1>2006</h1>
          </div>
          <div className="stadium">
              <h1><Link to="/atlantafalcons">Atlanta Falcons</Link></h1>
              <h1>Mercedes-Benz Stadium</h1>
              <h1>Atlanta, Georgia</h1>
              <h1>71,000</h1>
              <h1>2017</h1>
          </div>
              <div className="stadium">
            <h1><Link to="/baltimoreravens">Baltimore Ravens</Link></h1>
            <h1>M&T Bank Stadium</h1>
            <h1>Baltimore, Maryland</h1>
            <h1>71,008</h1>
            <h1>1998</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/buffalobills">Buffalo Bills</Link></h1>
            <h1>Highmark Stadium</h1>
            <h1>Orchard Park, New York</h1>
            <h1>71,608</h1>
            <h1>1973</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/carolinapanthers">Carolina Panthers</Link></h1>
            <h1>Bank of America Stadium</h1>
            <h1>Charlotte, North Carolina</h1>
            <h1>75,523</h1>
            <h1>1996</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/chicagobears">Chicago Bears</Link></h1>
            <h1>Soldier Field</h1>
            <h1>Chicago, Illinois</h1>
            <h1>61,500</h1>
            <h1>1924</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/cincinnatibengals">Cincinnati Bengals</Link></h1>
            <h1>Paycor Stadium</h1>
            <h1>Cincinnati, Ohio</h1>
            <h1>65,515</h1>
            <h1>2000</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/clevelandbrowns">Cleveland Browns</Link></h1>
            <h1>Cleveland Browns Stadium</h1>
            <h1>Cleveland, Ohio</h1>
            <h1>67,895</h1>
            <h1>1999</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/dallascowboys">Dallas Cowboys</Link></h1>
            <h1>AT&T Stadium</h1>
            <h1>Arlington, Texas</h1>
            <h1>80,000</h1>
            <h1>2009</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/denverbroncos">Denver Broncos</Link></h1>
            <h1>Empower Field at Mile High</h1>
            <h1>Denver, Colorado</h1>
            <h1>76,125</h1>
            <h1>2001</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/detroitlions">Detroit Lions</Link></h1>
            <h1>Ford Field</h1>
            <h1>Detroit, Michigan</h1>
            <h1>65,000</h1>
            <h1>2002</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/greenbaypackers">Green Bay Packers</Link></h1>
            <h1>Lambeau Field</h1>
            <h1>Green Bay, Wisconsin</h1>
            <h1>81,441</h1>
            <h1>1957</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/houstonTexans">Houston Texans</Link></h1>
            <h1>NRG Stadium</h1>
            <h1>Houston, Texas</h1>
            <h1>72,220</h1>
            <h1>2002</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/indianapoliscolts">Indianapolis Colts</Link></h1>
            <h1>Lucas Oil Stadium</h1>
            <h1>Indianapolis, Indiana</h1>
            <h1>67,000</h1>
            <h1>2008</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/jacksonvillejaguars">Jacksonville Jaguars</Link></h1>
            <h1>TIAA Bank Field</h1>
            <h1>Jacksonville, Florida</h1>
            <h1>69,132</h1>
            <h1>2008</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/kansascitychiefs">Kansas City Chiefs</Link></h1>
            <h1>GEHA Field at Arrowhead Stadium</h1>
            <h1>Kansas City, Missouri</h1>
            <h1>76,416</h1>
            <h1>1972</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/lasvegasraiders">Las Vegas Raiders</Link></h1>
            <h1>Allegiant Stadium</h1>
            <h1>Paradise, Nevada</h1>
            <h1>65,000</h1>
            <h1>2020</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/losangeleschargers">Los Angeles Chargers</Link></h1>
            <h1>SoFi Stadium</h1>
            <h1>Inglewood, California</h1>
            <h1>70,240</h1>
            <h1>2020</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/losangelesrams">Los Angeles Rams</Link></h1>
            <h1>SoFi Stadium</h1>
            <h1>Inglewood, California</h1>
            <h1>70,240</h1>
            <h1>2020</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/miamidolphins">Miami Dolphins</Link></h1>
            <h1>Hard Rock Stadium</h1>
            <h1>Miami Gardens, Florida</h1>
            <h1>65,326</h1>
            <h1>1987</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/minnesotavikings">Minnesota Vikings</Link></h1>
            <h1>U.S. Bank Stadium</h1>
            <h1>Minneapolis, Minnesota</h1>
            <h1>66,655</h1>
            <h1>2016</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/newenglandpatriots">New England Patriots</Link></h1>
            <h1>Gillette Stadium</h1>
            <h1>Foxborough, Massachusetts</h1>
            <h1>66,829</h1>
            <h1>2002</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/neworleanssaints">New Orleans Saints</Link></h1>
            <h1>Caesars Superdome</h1>
            <h1>New Orleans, Louisiana</h1>
            <h1>73,208</h1>
            <h1>1975</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/newyorkgiants">New York Giants</Link></h1>
            <h1>MetLife Stadium</h1>
            <h1>East Rutherford, New Jersey</h1>
            <h1>82,500</h1>
            <h1>2010</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/newyorkjets">New York Jets</Link></h1>
            <h1>MetLife Stadium</h1>
            <h1>East Rutherford, New Jersey</h1>
            <h1>82,500</h1>
            <h1>2010</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/philadelphiaeagles">Philadelphia Eagles</Link></h1>
            <h1>Lincoln Financial Field</h1>
            <h1>Philadelphia, Pennsylvania</h1>
            <h1>69,596</h1>
            <h1>2003</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/pittsburghsteelers">Pittsburgh Steelers</Link></h1>
            <h1>Acrisure Stadium</h1>
            <h1>Pittsburgh, Pennsylvania</h1>
            <h1>68,400</h1>
            <h1>2001</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/sanfrancisco49ers">San Francisco 49ers</Link></h1>
            <h1>Levi's Stadium</h1>
            <h1>Santa Clara, California</h1>
            <h1>68,500</h1>
            <h1>2014</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/seattleseahawks">Seattle Seahawks</Link></h1>
            <h1>Lumen Field</h1>
            <h1>Seattle, Washington</h1>
            <h1>69,000</h1>
            <h1>2002</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/tampabaybuccaneers">Tampa Bay Buccaneers</Link></h1>
            <h1>Raymond James Stadium</h1>
            <h1>Tampa, Florida</h1>
            <h1>65,890</h1>
            <h1>1998</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/tennesseetitans">Tennessee Titans</Link></h1>
            <h1>Nissan Stadium</h1>
            <h1>Nashville, Tennessee</h1>
            <h1>69,143</h1>
            <h1>1999</h1>
          </div>
          <div className="stadium">
            <h1><Link to="/washingtoncommanders">Washington Commanders</Link></h1>
            <h1>Commanders Field</h1>
            <h1>Landover, Maryland</h1>
            <h1>82,000</h1>
            <h1>1997</h1>
          </div>
        </div>
      </div>
    )
}
