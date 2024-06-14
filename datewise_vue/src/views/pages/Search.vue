<template>
    <Header title="Search" type="5" />
    <div class="container">
        <div class="py-4 container">
            <div class="card">
                <div class="filter-container">
                    <div class="filter-group period-group">
                        <label class="label_txt">Set Period :</label>
                        <div class="container text-left">
                            <div class="row justify-content-center">
                                <div class="col-lg-10">
                                    <form action="#" class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="date" id="startDate" class="datepicker form-control"
                                                    placeholder="Start Date" v-model="filters.startDate">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="date" id="endDate" class="datepicker form-control"
                                                    placeholder="End Date" v-model="filters.endDate">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="filter-group">
                        <label class="label_txt">Type :</label>
                        <div class="radio-group">
                            <input type="radio" id="spending" value="Spending" v-model="filters.type">
                            <label for="spending">Spending</label>
                            <input type="radio" id="income" value="Income" v-model="filters.type">
                            <label for="income">Income</label>
                        </div>
                    </div>
                    <hr v-if="filters.type === 'Spending'">
                    <div class="filter-group" v-if="filters.type === 'Spending'">
                        <label class="label_txt">Payment method :</label>
                        <div class="checkbox-group">
                            <input type="checkbox" id="debit" value="Card" v-model="filters.method">
                            <label for="debit">Card</label>
                            <input type="checkbox" id="cash" value="Cash" v-model="filters.method">
                            <label for="cash">Cash</label>
                        </div>
                    </div>
                    <hr v-if="filters.type === 'Spending'">
                    <div class="filter-group" v-if="filters.type === 'Spending'">
                        <label class="label_txt">Category :</label>
                        <div class="checkbox-group">
                            <input type="checkbox" id="food" value="Food" v-model="filters.category">
                            <label for="food">Food</label>
                            <input type="checkbox" id="vehicle" value="Vehicle" v-model="filters.category">
                            <label for="vehicle">Vehicle</label>
                            <input type="checkbox" id="traffic" value="Traffic" v-model="filters.category">
                            <label for="traffic">Traffic</label>
                            <input type="checkbox" id="shopping" value="Shopping" v-model="filters.category">
                            <label for="shopping">Shopping</label>
                            <input type="checkbox" id="medical" value="Medical" v-model="filters.category">
                            <label for="medical">Medical</label>
                            <input type="checkbox" id="utility-bill" value="Utility Bill" v-model="filters.category">
                            <label for="utility-bill">Utility Bill</label>
                            <input type="checkbox" id="insurance" value="Insurance" v-model="filters.category">
                            <label for="insurance">Insurance</label>
                            <input type="checkbox" id="beauty" value="Beauty" v-model="filters.category">
                            <label for="beauty">Beauty</label>
                            <input type="checkbox" id="saving" value="Saving" v-model="filters.category">
                            <label for="saving">Saving</label>
                            <input type="checkbox" id="education" value="Education" v-model="filters.category">
                            <label for="education">Education</label>
                            <input type="checkbox" id="donation" value="Donation" v-model="filters.category">
                            <label for="donation">Donation</label>
                            <input type="checkbox" id="pet" value="Pet" v-model="filters.category">
                            <label for="pet">Pet</label>
                            <input type="checkbox" id="Congratulation-and-condolences"
                                value="Congratulation and Condolences" v-model="filters.category">
                            <label for="Congratulation-and-condolences">Congratulation and Condolences</label>
                            <input type="checkbox" id="subscription" value="Subscription" v-model="filters.category">
                            <label for="subscription">Subscription</label>
                        </div>
                    </div>
                    <hr v-if="filters.type === 'Income'">
                    <div class="filter-group" v-if="filters.type === 'Income'">
                        <label class="label_txt">Category :</label>
                        <div class="checkbox-group">
                            <input type="checkbox" id="salary" value="Salary" v-model="filters.category">
                            <label for="salary">Salary</label>
                            <input type="checkbox" id="part-time-job" value="Part Time Job" v-model="filters.category">
                            <label for="part-time-job">Part Time Job</label>
                            <input type="checkbox" id="bonus" value="Bonus" v-model="filters.category">
                            <label for="bonus">Bonus</label>
                            <input type="checkbox" id="pocket-money" value="Pocket Money" v-model="filters.category">
                            <label for="pocket-money">Pocket Money</label>
                            <input type="checkbox" id="financial-income" value="Financial Income"
                                v-model="filters.category">
                            <label for="financial-income">Financial Income</label>
                            <input type="checkbox" id="scholarship" value="Scholarship" v-model="filters.category">
                            <label for="scholarship">Scholarship</label>
                            <input type="checkbox" id="sns" value="SNS" v-model="filters.category">
                            <label for="sns">SNS</label>
                            <input type="checkbox" id="app-tech" value="App Tech" v-model="filters.category">
                            <label for="app-tech">App Tech</label>
                            <input type="checkbox" id="dutch" value="Dutch" v-model="filters.category">
                            <label for="dutch">Dutch</label>
                            <input type="checkbox" id="other-income" value="Other Income" v-model="filters.category">
                            <label for="other-income">Other Income</label>
                            <input type="checkbox" id="secondhand-transaction" value="Secondhand Transaction"
                                v-model="filters.category">
                            <label for="secondhand-transaction">Secondhand Transaction</label>
                            <input type="checkbox" id="insurance-money" value="Insurance Money"
                                v-model="filters.category">
                            <label for="insurance-money">Insurance Money</label>
                        </div>
                    </div>
                    <div>
                        <button @click="filterData" class="btn mb-0 btn-outline-primary btn-sm null null"
                            style="color: #FFFFFF; background-color: #380A15; border: #380A15 1px solid; font-size: 20px; ">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-4 container">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0" style="color: #380A15; font-size: 30px; padding-left: 20px;">Result</h5>
                </div>
                <DataTables :data="filteredData" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Header from '@/components/Header.vue';
