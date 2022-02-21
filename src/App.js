import "./App.css";
import "bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo/logo.png";
import doc from "./logo/doc.svg";
import pre1 from "./logo/pre-1.svg";
import pre2 from "./logo/pre-2.svg";
import pre3 from "./logo/pre-3.svg";
import pre4 from "./logo/pre-4.svg";
import pre5 from "./logo/pre-5.svg";
import pre6 from "./logo/pre-6.svg";
import "react-datepicker/dist/react-datepicker.css";

function Country(props) {
  const {
    country,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    active,
    critical,
  } = props.country;

  function commaSeparator(el) {
    return el.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <div className="card" style={{ width: "20rem", margin: "12px" }}>
        <div className="card-header">
          <strong>{country}</strong>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <strong>Cases:</strong> {commaSeparator(cases)}
              </span>
              <span className="badge bg-warning rounded-pill">
                + {todayCases}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <strong>Deaths:</strong> {commaSeparator(deaths)}
              </span>
              <span className="badge bg-danger rounded-pill">
                + {todayDeaths}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <strong>Recovered:</strong> {commaSeparator(recovered)}
              </span>
              <span className="badge bg-success rounded-pill">
                + {todayRecovered}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <strong>Active:</strong> {commaSeparator(active)}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <strong>Critical:</strong> {commaSeparator(critical)}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function App() {
  const [data, setData] = useState([]);
  const [maxQ, setMaxQ] = useState(9);

  const [cSearch, setCSearch] = useState("n/a");

  function handleMaxQ(event) {
    setMaxQ(event.target.value);
  }

  function handleCSearch(event) {
    setCSearch(event.target.value);
  }

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/countries?yesterday&sort")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="covatrack logo" width="220" className="m-1" />
          </a>
          <ul className="nav">
            <li className="nav-item m-2">
              <button className="btn btn-sm btn-outline-secondary">
                <a
                  className="nav-link text-decoration-none link-dark"
                  href="#precautions"
                >
                  Precautions
                </a>
              </button>
            </li>
            <li className="nav-item m-2">
              <button className="btn btn-sm btn-outline-secondary">
                <a
                  className="nav-link text-decoration-none link-dark"
                  href="#stats"
                >
                  Statistics
                </a>
              </button>
            </li>
            <li className="nav-item m-2">
              <button className="btn btn-sm btn-outline-secondary">
                <a
                  className="nav-link text-decoration-none link-dark"
                  href="#resources"
                >
                  Resources
                </a>
              </button>
            </li>
            <li className="nav-item m-2">
              <button className="btn btn-sm btn-outline-secondary">
                <a
                  className="nav-link text-decoration-none link-dark"
                  href="#vaccine"
                >
                  <strong>Get vaccinated</strong>
                </a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* Navigation done */}
      <div className="container p-5 m-6 d-flex align-items-center justify-content-between">
        <p>
          “Life has got all those twists and turns. <br />
          You’ve got to hold on tight and off you go.” <br />
          <strong> — Nicole Kidman</strong> <br /> <br />
          <i style={{ fontWeight: "bold" }}>
            This too shall pass, Stay strong and follow the guidelines!
          </i>
        </p>
        <img src={doc} alt="illustration of doctors" width="450" />
      </div>
      <h2 className="text-center fw-bold p-2 m-4" id="precautions">
        <span style={{ color: "grey" }}># </span>Precautions to avoid Covid-19
        infection:
      </h2>
      {/* Precaution cards start */}
      <div className="container d-flex p-5  justify-content-center align-items-start flex-wrap">
        <div className="col align-items-stretch">
          <div className="card p-4" style={{ width: "18rem", height: "25rem" }}>
            <img
              src={pre1}
              className="card-img-top p-2"
              alt="woman sneezing or coughing"
            />
            <div className="card-body">
              <h5 className="card-title">Quarantine</h5>
              <p className="card-text">
                If not necessary, stay at home. If experiencing symptoms of
                COVid-19, Quarantine at home and consult a doctor.
              </p>
            </div>
          </div>
        </div>
        <div className="col align-items-stretch">
          <div className="card p-4" style={{ width: "18rem", height: "25rem" }}>
            <img
              src={pre2}
              className="card-img-top"
              alt="woman sneezing or coughing"
            />
            <div className="card-body">
              <h5 className="card-title">Wash your hands</h5>
              <p className="card-text">
                Thoroughly wash your hands with soap for at least 30 seconds
                many times a day.
              </p>
            </div>
          </div>
        </div>
        <div className="col align-items-stretch">
          <div className="card p-4" style={{ width: "18rem", height: "25rem" }}>
            <img
              src={pre3}
              className="card-img-top"
              alt="woman sneezing or coughing"
            />
            <div className="card-body">
              <h5 className="card-title">Wear Masks</h5>
              <p className="card-text">
                When it is absolutely necessary to go out, always wear a mask
                (avoid cloth masks).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex p-5  justify-content-center align-items-start">
        <div className="col align-items-stretch">
          <div className="card p-4" style={{ width: "18rem", height: "25rem" }}>
            <img
              src={pre4}
              className="card-img-top p-2"
              alt="woman sneezing or coughing"
            />
            <div className="card-body">
              <h5 className="card-title">Sanitize</h5>
              <p className="card-text">
                Sanitize your hands whenever possible. Make sure to do this
                before eating and after coming from outside.
              </p>
            </div>
          </div>
        </div>
        <div className="col align-items-stretch">
          <div className="card p-4" style={{ width: "18rem", height: "25rem" }}>
            <img
              src={pre5}
              className="card-img-top"
              alt="woman sneezing or coughing"
              height="90%"
            />
            <div className="card-body">
              <h5 className="card-title">Maintain social distancing</h5>
              <p className="card-text">
                Maintain a distance of atleast 2 meters when in public.
              </p>
            </div>
          </div>
        </div>
        <div className="col align-items-stretch">
          <div className="card p-4" style={{ width: "18rem", height: "25rem" }}>
            <img
              src={pre6}
              className="card-img-top"
              alt="woman sneezing or coughing"
            />
            <div className="card-body">
              <h5 className="card-title">Vaccinate</h5>
              <p className="card-text">
                Get vaccinated as soon as you an get a slot. This is the best
                way to fight against coronavirus.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Precautions section done */}
      <div className="container text-center">
        <div className="row d-flex justify-content-center">
          <h2 className="text-center fw-bold p-2 m-4" id="stats">
            <span style={{ color: "grey" }}># </span>Covid-19 statistics of
            various countries:
          </h2>
          <form style={{ maxWidth: "14rem" }}>
            <div className="mb-3">
              show
              <input
                type="number"
                className="form-control"
                value={maxQ}
                onChange={handleMaxQ}
                max="212"
              />
              of 212 countries
            </div>
          </form>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center flex-wrap">
            {data.slice(0, maxQ).map(function print(el) {
              return <Country key={el.country} country={el} />;
            })}
          </div>
        </div>
        <h2 className="text-center fw-bold p-2 m-4">
          <span style={{ color: "grey" }}># </span>Search Covid-19 stat:
        </h2>
        <div className="row d-flex justify-content-center">
          <form
            style={{ maxWidth: "18rem" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-3">
              <label htmlFor="searchCountry" className="form-label">
                <strong>Search by country name</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="searchCountry"
                value={cSearch}
                onChange={handleCSearch}
              />
              <div className="form-text">
                Enter country name for Covid 19 stats of that country.
              </div>
            </div>
            <button
              type="reset"
              className="btn btn-outline-dark btn-sm mb-4"
              onClick={() => setCSearch("n/a")}
            >
              Reset
            </button>
          </form>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center flex-wrap">
            {data
              .filter(function filt(el) {
                return el.country
                  .toLowerCase()
                  .includes(cSearch.toLowerCase().trim());
              })
              .map(function print(el) {
                return <Country key={el.country} country={el} />;
              })}
          </div>
        </div>
      </div>
      {/* Stats section done */}
      <div className="container">
        <h2 className="text-center fw-bold p-2 m-4" id="resources">
          <span style={{ color: "grey" }}># </span>Resources:
        </h2>
        <h3>
          <span style={{ color: "grey" }}># </span>Beds
        </h3>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <td>#</td>
              <td>Resource name</td>
              <td>Link</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Covid Beds India</td>
              <td>
                <a
                  style={{ color: "white" }}
                  target="__blank"
                  href="https://covidbedsindia.in/"
                >
                  https://covidbedsindia.in/
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Covi Lives</td>
              <td>
                <a
                  style={{ color: "white" }}
                  target="__blank"
                  href="https://covilives.com/"
                >
                  https://covilives.com/
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Find a Bed</td>
              <td>
                <a
                  style={{ color: "white" }}
                  target="__blank"
                  href="https://www.findabed.in/"
                >
                  https://www.findabed.in/
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Covid India Fighters</td>
              <td>
                <a
                  style={{ color: "white" }}
                  href="https://covidindiafighters.com/"
                  target="__blank"
                >
                  https://covidindiafighters.com/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>
          <span style={{ color: "grey" }}># </span>Oxygen
        </h3>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <td>#</td>
              <td>Resource name</td>
              <td>Link</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Corona Safe</td>
              <td>
                <a
                  style={{ color: "white" }}
                  target="__blank"
                  href="https://life.coronasafe.network/"
                >
                  https://life.coronasafe.network/
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Covi Lives</td>
              <td>
                <a
                  style={{ color: "white" }}
                  target="__blank"
                  href="https://covilives.com/"
                >
                  https://covilives.com/
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Find a Bed</td>
              <td>
                <a
                  style={{ color: "white" }}
                  target="__blank"
                  href="https://www.findabed.in/"
                >
                  https://www.findabed.in/
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Covid India Fighters</td>
              <td>
                <a
                  style={{ color: "white" }}
                  href="https://covidindiafighters.com/"
                  target="__blank"
                >
                  https://covidindiafighters.com/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Resources section done */}
      <div className="container p-4">
        <h2 className="text-center fw-bold p-2 m-4">
          <span style={{ color: "grey" }} id="vaccine">
            #{" "}
          </span>
          FAQs about Vaccination
        </h2>
        <div className="list-group">
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                Where should I register for the vaccination?
              </h5>
              <small>.</small>
            </div>
            <p className="mb-1">
              Register on the Co-WIN Portal and schedule your vaccination
              appointment. <br />
              <a href="https://www.cowin.gov.in/home" target="__blank">
                CoWin
              </a>
            </p>
          </div>
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                Where should I register for the vaccination?
              </h5>
              <small>.</small>
            </div>
            <p className="mb-1">
              Vaccines are available from Government and Private Health
              Facilities as notified, known as COVID Vaccination Centres (CVCs)
            </p>
          </div>
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                Will a Photo ID be required at the time of registration?
              </h5>
              <small>.</small>
            </div>
            <p className="mb-1">
              The Photo ID produced at the time of registration must be produced
              and verified at the time of vaccination.
            </p>
          </div>
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                Will I get any certificate that I am vaccinated?
              </h5>
              <small>.</small>
            </div>
            <p className="mb-1">
              Yes, a provisional certificate would be provided after the first
              dose. On completion of second dose, when you receive the message
              for completion of schedule it would include a link to download
              digital certificate of vaccination for your perusal. This
              certificate can be then be saved in the digi-locker.
            </p>
          </div>
          <button class="btn btn-outline-dark mt-2">
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.cowin.gov.in/home"
              target="__blank"
            >
              CoWin
            </a>
          </button>
        </div>
      </div>

      {/* FAQ about Vaccination done */}
      <div className="container-fluid bg-light text-left p-4">
        <div className="container">
          <h5 className="p-2">Project by:</h5>
          <ul className="list-group">
            <li className="list-group-item">Mayank Verma</li>
            <li className="list-group-item">Harmanveer Singh</li>
            <li className="list-group-item">Harsh Sharma</li>
          </ul>
          <br />
          <p className="text-center">CovaTrack 2021 ©</p>
        </div>
      </div>
    </>
  );
}

export default App;
