---
name: bre-builders-forms
description: Intelligent contact form specification for BRE Builders website. Contains complete field specs per service type, email routing, validation rules, and API route setup. Read before building any form, quote request, contact page, or /api/contact route. Trigger on: contact form, quote form, intelligent form, multi-step form, /api/contact, form submission, lead capture for BRE Builders.
---

# BRE Builders — Forms Skill

**Read bre-builders-master first, then this skill.**

---

## EMAIL ROUTING

```
To:       brebuilders@gmail.com
CC:       steve@brebuilders.com, chris@[verify full email], sean@[verify full email]
From:     BRE Builders <no-reply@brebuilders.com>  (via Resend)
Reply-To: brebuilders@gmail.com
Subject:  New [Service] Quote Request – [Client Name] – [City]
```

**Auto-reply to client:**
```
To:       [client email]
From:     BRE Builders <no-reply@brebuilders.com>
Subject:  We received your quote request – BRE Builders
```

---

## FORM ARCHITECTURE — 4 STEPS

```
Step 1: Service Selection (which type of project?)
Step 2: Contact Info (name, phone, email, city, contact time)
Step 3: Service-Specific Questions (dynamic based on Step 1)
Step 4: Timeline + Source + Additional Notes → Submit
```

Progress bar shows 4 segments, fills as user advances.

---

## STEP 1 — SERVICE OPTIONS (9 choices)

| Value | Label | Icon |
|---|---|---|
| adu | ADU | 🏡 |
| kitchen | Kitchen/Bath | 🍳 |
| custom-home | Custom Home | 🏠 |
| deck | Deck | 🪵 |
| repair | Repairs | 🔧 |
| commercial | Commercial | 🏢 |
| concrete | Concrete | 🏗️ |
| addition | Addition | ➕ |
| other | Other | 💬 |

---

## STEP 2 — CONTACT INFO (all services)

| Field | Type | Required | Validation |
|---|---|---|---|
| First Name | text | Yes | min 2 chars |
| Last Name | text | Yes | min 2 chars |
| Phone | tel | Yes | min 10 digits |
| Email | email | Yes | valid email format |
| City/Location | select | Yes | see options below |
| Best time to contact | radio (4 options) | No | — |

**City options:**
Reno, NV / Sparks, NV / Lake Tahoe, NV / Carson City, NV / Truckee, CA / Graeagle, CA / Northern California (other) / Other

**Contact time options:**
Morning (8am–12pm) / Afternoon (12pm–5pm) / Evening (5pm–8pm) / Anytime

---

## STEP 3 — SERVICE-SPECIFIC FIELDS

### ADU
| Field | Type | Options |
|---|---|---|
| ADU Type | radio | Detached ADU / Attached ADU / Garage Conversion / Junior ADU |
| Intended Use | radio | Rental income / Guest house / Family/in-law / Home office |
| Estimated Size | radio | Under 500 sqft / 500–800 sqft / 800–1200 sqft / Not sure |
| Budget Range | radio | $75K–$100K / $100K–$150K / $150K–$300K / Not sure |

### Kitchen/Bath
| Field | Type | Options |
|---|---|---|
| Which Room(s) | checkbox | Kitchen / Primary Bathroom / Secondary Bathroom / Laundry Room |
| Scope | radio | Cosmetic refresh / Mid-range remodel / Full gut renovation / Not sure |
| Budget | radio | $10K–$25K / $25K–$50K / $50K–$100K / $100K+ |
| Key priorities | checkbox | More storage / Better layout / New appliances / Tile & flooring |

### Custom Home
| Field | Type | Options |
|---|---|---|
| Build Type | radio | Custom from scratch / Semi-custom / Not sure |
| Bedrooms | select | 2 / 3 / 4 / 5+ |
| Bathrooms | select | 2 / 2.5 / 3 / 4+ |
| Budget | radio | $250K–$500K / $500K–$1M / $1M+ / Not sure |
| Do you own land? | radio | Yes / Still searching / No, need help |
| Approx sq footage | select | Under 1,500 / 1,500–2,500 / 2,500–4,000 / 4,000+ |

### Deck
| Field | Type | Options |
|---|---|---|
| New build or repair? | radio | New deck build / Repair existing / Both or not sure |
| Issues noticed (if repair) | checkbox | Rot/wood damage / Structural concerns / Railing issues / Cosmetic only |
| Material preference | radio | Composite/Trex / Pressure-treated wood / Redwood/Cedar / Not sure |
| Deck location | radio | Ground level / Elevated / Hillside / Rooftop/other |
| Approximate size | radio | Under 200 sqft / 200–400 sqft / Over 400 sqft |

