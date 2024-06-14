<template>
  <div class="py-4 container">
    <div class="row">
      <div class="col">
        <!-- Fullcalendar -->
        <div class="card card-calendar">
          <!-- Card header -->
          <div
            class="card-header d-flex justify-content-center align-items-center"
          >
            <a
              href="#"
              @click.prevent="prev"
              class="fullcalendar-btn-prev btn btn-sm btn-warning"
            >
              <i class="fas fa-angle-left"></i>
            </a>

            <!-- Title -->
            <span
              id="current-month-year"
              class="h2"
              style="margin-left: 10px; margin-right: 10px"
            >
              {{ currentMonthYear }}
            </span>

            <a
              href="#"
              @click.prevent="next"
              class="fullcalendar-btn-next btn btn-sm btn-warning"
              style="margin-left: 1px"
            >
              <i class="fas fa-angle-right"></i>
            </a>

            <img
              src="@/assets/search_ic.svg"
              @click="goToSearch"
              style="margin-left: auto"
            />
          </div>

          <div class="d-flex justify-content-end" style="margin-right: 20px">
            <button
              class="btn btn-lg btn-secondary"
              @click="openAddSpendingModal"
            >
              Add Spending
            </button>

            <button
              class="btn btn-lg btn-secondary"
              @click="openAddIncomeModal"
              style="margin-left: 5px"
            >
              Add Income
            </button>
          </div>

          <!-- Card body -->
          <div class="card-body card-calendar-body" style="margin-top: -30px">
            <div id="fullCalendar"></div>
          </div>
        </div>
      </div>
    </div>

    <modal v-model:show="showAddSpendingModal" modal-classes="modal-secondary">
      <div class="form-group">
        <label for="date" class="form-label">Date</label>
        <input
          type="date"
          id="date"
          class="form-control"
          v-model="addSpendingData.date"
        />
      </div>

      <div class="form-group">
        <label for="category" class="form-label">Category</label>
        <select
          id="category"
          class="form-control"
          v-model="addSpendingData.category"
        >
          <option disabled value="">Choose category</option>
          <option>Food</option>
          <option>Vehicle</option>
          <option>Traffic</option>
          <option>Shopping</option>
          <option>Medical</option>
          <option>Utility bill</option>
          <option>Insurance</option>
          <option>Beauty</option>
          <option>Saving</option>
          <option>Education</option>
          <option>Donation</option>
          <option>Pet</option>
          <option>Congratulations and Condolences</option>
          <option>Subscription</option>
        </select>
      </div>

      <div class="form-group">
        <label for="method" class="form-label">Payment Method</label>
        <select
          id="method"
          class="form-control"
          v-model="addSpendingData.paymentMethod"
        >
        <select id="method" class="form-control" v-model="addSpendingData.method">
          <option disabled value="">Choose payment method</option>
          <option>Card</option>
          <option>Cash</option>
        </select>
      </div>

      <div class="form-group">
        <label for="place" class="form-label">Place</label>
        <input
          type="text"
          id="place"
          class="form-control"
          v-model="addSpendingData.place"
        />
      </div>

      <div class="form-group">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          id="title"
          class="form-control"
          v-model="addSpendingData.title"
        />
      </div>

      <div class="form-group">
        <label for="amount" class="form-label">Amount</label>
        <input
          type="number"
          id="amount"
          class="form-control"
          v-model="addSpendingData.amount"
        />
      </div>

      <div class="form-group">
        <label for="memo" class="form-label">Memo</label>
        <textarea
          id="memo"
          class="form-control"
          v-model="addSpendingData.memo"
        ></textarea>
      </div>

      <template v-slot:footer>
        <button
          type="submit"
          class="btn btn-primary btn-link new-event--add"
          @click="saveSpendingEvent"
        >
          Add Spending
        </button>
        <button
          type="button"
          class="btn btn-primary btn-link ml-auto"
          @click="closeModal"
        >
          Close
        </button>
      </template>
    </modal>

    <modal v-model:show="showAddIncomeModal" modal-classes="modal-secondary">
      <div class="form-group">
        <label for="date" class="form-label">Date</label>
        <input
          type="date"
          id="date"
          class="form-control"
          v-model="addIncomeData.date"
        />
      </div>

      <div class="form-group">
        <label for="category" class="form-label">Category</label>
        <select
          id="category"
          class="form-control"
          v-model="addIncomeData.category"
        >
          <option disabled value="">Choose category</option>
          <option>Salary</option>
          <option>Bonus</option>
          <option>Part Time Job</option>
          <option>Pocket Money</option>
          <option>Financial Income</option>
          <option>Insurance Money</option>
          <option>Scholarship</option>
          <option>Secondhand Transaction</option>
          <option>SNS</option>
          <option>Apptech</option>
          <option>Dutch</option>
          <option>Other Income</option>
        </select>
      </div>

      <div class="form-group">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          id="title"
          class="form-control"
          v-model="addIncomeData.title"
        />
      </div>

      <div class="form-group">
        <label for="amount" class="form-label">Amount</label>
        <input
          type="number"
          id="amount"
          class="form-control"
          v-model="addIncomeData.amount"
        />
      </div>

      <div class="form-group">
        <label for="memo" class="form-label">Memo</label>
        <textarea
          id="memo"
          class="form-control"
          v-model="addIncomeData.memo"
        ></textarea>
      </div>

      <template v-slot:footer>
        <button
          type="submit"
          class="btn btn-primary btn-link new-event--add"
          @click="saveIncomeEvent"
        >
          Add Income
        </button>
        <button
          type="button"
          class="btn btn-primary btn-link ml-auto"
          @click="closeModal"
        >
          Close
        </button>
      </template>
    </modal>

    <modal v-model:show="showEditModal" modal-classes="modal-secondary">
      <form class="edit-event--form" @submit.prevent="editSpendingEvent">
        <div class="form-group">
          <label for="date" class="form-label">Date</label>
          <input
            type="date"
            id="date"
            class="form-control"
            v-model="editSpendingData.date"
          />
        </div>

        <div class="form-group">
          <label for="category" class="form-label">Category</label>
          <select
            id="category"
            class="form-control"
            v-model="editSpendingData.category"
          >
            <option disabled value="">Choose category</option>
            <option>Food</option>
            <option>Vehicle</option>
            <option>Traffic</option>
            <option>Shopping</option>
            <option>Medical</option>
            <option>Utility bill</option>
            <option>Insurance</option>
            <option>Beauty</option>
            <option>Saving</option>
            <option>Education</option>
            <option>Donation</option>
            <option>Pet</option>
            <option>Congratulations and Condolences</option>
            <option>Subscription</option>
          </select>
        </div>

        <div class="form-group">
          <label for="method" class="form-label">Payment Method</label>
          <select
            id="method"
            class="form-control"
            v-model="editSpendingData.paymentMethod"
          >
            <option disabled value="">Choose payment method</option>
            <option>Card</option>
            <option>Cash</option>
          </select>
        </div>

        <div class="form-group">
          <label for="place" class="form-label">Place</label>
          <input
            type="text"
            id="place"
            class="form-control"
            v-model="editSpendingData.place"
          />
        </div>

        <div class="form-group">
          <label for="title" class="form-label">Title</label>
          <input
            type="text"
            id="title"
            class="form-control"
            v-model="editSpendingData.title"
          />
        </div>

        <div class="form-group">
          <label for="amount" class="form-label">Amount</label>
          <input
            type="number"
            id="amount"
            class="form-control"
            v-model="editSpendingData.amount"
          />
        </div>

        <div class="form-group">
          <label for="memo" class="form-label">Memo</label>
          <textarea
            id="memo"
            class="form-control"
            v-model="editSpendingData.memo"
          ></textarea>
        </div>
      </form>

      <template v-slot:footer>
        <button
          type="button"
          class="btn btn-primary btn-link ml-auto"
          @click="editSpendingEvent"
        >
          Update
        </button>
        <button
          type="button"
          class="btn btn-primary btn-link ml-auto"
          @click="deleteSpendingEvent"
        >
          Delete
        </button>
        <button
          type="button"
          class="btn btn-primary btn-link ml-auto"
          @click="closeModal"
        >
          Close
        </button>
      </template>
    </modal>

    <modal v-model:show="showEditModal" modal-classes="modal-secondary">
      <form class="edit-event--form" @submit.prevent="editIncomeEvent">
        <div class="form-group">
          <label for="date" class="form-label">Date</label>
          <input
            type="date"
            id="date"
            class="form-control"
            v-model="editIncomeData.date"
          />
        </div>

        <div class="form-group">
          <label for="category" class="form-label">Category</label>
          <select
            id="category"
            class="form-control"
            v-model="editIncomeData.category"
          >
            <option disabled value="">Choose category</option>
            <option>Food</option>
            <option>Vehicle</option>
            <option>Traffic</option>
            <option>Shopping</option>
            <option>Medical</option>
            <option>Utility bill</option>
            <option>Insurance</option>
            <option>Beauty</option>
            <option>Saving</option>
            <option>Education</option>
            <option>Donation</option>
            <option>Pet</option>
            <option>Congratulations and Condolences</option>
            <option>Subscription</option>
          </select>
        </div>

        <div class="form-group">
          <label for="method" class="form-label">Payment Method</label>
          <select
            id="method"
            class="form-control"
            v-model="editIncomeData.paymentMethod"
          >
            <option disabled value="">Choose payment method</option>
            <option>Card</option>
            <option>Cash</option>
          </select>
        </div>

        <div class="form-group">
          <label for="place" class="form-label">Place</label>
          <input
            type="text"
            id="place"
            class="form-control"
            v-model="editIncomeData.place"
          />
        </div>

        <div class="form-group">
          <label for="title" class="form-label">Title</label>
          <input
            type="text"
            id="title"
            class="form-control"
            v-model="editIncomeData.title"
          />
        </div>

        <div class="form-group">
          <label for="amount" class="form-label">Amount</label>
          <input
            type="number"
            id="amount"
            class="form-control"
            v-model="editIncomeData.amount"
          />
        </div>

        <div class="form-group">
          <label for="memo" class="form-label">Memo</label>
          <textarea
            id="memo"
            class="form-control"
            v-model="editIncomeData.memo"
          ></textarea>
        </div>
      </form>

      <template v-slot:footer>
        <button
          type="button"
          class="btn btn-primary btn-link ml-auto"
          @click="editIncomeEvent"
        >
          Update
        </button>
        <button
          type="button"
          class="btn btn-primary btn-link ml-auto"
          @click="deleteIncomeEvent"
        >
          Delete
        </button>
        <button
          type="button"
          class="btn btn-primary btn-link ml-auto"
          @click="closeModal"
        >
          Close
        </button>
      </template>
    </modal>
  </div>
