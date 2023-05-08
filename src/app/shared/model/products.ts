

export interface Iprodcut {
    pname: string;
    pid: number;
    pstatus: Tpstatus;
}


export type Tpstatus = "In Progress" | "Dispatched" | "Delivered"