<template>
  <Header title="Calendar" type="2"/>
  <div class="py-4 container">
    <div class="row">
      <div class="col">
        <!-- Fullcalendar -->
        <div class="card card-calendar">
          <!-- Card header -->
          <div class="card-header d-flex justify-content-center align-items-center">
            <a href="#" @click.prevent="prev" class="fullcalendar-btn-prev btn btn-sm btn-warning">
              <i class="fas fa-angle-left"></i>
            </a>
          
            <!-- Title -->
            <span id="current-month-year" class="h2" style="margin-left: 10px; margin-right: 10px;">
              {{ currentMonthYear }}
            </span>
            
            <a href="#" @click.prevent="next" class="fullcalendar-btn-next btn btn-sm btn-warning" style="margin-left: 1px;">
              <i class="fas fa-angle-right"></i>
            </a>
          
            <img src="@/assets/search_ic.svg" @click="goToSearch" style="margin-left: auto;">
          </div>
          
          <div class="d-flex justify-content-end" style="margin-right: 20px;">
            <button class="btn btn-lg btn-secondary" @click="openAddSpendingModal">
              Add Spending
            </button>

            <button class="btn btn-lg btn-secondary" @click="openAddIncomeModal" style="margin-left: 5px;">
              Add Income
            </button>
          </div>

          <!-- Card body -->
          <div class="card-body card-calendar-body" style="margin-top:-30px">
            <div id="fullCalendar"></div>
          </div>

        </div>
      </div>
    </div>

    <modal v-model:show="showAddSpendingModal" modal-classes="modal-secondary">
      <div class="form-group">
        <label for="date" class="form-label">Date</label>
        <input type="date" id="date" class="form-control" v-model="addSpendingData.date">
      </div>

      <div class="form-group">
        <label for="category" class="form-label">Category</label>
        <select id="category" class="form-control" v-model="addSpendingData.category">
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
        <select id="method" class="form-control" v-model="addSpendingData.paymentMethod">
          <option disabled value="">Choose payment method</option>
          <option>Card</option>
          <option>Cash</option>
        </select>
      </div>

      <div class="form-group">
        <label for="place" class="form-label">Place</label>
        <input type="text" id="place" class="form-control" v-model="addSpendingData.place">
      </div>

      <div class="form-group">
        <label for="title" class="form-label">Title</label>
        <input type="text" id="title" class="form-control" v-model="addSpendingData.title">
      </div>

      <div class="form-group">
        <label for="amount" class="form-label">Amount</label>
        <input type="number" id="amount" class="form-control" v-model="addSpendingData.amount">
      </div>
      
      <div class="form-group">
        <label for="memo" class="form-label">Memo</label>
        <textarea id="memo" class="form-control" v-model="addSpendingData.memo"></textarea>
      </div>

      <template v-slot:footer>
        <button type="submit" class="btn btn-primary btn-link new-event--add" @click="saveSpendingEvent">
          Add Spending
        </button>
        <button type="button" class="btn btn-primary btn-link ml-auto" @click="closeModal">
          Close
        </button>
      </template>
    </modal>
    
    <modal v-model:show="showAddIncomeModal" modal-classes="modal-secondary">
      <div class="form-group">
        <label for="date" class="form-label">Date</label>
        <input type="date" id="date" class="form-control" v-model="addIncomeData.date">
      </div>

      <div class="form-group">
        <label for="category" class="form-label">Category</label>
        <select id="category" class="form-control" v-model="addIncomeData.category">
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
        <input type="text" id="title" class="form-control" v-model="addIncomeData.title">
      </div>

      <div class="form-group">
        <label for="amount" class="form-label">Amount</label>
        <input type="number" id="amount" class="form-control" v-model="addIncomeData.amount">
      </div>
      
      <div class="form-group">
        <label for="memo" class="form-label">Memo</label>
        <textarea id="memo" class="form-control" v-model="addIncomeData.memo"></textarea>
      </div>

      <template v-slot:footer>
        <button type="submit" class="btn btn-primary btn-link new-event--add" @click="saveIncomeEvent">
          Add Income
        </button>
        <button type="button" class="btn btn-primary btn-link ml-auto" @click="closeModal">
          Close
        </button>
      </template>
    </modal>

    <modal v-model:show="showEditModal" modal-classes="modal-secondary">
      <form class="edit-event--form" @submit.prevent="editEvent">
        <base-input name="textarea" label="Description">
          <textarea
            v-model="model.description"
            class="form-control form-control-alternative edit-event--description textarea-autosize"
            placeholder="Event Desctiption"
          >
          </textarea>
          <i class="form-group--bar"></i>
        </base-input>
        <input type="hidden" class="new-event--start" />
        <input type="hidden" class="new-event--end" />
      </form>

      <template v-slot:footer>
        <base-button
          native-type="submit"
          type="primary"
          class="new-event--add"
          @click="editEvent"
          >Update</base-button
        >
        <base-button type="danger" @click="deleteEvent">Delete</base-button>
        <button type="button" class="btn btn-link ml-auto" @click="closeModal">Close</button>
      </template>
    </modal>

  </div>
