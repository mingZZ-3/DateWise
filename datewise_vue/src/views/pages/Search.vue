<template>
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
                            <input type="radio" id="spending" value="Spending" v-model="filters.type" checked>
                            <label for="spending">Spending</label>
                            <input type="radio" id="income" value="Income" v-model="filters.type">
                            <label for="income">Income</label>
                        </div>
                    </div>
                    <hr v-if="filters.type">
                    <div class="filter-group" v-if="filters.type === 'Spending'">
                        <label class="label_txt">Payment method :</label>
                        <div class="checkbox-group">
                            <input type="checkbox" id="debit" value="Debit card" v-model="filters.paymentMethod">
                            <label for="debit">Debit card</label>
                            <input type="checkbox" id="credit" value="Credit card" v-model="filters.paymentMethod">
                            <label for="credit">Credit card</label>
                            <input type="checkbox" id="cash" value="Cash" v-model="filters.paymentMethod">
                            <label for="cash">Cash</label>
                        </div>
                    </div>
                    <hr v-if="filters.type === 'Spending' && filters.paymentMethod.length > 0">
                    <div class="filter-group" v-if="(filters.type === 'Spending') && filters.paymentMethod.length > 0">
                        <label class="label_txt">Category :</label>
                        <div class="checkbox-group">
                            <input type="checkbox" id="food" value="food" v-model="filters.category">
                            <label for="food">Food</label>
                            <input type="checkbox" id="hospital" value="hospital" v-model="filters.category">
                            <label for="hospital">Hospital</label>
                            <input type="checkbox" id="subscribe" value="subscribe" v-model="filters.category">
                            <label for="subscribe">Subscribe</label>
                        </div>
                    </div>
                    <div class="filter-group" v-if="filters.type === 'Income'">
                        <label class="label_txt">Category :</label>
                        <div class="checkbox-group">
                            <input type="checkbox" id="stock" value="stock" v-model="filters.category">
                            <label for="stock">Stock</label>
                            <input type="checkbox" id="bonus" value="bonus" v-model="filters.category">
                            <label for="bonus">Bonus</label>
                        </div>
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
import { ref, computed } from 'vue'
import DataTables from '../applications//DataTables.vue'

const today = new Date();
const todayString = today.toISOString().split('T')[0];

const filters = ref({
    startDate: todayString,
    endDate: todayString,
    type: 'Spending',
    paymentMethod: ['Debit card', 'Credit card'],
    category: []
})

const data = ref([
    { type: 'Spending', paymentMethod: 'Debit card', category: 'food', title: 'restaurant', amount: '-20,000', date: '2024-06-12' },
    { type: 'Spending', paymentMethod: 'Credit card', category: 'food', title: "Jack's yum", amount: '-45,000', date: '2024-06-12' },
    { type: 'Spending', paymentMethod: 'Debit card', category: 'food', title: 'Kimbap Heaven', amount: '-37,000', date: '2024-06-12' },
    { type: 'Income', category: 'stock', title: 'Stock Dividends', amount: '+5,000', date: '2024-06-12' },
    { type: 'Income', category: 'bonus', title: 'Annual Bonus', amount: '+15,000', date: '2024-06-12' }
])

const filteredData = computed(() => {
    return data.value.filter(item => {
        return (!filters.value.startDate || new Date(item.date) >= new Date(filters.value.startDate)) &&
            (!filters.value.endDate || new Date(item.date) <= new Date(filters.value.endDate)) &&
            (filters.value.type === '' || item.type === filters.value.type) &&
            (filters.value.paymentMethod.length === 0 || filters.value.paymentMethod.includes(item.paymentMethod)) &&
            (filters.value.category.length === 0 || filters.value.category.includes(item.category))
    })
})
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

.filter-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

.period-group {
    flex-direction: column;
    align-items: flex-start;
}

.radio-group,
.checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
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

input, label {
    font-size: 18px;
}
</style>