</template>

<script setup>
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

import Modal from "./Modal";
// import Header from "@/components/Header.vue";
import { getSingleData } from '@/views/applications/DataApi.js'
import { postSingleData } from '@/views/applications/DataApi.js'
import { updateSingleData } from '@/views/applications/DataApi.js'

let calendar;
const router = useRouter();

let currentMonthYear = ref("");

let addSpendingData = ref({
  method: "",
  category: "",
  date: "",
  place: "",
  title: "",
  amount: 0,
  memo: "",
});

let addIncomeData = ref({
  category: "",
  date: "",
  title: "",
  amount: 0,
  memo: "",
});

let model = {
  allDay: true,
  id: "",
  title: "",
  start: "",
  backgroundColor: "",
};

let editSpendingData = ref({
  paymentMethod: "",
  category: "",
  date: "",
  place: "",
  title: "",
  amount: 0,
  memo: "",
});

let editIncomeData = ref({
  category: "",
  date: "",
  title: "",
  amount: 0,
  memo: "",
});

const showAddSpendingModal = ref(false);
const showAddIncomeModal = ref(false);
const showEditModal = ref(false);

const closeModal = () => {
  showAddSpendingModal.value = false;
  showAddIncomeModal.value = false;
  showEditModal.value = false;
};

const getCurrentDate = () => {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, "0");
  const d = String(today.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const openAddSpendingModal = () => {
  addSpendingData.value.date = getCurrentDate();

  addSpendingData.value.method = "";
  addSpendingData.value.category = "";
  addSpendingData.value.place = "";
  addSpendingData.value.title = "";
  addSpendingData.value.amount = 0;
  addSpendingData.value.memo = "";

  showAddSpendingModal.value = true;
};

const openAddIncomeModal = () => {
  addIncomeData.value.date = getCurrentDate();

  addIncomeData.value.category = "";
  addIncomeData.value.title = "";
  addIncomeData.value.amount = 0;
  addIncomeData.value.memo = "";

  showAddIncomeModal.value = true;
};

const initEvents = async () => {
  try {
    const response = await axios.get('http://localhost:3000/data');

    for (let event of response.data) {
      const date = event.date;

      if(object.spending_total != 0){
        model.id = "S" + date;
        model.title = -object.spending_total;
        model.start = date;
        model.backgroundColor = "red";

        calendar.addEvent(model);
      }
      
      if(object.income_total != 0){
        model.id = "I" + date;
        model.title = "+" + object.income_total;
        model.start = date;
        model.backgroundColor = "";

        calendar.addEvent(model);
      }
    }
  } catch (error) {
    console.error("Error : ", error);
  }
};

const initCalendar = () => {
  const calendarEl = document.getElementById("fullCalendar");

  calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true,
    headerToolbar: false,

    select: () => {             // 캘린더에서 특정 날짜를 클릭했을 때
      
    },
    eventClick: () => {         // 캘린더의 특정 이벤트를 클릭했을 때
      showEditModal.value = true;
    },
    events: [],
  });

  initEvents();
  calendar.render();
};

