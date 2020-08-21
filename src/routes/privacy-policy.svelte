<script>
  import { onMount } from 'svelte';
  import SEO from '../components/SEO.svelte';

  let message = '';
  let didOptOut = false;
  const gaProperty = 'UA-81701707-3';
  const disableStr: string = `ga-disable-${gaProperty}`;

  onMount(() => {
    const hasDNTEnabled = navigator.doNotTrack || window.doNotTrack;
    // Disable tracking if the opt-out cookie exists or user has DNT enabled
    if (document.cookie.includes(`${disableStr}=true`) || hasDNTEnabled) {
      window[disableStr] = true;
      didOptOut = true;
    }
  });

  const handleGaOptOut = () => {
    try {
      document.cookie = `${disableStr}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/;secure;samesite=none`;
      window[disableStr] = true;
      didOptOut = true;
      message = 'Successfully deactivated Google Analytics!';
    } catch (error) {
      message = 'Deactivating Google Analytics failed';
    }
  };
</script>

<svelte:head>
  <title>Privacy Policy | Markus Hatvan</title>

  <meta
    name="description"
    content="We have drawn up this data protection declaration to explain to you, in accordance with
    the provisions of the EU data protection basic regulation, what information we collect, how we
    use data and what decision-making options you have as a visitor to this website."
  />
</svelte:head>

<SEO />

