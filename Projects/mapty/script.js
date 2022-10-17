'use strict';

const form = document.querySelector('.form'),
    inputType = document.querySelector('.form__input--type'),
    inputDistance = document.querySelector('.form__input--distance'),
    inputDuration = document.querySelector('.form__input--duration'),
    inputCadence = document.querySelector('.form__input--cadence'),
    inputElevation = document.querySelector('.form__input--elevation'),
    workoutContainer = document.querySelector('.workouts');

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


class Workout {
    date = new Date().getDate();
    month = months[new Date().getMonth()];
    id = String(Date.now()).slice(-10);

    constructor(coordinates, distance, duration) {
        this.coordinates = coordinates;
        this.distance = distance;
        this.duration = duration;
    }
}

class Running extends Workout {
    type = "running";

    constructor(coordinates, distance, duration, cadence) {
        super(coordinates, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }

    calcPace() {
        this.pace = this.duration / this.distance;
    }
}

class Cycling extends Workout {
    type = "cycling";

    constructor(coordinates, distance, duration, elev_gain) {
        super(coordinates, distance, duration);
        this.elev_gain = elev_gain;
        this.calcSpeed();
    }

    calcSpeed() {
        this.speed = this.distance / (this.duration / 60);
    }
}

class App {
    #map;
    #mapEvent;
    #workouts = [];

    constructor() {
        this.#getPosition();
        this.#getLocalStorage();
        document.addEventListener('keypress', this.#newWorkout.bind(this));
        this.#toggleWorkout();
        workoutContainer.addEventListener('click', this.#moveFocus.bind(this));
    }

    #getPosition() {
        navigator.geolocation.getCurrentPosition(this.#loadMap.bind(this), function () {
            alert("Could not get the location info.");
        });
    }

    #loadMap(position) {
        const {latitude, longitude} = position.coords;
        this.#map = L.map('map').setView([latitude, longitude], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        this.#map.on('click', this.#showForm.bind(this));
        this.#workouts.forEach(w => this.#addMarker(w));
    }

    #showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    #newWorkout(e) {
        const validateInput = function (...inputs) {
            return inputs.every(input => Number.isFinite(input) && input > 0);
        };

        if (e.key === "Enter") {
            const type = inputType.value;
            const dist = +inputDistance.value;
            const dura = +inputDuration.value;
            const {lat, lng} = this.#mapEvent.latlng;
            let work;
            if (type === "running") {
                const cad = +inputCadence.value;
                if (!validateInput(dist, dura, cad)) return alert("Invalid Input");
                work = new Running([lat, lng], dist, dura, cad);
            } else if (type === "cycling") {
                const elv = +inputElevation.value;
                if (!validateInput(dist, dura, elv)) return alert("Invalid input");
                work = new Cycling([lat, lng], dist, dura, elv);
            } else {
                console.assert(false, "Invalid Selection in Workout Type");
            }

            this.#workouts.push(work);
            this.#addMarker(work);
            this.#renderWork(work);
            this.#setLocalStorage();

            form.classList.add('hidden');
            inputType.value = 'running';
            inputDistance.value = '';
            inputDuration.value = '';
            inputCadence.value = '';
            inputElevation.value = '';
            inputCadence.closest('.form__row').classList.remove('form__row--hidden');
            inputElevation.closest('.form__row').classList.add('form__row--hidden');
        }
    }

    #toggleWorkout() {
        inputType.addEventListener('change', function () {
            inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
            inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        });
    }

    #addMarker(work) {
        const workName = work.type;
        const desc = workName[0].toUpperCase() + workName.slice(1);
        L.marker(work.coordinates).addTo(this.#map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${workName}-popup`,
            }))
            .setPopupContent(`${desc} on ${work.month} ${work.date}`)
            .openPopup();
    }

    #renderWork(work) {
        const workName = work.type;
        const li = document.createElement("li");
        li.classList.add(`workout`, `workout--${workName}`);
        li.setAttribute('data-id', work.id);
        li.innerHTML = `<h2 class="workout__title">${work.month} on ${work.date}</h2>
            <div class="workout__details">
                <span class="workout__icon">🏃‍♂️</span>
                <span class="workout__value">${work.distance}</span>
                <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${work.duration}</span>
                <span class="workout__unit">min</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workName === "running" ? work.pace : work.speed}</span>
                <span class="workout__unit">${workName === "running" ? "min/km" : "km/hr"}</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">${workName === "running" ? "🦶" : "⛰"}</span>
                <span class="workout__value">${workName === "running" ? work.cadence : work.elev_gain}</span>
                <span class="workout__unit">${workName === "running" ? "spm" : "m"}</span>
            </div>
        </li>`
        form.after(li);
    }

    #moveFocus(e) {
        const elem = e.target.closest('.workout');
        if (!elem) return;
        const work = this.#workouts.find(w => w.id === elem.dataset.id);
        this.#map.setView(work.coordinates, 13, {
            animate: true,
            pan: {
                duration: 1
            },
        });
    }

    #setLocalStorage() {
        localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    }

    #getLocalStorage() {
        this.#workouts = JSON.parse(localStorage.getItem("workouts")) || [];
        this.#workouts.forEach(work => {
            this.#renderWork(work);
        });
    }

    clearWorkouts(){
        localStorage.removeItem('workouts');
        window.location.reload();
    }

}

const app = new App();