const getCurrentMonthYear = () => {
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
    "December",
  ];

  const now = calendar.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  currentMonthYear.value = `${month} ${year}`;
};

const prev = () => {
  calendar.prev();
  getCurrentMonthYear();
};

const next = () => {
  calendar.next();
  getCurrentMonthYear();
};

const saveSpendingEvent = async () => {
  const findId = "S" + addSpendingData.value.date;
  let event = calendar.getEventById(findId);

  try {
    const response = await getSingleData(addSpendingData.value.date);

    // 기존에 값이 있는 경우
    let object = response[0];

    let pushObject = {
      "method": addSpendingData.value.method,
      "category": addSpendingData.value.category,
      "title": addSpendingData.value.title,
      "amount": addSpendingData.value.amount,
      "memo": addSpendingData.value.memo,
      "place": addSpendingData.value.place
    };

    object.spending.push(pushObject);
    object.spending_total += addSpendingData.value.amount;

    try{
      await updateSingleData(object);
      event.setProp('title', -object.spending_total);
    } catch(error){
      console.log(error);
    }

  } catch (error) {
    // 기존에 값이 없는 경우
    let object = {
      "date": addSpendingData.value.date,
      "spending_total": addSpendingData.value.amount,
      "income_total": 0,
      "spending": [
        {
          "method": addSpendingData.value.method,
          "category": addSpendingData.value.category,
          "title": addSpendingData.value.title,
          "amount": addSpendingData.value.amount,
          "memo": addSpendingData.value.memo,
          "place": addSpendingData.value.place
        }
      ],
      "income": [
      ]
    }

    await postSingleData(object);

    model.id = findId;
    model.title = -object.spending_total;
    model.start = object.date;
    model.backgroundColor = "red";

    calendar.addEvent(model);
  }

  showAddSpendingModal.value = false;
};