<div class="container mh-container">
  <h1>Privacy Policy</h1>
  <p>
    We have drawn up this data protection declaration to explain to you, in accordance with the
    provisions of the EU data protection basic regulation, what information we collect, how we use
    data and what decision-making options you have as a visitor to this website.
  </p>
  <p>
    Unfortunately, it is in the nature of things that these explanations sound very technical, but
    we have tried to describe the most important things as simply and clearly as possible.
  </p>
  <h2>Automatic data storage</h2>
  <p>
    When you visit websites today, certain information is automatically created and stored,
    including on this website. When you visit our website as you are doing right now, our web server
    (the computer on which this website is stored) automatically saves data such as:
  </p>
  <ul>
    <li>the address (URL) of the accessed web page</li>
    <li>Browser and browser version</li>
    <li>the operating system used</li>
    <li>the address (URL) of the previously visited page (referrer URL)</li>
    <li>the host name and IP address of the device from which access is made</li>
    <li>Date and time</li>
  </ul>
  <p>
    Usually web server log files are stored for two weeks and then automatically deleted. We do not
    pass on this data, but cannot exclude the possibility that this data may be viewed in the event
    of illegal behaviour.
  </p>
  <h2>Storage of personal data</h2>
  <p>
    Personal information that you submit to us electronically on this website, such as your name,
    e-mail address, postal address or other personal information when submitting a form or comments
    on the blog, together with the time and IP address, will only be used by us for the purpose
    stated in each case, will be kept securely stored and will not be disclosed to third parties.
  </p>
  <p>
    Thus, we will only use your personal data for communication with those visitors who expressly
    request contact and for processing the services and products offered on this website. We will
    not pass on your personal data without your consent, but we cannot exclude the possibility that
    this data may be viewed in the event of unlawful behaviour.
  </p>
  <p>
    If you send us personal data by e-mail - thus off this website - we cannot guarantee secure
    transmission and the protection of your data. We recommend that you never send confidential data
    by e-mail without encryption.
  </p>

  <h2>Rights according to the data protection basic regulation</h2>

  <p>
    In accordance with the provisions of the DSGVO and the Austrian Data Protection Act (DSG), you
    are basically entitled to the following rights:
  </p>

  <ul>
    <li>Right of rectification (Article 16 DSGVO)</li>
    <li>Right of cancellation ("right to be forgotten") (Article 17 DPA)</li>
    <li>Right to restrict processing (Article 18 DSGVO)</li>
    <li>
      Right of notification - Obligation to notify in connection with the correction or deletion of
      personal data or the restriction of processing (Article 19 DPA)
    </li>
    <li>Right to data transferability (Article 20 DSGVO)</li>
    <li>Right of objection (Article 21 DSGVO)</li>
    <li>
      Right not to be subject to a decision based solely on automated processing, including
      profiling (Article 22 DPA)
    </li>
  </ul>

  <p>
    If you believe that the processing of your data violates data protection law or your data
    protection rights have otherwise been violated in any way, you can complain to the supervisory
    authority, which in Austria is the data protection authority, whose website you can find at{' '}
    <a href="https://www.dsb.gv.at/" target="_blank" rel="noopener noreferrer">
      https://www.dsb.gv.at/
    </a>
    .
  </p>

  <h2>TLS encryption with https</h2>

  <p>
    We use https to transfer data tap-proof on the Internet. By using TLS (Transport Layer
    Security), an encryption protocol for secure data transmission on the Internet, we can ensure
    the protection of confidential data. You can recognize the use of this data transmission
    security by the small lock symbol in the upper left corner of your browser and the use of the
    https scheme as part of our Internet address.
  </p>

  <h2>Cookies</h2>

  <p>
    Our website uses HTTP cookies to store user-specific data. A cookie is a short data package
    which is exchanged between the web browser and the web server, but is completely meaningless to
    the latter and only acquires meaning for the web application, e.g. an online shop, such as the
    contents of a virtual shopping basket.
  </p>

  <p>
    There are two types of cookies: first-party cookies are created by our website, third-party
    cookies are created by other websites (e.g. Google Analytics). There are three categories of
    cookies: essential cookies to ensure basic site functionality, functional cookies to ensure site
    performance, and targeted cookies to improve the user experience.
  </p>

  <p>
    We use cookies to make our website more user-friendly. Some cookies remain stored on your
    terminal device until you delete them. They enable us to recognise your browser the next time
    you visit our website.
  </p>

  <p>
    If you do not wish to do so, you can set up your browser to inform you when cookies are set and
    to allow this only in individual cases. You can delete cookies that are already on your computer
    or deactivate cookies at any time. The procedure for doing this varies from browser to browser,
    but the best way to do this is to look up the instructions in Google using the search term
    "Delete Chrome cookies" or "Disable Chrome cookies" in the case of a Chrome browser, or replace
    the word "Chrome" with the name of your browser, e.g. Edge, Firefox, Safari. If you do not
    generally allow us to use cookies, i.e. disable them in your browser settings, some functions
    and pages may not work as expected.
  </p>

  <h2>Google Fonts Privacy Policy</h2>

  <p>
    We use Google Fonts from the company Google Inc. (1600 Amphitheatre Parkway Mountain View, CA
    94043, USA) on our website. Google Fonts is used without authentication and no cookies are sent
    to the Google Fonts API. If you have an account with Google, none of your Google Account
    information is submitted to Google while using Google Fonts. Google only records your use of CSS
    and the fonts you use and stores this information securely. You can find more information about
    these and other questions at{' '}
    <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">
      https://developers.google.com/fonts/faq
    </a>
    .
  </p>
  <p>
    You can find out what information Google collects and how that information is used at{' '}
    <a
      href="https://www.google.com/intl/de/policies/privacy/"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://www.google.com/intl/de/policies/privacy/
    </a>
    .
  </p>

  <h2>Google Analytics Privacy Policy</h2>

  <p>
    On this website we use Google Analytics of the company Google Inc. (1600 Amphitheatre Parkway
    Mountain View, CA 94043, USA) to statistically evaluate visitor data. Google Analytics uses
    target-oriented cookies for this purpose.
  </p>

  <h2>Cookies from Google Analytics</h2>

  <ul>
    <li>
      _ga
      <ul>
        <li>Expiry period: 2 years</li>
        <li>Usage: Differentiation of website visitors</li>
        <li>Example value: GA1.2.1326744211.15211078738</li>
      </ul>
    </li>
    <li>
      _gid
      <ul>
        <li>Expiration time: 24 hours</li>
        <li>Usage: Differentiation of website visitors</li>
        {' '}
        <li>Example value: GA1.2.1687193234.15211078738</li>
      </ul>
    </li>
    <li>
      _gat_gtag_UA_&lt;property - id&gt;
      <ul>
        <li>Sequence time: 1 minute</li>
        <li>
          Usage: Used to throttle the request rate. If Google Analytics is provided via the Google
          Tag Manager, this cookie is named _dc_gtm_ &lt;property - id&gt;.
        </li>
        <li>Example value: 1</li>
      </ul>
    </li>
  </ul>

  <p>
    For more information on terms of use and privacy, please visit{' '}
    <a
      href="http://www.google.com/analytics/terms/de.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      http://www.google.com/analytics/terms/de.html
    </a>
    {' '} or{' '}
    <a
      href="https://support.google.com/analytics/answer/6004245?hl=de"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://support.google.com/analytics/answer/6004245?hl=de
    </a>
    .
  </p>

  <h2>Pseudonymization</h2>

  <p>
    Our concern in terms of the DSGVO is the improvement of our offer and our web presence. Since
    the privacy of our users is important to us, the user data is pseudonymised. The data processing
    is based on the legal provisions of § 96 para. 3 TKG and Art 6 EU-DSGVO para. 1 lit a (consent)
    and/or f (legitimate interest) of the DSGVO.
  </p>

  <h2>Deactivation of data collection by Google Analytics</h2>

  <p>
    Using the browser add-on to disable Google Analytics JavaScript (ga.js, analytics.js, dc.js),
    website visitors can prevent Google Analytics from using their data.
  </p>

  <p>
    You can prevent the collection of data generated by the cookie and related to your use of the
    website to Google and the processing of this data by Google by downloading and installing the
    browser plug-in available at the following link:{' '}
    <a
      href="https://tools.google.com/dlpage/gaoptout?hl=de"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://tools.google.com/dlpage/gaoptout?hl=de
    </a>
  </p>

  <h2>Google Analytics deactivation link</h2>

  <p>
    If you click on the following deactivation link, you can prevent Google from recording further
    visits to this website.
  </p>

  <p>
    <b>Attention:</b>
    Deleting cookies, using the incognito/private mode of your browser, or using another browser
    will result in data being collected again.
  </p>
  <button
    class="{didOptOut ? 'mb-4 rounded btn-primary opacity-50 cursor-not-allowed' : 'mb-4 rounded btn-primary'}"
    on:click="{handleGaOptOut}"
  >
    {didOptOut ? 'Already deactivated Google Analytics' : 'Deactivate Google Analytics'}
  </button>
  <br />

  <h2>Disable cookies</h2>

  <p>
    You can delete cookies that are already on your computer or deactivate cookies at any time. The
    procedure for doing this varies by browser, but the best way to do this is to look up the
    instructions in Google using the search term "delete cookies chrome" or "disable cookies chrome"
    in the case of a chrome browser, or replace the word "chrome" with the name of your browser,
    e.g. edge, firefox, safari.
  </p>

  <p>
    If you do not generally allow us to use cookies, i.e. disable them in your browser settings,
    some functions and pages may not work as expected.
  </p>

  <h2>Disable personalized advertising</h2>

  <p>
    If you have a Google Account, you can disable personalized advertising on{' '}
    <a
      href="https://adssettings.google.com/authenticated"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://adssettings.google.com/authenticated
    </a>
    . Even if you disable personalized ads, you may still see ads based on factors such as your
    approximate location derived from your IP address, browser type, and recently used search terms.
  </p>

  <p>
    You can find out what information Google collects and how this information is used at{' '}
    <a
      href="https://www.google.com/intl/de/policies/privacy/"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://www.google.com/intl/de/policies/privacy/
    </a>
    .
  </p>
</div>

{#if message}
  <div
    class="fixed bottom-0 w-full px-4 py-3 text-blue-700 bg-blue-100 border border-blue-400"
    role="alert"
  >
    {message}
  </div>
{/if}
