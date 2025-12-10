export declare enum MedicineStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
export declare class Composition {
    name: string;
    strengthValue: string;
    strengthUnit: string;
}
export declare class Medicine {
    id: string;
    userId: string;
    profileId: string;
    name: string;
    imageUrl: string;
    dosage: string;
    quantity: number;
    expiryDate: Date;
    category: string;
    notes: string;
    composition: Composition[];
    form: string;
    status: MedicineStatus;
    createdAt: Date;
    updatedAt: Date;
}
