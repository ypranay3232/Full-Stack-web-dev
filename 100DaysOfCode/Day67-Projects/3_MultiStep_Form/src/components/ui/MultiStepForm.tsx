import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { StepFormData } from "../../lib/types"
import { useMultiStepForm, stepschemas } from "../../Hooks/use-multistep-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const MultiStepForm = () => {
  const { currentStepIndex, stepSchema, next, back, isFirstStep, isLastStep } = useMultiStepForm()
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors }, trigger } = useForm<StepFormData>({
    resolver: zodResolver(stepSchema as any),
    mode: "onTouched",
  })

  const processForm = async (data: StepFormData) => {
    if (!isLastStep) {
      next()
    } else {
      console.log("Form Submitted Successfully: ", data)
      setIsSuccess(true)
    }
  }

  const nextStep = async () => {
    const isValid = await trigger()
    if (isValid) {
      next()
    }
  }

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-2xl text-green-600">Success!</CardTitle>
            <CardDescription>Your form has been submitted.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Check the console for the submitted data output.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>
            {currentStepIndex === 0 && "Personal Information"}
            {currentStepIndex === 1 && "Address Information"}
            {currentStepIndex === 2 && "Billing Information"}
          </CardTitle>
          <CardDescription>
            Step {currentStepIndex + 1} of {stepschemas.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(processForm)} className="space-y-4">
            
            {currentStepIndex === 0 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" {...register("firstName")} />
                  {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" {...register("lastName")} />
                  {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" {...register("email")} />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="1234567890" {...register("phone")} />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                </div>
              </>
            )}

            {currentStepIndex === 1 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="addressLine1">Address Line 1</Label>
                  <Input id="addressLine1" placeholder="123 Main St" {...register("addressLine1")} />
                  {errors.addressLine1 && <p className="text-sm text-red-500">{errors.addressLine1.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
                  <Input id="addressLine2" placeholder="Apt 4B" {...register("addressLine2")} />
                  {errors.addressLine2 && <p className="text-sm text-red-500">{errors.addressLine2.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" {...register("city")} />
                    {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="NY" {...register("state")} />
                    {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input id="zipCode" placeholder="10001" {...register("zipCode")} />
                    {errors.zipCode && <p className="text-sm text-red-500">{errors.zipCode.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="USA" {...register("country")} />
                    {errors.country && <p className="text-sm text-red-500">{errors.country.message}</p>}
                  </div>
                </div>
              </>
            )}

            {currentStepIndex === 2 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="cardHolder">Card Holder Name</Label>
                  <Input id="cardHolder" placeholder="John Doe" {...register("cardHolder")} />
                  {errors.cardHolder && <p className="text-sm text-red-500">{errors.cardHolder.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNum">Card Number</Label>
                  <Input id="cardNum" placeholder="1234567890123456" maxLength={16} {...register("cardNum")} />
                  {errors.cardNum && <p className="text-sm text-red-500">{errors.cardNum.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input id="expiryDate" placeholder="MM/YY" {...register("expiryDate")} />
                    {errors.expiryDate && <p className="text-sm text-red-500">{errors.expiryDate.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" maxLength={4} {...register("cvv")} />
                    {errors.cvv && <p className="text-sm text-red-500">{errors.cvv.message}</p>}
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between mt-6">
              {!isFirstStep && (
                <Button type="button" variant="outline" onClick={back}>
                  Back
                </Button>
              )}
              {isFirstStep && <div></div>}
              <Button type="button" onClick={isLastStep ? handleSubmit(processForm) : nextStep}>
                {isLastStep ? "Submit" : "Next"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default MultiStepForm