// search bar

let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
   search.classList.toggle("active");
};

// search bar end

// header

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
   header.classList.toggle("shadow", window.scrollY > 0);
});

// header end

// popup about

function openPopup() {
   document.getElementById("popup").style.display = "block";
}

function closePopup() {
   document.getElementById("popup").style.display = "none";
}

// Close the popup
window.onclick = function (event) {
   var popup = document.getElementById("popup");
   if (event.target == popup) {
      popup.style.display = "none";
   }
};

// popup about end

// Modal Booking
var modalBooking = document.getElementById("modal-booking");
var btnBooking = document.getElementById("booking-btn");
var closeBooking = document.getElementById("close-booking");

// Open the modal
btnBooking.onclick = function () {
   modalBooking.style.display = "block";
};

// Close the modal
closeBooking.onclick = function () {
   modalBooking.style.display = "none";
};

// Modal Maintenance
var modalMaintenance = document.getElementById("modal-maintenance");
var btnMaintenance = document.getElementById("maintenance-details");
var closeMaintenance = document.getElementById("close-maintenance");

// Open the modal
btnMaintenance.onclick = function () {
   modalMaintenance.style.display = "block";
};

// Close the modal
closeMaintenance.onclick = function () {
   modalMaintenance.style.display = "none";
};

// Modal Air Filter
var modalAirfilter = document.getElementById("modal-airfilter");
var btnAirfilter = document.getElementById("airfilter-details");
var closeAirfilter = document.getElementById("close-airfilter");

// Open the modal
btnAirfilter.onclick = function () {
   modalAirfilter.style.display = "block";
};

// Close the modal
closeAirfilter.onclick = function () {
   modalAirfilter.style.display = "none";
};
// Modal Undercarriage
var modalUndercarriage = document.getElementById("modal-undercarriage");
var btnUndercarriage = document.getElementById("undercarriage-details");
var closeUndercarriage = document.getElementById("close-undercarriage");

// Open the modal
btnUndercarriage.onclick = function () {
   modalUndercarriage.style.display = "block";
};

// Close the modal
closeUndercarriage.onclick = function () {
   modalUndercarriage.style.display = "none";
};
// Modal Change Battery
var modalChangeBattery = document.getElementById("modal-ChangeBattery");
var btnChangeBattery = document.getElementById("changebattery-details");
var closeChangeBattery = document.getElementById("close-ChangeBattery");

// Open the modal
btnChangeBattery.onclick = function () {
   modalChangeBattery.style.display = "block";
};

// Close the modal
closeChangeBattery.onclick = function () {
   modalChangeBattery.style.display = "none";
};

// Modal Change Exhaust
var modalChangeExhaust = document.getElementById("modal-ChangeExhaust");
var btnChangeExhaust = document.getElementById("changeexhaust-details");
var closeChangeExhaust = document.getElementById("close-ChangeExhaust");

// Open the modal
btnChangeExhaust.onclick = function () {
   modalChangeExhaust.style.display = "block";
};

// Close the modal
closeChangeExhaust.onclick = function () {
   modalChangeExhaust.style.display = "none";
};
// Modal Refresh Engine
var modalRefreshEngine = document.getElementById("modal-RefreshEngine");
var btnRefreshEngine = document.getElementById("refreshengine-details");
var closeRefreshEngine = document.getElementById("close-RefreshEngine");

// Open the modal
btnRefreshEngine.onclick = function () {
   modalRefreshEngine.style.display = "block";
};

// Close the modal
closeRefreshEngine.onclick = function () {
   modalRefreshEngine.style.display = "none";
};

// Dropdown pilih layanan booking
function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
   if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
      }
   }
};

function submitBooking() {
   var modalBooking = document.getElementById("modal-booking");
   modalBooking.style.display = "none";

   alert("Booking Berhasil dibuat");
}
