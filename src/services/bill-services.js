import billmanagement from "../apis/billmanagement";

const retrieveBillCredentialById = (id) => {
  return billmanagement.get(`/billmgnt/api/v1/credential/${id}`);
};

const retrieveBillById = (id) => {
  return billmanagement.get(`/billmgnt/api/v1/bill/${id}`);
};

const createBill = (bill) => {
  return billmanagement.post('/billmgnt/api/v1/create', bill);
};

const updateBill = (bill) => {
  const {key} = bill;
  return billmanagement.put(`/billmgnt/api/v1/update/${key}`, bill);
}

const BillService = {
  retrieveBillCredentialById,
  retrieveBillById,
  createBill,
  updateBill,
};

export default BillService;
