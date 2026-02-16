"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";

const careRequestSchema = z.object({
  // Contact Information
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  relationship: z.string().min(1, "Please select your relationship"),

  // Client Information
  clientZip: z.string().min(5, "ZIP code is required"),
  clientAddress: z.string().optional(),

  // Care Details
  startDate: z.string().min(1, "Please select a preferred start date"),
  scheduleNeeded: z.string().min(1, "Please describe the schedule needed"),
  serviceTypes: z.array(z.string()).min(1, "Please select at least one service"),
  levelOfAssistance: z.string().min(1, "Please select level of assistance"),
  mobilityNeeds: z.string().min(1, "Please describe mobility needs"),

  // Additional Information
  notes: z.string().optional(),

  // Consents
  consentToContact: z.boolean().refine((val) => val === true, {
    message: "You must consent to be contacted",
  }),
  privacyAcknowledgment: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge our privacy policy",
  }),
  emergencyDisclaimer: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge this is not for emergencies",
  }),
});

type CareRequestFormData = z.infer<typeof careRequestSchema>;

const serviceOptions = [
  "Companion Care",
  "Personal Care",
  "Homemaking Services",
  "Respite Care",
  "Post-Surgical Care",
  "Memory Care Support",
  "Overnight / 24-Hour Care",
  "Transportation & Errands",
];

const relationshipOptions = [
  "Self",
  "Spouse/Partner",
  "Adult Child",
  "Parent",
  "Sibling",
  "Other Family Member",
  "Friend",
  "Professional (Social Worker, Discharge Planner, etc.)",
  "Other",
];

const assistanceLevels = [
  "Minimal - Light support and companionship",
  "Moderate - Regular assistance with daily activities",
  "Extensive - Significant hands-on care needed",
  "Full Care - Comprehensive 24/7 support",
];

