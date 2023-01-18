export interface GeneralResponseI<T> {
    msj:   string;
    data:  T;
    error: boolean;
}


export interface CustomerI {
    id:             string;
    Company:        string;
    First_Name:     string;
    Last_Name:      string;
    Full_Name:      string;
    Email:          string;
    Phone:          string;
    Modified_Time:  Date;
    Annual_Revenue: number;
}
