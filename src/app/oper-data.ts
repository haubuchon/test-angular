export interface Row {
    ResourceId: string;
    PlannedHrs: string;
    RealizedHrs: string;
    QtyCompleted : string;
}

export interface OperData {
	Operations: Row[];
}