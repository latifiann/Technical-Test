// src/services/transactionService.js
import axios from "axios";
import baseUrl from "./baseUrl";

// Read: Get all transactions
const getAll = async () => {
  try {
    return (await axios.get(`${baseUrl}/order`)).data;
  } catch (error) {
    console.log(error);
  }
};

// Create: Add a new transaction
const create = async (transactionData) => {
  try {
    return (await axios.post(`${baseUrl}/order`, transactionData)).data;
  } catch (error) {
    console.log(error);
  }
};

// Update: Update an existing transaction
const update = async (transactionId, transactionData) => {
  try {
    return (await axios.put(`${baseUrl}/order/${transactionId}`, transactionData)).data;
  } catch (error) {
    console.log(error);
  }
};

// Delete: Remove a transaction
const remove = async (transactionId) => {
  try {
    return (await axios.delete(`${baseUrl}/order/${transactionId}`)).data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAll,
  create,
  update,
  remove,
};