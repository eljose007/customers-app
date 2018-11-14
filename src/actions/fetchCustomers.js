import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const customers = [
    {   "dni":"1",
        "name": "Juan Perez",
        "age": 37    
    },
    {   "dni":"2",
        "name": "Juan Piriz",
        "age": 37    
    },
    {   "dni":"3",
        "name": "Juon Poroz",
        "age": 37    
    },
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);