</template>

<script setup>
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

import Modal from "./Modal";
import Header from "@/components/Header.vue"

let calendar;
const router = useRouter();

let currentMonthYear = ref("");

let addSpendingData = ref({
  paymentMethod: "",
  category: "",
  date: "",
  place: "",
  title: "",
  amount: 0,
  memo: ""
});

let addIncomeData = ref({
  category: "",
  date: "",
  title: "",
  amount: 0,
  memo: ""
});

let model = {
  allDay: true,
  id: "",
  title: "",
  start: "",
  backgroundColor: ""
};

const showAddSpendingModal = ref(false);
const showAddIncomeModal = ref(false);
const showEditModal = ref(false);

const closeModal = () =>{
  showAddSpendingModal.value = false;
  showAddIncomeModal.value = false;
  showEditModal.value = false;
};

const getCurrentDate = () => {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const openAddSpendingModal = () => {
  addSpendingData.value.date = getCurrentDate();

  addSpendingData.value.paymentMethod = "";
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

const initEvents = async ()=>{
  try {
    const response = await axios.get("http://localhost:3000/data");

    for(let event of response.data){
      const date = event.date;

      model.id = "S" + date;
      model.title = -event.spending_total;
      model.start = date;
      model.backgroundColor = "red";
      calendar.addEvent(model);

      model.id = "I" + date;
      model.title = "+" + String(event.income_total);
      model.backgroundColor = "";

      calendar.addEvent(model);
    }
  } catch (error) {
    console.error('Error : ', error);
  }
}

const initCalendar = () => {
  const calendarEl = document.getElementById("fullCalendar");

  calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true,
    headerToolbar: false,
    
    select: () => {              // 캘린더에서 특정 날짜를 클릭했을 때
      
    },
    eventClick: (event) => {        // 캘린더의 특정 이벤트를 클릭했을 때
      model.title = event.title;
      model.className = event.classNames ? event.classNames.join(" ") : "";
      model.start = event.start;
      model.end = event.end;
      showEditModal.value = true;
    },
    events: []
  });

  initEvents();
  calendar.render();
};

const getCurrentMonthYear = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
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

const saveSpendingEvent = () => {
  const findId = "S" + addSpendingData.value.date;
  let event = calendar.getEventById(findId);

  if (event) {    // id에 해당하는 이벤트가 있는 경우 -> 그 이벤트의 title(총 지출)에 입력한 지출을 더함
    const existAmount = event.title;
    const addAmount = addSpendingData.value.amount;
    const finalAmount = Number(existAmount) - addAmount;

    event.setProp('title', finalAmount);
  } else {    // id에 해당하는 이벤트가 없는 경우 -> 새롭게 넣어줌
    model.id = findId;
    model.title = -addSpendingData.value.amount;
    model.start = addSpendingData.value.date;
    model.backgroundColor = "red";

    calendar.addEvent(model);
  }

  showAddSpendingModal.value = false;
};

const saveIncomeEvent = () => {
  const findId = "I" + addIncomeData.value.date;
  let event = calendar.getEventById(findId);

  if (event) {    // id에 해당하는 이벤트가 있는 경우 -> 그 이벤트의 title(총 지출)에 입력한 지출을 더함
    const existAmount = event.title;
    const addAmount = addIncomeData.value.amount;
    const finalAmount = Number(existAmount) + addAmount;

    event.setProp('title', "+" + finalAmount);
  } else {    // id에 해당하는 이벤트가 없는 경우 -> 새롭게 넣어줌
    model.id = findId;
    model.title = "+" + String(addIncomeData.value.amount);
    model.start = addIncomeData.value.date;
    model.backgroundColor = "";

    calendar.addEvent(model);
  }

  showAddIncomeModal.value = false;
};

const updateEvent = (eventId, prevAmount, newAmount, newDate) =>{
  let event = calendar.getEventById(eventId);

  if (event) {
    const existAmount = event.title;
    const gapAmount = newAmount - prevAmount;

    let finalAmount;
    if(eventId[0] == "S"){
      finalAmount = Number(existAmount) - gapAmount;
      event.setProp('title', finalAmount);
    }
    else if(eventId[0] == "I"){
      finalAmount = Number(existAmount) + gapAmount;
      event.setProp('title', "+" + finalAmount);
    }
    
    event.setStart(newDate);
    event.setAllDay(true);


  } else {
    console.error(`Event with id ${eventId} not found`);
    alert("error");
  }
}

const editEvent = () => {
  updateEvent("I2024-06-13", 1000, 2000, "2024-06-14");

  showEditModal.value = false;
};

const deleteEvent = () => {
  let index = calendar.events.value.findIndex((e) => e.title === model.value.title);
  if (index !== -1) {
    calendar.events.value.splice(index, 1);
  }
  showEditModal.value = false;
};

const goToSearch = () =>{
  router.push({name: 'Search'})
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
 background-color: #F7F6F7;
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