import DataTables from '../applications//DataTables.vue'

// 초기 설정
const today = new Date();
const todayString = today.toISOString().split('T')[0];

// 필터, 데이터 변수
const filters = ref({
    startDate: todayString,
    endDate: todayString,
    type: 'Spending',
    method: [],
    category: [],
});

const json = ref([]);
const filteredData = ref([]);

// 데이터 필터링
const filterData = () => {
    console.log("Selected Filters:", filters.value);

    if (!json.value || json.value.length === 0) {
        console.log("No existing data to filter.");
        return;
    }

    const data = json.value.flatMap(item => {
        if (filters.value.type === 'Spending') {
            console.log("Spending value filtering for date:", item.date);
            return item.spending.filter(spend => {
                const methodCheck = filters.value.method.length === 0 || filters.value.method.includes(spend.method);
                const categoryCheck = filters.value.category.length === 0 || filters.value.category.includes(spend.category);
                const dateCheck = new Date(item.date) >= new Date(filters.value.startDate) &&
                    new Date(item.date) <= new Date(filters.value.endDate);
                console.log("Spending result : ", methodCheck, categoryCheck, dateCheck);
                return methodCheck && categoryCheck && dateCheck;
            }).map(spend => ({
                ...spend,
                date: item.date 
            }));
        } else if (filters.value.type === 'Income') {
            console.log("Income value filtering for date:", item.date);
            return item.income.filter(inc => {
                const categoryCheck = filters.value.category.length === 0 || filters.value.category.includes(inc.category);
                const dateCheck = new Date(item.date) >= new Date(filters.value.startDate) &&
                    new Date(item.date) <= new Date(filters.value.endDate);
                console.log("Income result : ", categoryCheck, dateCheck);
                return categoryCheck && dateCheck;
            }).map(inc => ({
                ...inc,
                date: item.date 
            }));
        } else {
            return [];
        }
    });

    console.log('Filtered data:', data);
    filteredData.value = data;
    console.log('posting to dataTable data:', filteredData);
};

// 데이터 로드
onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3000/data');
        json.value = response.data;
        console.log('Fetched data:', json.value);
        filterData(); // 데이터 로드 후 필터링 함수 호출
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>



<style scoped>
.container {
    padding: 20px;
    font-family: "DM Serif Display", serif;
    color: #380A15;
    font-weight: bold;
    font-style: normal;
}

.filter-container {
    padding: 30px;
}

/* 공통 스타일 */
.filter-group {
    margin-bottom: 20px;
}

.label_txt {
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
}

.checkbox-group,
.radio-group {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-left: 40px;
}

.checkbox-group input[type="checkbox"],
.radio-group input[type="radio"] {
    display: none;
}

.checkbox-group label,
.radio-group label {
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
}

.checkbox-group label::before,
.radio-group label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    border: 1px solid #380A15;
    background-color: #fff;
}

.checkbox-group input[type="checkbox"]:checked+label::before,
.radio-group input[type="radio"]:checked+label::before {
    background-color: #380A15;
}

hr {
    border: #380A15 solid 1px;
}

label {
    color: #380A15;
}

.label_txt {
    font-weight: bold;
    font-size: 20pt;
    padding: 20px;
}

h2 {
    font-family: "DM Serif Display", serif;
    font-weight: bold;
    font-style: normal;
    font-size: 20pt;
}

input,
label {
    font-size: 18px;
}

/* 버튼을 화면 가운데에 정렬 */
button {
    display: block;
    margin: 0 auto;
    /* 수평 가운데 정렬 */
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}
</style>
