import { z } from 'zod';

//  Personal Info Schema, address info, Billing info : now after writing the schema we can generate the types. via exporting these as --> zod.infer<typeof schema>;
export const personalInfoSchema = z.object({
    firstName: z.string().trim().min(1, "First name is required"),
    lastName: z.string().trim().min(1, "Last name is required"),
    email: z.email("Invalid email address"),
    phone: z.string()
        .min(10, "Phone number must be at least 10 digits")
        .regex(/^[0-9]+$/, "Phone number must contain only digits"),
});

export const addressInfoSchema = z.object({
    addressLine1: z.string().trim().min(1, "Address line 1 is required"),
    addressLine2: z.string().trim().optional().or(z.literal("")),
    country: z.string().trim().min(1, "Country is required"),
    zipCode: z.string().trim().min(3, "Zipcode is too short"),
    city: z.string().trim().min(1, "City is required"),
    state: z.string().trim().min(1, "State/Province is required"),
});


export const BillingInfoSchema = z.object({
    cardNum: z.string().min(16, "Card must be 16 digits").max(16, "Card must be 16 digits"),
    cardHolder: z.string().min(1, "Card holder name is required"),
    expiryDate: z.string().min(4, "Invalid expiry date"),
    cvv: z.string().min(3, "Invalid cvv").max(4),
});

export type personalInfoSchema = z.infer<typeof personalInfoSchema>;
export type addressInfoSchema = z.infer<typeof addressInfoSchema>;
export type BillingInfoSchema = z.infer<typeof BillingInfoSchema>;

export const formSchema = personalInfoSchema.merge(addressInfoSchema).merge(BillingInfoSchema);
export type StepFormData = z.infer<typeof formSchema>;