export declare enum Frequency {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    BIWEEKLY = "BIWEEKLY",
    MONTHLY = "MONTHLY",
    CUSTOM = "CUSTOM"
}
export declare class Schedule {
    id: string;
    medicineId: string;
    profileId: string;
    userId: string;
    timeOfDay: string;
    frequency: Frequency;
    isActive: boolean;
    createdAt: Date;
}
