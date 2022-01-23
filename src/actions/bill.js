import { RETRIEVE_BILLS } from "./types"
import billmanagement from "../apis/billmanagement"

export const retrieveBills = () => async (dispatch) => {
    const reponse = await billmanagement.get('/billmgnt/api/v1/bills');
    dispatch({
        type: RETRIEVE_BILLS,
        payload: reponse.data
    });
}