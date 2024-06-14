import axios from 'axios'

const API_URL = 'http://localhost:3000/data';

// 객체 하나만 받기 - id : get http://localhost:3000/data/{id}
export const getSingleData = async (date) => {
    try {
        const response = await axios.get(API_URL+ `?date=${date}`);
        
        if (response.status == 200) {
          return response.data[0];
        }
    } catch(e) {
      console.log("error", e.response.data);
    }
};

// 리스트 전체 불러오기 - get http://localhost:3000/data
export const getAllData = async () => {
    try {
        const response = await axios.get(API_URL);
        
        if (response.status == 200) {
          return response.data;
        }
    } catch(e) {
      console.log("error", e.response.data);
    }
};

// 데이터 업데이트 - 객체(with Id) : patch  http://localhost:3000/data/{id}
export const updateSingleData = async (data) => {
    try {
        const response = await axios.patch(API_URL+`/${data.id}`, data);
        
        if (response.status == 200) {
          return response.data;
        }
    } catch(e) {
      console.log("error", e.response.data);
    }
};

// 데이터 추가 - 객체(without Id) : post  http://localhost:3000/data
export const postSingleData = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        
        if (response.status == 200) {
          return response.data;
        }
    } catch(e) {
      console.log("error", e.response.data);
    }
};

// 데이터 삭제 - id : delete  http://localhost:3000/data/{id}
export const deleteSingleData = async (id) => {
    try {
        const response = await axios.delete(API_URL+`/${id}`);
        
        if (response.status == 200) {
          return response.data;
        }
    } catch(e) {
      console.log("error", e.response.data);
    }
};