import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@sip-happens/shared";

const SendAMessage = () => {
  return (
    <div className="flex flex-col rounded-2xl w-full px-19 pt-19 space-y-4 shadow-lg bg-[radial-gradient(circle_at_top_right,#FEBC85_5%,_transparent_20%)]">
      <h3 className="headline-lg text-primary">Send a Message</h3>
      <div className="flex gap-x-12">
        <div>
          <label
            htmlFor="full-name"
            className="label-sm text-on-surface-variant"
          >
            Full Name
          </label>
          <Input id="full-name" placeholder="John Doe" />
        </div>
        <div>
          <label
            htmlFor="email-address"
            className="label-sm text-on-surface-variant"
          >
            Email Address
          </label>
          <Input id="email-address" placeholder="john@example.com" />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="label-sm text-on-surface-variant"
        >
          Subject
        </label>
        <Select>
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
      </div>
      <div>
        <label
          htmlFor="message"
          className="label-sm text-on-surface-variant"
        >Your Message</label>
        <textarea className="block p-3 w-full rounded-md bg-surface text-[16px] text-on-surface-variant placeholder:text-outline-variant transition-colors disabled:pointer-events-none disabled:opacity-50 shadow-[inset_2px_2px_6px_#E8DED2]" id="message" rows={6} placeholder="How can we help you today?">
        </textarea>
      </div>
      <Button variant="dark_brown" size="lg" className="w-full self-center">Send Message</Button>
    </div>
  );
};

export default SendAMessage;
