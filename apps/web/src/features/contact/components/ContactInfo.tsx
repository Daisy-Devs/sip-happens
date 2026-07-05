import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="w-full">
      <div className="space-y-12">
        <div>
          <h2 className="headline-lg text-primary mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="bg-secondary-container/20 p-2 rounded-xl text-secondary">
                <MapPin />
              </div>
              <div>
                <p className="label-md text-label-md text-primary">
                  Our Sanctuary
                </p>
                <p className="text-on-surface-variant">
                  123 Espresso Lane, Artisan Quarter
                  <br />
                  Portland, OR 97201
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-secondary-container/20 p-2 rounded-xl text-secondary">
                <Phone />
              </div>
              <div>
                <p className="label-md text-primary">Give us a Ring</p>
                <p className="text-on-surface-variant">+91 7887565829</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-secondary-container/20 p-2 rounded-xl text-secondary">
                <Mail />
              </div>
              <div>
                <p className="label-md text-primary">Send a Note</p>
                <p className="text-on-surface-variant">daisydevs.org@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="headline-lg text-primary mb-6">Brewing Hours</h2>
          <div className="space-y-sm bg-surface-container p-6 md:p-12 rounded-3xl shadow-outline-variant shadow-xl border border-white/40">
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30">
              <span className="text-on-surface-variant mr-6">Monday - Friday</span>
              <span className="label-md text-primary">7:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30">
              <span className="text-on-surface-variant mr-6">Saturday</span>
              <span className="label-md text-primary">8:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant mr-6">Sunday</span>
              <span className="label-md text-primary">8:00 AM - 4:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
