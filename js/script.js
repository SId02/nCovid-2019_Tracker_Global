/* Global Data Start*/
/* ncovid -2019 data of all Countries  */

const API_URL = `https://api.covid19api.com/summary`;

async function getCovidapi() {
	const jsondata = await fetch(API_URL);
	const jsdata = await jsondata.json();
	var globaldata = jsdata.Global;
	let globaldataop = `
                <div class="container my-5">
              <h5 class="text-center p-5"><u> Total Global Cases</u></h5>
                    <div class="row text-center">
                        <div class="col-4 text-warning">
                            <h5>Confirmed</h5>
                            <p>${globaldata.TotalConfirmed}</p>
                        </div>
                        <div class="col-4 text-success">
                            <h5>Recovered</h5>
                            <p>${globaldata.TotalRecovered}</p>
                        </div>
                        <div class="col-4 text-danger">
                            <h5>Deceased</h5>
                            <p>${globaldata.TotalDeaths}</p>
                        </div>
                    </div>
                </div>
                <div class="container my-5">
                 <h5 class="text-center p-5"><u>New Global Cases Daily </u></h5>
                    <div class="row text-center">
                        <div class="col-4 text-warning">
                            <h5>Confirmed</h5>
                            <p>${globaldata.NewConfirmed}</p>
                        </div>
                        <div class="col-4 text-success">
                            <h5>Recovered</h5>
                            <p>${globaldata.NewDeaths}</p>
                        </div>
                        <div class="col-4 text-danger">
                            <h5>Deceased</h5>
                            <p>${globaldata.NewRecovered}</p>
                        </div>
                    </div>
                </div>
				<div class="container my-5">
			<div class="row text-center">
				<div class="col-12">
					<p><strong> Date : </strong> - ${jsdata.Date}</p>
				</div>
			</div>
		</div>
                `;
	document.querySelector("#globaldataop").innerHTML = globaldataop;
}
getCovidapi();
/*Ends All Global Data */

/*javascript for fetch data form Api*/

const op = document.querySelector("#op");
async function getData() {
	op.innerHTML = "";
	const response = await fetch(API_URL);
	const json = await response.json();
	json.Countries.forEach((countryDetail) => {
		op.innerHTML += `
				<div class="col-lg-4 col-md-3">
				<div class="card">
				<div class="card-body">
					<h5 class="card-header">${countryDetail.Country}</h5>
					<p class="card-text">
						<ul class="list-group">
								<li class="list-group-item">
									Country Code: ${countryDetail.CountryCode}
								</li>
								<li class="list-group-item list-group-item-warning">
									New Confirmed: ${countryDetail.NewConfirmed}
								</li>
								<li class="list-group-item list-group-item-success">
									New Recovered: ${countryDetail.NewRecovered}
								</li>
								<li class="list-group-item list-group-item-danger">
									New Deaths: ${countryDetail.NewDeaths}
								</li>
								<li class="list-group-item">
									Total Confirmed: <span class="badge badge-pill badge-warning"> ${countryDetail.TotalConfirmed}</span>
								</li>
								<li class="list-group-item">
									Total Deaths: <span class="badge badge-pill badge-danger">${countryDetail.TotalDeaths}</span>
								</li>
								<li class="list-group-item">
									Total Recovered: <span class="badge badge-pill badge-success"> ${countryDetail.TotalRecovered} </span>
								</li>
							</ul>
					</p>
				</div>
				<div class="card-footer  text-center">
						<small class="text-muted">Date :  ${countryDetail.Date} </small>
				</div>
			</div>
</div>	
				`;
	});
}
getData();
