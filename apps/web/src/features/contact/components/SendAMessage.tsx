"use client";
import {
  Button,
  ContactSchema,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Spinner,
  toast,
} from "@sip-happens/shared";
import { MessageState } from "../types";
import { useState } from "react";
import { useSendAMessageMutation } from "@/store/services/api/sendApi";

const SendAMessage = () => {
  const [messageState, setMessageState] = useState<MessageState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  }); 
  const [error, setError] = useState({
    name: null,
    email: null,
    subject: null,
    message: null,
  });
  const [sendAMessage, { isLoading, isSuccess, isError }] = useSendAMessageMutation();
  const handleSubmit = () => {
    const result= ContactSchema.safeParse(messageState);
    if (!result.success) {
      const flattenedErrors = result.error.flatten().fieldErrors;
      console.log(flattenedErrors);
      setError(flattenedErrors);
      return;
    }
   sendAMessage(messageState).unwrap().then((response) => {
      console.log("Message sent successfully:", response);
      toast.success("Message sent successfully");
    }).catch((error) => {
      console.error("Error sending message:", error);
      toast.error("Failed to send message, please try again");
    })
  }
  return (
    <div className="flex flex-col rounded-2xl w-full px-5 md:px-19 pt-19 pb-10 space-y-4 shadow-lg bg-[radial-gradient(circle_at_top_right,#FEBC85_5%,_transparent_20%)]">
      <h3 className="headline-lg text-primary">Send a Message</h3>
      <div className="flex flex-col md:flex-row gap-x-12">
        <div>
          <label
            htmlFor="full-name"
            className="label-sm text-on-surface-variant"
          >
            Full Name
          </label>
          <Input
            id="full-name"
            error={error.name ? error.name[0] : undefined}
            placeholder="John Doe"
            value={messageState.name}
            onChange={(e) => setMessageState({ ...messageState, name: e.target.value })}
          />
        </div>
        <div>
          <label
            htmlFor="email-address"
            className="label-sm text-on-surface-variant"
          >
            Email Address
          </label>
          <Input
            id="email-address"
            placeholder="john@example.com"
            value={messageState.email}
            error={error.email ? error.email[0] : undefined}
            onChange={(e) => setMessageState({ ...messageState, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="label-sm text-on-surface-variant"
        >
          Subject
        </label>
        <Select
          value={messageState.subject}
          onValueChange={(value) => setMessageState({ ...messageState, subject: value })}
        >
          <SelectTrigger id="subject">
            <SelectValue placeholder="Select subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="general-enquiry">General Inquiry</SelectItem>
              <SelectItem value="catering">Catering</SelectItem>
              <SelectItem value="reservations">Reservations</SelectItem>
              <SelectItem value="events">Events</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {error.subject && (
          <p className="text-on-error-container text-sm mt-1">{error.subject[0]}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="label-sm text-on-surface-variant"
        >Your Message</label>
        <textarea
          className="block p-3 w-full rounded-md bg-surface text-[16px] text-on-surface-variant placeholder:text-outline-variant transition-colors disabled:pointer-events-none disabled:opacity-50 shadow-[inset_2px_2px_6px_#E8DED2]" 
          id="message" 
          rows={6} 
          placeholder="How can we help you today?"
          value={messageState.message}
          onChange={(e) => setMessageState({ ...messageState, message: e.target.value })}
        >
        </textarea>
        {error.message && (
          <p className="text-on-error-container text-sm mt-1">{error.message[0]}</p>
        )}
      </div>
      <Button disabled={isLoading} leftIcon={isLoading?<Spinner />:null} variant="dark_brown" size="lg" className="w-full self-center" onClick={handleSubmit}>
        Send Message
      </Button>
    </div>
  );
}; 

export default SendAMessage;
