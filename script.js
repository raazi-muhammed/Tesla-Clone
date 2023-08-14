const homePageContent = [
	{
		heading: `
            <h3>Experience Tesla</h3>
			<p>Schedule a Demo Drive Today</p>
        `,
		callToAction: `
            <button class="btn btn-tesla btn-tesla__accent">Demo Drive</button>
            `,
	},
	{
		heading: `
            <h3 id="main-heading">Model 3</h3>
            <p id="sub-content">
                Starting at $32,740 <br />
                After Federal Tax Credit
            </p>
        `,
		callToAction: `
            <button class="btn btn-tesla btn-tesla__primary">
                Explore Inventory
            </button>
            <button class="btn btn-tesla btn-tesla__secondary">
                Custom Order
            </button>
            `,
	},
	{
		heading: `
            <h3 id="main-heading">Model Y</h3>
            <p id="sub-content">
                Starting at $40,240 <br />
                After Federal Tax Credit
            </p>
        `,
		callToAction: `
            <button class="btn btn-tesla btn-tesla__primary">
                Explore Inventory
            </button>
            <button class="btn btn-tesla btn-tesla__secondary">
                Custom Order
            </button>
            `,
	},
	{
		heading: `
            <h3 id="main-heading">Model S</h3>
            <p id="sub-content">
                Explore Inventory
            </p>
        `,
		callToAction: `
            <button class="btn btn-tesla btn-tesla__primary">
                Custom Order
            </button>
            <button class="btn btn-tesla btn-tesla__secondary">
                Demo Drive
            </button>
            `,
	},
	{
		heading: `
            <h3 id="main-heading">Model X</h3>
            <p id="sub-content">
                Explore Inventory
            </p>
        `,
		callToAction: `
            <button class="btn btn-tesla btn-tesla__primary">
                Custom Order
            </button>
            <button class="btn btn-tesla btn-tesla__secondary">
                Demo Drive
            </button>
            `,
	},
	{
		heading: `
            <h3 id="main-heading">Solar Panels</h3>
            <p id="sub-content">
                Schedule a Virtual Consultation
            </p>
        `,
		callToAction: `
            <button class="btn btn-tesla btn-tesla__primary">
                Order Now
            </button>
            <button class="btn btn-tesla btn-tesla__secondary">
                Learn More
            </button>
            `,
	},
	{
		heading: `
            <h3 id="main-heading">Solar Roof</h3>
            <p id="sub-content">
                Produce Clean Energy From Your Roof
            </p>
        `,
		callToAction: `
            <button class="btn btn-tesla btn-tesla__primary">
                Order Now
            </button>
            <button class="btn btn-tesla btn-tesla__secondary">
                Learn More
            </button>
            `,
	},
	{
		heading: `
            <h3 id="main-heading">Powerwall</h3>
        `,
		callToAction: `
            <button class="btn btn-tesla btn-tesla__primary">
                Order Now
            </button>
            <button class="btn btn-tesla btn-tesla__secondary">
                Learn More
            </button>
            `,
	},
	{
		heading: `
            <h3 id="main-heading">Accessories</h3>
        `,
		callToAction: `
            <button class="btn btn-tesla btn-tesla__primary">
                Shop Now
            </button>
            `,
	},
];

