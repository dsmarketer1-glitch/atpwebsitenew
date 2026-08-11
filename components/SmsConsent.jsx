// Two-checkbox SMS opt-in (A2P 10DLC compliant): a transactional box and a
// marketing/promotions box. Both unchecked by default and optional.
// Used interactively on lead forms, and read-only as an example on the
// Privacy Policy page. Business name matches the A2P brand/DBA.
const BUSINESS = 'Anytime Plumbing 365 Drain Cleaning & Repair';

export default function SmsConsent({ transactional = false, marketing = false, onChange, readOnly = false }) {
    const transactionalProps = readOnly ? { defaultChecked: false, disabled: true } : { checked: !!transactional, onChange };
    const marketingProps = readOnly ? { defaultChecked: false, disabled: true } : { checked: !!marketing, onChange };
    return (
        <div className="sms-consent-block">
            <label className="sms-consent">
                <input type="checkbox" name="smsTransactional" {...transactionalProps} />
                <span>
                    I agree to receive recurring automated texts from {BUSINESS} for appointment reminders and service updates at the number provided. Message frequency varies. Reply STOP to opt out, HELP for help. Consent is not required for purchase.
                </span>
            </label>
            <label className="sms-consent">
                <input type="checkbox" name="smsMarketing" {...marketingProps} />
                <span>
                    I agree to receive recurring automated texts from {BUSINESS} for offers, discounts, seasonal and membership promotions at the number provided. Message frequency varies. Reply STOP to opt out, HELP for help. Consent is not required for purchase.
                </span>
            </label>
            <p className="sms-consent-note">
                Message and data rates may apply. See our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>.
            </p>
        </div>
    );
}
