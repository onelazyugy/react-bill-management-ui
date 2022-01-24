import { RETRIEVE_BILLS } from "./types"
import billmanagement from "../apis/billmanagement"

export const retrieveBills = () => async (dispatch) => {
    const response = await billmanagement.get('/billmgnt/api/v1/bills');
    dispatch({
        type: RETRIEVE_BILLS,
        payload: response.data
    });
}