const navBarContent = {
	vechicle: `
         <section class="nav__top-bar-on-small">
            <button onclick="backButtonPressed()" id="btn-back-button" class="btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                </svg>
            </button>

            <p id="heading">Vechicle</p>

            <button onclick="closeButtonPressed()" id="btn-close-button" class="btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                    />
                </svg>
            </button>
        </section>
        <section class="nav__main-section">
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Vehicles-Model-S.png"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Model S</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Vehicles-Model-3.png"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Model 3</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Vehicles-Model-X.png"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Model X</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Vehicles-Model-Y.png"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Model Y</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
			</section>
            <section class="nav__sub-sectoin-links">
				<ul>
					<li><a href="">Inventory</a></li>
					<li><a href="">Demo Drive</a></li>
					<li><a href="">Used Card</a></li>
					<li><a href="">Demo Drive</a></li>
					<li><a href="">Trade-in</a></li>
					<li><a href="">Compare</a></li>
					<li><a href="">Fleet</a></li>
					<li><a href="">Cybertruck</a></li>
					<li><a href="">Semi</a></li>
					<li><a href="">Roadster</a></li>
				</ul>
			</section>
`,
	energy: `
<section class="nav__top-bar-on-small">
				<button onclick="backButtonPressed()" id="btn-back-button" class="btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-chevron-left"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
						/>
					</svg>
				</button>

				<p id="heading">Energy</p>

				<button  onclick="closeButtonPressed()" id="btn-close-button" class="btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-x-lg"
						viewBox="0 0 16 16"
					>
						<path
							d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
						/>
					</svg>
				</button>
			</section>
			<section class="nav__main-section">
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Energy-Solar-Panels.png"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Solar Panels</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Energy-Solar-Roof.png"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Solar Roof</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Energy-Powerwall-US.png"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Powerwall</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Energy-Megapack.png"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Megapack</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
			</section>
			<section class="nav__sub-sectoin-links">
				<ul>
					<li><a href="">Utilities</a></li>
					<li><a href="">Commercial</a></li>
					<li><a href="">Schedule a Consultation</a></li>
				</ul>
			</section>`,
	charging: `
            <section class="nav__top-bar-on-small">
				<button onclick="backButtonPressed()" id="btn-back-button" class="btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-chevron-left"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
						/>
					</svg>
				</button>

				<p id="heading">Charging</p>

				<button
					onclick="closeButtonPressed()"
					id="btn-close-button"
					class="btn"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-x-lg"
						viewBox="0 0 16 16"
					>
						<path
							d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
						/>
					</svg>
				</button>
			</section>
			<section class="nav__main-section">
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Charging-Charging.jpeg"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Charging</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Charging-Home-Charging.jpeg"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Home Charging</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Charging-Supercharging.png"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Supercharging</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
			</section>
			<section class="nav__sub-sectoin-links">
				<ul>
					<li><a href="">Chargin Calculator</a></li>
					<li><a href="">Trip Planner</a></li>
					<li><a href="">Supercharger Voting</a></li>
					<li><a href="">Host a Supercharger</a></li>
					<li><a href="">Commercial Charging</a></li>
					<li><a href="">Host Wall Connectors</a></li>
				</ul>
			</section>`,
	discover: `
    <section class="nav__top-bar-on-small">
				<button onclick="backButtonPressed()" id="btn-back-button" class="btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-chevron-left"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
						/>
					</svg>
				</button>

				<p id="heading">Discover</p>

				<button
					onclick="closeButtonPressed()"
					id="btn-close-button"
					class="btn"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-x-lg"
						viewBox="0 0 16 16"
					>
						<path
							d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
						/>
					</svg>
				</button>
			</section>
            <section class="nav__sub-sectoin-links">
				<ul>
					<li><a href="">Demo Drive</a></li>
					<li><a href="">Insurance</a></li>
					<li><a href="">Video Guides</a></li>
					<li><a href="">Customer Stories</a></li>
					<li><a href="">Events</a></li>
				</ul>
			</section>
			<section class="nav__sub-sectoin-links">
				<ul>
					<li><a href="">Find Us</a></li>
					<li><a href="">Trip Planner</a></li>
					<li><a href="">Find a Collision Center</a></li>
					<li><a href="">Find a Certified Installer</a></li>
				</ul>
			</section>
			<section class="nav__sub-sectoin-links">
				<ul>
					<li><a href="">About</a></li>
					<li><a href="">Careers</a></li>
					<li><a href="">Investor Relations</a></li>
				</ul>
			</section>
            `,
	shop: `
    <section class="nav__top-bar-on-small">
				<button onclick="backButtonPressed()" id="btn-back-button" class="btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-chevron-left"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
						/>
					</svg>
				</button>

				<p id="heading">Discover</p>

				<button
					onclick="closeButtonPressed()"
					id="btn-close-button"
					class="btn"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-x-lg"
						viewBox="0 0 16 16"
					>
						<path
							d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
						/>
					</svg>
				</button>
			</section>
            <section class="nav__main-section">
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Shop-Charging.jpeg"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Charging</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Shop-Vehicle-Accessories.jpeg"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Vechicle accessories</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Shop-Apparel.png"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Apparel</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
				<section class="nav__sub-sectoin">
					<img
						class="nav__sub-sectoin__img"
						height="150"
						src="/img/Mega-Menu-Shop-Lifestyle.jpeg"
						alt=""
						srcset=""
					/>
					<section class="nav__sub-sectoin__heading">
						<p>Lifestyle</p>
						<a href="">Learn</a>
						<a href="">Order</a>
					</section>
				</section>
			</section>
            `,
};