const saveIncomeEvent = async () => {
  const findId = "I" + addIncomeData.value.date;
  let event = calendar.getEventById(findId);

  try {
    const response = await getSingleData(addIncomeData.value.date);

    // 기존에 값이 있는 경우
    let object = response[0];
    let pushObject = {
      "category": addIncomeData.value.category,
      "title": addIncomeData.value.title,
      "amount": addIncomeData.value.amount,
      "memo": addIncomeData.value.memo
    };

    object.income.push(pushObject);
    object.income_total += addIncomeData.value.amount;

    try {
      await updateSingleData(object);
      event.setProp('title', "+" + object.income_total);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    // 기존에 값이 없는 경우
    let object = {
      "date": addIncomeData.value.date,
      "spending_total": 0,
      "income_total": addIncomeData.value.amount,
      "spending": [
      ],
      "income": [
        {
          "category": addIncomeData.value.category,
          "title": addIncomeData.value.title,
          "amount": addIncomeData.value.amount,
          "memo": addIncomeData.value.memo,
        }
      ]
    }

    await postSingleData(object);

    model.id = findId;
    model.title = object.income_total;
    model.start = object.date;
    model.backgroundColor = "";

    calendar.addEvent(model);
  }

  showAddIncomeModal.value = false;
};

const editSpendingEvent = (eventId, prevAmount, newAmount, newDate) => {
  // S2024-06-13", 1000, 2000, "2024-06-14"
  let event = calendar.getEventById(eventId);

  if (event) {
    const existAmount = event.title;
    const gapAmount = newAmount - prevAmount;

    let finalAmount;
    if (eventId[0] == "S") {
      finalAmount = Number(existAmount) - gapAmount;
      event.setProp("title", finalAmount);
    } else if (eventId[0] == "I") {
      finalAmount = Number(existAmount) + gapAmount;
      event.setProp("title", "+" + finalAmount);
    }

    event.setStart(newDate);
    event.setAllDay(true);
  } else {
    console.error(`Event with id ${eventId} not found`);
    alert("error");
  }

  showEditModal.value = false;
};

const editIncomeEvent = (eventId, prevAmount, newAmount, newDate) => {
  // I2024-06-13", 1000, 2000, "2024-06-14"

  let event = calendar.getEventById(eventId);

  if (event) {
    const existAmount = event.title;
    const gapAmount = newAmount - prevAmount;

    let finalAmount;
    if (eventId[0] == "S") {
      finalAmount = Number(existAmount) - gapAmount;
      event.setProp("title", finalAmount);
    } else if (eventId[0] == "I") {
      finalAmount = Number(existAmount) + gapAmount;
      event.setProp("title", "+" + finalAmount);
    }

    event.setStart(newDate);
    event.setAllDay(true);
  } else {
    console.error(`Event with id ${eventId} not found`);
    alert("error");
  }

  showEditModal.value = false;
};

const deleteSpendingEvent = () => {
  const eventId = editSpendingData.value.id;
  const event = calendar.getEventById(eventId);

  if (event) {
    event.remove();
    showEditModal.value = false;
  } else {
    alert("Event not found.");
  }
};

const deleteIncomeEvent = () => {
  const eventId = editSpendingData.value.id;
  const event = calendar.getEventById(eventId);

  if (event) {
    event.remove();
    showEditModal.value = false;
  } else {
    alert("Event not found.");
  }
};

const goToSearch = () => {
  router.push({ name: "Search" });
};

onMounted(() => {
  initCalendar();
  getCurrentMonthYear();
});
</script>

<style scoped>
img {
  box-decoration-break: none;
  display: block;
  margin-right: 10px;
  float: right;
  width: 5%;
}
.modal-content {
  background-color: #f7f6f7;
  border: none;
  border-radius: 8px;
  padding: 20px;
  color: #815158;
}
.form-label {
  display: block;
  font-weight: bold;
  color: #815158;
  margin-bottom: 8px;
}
.form-control {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.btn-primary {
  background-color: #815158;
  border-color: #815158;
}
</style>