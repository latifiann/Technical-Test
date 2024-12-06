import axios from "axios";
import baseUrl from "./baseUrl";

// Read: Get all customers
const getAll = async () => {
  try {
    return (await axios.get(`${baseUrl}/customer`)).data;
  } catch (error) {
    console.log(error);
  }
};

// Create: Add a new customer
const create = async (customerData) => {
  try {
    return (await axios.post(`${baseUrl}/customer`, customerData)).data;
  } catch (error) {
    console.log(error);
  }
};

// Update: Update an existing customer
const update = async (customerId, customerData) => {
  try {
    return (await axios.put(`${baseUrl}/customer/${customerId}`, customerData)).data;
  } catch (error) {
    console.log(error);
  }
};

// Delete: Remove a customer
const remove = async (customerId) => {
  try {
    return (await axios.delete(`${baseUrl}/customer/${customerId}`)).data;
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