/* For changing variables */
var rootEl = document.querySelector(":root");

let windowHeight;
let scrolled;

function setColour() {
	if (scrolled < windowHeight) {
		rootEl.style.setProperty("--TEXT-COLOR", "#FFF");
	} else if (scrolled > windowHeight) {
		rootEl.style.setProperty("--TEXT-COLOR", "#171a20");
	} else {
		rootEl.style.setProperty("--TEXT-COLOR", "#FFF");
	}
}
function setColourBlack() {
	rootEl.style.setProperty("--TEXT-COLOR", "#171a20");
}

/* For Making the Navigation Menu */
const navButtons = document.querySelector("nav");
const navgiationOpen = document.querySelector(".header__navigation-opened");
const menuButton = document.querySelector(".btn-tesla__accent-menu");
const mainContent = document.querySelector("main");

navButtons.addEventListener("mouseover", function () {
	setColourBlack();
	navgiationOpen.style.display = "flex";
});

mainContent.addEventListener("mouseover", function () {
	setColour();
	console.log("HIHI");

	if (navgiationOpen.style.display == "flex") {
		gsap.to(".header__navigation-opened", {
			startAt: { y: 0 },
			duration: 0.3,
			y: "-50%",
			opacity: "0",
		});
		console.log("bye");

		navgiationOpen.style.top = "0";
		setTimeout(function () {
			navgiationOpen.style.display = "none";
			console.log("hi");
		}, 300);
	}
});

/* Menu open and close */
menuButton.addEventListener("click", function () {
	if (navgiationOpen.style.display == "none") {
		navgiationOpen.style.display = "flex";
		setColourBlack();
		backButtonPressed();
	} else {
		navgiationOpen.style.display = "none";
		setColour();
	}
});

function animateNavbar() {
	gsap.from(".header__navigation-opened", {
		startAt: { y: 0 },
		duration: 0.3,
		y: "-4rem",
	});
	gsap.to(".header__navigation-opened", { opacity: "1" });
}

/* Top navigation menu opening and animation */
addButtonListners();
function addButtonListners() {
	try {
		document
			.querySelector(".btn-vechicle-main")
			.addEventListener("mouseover", function () {
				console.log("Vechicle");
				navgiationOpen.innerHTML = navBarContent.vechicle;
				animateNavbar();
			});

		document
			.querySelector(".btn-vechicle")
			.addEventListener("click", function () {
				console.log("Vechicle");
				navgiationOpen.innerHTML = navBarContent.vechicle;
			});

		document
			.querySelector(".btn-energy-main")
			.addEventListener("mouseover", function () {
				console.log("Energy");
				navgiationOpen.innerHTML = navBarContent.energy;

				animateNavbar();
			});

		document
			.querySelector(".btn-energy")
			.addEventListener("click", function () {
				console.log("Vechicle");
				navgiationOpen.innerHTML = navBarContent.energy;
			});

		document
			.querySelector(".btn-charging-main")
			.addEventListener("mouseover", function () {
				console.log("Energy");
				navgiationOpen.innerHTML = navBarContent.charging;
				animateNavbar();
			});

		document
			.querySelector(".btn-charging")
			.addEventListener("click", function () {
				console.log("Vechicle");
				navgiationOpen.innerHTML = navBarContent.charging;
			});

		document
			.querySelector(".btn-discover-main")
			.addEventListener("mouseover", function () {
				console.log("Energy");
				navgiationOpen.innerHTML = navBarContent.discover;
				animateNavbar();
			});

		document
			.querySelector(".btn-discover")
			.addEventListener("click", function () {
				console.log("Vechicle");
				navgiationOpen.innerHTML = navBarContent.discover;
			});

		document
			.querySelector(".btn-shop-main")
			.addEventListener("mouseover", function () {
				console.log("Energy");
				navgiationOpen.innerHTML = navBarContent.shop;
				animateNavbar();
			});

		document.querySelector(".btn-shop").addEventListener("click", function () {
			console.log("Vechicle");
			navgiationOpen.innerHTML = navBarContent.shop;
		});
	} catch (error) {
		console.log("Catch is the test");
	}
}