export function RequestCareForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CareRequestFormData>({
    resolver: zodResolver(careRequestSchema),
    defaultValues: {
      serviceTypes: [],
      consentToContact: false,
      privacyAcknowledgment: false,
      emergencyDisclaimer: false,
    },
  });

  const onSubmit = async (data: CareRequestFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/request-care", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError("There was an error submitting your request. Please try again or call us directly.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-warm-white border border-soft-gray p-12 text-center">
        <CheckCircle size={48} className="text-gold mx-auto mb-6" />
        <h2 className="font-serif text-2xl text-charcoal mb-4">
          Thank You for Your Request
        </h2>
        <p className="text-charcoal-light mb-6 max-w-md mx-auto">
          A member of our care team will contact you within 24 hours to discuss
          your needs and answer any questions.
        </p>
        <p className="text-sm text-muted-gray">
          A confirmation email has been sent to your email address.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      {/* Emergency Disclaimer Banner */}
      <div className="bg-champagne-light border-l-4 border-gold p-4 flex items-start gap-3">
        <AlertTriangle size={20} className="text-gold flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-charcoal text-sm">
            This form is not for emergencies
          </p>
          <p className="text-charcoal-light text-sm">
            If you have a medical emergency, please call 911 immediately.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <fieldset>
        <legend className="font-serif text-xl text-charcoal mb-6">
          Your Contact Information
        </legend>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              className="w-full"
              placeholder="(555) 555-5555"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="w-full"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="relationship" className="block text-sm font-medium text-charcoal mb-2">
              Relationship to Client *
            </label>
            <select id="relationship" {...register("relationship")} className="w-full">
              <option value="">Select relationship</option>
              {relationshipOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.relationship && (
              <p className="text-red-600 text-sm mt-1">{errors.relationship.message}</p>
            )}
          </div>
        </div>
      </fieldset>

      {/* Client Location */}
      <fieldset>
        <legend className="font-serif text-xl text-charcoal mb-6">
          Client Location
        </legend>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="clientZip" className="block text-sm font-medium text-charcoal mb-2">
              Client ZIP Code *
            </label>
            <input
              type="text"
              id="clientZip"
              {...register("clientZip")}
              className="w-full"
              placeholder="33414"
              maxLength={10}
            />
            {errors.clientZip && (
              <p className="text-red-600 text-sm mt-1">{errors.clientZip.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="clientAddress" className="block text-sm font-medium text-charcoal mb-2">
              Client Address (Optional)
            </label>
            <input
              type="text"
              id="clientAddress"
              {...register("clientAddress")}
              className="w-full"
              placeholder="Street address"
            />
          </div>
        </div>
      </fieldset>

      {/* Care Details */}
      <fieldset>
        <legend className="font-serif text-xl text-charcoal mb-6">
          Care Details
        </legend>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-charcoal mb-2">
                Preferred Start Date *
              </label>
              <input
                type="date"
                id="startDate"
                {...register("startDate")}
                className="w-full"
              />
              {errors.startDate && (
                <p className="text-red-600 text-sm mt-1">{errors.startDate.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="scheduleNeeded" className="block text-sm font-medium text-charcoal mb-2">
                Schedule Needed *
              </label>
              <input
                type="text"
                id="scheduleNeeded"
                {...register("scheduleNeeded")}
                className="w-full"
                placeholder="e.g., Mon-Fri 8am-4pm, Weekends, 24/7"
              />
              {errors.scheduleNeeded && (
                <p className="text-red-600 text-sm mt-1">{errors.scheduleNeeded.message}</p>
              )}
            </div>
          </div>

          {/* Service Types */}
          <div>
            <label className="block text-sm font-medium text-charcoal mb-3">
              Services Needed * (Select all that apply)
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {serviceOptions.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-3 p-3 bg-warm-white border border-soft-gray cursor-pointer hover:border-champagne-dark transition-colors"
                >
                  <input
                    type="checkbox"
                    value={service}
                    {...register("serviceTypes")}
                    className="w-4 h-4 accent-gold"
                  />
                  <span className="text-sm text-charcoal">{service}</span>
                </label>
              ))}
            </div>
            {errors.serviceTypes && (
              <p className="text-red-600 text-sm mt-2">{errors.serviceTypes.message}</p>
            )}
          </div>

          {/* Level of Assistance */}
          <div>
            <label htmlFor="levelOfAssistance" className="block text-sm font-medium text-charcoal mb-2">
              Level of Assistance Needed *
            </label>
            <select
              id="levelOfAssistance"
              {...register("levelOfAssistance")}
              className="w-full"
            >
              <option value="">Select level of assistance</option>
              {assistanceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            {errors.levelOfAssistance && (
              <p className="text-red-600 text-sm mt-1">{errors.levelOfAssistance.message}</p>
            )}
          </div>

          {/* Mobility Needs */}
          <div>
            <label htmlFor="mobilityNeeds" className="block text-sm font-medium text-charcoal mb-2">
              Mobility Needs *
            </label>
            <textarea
              id="mobilityNeeds"
              {...register("mobilityNeeds")}
              rows={3}
              className="w-full"
              placeholder="Describe mobility level and any equipment used (walker, wheelchair, etc.)"
            />
            {errors.mobilityNeeds && (
              <p className="text-red-600 text-sm mt-1">{errors.mobilityNeeds.message}</p>
            )}
          </div>

          {/* Additional Notes */}
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-charcoal mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              {...register("notes")}
              rows={4}
              className="w-full"
              placeholder="Any additional information about care needs, preferences, or questions"
            />
          </div>
        </div>
      </fieldset>

      {/* Consents */}
      <fieldset>
        <legend className="font-serif text-xl text-charcoal mb-6">
          Acknowledgments
        </legend>

        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("consentToContact")}
              className="w-4 h-4 mt-1 accent-gold"
            />
            <span className="text-sm text-charcoal-light">
              I consent to be contacted by Haute Couture Home Care regarding my
              care inquiry via phone, email, or text message. *
            </span>
          </label>
          {errors.consentToContact && (
            <p className="text-red-600 text-sm">{errors.consentToContact.message}</p>
          )}

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("privacyAcknowledgment")}
              className="w-4 h-4 mt-1 accent-gold"
            />
            <span className="text-sm text-charcoal-light">
              I acknowledge that I have read and understand the{" "}
              <a href="/privacy" className="text-gold underline">
                Privacy Policy
              </a>{" "}
              regarding how my information will be used and protected. *
            </span>
          </label>
          {errors.privacyAcknowledgment && (
            <p className="text-red-600 text-sm">{errors.privacyAcknowledgment.message}</p>
          )}

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("emergencyDisclaimer")}
              className="w-4 h-4 mt-1 accent-gold"
            />
            <span className="text-sm text-charcoal-light">
              I understand this form is for care inquiries only and is not for
              medical emergencies. For emergencies, I will call 911. *
            </span>
          </label>
          {errors.emergencyDisclaimer && (
            <p className="text-red-600 text-sm">{errors.emergencyDisclaimer.message}</p>
          )}
        </div>
      </fieldset>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 p-4 text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            Submit Care Request
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