### Structural Repair (full Fluent Forms spec from site)
| Field | Type | Options |
|---|---|---|
| Property Type | radio | Single-family home / Commercial building / Condo or Townhome / Multi-family |
| Approx Year Built | select | After 2010 / 2000–2010 / 1980–1999 / Before 1980 / Not sure |
| Occupancy Status | radio | Owner-occupied / Rental property / Vacant / In escrow / preparing to sell |
| Issues noticed | checkbox | Cracks in walls/ceilings / Bowing or separating walls / Uneven or sloping floors / Water near foundation / Cracks in foundation / Doors or windows misaligned / Deck or balcony concerns / Other |
| Where is the issue? | checkbox | Interior walls / Basement/crawl space / Floors / Foundation / Deck/balcony / Exterior walls / Garage |
| When noticed? | radio | Recently (last few weeks) / Several months ago / Over a year ago / Not sure |
| Issue changing? | radio | Yes, getting worse / It appears stable / Unsure |
| Triggering events? | checkbox | Nearby construction / Heavy rain or snow melt / Remodel or renovation / Earth movement / None |
| Why reaching out? | radio | Concern about safety / Home inspection flagged issue / Preparing to sell / Buying a home / Planning repairs / General concern |
| Working with anyone? | checkbox | Insurance company / Realtor / Engineer / Home inspector / No |

### Commercial
| Field | Type | Options |
|---|---|---|
| Business Type | radio | Retail / Office / Restaurant/Food / Warehouse/Industrial / Medical/Professional / Other |
| Scope | radio | Tenant improvement / Ground-up new build / Renovation / Expansion |
| Square Footage | select | Under 2,000 / 2,000–5,000 / 5,000–10,000 / 10,000+ / Not sure |
| State | radio | Nevada / California / Both |

### Concrete
| Field | Type | Options |
|---|---|---|
| Project Type | checkbox | Driveway / Walkway / Foundation / Slab / Retaining wall / Commercial slab / Other |
| Approx sq footage | select | Under 500 / 500–1,000 / 1,000–2,000 / Over 2,000 |

### Addition
| Field | Type | Options |
|---|---|---|
| Addition Type | radio | Bedroom / Bathroom / Garage / Sunroom / Second story / Other |
| Approx size | select | Under 200 sqft / 200–500 sqft / 500–1,000 sqft / Over 1,000 sqft |
| Budget | radio | $50K–$100K / $100K–$200K / $200K+ / Not sure |

### Other
| Field | Type | Notes |
|---|---|---|
| Describe project | textarea | Free-text, required |

---

## STEP 4 — FINAL FIELDS (all services)

| Field | Type | Options |
|---|---|---|
| Timeline | radio | As soon as possible / Within 1–3 months / 3–6 months / Planning stage |
| How did you find us? | select | Google Search / Referral / Social Media / Yelp / Drove by/Sign / Previous client / Other |
| Additional notes | textarea | Optional |
| Consent | checkbox | Required — "I consent to BRE Builders contacting me regarding my project." |

---

## API ROUTE — /api/contact

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  
  // Validate required fields
  const { firstName, lastName, email, phone, city, service } = body
  if (!firstName || !lastName || !email || !phone || !service) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    // Send to team
    await resend.emails.send({
      from: 'BRE Builders <no-reply@brebuilders.com>',
      to: [process.env.CONTACT_TO_EMAIL!],
      cc: process.env.CONTACT_CC_EMAILS?.split(','),
      replyTo: 'brebuilders@gmail.com',
      subject: `New ${service} Quote Request – ${firstName} ${lastName} – ${city}`,
      html: buildTeamEmail(body),
    })

    // Auto-reply to client
    await resend.emails.send({
      from: 'BRE Builders <no-reply@brebuilders.com>',
      to: [email],
      subject: 'We received your quote request – BRE Builders',
      html: buildClientEmail(body),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
```

---

## EMAIL TEMPLATES

### Team Notification Email (HTML structure)
```
Subject: New [Service] Quote Request – [Name] – [City]

NEW QUOTE REQUEST
━━━━━━━━━━━━━━━━

SERVICE:   [service type]
NAME:      [firstName] [lastName]
PHONE:     [phone]
EMAIL:     [email]
CITY:      [city]
TIMELINE:  [timeline]
SOURCE:    [howFoundUs]

PROJECT DETAILS:
[all service-specific fields formatted as label: value pairs]

ADDITIONAL NOTES:
[notes or "None provided"]

━━━━━━━━━━━━━━━━
Submitted: [timestamp]
Reply to: [email]
```

### Client Auto-Reply Email
```
Subject: We received your quote request – BRE Builders

Hi [firstName],

Thank you for reaching out to Blue Reef Builders. We've received your 
[service] project request and will be in touch within 24 hours to 
schedule your free site visit and estimate.

In the meantime, feel free to reach us directly:
📞 (775) 391-4517
✉️ brebuilders@gmail.com

— The BRE Builders Team
Licensed in Nevada (#0085999) | California ([VERIFY])
```

---

## SUCCESS STATE

After submission:
- Animated checkmark (✓) in teal
- H3: "Request Received"
- Body: "We'll reach out within 24 hours to schedule your free site visit and estimate."
- Show phone and email for immediate contact option
- Remove the form, show success state only

---

## VALIDATION RULES

| Field | Rule |
|---|---|
| Service | Must be selected before Step 2 shows |
| First/Last Name | Required, min 2 chars |
| Phone | Required, strip non-digits, min 10 digits |
| Email | Required, valid format |
| City | Required |
| Consent checkbox | Required to submit |

Show inline error messages under each field on blur. Do not block form navigation on optional fields.