/* Mobile navigation buttons */
function closeButtonPressed() {
	navgiationOpen.style.display = "none";
	setColour();
}

function backButtonPressed() {
	console.log("What");
	navgiationOpen.innerHTML = `
            <section class="nav-open__page">
				<nav>
					<button class="btn btn-nav btn-vechicle">Vechicle</button>
					<button class="btn btn-nav btn-energy">Energy</button>
					<button class="btn btn-nav btn-charging">Charging</button>
					<button class="btn btn-nav btn-discover">Discover</button>
					<button class="btn btn-nav btn-shop">Shop</button>
					<button class="btn btn-nav btn-support">Support</button>
					<button class="btn btn-nav btn-language">Language</button>
					<button class="btn btn-nav btn-account">Account</button>
				</nav>
			</section>
        `;
	addButtonListners();
}

/* Adding main content by default */
document.querySelector(".article__heading").innerHTML =
	homePageContent[0].heading;

document.querySelector(".article__call-to-action").innerHTML =
	homePageContent[0].callToAction;

/* Changing the main content when scrolling */
window.addEventListener("scroll", function () {
	windowHeight = window.innerHeight;
	scrolled = window.scrollY + windowHeight / 3;

	setColour();

	if (scrolled < windowHeight) {
		document.querySelector(".article__heading").innerHTML =
			homePageContent[0].heading;

		document.querySelector(".article__call-to-action").innerHTML =
			homePageContent[0].callToAction;
	} else if (scrolled < windowHeight * 2) {
		document.querySelector(".article__heading").innerHTML =
			homePageContent[1].heading;

		document.querySelector(".article__call-to-action").innerHTML =
			homePageContent[1].callToAction;
	} else if (scrolled < windowHeight * 3) {
		document.querySelector(".article__heading").innerHTML =
			homePageContent[2].heading;

		document.querySelector(".article__call-to-action").innerHTML =
			homePageContent[2].callToAction;
	} else if (scrolled < windowHeight * 4) {
		document.querySelector(".article__heading").innerHTML =
			homePageContent[3].heading;

		document.querySelector(".article__call-to-action").innerHTML =
			homePageContent[3].callToAction;
	} else if (scrolled < windowHeight * 5) {
		document.querySelector(".article__heading").innerHTML =
			homePageContent[4].heading;

		document.querySelector(".article__call-to-action").innerHTML =
			homePageContent[4].callToAction;
	} else if (scrolled < windowHeight * 6) {
		document.querySelector(".article__heading").innerHTML =
			homePageContent[5].heading;

		document.querySelector(".article__call-to-action").innerHTML =
			homePageContent[5].callToAction;
	} else if (scrolled < windowHeight * 7) {
		document.querySelector(".article__heading").innerHTML =
			homePageContent[6].heading;

		document.querySelector(".article__call-to-action").innerHTML =
			homePageContent[6].callToAction;
	} else if (scrolled < windowHeight * 8) {
		document.querySelector(".article__heading").innerHTML =
			homePageContent[7].heading;

		document.querySelector(".article__call-to-action").innerHTML =
			homePageContent[7].callToAction;
	} else if (scrolled < windowHeight * 9) {
		document.querySelector(".article__heading").innerHTML =
			homePageContent[8].heading;

		document.querySelector(".article__call-to-action").innerHTML =
			homePageContent[8].callToAction;
	}
});
